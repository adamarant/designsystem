#!/usr/bin/env node

/**
 * Design System Migration Codemod
 *
 * Scans a consumer project for patterns that need updating when upgrading
 * the @digiko-npm/designsystem package.
 *
 * Usage:
 *   node node_modules/@digiko-npm/designsystem/scripts/codemod.js ./src
 *   node node_modules/@digiko-npm/designsystem/scripts/codemod.js ./src --fix
 */

const fs = require("fs");
const path = require("path");

const args = process.argv.slice(2);
const applyFix = args.includes("--fix");
const targetDir = args.find((a) => !a.startsWith("--"));

if (!targetDir) {
  console.error(
    "Usage: node codemod.js <directory> [--fix]\n\n  --fix  Apply safe automatic fixes (CSS only)"
  );
  process.exit(1);
}

if (!fs.existsSync(targetDir)) {
  console.error(`Error: directory "${targetDir}" does not exist.`);
  process.exit(1);
}

const EXTENSIONS = [".css", ".tsx", ".jsx", ".html", ".vue", ".svelte"];
const results = { auto: [], manual: [], info: [] };

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === "node_modules" || entry.name === ".git") continue;
      files.push(...walk(full));
    } else if (EXTENSIONS.includes(path.extname(entry.name))) {
      files.push(full);
    }
  }
  return files;
}

function scanFile(filePath) {
  const content = fs.readFileSync(filePath, "utf8");
  const lines = content.split("\n");
  let modified = content;
  const ext = path.extname(filePath);
  const isCss = ext === ".css";

  lines.forEach((line, i) => {
    const lineNum = i + 1;

    // 1. .dark { → [data-theme="dark"] {  (CSS only, safe auto-fix)
    if (isCss && /\.dark\s*\{/.test(line)) {
      results.auto.push({
        file: filePath,
        line: lineNum,
        message: '.dark { → [data-theme="dark"] {',
        original: line.trim(),
      });
      if (applyFix) {
        modified = modified.replace(
          /\.dark\s*\{/g,
          '[data-theme="dark"] {'
        );
      }
    }

    // 2. <select class="...ds-select..."> without --full → warning
    if (/ds-select(?!--)/.test(line) && !/ds-select--full/.test(line)) {
      if (/class=/.test(line) || isCss) {
        results.manual.push({
          file: filePath,
          line: lineNum,
          message:
            "ds-select without --full modifier. Since v0.4.0, ds-select is width:auto by default. Add ds-select--full if this should be full-width.",
          original: line.trim(),
        });
      }
    }

    // 3. --ds-ring-offset usage → warning for removal
    if (/--ds-ring-offset/.test(line)) {
      results.manual.push({
        file: filePath,
        line: lineNum,
        message:
          "--ds-ring-offset is deprecated since v0.4.0. Focus rings now use box-shadow. Remove this override.",
        original: line.trim(),
      });
    }

    // 4. Hardcoded outline on DS components → info
    if (isCss && /outline:/.test(line) && /ds-/.test(content)) {
      if (!/outline:\s*none/.test(line) && !/outline:\s*0/.test(line)) {
        results.info.push({
          file: filePath,
          line: lineNum,
          message:
            "Custom outline on DS component. Since v0.4.0, all focus rings use box-shadow. This outline may conflict.",
          original: line.trim(),
        });
      }
    }

    // 5. padding-left/right, margin-left/right in CSS → info (logical properties)
    if (isCss) {
      if (
        /(?:padding|margin)-(?:left|right)\s*:/.test(line) &&
        !/\/\*/.test(line)
      ) {
        results.info.push({
          file: filePath,
          line: lineNum,
          message:
            "Physical property detected. Since v0.6.0, the DS uses logical properties (padding-inline, margin-inline). Consider updating for RTL support.",
          original: line.trim(),
        });
      }
    }
  });

  if (applyFix && modified !== content) {
    fs.writeFileSync(filePath, modified, "utf8");
  }
}

// Run
console.log(`\n🔍 Design System Migration Codemod`);
console.log(`   Scanning: ${path.resolve(targetDir)}`);
console.log(`   Mode: ${applyFix ? "FIX (applying safe changes)" : "REPORT (dry run)"}\n`);

const files = walk(targetDir);
console.log(`   Found ${files.length} files to scan.\n`);

files.forEach(scanFile);

// Report
const hasIssues =
  results.auto.length || results.manual.length || results.info.length;

if (!hasIssues) {
  console.log("✅ No migration issues found. You're good!\n");
  process.exit(0);
}

if (results.auto.length) {
  console.log(
    `\n${"═".repeat(60)}\n  🔧 AUTO-FIXABLE (${results.auto.length})${applyFix ? " — APPLIED" : " — run with --fix to apply"}\n${"═".repeat(60)}\n`
  );
  results.auto.forEach((r) => {
    console.log(`  ${r.file}:${r.line}`);
    console.log(`    ${r.message}`);
    console.log(`    > ${r.original}\n`);
  });
}

if (results.manual.length) {
  console.log(
    `\n${"═".repeat(60)}\n  ⚠️  MANUAL ACTION REQUIRED (${results.manual.length})\n${"═".repeat(60)}\n`
  );
  results.manual.forEach((r) => {
    console.log(`  ${r.file}:${r.line}`);
    console.log(`    ${r.message}`);
    console.log(`    > ${r.original}\n`);
  });
}

if (results.info.length) {
  console.log(
    `\n${"═".repeat(60)}\n  ℹ️  INFO (${results.info.length})\n${"═".repeat(60)}\n`
  );
  results.info.forEach((r) => {
    console.log(`  ${r.file}:${r.line}`);
    console.log(`    ${r.message}`);
    console.log(`    > ${r.original}\n`);
  });
}

console.log(`\n${"─".repeat(60)}`);
console.log(
  `  Summary: ${results.auto.length} auto-fixable, ${results.manual.length} manual, ${results.info.length} info`
);
if (!applyFix && results.auto.length) {
  console.log(`  Run with --fix to apply safe automatic fixes.`);
}
console.log(`${"─".repeat(60)}\n`);
