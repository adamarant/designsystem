#!/usr/bin/env node

/**
 * Design System Migration Codemod
 *
 * Scans a consumer project for patterns that need updating when upgrading
 * the @adamarant/designsystem package.
 *
 * Usage:
 *   node node_modules/@adamarant/designsystem/scripts/codemod.js ./src
 *   node node_modules/@adamarant/designsystem/scripts/codemod.js ./src --fix
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

    // ── NEW CHECKS (v0.9.7+) ──────────────────────────────────────────────

    // 6. Deprecated DS classes (renamed in v0.7.0)
    if (/ds-form-group/.test(line)) {
      results.manual.push({
        file: filePath, line: lineNum,
        message: 'ds-form-group is deprecated. Use ds-field instead (v0.7.0 rename).',
        original: line.trim(),
      });
    }
    if (/ds-help(?!-)/.test(line) || /ds-help--error/.test(line)) {
      results.manual.push({
        file: filePath, line: lineNum,
        message: 'ds-help / ds-help--error are deprecated. Use ds-field__hint / ds-field__error (v0.7.0).',
        original: line.trim(),
      });
    }

    // 7. Unprefixed component classes in TSX/JSX
    if (!isCss) {
      const unprefixed = line.match(/className=["'][^"']*\b(btn|badge|spinner|icon-btn|input-base|select-base|dropdown-menu|modal-overlay)\b/);
      if (unprefixed) {
        results.manual.push({
          file: filePath, line: lineNum,
          message: `Unprefixed class "${unprefixed[1]}" — use ds-${unprefixed[1].replace('-', '-')} instead.`,
          original: line.trim(),
        });
      }
    }

    // 8. Hardcoded colors in consumer CSS
    if (isCss) {
      const colorMatch = line.match(/:\s*(#fff|#000|#ffffff|#000000|white|black)\s*[;}]/i);
      if (colorMatch && !/\/\*/.test(line) && !/var\(/.test(line)) {
        results.info.push({
          file: filePath, line: lineNum,
          message: `Hardcoded color "${colorMatch[1]}" — use DS token (--ds-color-inverted, --ds-color-text, etc.).`,
          original: line.trim(),
        });
      }
    }

    // 9. style={{ width: 'auto' }} on ds-select (redundant since v0.4.0)
    if (/ds-select/.test(line) && /style=\{\{[^}]*width\s*:\s*['"]auto['"]/.test(line)) {
      results.info.push({
        file: filePath, line: lineNum,
        message: 'style={{ width: "auto" }} on ds-select is redundant — ds-select is auto by default since v0.4.0.',
        original: line.trim(),
      });
    }

    // 10. outline: none on DS components in consumer CSS
    if (isCss && /outline\s*:\s*none/.test(line)) {
      // Check if in a .ds-* context (within 5 lines)
      const context = lines.slice(Math.max(0, i - 5), i + 1).join('\n');
      if (/\.ds-/.test(context)) {
        results.manual.push({
          file: filePath, line: lineNum,
          message: 'outline: none on DS component blocks the box-shadow focus ring. Remove this override.',
          original: line.trim(),
        });
      }
    }

    // 11. Phantom tokens in consumer CSS
    if (isCss) {
      const tokenRefs = line.matchAll(/var\((--ds-[\w-]+)/g);
      for (const m of tokenRefs) {
        const token = m[1];
        // Known phantom tokens from audit
        const phantoms = ['--ds-color-danger', '--ds-color-text-primary', '--ds-color-surface-hover', '--ds-ring-offset'];
        if (phantoms.includes(token)) {
          results.manual.push({
            file: filePath, line: lineNum,
            message: `Phantom token ${token} — this token does not exist in the DS. Check tokens reference in CLAUDE.md.`,
            original: line.trim(),
          });
        }
      }
    }

    // 12. <select> native in dark mode projects
    if (!isCss && /<select\b/.test(line) && !/<select.*className/.test(line)) {
      // Only flag if not already a DS component
      if (!/ds-custom-select/.test(line) && !/ds-select/.test(line)) {
        results.info.push({
          file: filePath, line: lineNum,
          message: 'Native <select> element — browser dropdown is not styleable in dark mode. Consider ds-dropdown or ds-custom-select.',
          original: line.trim(),
        });
      }
    }

    // 13. Wrong element-class pairing
    if (!isCss) {
      if (/<textarea[^>]*className=["'][^"']*ds-input(?!-)/.test(line)) {
        results.manual.push({
          file: filePath, line: lineNum,
          message: '<textarea> with ds-input — use ds-textarea instead.',
          original: line.trim(),
        });
      }
    }

    // 14. Utility soup (4+ ds-* utility classes on one element)
    if (!isCss) {
      const classMatch = line.match(/className=["']([^"']+)["']/);
      if (classMatch) {
        const classes = classMatch[1].split(/\s+/);
        const dsUtilities = classes.filter(c => /^ds-(flex|grid|gap|items|justify|p-|px-|py-|m-|mx-|my-|mb-|mt-|ml-|mr-|w-|h-|text-|bg-|border|rounded|shadow|block|hidden|inline|relative|absolute|fixed|sticky|overflow|z-|opacity)/.test(c));
        if (dsUtilities.length >= 4) {
          results.info.push({
            file: filePath, line: lineNum,
            message: `Utility soup (${dsUtilities.length} utilities) — check if a DS component covers this pattern.`,
            original: line.trim().substring(0, 120),
          });
        }
      }
    }

    // 15. cx-* classes (should be zero everywhere)
    if (/\bcx-[\w-]+/.test(line)) {
      results.manual.push({
        file: filePath, line: lineNum,
        message: 'cx-* prefix is deprecated. Migrate to ds-* (DS component) or unprefixed BEM (project-specific).',
        original: line.trim(),
      });
    }

    // 16. :root.dark or .dark selector in consumer CSS
    if (isCss && /:root\.dark/.test(line)) {
      results.auto.push({
        file: filePath, line: lineNum,
        message: ':root.dark → [data-theme="dark"]',
        original: line.trim(),
      });
      if (applyFix) {
        modified = modified.replace(/:root\.dark/g, '[data-theme="dark"]');
      }
    }

    // 17. border-left/right/top/bottom in consumer CSS
    if (isCss && /border-(left|right)\s*:/.test(line) && !/\/\*/.test(line)) {
      results.info.push({
        file: filePath, line: lineNum,
        message: 'Physical border property — use border-inline-start/end for RTL support.',
        original: line.trim(),
      });
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
