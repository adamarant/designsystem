#!/usr/bin/env node

/**
 * Token Validation Script
 * Checks that every var(--ds-*) used in component files exists in tokens/.
 * Run: node scripts/validate-tokens.js
 */

const fs = require("fs");
const path = require("path");

const TOKENS_DIR = path.join(__dirname, "..", "src", "tokens");
const COMPONENTS_DIR = path.join(__dirname, "..", "src", "components");
const UTILITIES_DIR = path.join(__dirname, "..", "src", "utilities");
const BASE_DIR = path.join(__dirname, "..", "src", "base");

// 1. Collect all defined tokens from tokens/ files
function collectDefinedTokens() {
  const tokens = new Set();
  const tokenFiles = fs
    .readdirSync(TOKENS_DIR)
    .filter((f) => f.endsWith(".css"));

  for (const file of tokenFiles) {
    const content = fs.readFileSync(path.join(TOKENS_DIR, file), "utf-8");
    // Match --ds-* declarations (left side of :)
    const matches = content.matchAll(/(--ds-[\w-]+)\s*:/g);
    for (const m of matches) {
      tokens.add(m[1]);
    }
  }

  return tokens;
}

// 2. Collect all referenced tokens from component/utility/base files
function collectReferencedTokens(dir) {
  const references = [];
  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".css"));

  for (const file of files) {
    const content = fs.readFileSync(path.join(dir, file), "utf-8");
    const lines = content.split("\n");

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      // Skip comments
      if (line.trim().startsWith("/*") || line.trim().startsWith("*")) continue;

      // Match var(--ds-*) references
      const matches = line.matchAll(/var\((--ds-[\w-]+)/g);
      for (const m of matches) {
        references.push({
          token: m[1],
          file: file,
          line: i + 1,
        });
      }
    }
  }

  return references;
}

// 3. Also collect tokens defined inside component files (local definitions)
function collectLocalTokens(dir) {
  const tokens = new Set();
  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".css"));

  for (const file of files) {
    const content = fs.readFileSync(path.join(dir, file), "utf-8");
    const matches = content.matchAll(/(--ds-[\w-]+)\s*:/g);
    for (const m of matches) {
      tokens.add(m[1]);
    }
  }

  return tokens;
}

// Run validation
const definedTokens = collectDefinedTokens();
const componentLocalTokens = collectLocalTokens(COMPONENTS_DIR);
const allDefined = new Set([...definedTokens, ...componentLocalTokens]);

const dirs = [
  { path: COMPONENTS_DIR, label: "components" },
  { path: UTILITIES_DIR, label: "utilities" },
  { path: BASE_DIR, label: "base" },
];

let errors = 0;
let checked = 0;

for (const dir of dirs) {
  if (!fs.existsSync(dir.path)) continue;

  const refs = collectReferencedTokens(dir.path);
  for (const ref of refs) {
    checked++;

    // Allow fallback patterns: var(--ds-foo, fallback)
    // The token just needs to be either defined or have a fallback
    if (!allDefined.has(ref.token)) {
      // Check if it's used with a fallback
      console.log(
        `  Warning: ${dir.label}/${ref.file}:${ref.line} — ${ref.token} not found in tokens`,
      );
      errors++;
    }
  }
}

console.log(
  `\n  Token validation: ${checked} references checked, ${errors} warnings`,
);

if (errors > 0) {
  console.log(
    "  Some tokens may be missing from tokens/ or defined only locally.",
  );
  console.log("  Check if they have fallback values or are defined elsewhere.");
}

process.exit(0); // Warnings only, don't fail build
