#!/usr/bin/env node
/**
 * check-migration-guide.js — the release gate for MIGRATION-GUIDE.md.
 *
 * Wired into the `version` npm script, which npm runs AFTER package.json is
 * bumped and BEFORE the version commit. So `npm version minor` fails, and no
 * tag is created, until the section for the new version exists.
 *
 * Why a gate and not a checklist item: the guide lapsed for 29 releases
 * (0.8.0 -> 0.37.2, Jun-Aug 2026) while a checklist line in CLAUDE.md asked
 * for it the whole time. The classes that changed under consumers in that
 * window were never written down anywhere a consumer could read.
 *
 * Usage:
 *   node scripts/check-migration-guide.js              # version from package.json
 *   node scripts/check-migration-guide.js --version 0.39.0
 *
 * Exit 0 = a real section exists. Exit 1 = it does not, with the heading to
 * paste. Zero dependencies, no network.
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const GUIDE = path.join(ROOT, 'MIGRATION-GUIDE.md');

/** A heading is only real if it carries prose under it, not just a title. */
const MIN_BODY_CHARS = 200;

function fail(msg) {
  console.error(`\n  FAILED: MIGRATION-GUIDE.md ${msg}\n`);
  process.exit(1);
}

const argv = process.argv.slice(2);
const flagIdx = argv.indexOf('--version');
const version =
  flagIdx !== -1 && argv[flagIdx + 1]
    ? argv[flagIdx + 1].replace(/^v/, '')
    : JSON.parse(fs.readFileSync(path.join(ROOT, 'package.json'), 'utf8')).version;

if (!fs.existsSync(GUIDE)) fail('is missing entirely.');

// Blank out fenced code blocks, keeping every character position intact, so
// the "## v<previous> -> v<new>" template at the top of the guide is not read
// as the newest section. Length-preserving because the offsets are used below.
const raw = fs.readFileSync(GUIDE, 'utf8');
const text = raw.replace(/^```[\s\S]*?^```/gm, (b) => b.replace(/[^\n]/g, ' '));
const headings = [...text.matchAll(/^## +.*$/gm)];

if (!headings.length) fail('has no version sections at all.');

// The heading must name this version as the ARROW TARGET: "## v0.37.2 -> v0.38.0".
// Matching the bare version anywhere would pass on the previous release's
// section, which is exactly the mistake this gate is meant to catch.
const target = new RegExp(`[>→]\\s*v?${version.replace(/\./g, '\\.')}\\s*$`);
const match = headings.find((h) => target.test(h[0].trim()));

if (!match) {
  const newest = headings[0][0].trim();
  fail(
    `has no section for v${version}.\n\n` +
      `     Newest section is: ${newest}\n\n` +
      `     Add this above it, then bump again:\n\n` +
      `       ## v<previous> -> v${version}\n\n` +
      `     A release with nothing consumer-visible still gets a section —\n` +
      `     one line saying so. See the shape at the top of the guide.`,
  );
}

// Newest first: a section that lands below an older one will be missed by
// anyone who reads the top of the file and stops.
if (match !== headings[0]) {
  fail(
    `has the v${version} section below an older one.\n\n` +
      `     Newest first — move it above "${headings[0][0].trim()}".`,
  );
}

const start = match.index + match[0].length;
const next = headings[1] ? headings[1].index : text.length;
const body = text
  .slice(start, next)
  .replace(/^\s*-+\s*$/gm, '')
  .trim();

if (body.length < MIN_BODY_CHARS) {
  fail(
    `has only a stub for v${version} (${body.length} chars).\n\n` +
      `     Say what changed, or say plainly that nothing consumer-visible did\n` +
      `     and why. An empty heading is worse than no heading: it reads as\n` +
      `     "checked, nothing to report".`,
  );
}

console.log(`  OK: MIGRATION-GUIDE.md has a v${version} section (${body.length} chars)`);
