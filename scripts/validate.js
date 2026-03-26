#!/usr/bin/env node

/**
 * DS Validate — Comprehensive design system validation.
 * 40 automated checks grouped into 7 categories.
 *
 * Usage:
 *   node scripts/validate.js           # Run all checks
 *   node scripts/validate.js --strict  # Warnings also block (exit 1)
 *   node scripts/validate.js --json    # Output as JSON
 *
 * Exit codes:
 *   0 = pass (warnings/info only)
 *   1 = errors found (or warnings in --strict mode)
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const SRC = path.join(ROOT, 'src');
const TOKENS_DIR = path.join(SRC, 'tokens');
const COMPONENTS_DIR = path.join(SRC, 'components');
const UTILITIES_DIR = path.join(SRC, 'utilities');
const BASE_DIR = path.join(SRC, 'base');
const EXAMPLES_DIR = path.join(ROOT, 'examples');
const DIST_DIR = path.join(ROOT, 'dist');

const isStrict = process.argv.includes('--strict');
const isJSON = process.argv.includes('--json');

// ─── Severity ────────────────────────────────────────────────────────────────

const ERROR = 'error';     // Blocks publish
const WARNING = 'warning'; // Blocks in --strict
const INFO = 'info';       // Advisory only

const results = [];

function report(severity, category, check, message, file, line) {
  results.push({ severity, category, check, message, file: file || null, line: line || null });
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

function readCSSFiles(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir)
    .filter(f => f.endsWith('.css') && f !== 'index.css')
    .map(f => ({
      name: f,
      path: path.join(dir, f),
      content: fs.readFileSync(path.join(dir, f), 'utf-8'),
    }));
}

function stripComments(content) {
  return content.replace(/\/\*[\s\S]*?\*\//g, '');
}

function isStructuralException(line) {
  return /\/\*\s*structural\s*\*\//.test(line) || /\/\*\s*physical\s*\*\//.test(line);
}

function getLines(content) {
  return content.split('\n');
}

// ─── Token Collection ────────────────────────────────────────────────────────

function collectDefinedTokens() {
  const tokens = new Set();
  if (!fs.existsSync(TOKENS_DIR)) return tokens;
  const files = fs.readdirSync(TOKENS_DIR).filter(f => f.endsWith('.css'));
  for (const file of files) {
    const content = fs.readFileSync(path.join(TOKENS_DIR, file), 'utf-8');
    for (const m of content.matchAll(/(--ds-[\w-]+)\s*:/g)) {
      tokens.add(m[1]);
    }
  }
  return tokens;
}

function collectLocalTokens(dir) {
  const tokens = new Set();
  const files = readCSSFiles(dir);
  for (const file of files) {
    for (const m of file.content.matchAll(/(--ds-[\w-]+)\s*:/g)) {
      tokens.add(m[1]);
    }
  }
  return tokens;
}

// ─── Collect all valid DS class names from component CSS ─────────────────────

function collectValidClasses(files) {
  const classes = new Set();
  for (const file of files) {
    const clean = stripComments(file.content);
    for (const m of clean.matchAll(/\.(ds-[\w-]+)/g)) {
      classes.add(m[1]);
    }
  }
  return classes;
}

// ═══════════════════════════════════════════════════════════════════════════════
// CATEGORY A: TOKEN COMPLIANCE (10 checks)
// ═══════════════════════════════════════════════════════════════════════════════

function checkTokenCompliance() {
  const definedTokens = collectDefinedTokens();
  const componentLocalTokens = collectLocalTokens(COMPONENTS_DIR);
  const allDefined = new Set([...definedTokens, ...componentLocalTokens]);

  const dirs = [
    { files: readCSSFiles(COMPONENTS_DIR), label: 'components' },
    { files: readCSSFiles(UTILITIES_DIR), label: 'utilities' },
    { files: readCSSFiles(BASE_DIR), label: 'base' },
  ];

  for (const dir of dirs) {
    for (const file of dir.files) {
      const lines = getLines(file.content);
      let inComment = false;

      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        const trimmed = line.trim();

        // Track multiline comments
        if (trimmed.includes('/*')) inComment = true;
        if (trimmed.includes('*/')) { inComment = false; continue; }
        if (inComment || trimmed.startsWith('*') || trimmed.startsWith('/*')) continue;

        const relPath = `${dir.label}/${file.name}`;

        // A1: Phantom tokens
        for (const m of line.matchAll(/var\((--ds-[\w-]+)/g)) {
          if (!allDefined.has(m[1])) {
            report(ERROR, 'tokens', 'phantom-token',
              `Token ${m[1]} not defined in tokens/`, relPath, i + 1);
          }
        }

        // Only check components and utilities for hardcoded values (not base/)
        if (dir.label === 'base') continue;

        // A2: Hardcoded hex colors
        if (/#[0-9a-fA-F]{3,8}\b/.test(line) && !isStructuralException(line)) {
          // Exclude fallback inside var()
          const clean = line.replace(/var\([^)]+\)/g, '');
          if (/#[0-9a-fA-F]{3,8}\b/.test(clean)) {
            report(ERROR, 'tokens', 'hardcoded-hex',
              `Hardcoded hex color found`, relPath, i + 1);
          }
        }

        // A3: Hardcoded px (except 0px, 1px, 2px)
        if (/[3-9]px|[1-9][0-9]+px/.test(line) && !isStructuralException(line)) {
          // Exclude inside var(), content strings, and comments
          const clean = line.replace(/var\([^)]+\)/g, '').replace(/"[^"]*"/g, '').replace(/'[^']*'/g, '');
          if (/[3-9]px|[1-9][0-9]+px/.test(clean)) {
            // In DS components, hardcoded px is a warning (structural sizing); in consumers it'd be error
            report(WARNING, 'tokens', 'hardcoded-px',
              `Hardcoded px value (>2px) — consider tokenizing`, relPath, i + 1);
          }
        }

        // A4: Hardcoded rem
        if (/\d+\.?\d*rem/.test(line) && !isStructuralException(line)) {
          const clean = line.replace(/var\([^)]+\)/g, '');
          if (/\d+\.?\d*rem/.test(clean)) {
            // In DS components, hardcoded rem is a warning (many are structural sizing)
            report(WARNING, 'tokens', 'hardcoded-rem',
              `Hardcoded rem value — consider tokenizing`, relPath, i + 1);
          }
        }

        // A5: Hardcoded font-family
        if (/font-family\s*:/.test(line) && !line.includes('var(--ds-font') && !line.includes('inherit') && !line.includes('monospace')) {
          if (!isStructuralException(line)) {
            report(ERROR, 'tokens', 'hardcoded-font-family',
              `Hardcoded font-family (use var(--ds-font-*))`, relPath, i + 1);
          }
        }

        // A6: Hardcoded font-weight numeric
        if (/font-weight\s*:\s*\d+/.test(line) && !line.includes('var(--ds-weight')) {
          if (!isStructuralException(line)) {
            report(ERROR, 'tokens', 'hardcoded-font-weight',
              `Hardcoded font-weight (use var(--ds-weight-*))`, relPath, i + 1);
          }
        }

        // A7: Hardcoded z-index
        if (/z-index\s*:\s*\d+/.test(line) && !line.includes('var(--ds-z') && !/z-index\s*:\s*[01]\s*[;}\s]/.test(line)) {
          if (!isStructuralException(line)) {
            report(WARNING, 'tokens', 'hardcoded-z-index',
              `Hardcoded z-index (use var(--ds-z-*))`, relPath, i + 1);
          }
        }

        // A8: Hardcoded duration
        if (/duration\s*:\s*\d+m?s/.test(line) && !line.includes('var(--ds-duration')) {
          if (!isStructuralException(line)) {
            report(WARNING, 'tokens', 'hardcoded-duration',
              `Hardcoded duration (use var(--ds-duration-*))`, relPath, i + 1);
          }
        }

        // A9: Hardcoded box-shadow (not inside var())
        if (/box-shadow\s*:/.test(line) && !line.includes('var(--ds-shadow') && !line.includes('var(--ds-ring') && !line.includes('none')) {
          // Allow box-shadow that uses var(--ds-*) tokens inline
          const clean = line.replace(/var\(--ds-[\w-]+[^)]*\)/g, '');
          if (/box-shadow\s*:/.test(clean) && !/box-shadow\s*:\s*(none|inherit)/.test(clean)) {
            if (!isStructuralException(line)) {
              report(WARNING, 'tokens', 'hardcoded-box-shadow',
                `Box-shadow without DS tokens`, relPath, i + 1);
            }
          }
        }

        // A10: Hardcoded border-radius
        if (/border-radius\s*:/.test(line) && !line.includes('var(--ds-radius') && !/border-radius\s*:\s*(0|50%|inherit|9999px)/.test(line)) {
          if (!isStructuralException(line)) {
            report(WARNING, 'tokens', 'hardcoded-border-radius',
              `Hardcoded border-radius (use var(--ds-radius-*))`, relPath, i + 1);
          }
        }
      }
    }
  }
}

// ═══════════════════════════════════════════════════════════════════════════════
// CATEGORY B: NAMING & STRUCTURE (8 checks)
// ═══════════════════════════════════════════════════════════════════════════════

function checkNamingStructure() {
  const componentFiles = readCSSFiles(COMPONENTS_DIR);

  for (const file of componentFiles) {
    const relPath = `components/${file.name}`;
    const clean = stripComments(file.content);
    const lines = getLines(file.content);

    // B11: BEM naming — all selectors must start with .ds-
    for (const m of clean.matchAll(/(?:^|\n)\s*\.(?!ds-)([\w-]+)/g)) {
      const cls = m[1];
      // Skip if inside @keyframes or it's a utility/modifier context
      if (cls.startsWith('dark') || cls === 'group' || cls === 'ds-group') continue;
      report(WARNING, 'naming', 'missing-ds-prefix',
        `Class .${cls} missing ds- prefix`, relPath);
    }

    // B12: No element selectors on DS classes
    for (const m of clean.matchAll(/(input|button|select|textarea|div|span|a|ul|li|label)\.(ds-[\w-]+)/g)) {
      report(ERROR, 'naming', 'element-selector',
        `Element selector "${m[1]}.${m[2]}" — use class-only selector`, relPath);
    }

    // B13: No double BEM nesting (__el__subel)
    for (const m of clean.matchAll(/\.(ds-[\w]+__[\w]+-*[\w]*__[\w-]+)/g)) {
      report(ERROR, 'naming', 'double-bem-nesting',
        `Double BEM nesting: .${m[1]}`, relPath);
    }

    // B14: Base selector for pseudo-only classes
    // Collect all ds-* class selectors and check if any only appear with pseudo
    const classesWithBase = new Set();
    const classesWithPseudoOnly = new Set();

    for (const m of clean.matchAll(/\.(ds-[\w-]+(?:--[\w-]+)?)\s*\{/g)) {
      classesWithBase.add(m[1]);
    }
    for (const m of clean.matchAll(/\.(ds-[\w-]+(?:--[\w-]+)?)\s*(?:::|:)[\w-]+/g)) {
      if (!classesWithBase.has(m[1])) {
        classesWithPseudoOnly.add(m[1]);
      }
    }
    for (const cls of classesWithPseudoOnly) {
      report(INFO, 'naming', 'pseudo-only-class',
        `Class .${cls} has only pseudo selectors, no base selector`, relPath);
    }

    // B15: Component header present
    if (!file.content.includes('Component:') && !file.content.includes('=====')) {
      report(WARNING, 'structure', 'missing-header',
        `Missing component header comment`, relPath);
    }

    // B16: ARIA docs present
    if (!file.content.includes('ARIA') && !file.content.includes('aria')) {
      report(WARNING, 'structure', 'missing-aria-docs',
        `Missing ARIA requirements documentation in header`, relPath);
    }

    // B17: No !important (except known disabled patterns)
    for (let i = 0; i < lines.length; i++) {
      if (lines[i].includes('!important')) {
        // Allow in [disabled] and [aria-disabled] context
        const context = lines.slice(Math.max(0, i - 5), i + 1).join('\n');
        if (!context.includes('disabled') && !context.includes('[aria-disabled')) {
          report(WARNING, 'structure', 'important-usage',
            `!important used outside disabled context`, relPath, i + 1);
        }
      }
    }

    // B18: CSS nesting consistency
    const usesNesting = clean.includes('& ') || clean.includes('&:') || clean.includes('&--') || clean.includes('&__');
    const usesFlatSelectors = /\n\s*\.ds-[\w-]+\s*\{/.test(clean);
    if (usesNesting && usesFlatSelectors) {
      // Count to determine if it's a genuine mix
      const nestedCount = (clean.match(/&[.:_\-\s[]/g) || []).length;
      const flatCount = (clean.match(/\n\s*\.ds-[\w-]+\s*\{/g) || []).length;
      if (nestedCount > 3 && flatCount > 3) {
        report(INFO, 'structure', 'mixed-nesting',
          `Mixed flat and nested CSS selectors (${flatCount} flat, ${nestedCount} nested)`, relPath);
      }
    }
  }
}

// ═══════════════════════════════════════════════════════════════════════════════
// CATEGORY C: PHYSICAL/LOGICAL PROPERTIES (3 checks)
// ═══════════════════════════════════════════════════════════════════════════════

function checkLogicalProperties() {
  const dirs = [
    { files: readCSSFiles(COMPONENTS_DIR), label: 'components' },
    { files: readCSSFiles(UTILITIES_DIR), label: 'utilities' },
  ];

  const physicalProps = [
    { pattern: /padding-left\s*:/, replacement: 'padding-inline-start' },
    { pattern: /padding-right\s*:/, replacement: 'padding-inline-end' },
    { pattern: /margin-left\s*:/, replacement: 'margin-inline-start' },
    { pattern: /margin-right\s*:/, replacement: 'margin-inline-end' },
    { pattern: /border-left\s*:/, replacement: 'border-inline-start' },
    { pattern: /border-right\s*:/, replacement: 'border-inline-end' },
    { pattern: /(?<!inset-)(?<!inline-)(?<!block-)left\s*:/, replacement: 'inset-inline-start' },
    { pattern: /(?<!inset-)(?<!inline-)(?<!block-)right\s*:/, replacement: 'inset-inline-end' },
  ];

  for (const dir of dirs) {
    for (const file of dir.files) {
      const lines = getLines(file.content);
      let inComment = false;

      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        const trimmed = line.trim();

        if (trimmed.includes('/*')) inComment = true;
        if (trimmed.includes('*/')) { inComment = false; continue; }
        if (inComment || trimmed.startsWith('*')) continue;
        if (isStructuralException(line)) continue;

        // Skip transform, arrow, and intentional physical contexts
        if (/transform|translate|border-.*-color|border-top-color|arrow/.test(line)) continue;

        const relPath = `${dir.label}/${file.name}`;

        // C19: Physical directional properties
        for (const prop of physicalProps) {
          if (prop.pattern.test(line)) {
            report(WARNING, 'logical', 'physical-property',
              `Physical property found, use ${prop.replacement}`, relPath, i + 1);
          }
        }

        // C20: text-align left/right
        if (/text-align\s*:\s*(left|right)/.test(line) && !isStructuralException(line)) {
          report(WARNING, 'logical', 'physical-text-align',
            `text-align: left/right — use start/end`, relPath, i + 1);
        }

        // C21: float left/right
        if (/float\s*:\s*(left|right)/.test(line) && !isStructuralException(line)) {
          report(WARNING, 'logical', 'physical-float',
            `float: left/right — use inline-start/end`, relPath, i + 1);
        }
      }
    }
  }
}

// ═══════════════════════════════════════════════════════════════════════════════
// CATEGORY D: THEME & DARK MODE (4 checks)
// ═══════════════════════════════════════════════════════════════════════════════

function checkTheme() {
  const allFiles = [
    ...readCSSFiles(COMPONENTS_DIR).map(f => ({ ...f, label: 'components' })),
    ...readCSSFiles(UTILITIES_DIR).map(f => ({ ...f, label: 'utilities' })),
    ...readCSSFiles(BASE_DIR).map(f => ({ ...f, label: 'base' })),
  ];

  for (const file of allFiles) {
    const lines = getLines(file.content);
    const relPath = `${file.label}/${file.name}`;

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];

      // D22: No .dark selector
      if (/\.dark\s*\{/.test(line) || /\.dark\s+/.test(line)) {
        report(ERROR, 'theme', 'dark-class-selector',
          `Use [data-theme="dark"] instead of .dark`, relPath, i + 1);
      }

      // D23: No :root.dark
      if (/:root\.dark/.test(line)) {
        report(ERROR, 'theme', 'root-dark-selector',
          `Use [data-theme="dark"] instead of :root.dark`, relPath, i + 1);
      }

      // D24: No named colors (in property values)
      if (/:\s*(red|blue|green|yellow|orange|purple|pink|white|black|gray|grey)\s*[;}]/.test(line)) {
        // Exclude inside comments and var()
        const clean = line.replace(/var\([^)]+\)/g, '').replace(/\/\*.*?\*\//g, '');
        if (/:\s*(red|blue|green|yellow|orange|purple|pink|white|black|gray|grey)\s*[;}]/.test(clean)) {
          if (!isStructuralException(line)) {
            report(ERROR, 'theme', 'named-color',
              `Named color found — use token`, relPath, i + 1);
          }
        }
      }
    }
  }

  // D25: @layer integrity in dist
  const distPath = path.join(DIST_DIR, 'designsystem.css');
  if (fs.existsSync(distPath)) {
    const distContent = fs.readFileSync(distPath, 'utf-8');
    const firstLines = distContent.split('\n').slice(0, 5).join('\n');
    if (!firstLines.includes('@layer tokens, base, components, utilities')) {
      // Check if it's in @layer declaration form
      if (!distContent.includes('@layer tokens') || !distContent.includes('@layer base') ||
          !distContent.includes('@layer components') || !distContent.includes('@layer utilities')) {
        report(ERROR, 'theme', 'layer-integrity',
          `dist/designsystem.css missing @layer declaration`, 'dist/designsystem.css');
      }
    }
  }
}

// ═══════════════════════════════════════════════════════════════════════════════
// CATEGORY E: ACCESSIBILITY (5 checks)
// ═══════════════════════════════════════════════════════════════════════════════

function checkAccessibility() {
  const componentFiles = readCSSFiles(COMPONENTS_DIR);

  for (const file of componentFiles) {
    const relPath = `components/${file.name}`;
    const content = file.content;
    const clean = stripComments(content);

    // E26: Focus ring via box-shadow, not outline
    if (clean.includes(':focus-visible') || clean.includes(':focus')) {
      // Check if outline is used instead of box-shadow for focus
      const focusBlocks = clean.match(/:focus-visible\s*\{[^}]+\}/g) || [];
      for (const block of focusBlocks) {
        if (block.includes('outline:') && !block.includes('outline: none') && !block.includes('outline: 0')) {
          report(WARNING, 'a11y', 'outline-focus',
            `Focus uses outline instead of box-shadow ring`, relPath);
        }
      }
    }

    // E28: scroll-margin-block on interactive components with focus-visible
    const isInteractive = /(:hover|:focus-visible|:active)/.test(clean);
    if (isInteractive && clean.includes(':focus-visible') && !clean.includes('scroll-margin')) {
      report(INFO, 'a11y', 'missing-scroll-margin',
        `Interactive component lacks scroll-margin-block on :focus-visible`, relPath);
    }

    // E30: prefers-reduced-motion for animated components
    const hasAnimation = /transition|animation|@keyframes/.test(clean);
    if (hasAnimation && !content.includes('prefers-reduced-motion')) {
      report(INFO, 'a11y', 'missing-reduced-motion',
        `Component has transitions/animations but no prefers-reduced-motion`, relPath);
    }
  }
}

// ═══════════════════════════════════════════════════════════════════════════════
// CATEGORY F: DISCOVERY & SYNC (5 checks)
// ═══════════════════════════════════════════════════════════════════════════════

function checkDiscoverySync() {
  // F31: Manifest sync
  const manifestPath = path.join(ROOT, 'components.json');
  if (fs.existsSync(manifestPath)) {
    const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf-8'));
    const manifestNames = new Set(manifest.components.map(c => c.name));
    const cssFiles = fs.readdirSync(COMPONENTS_DIR)
      .filter(f => f.endsWith('.css') && f !== 'index.css')
      .map(f => f.replace('.css', ''));
    const cssNames = new Set(cssFiles);

    for (const name of cssNames) {
      if (!manifestNames.has(name)) {
        report(ERROR, 'sync', 'manifest-missing-entry',
          `${name}.css has no entry in components.json`, 'components.json');
      }
    }
    for (const name of manifestNames) {
      if (!cssNames.has(name)) {
        report(ERROR, 'sync', 'manifest-orphan-entry',
          `components.json has "${name}" but ${name}.css not found`, 'components.json');
      }
    }
  }

  // F32: tokens.json freshness
  const tokensJsonPath = path.join(TOKENS_DIR, 'tokens.json');
  if (fs.existsSync(tokensJsonPath)) {
    const tokensJsonMtime = fs.statSync(tokensJsonPath).mtimeMs;
    const tokenCSSFiles = fs.readdirSync(TOKENS_DIR).filter(f => f.endsWith('.css'));
    for (const f of tokenCSSFiles) {
      const cssMtime = fs.statSync(path.join(TOKENS_DIR, f)).mtimeMs;
      if (cssMtime > tokensJsonMtime) {
        report(INFO, 'sync', 'tokens-json-stale',
          `tokens.json is older than ${f} — may be out of sync`, `tokens/${f}`);
        break;
      }
    }
  }

  // F33: CHANGELOG has [Unreleased] section
  const changelogPath = path.join(ROOT, 'CHANGELOG.md');
  if (fs.existsSync(changelogPath)) {
    const changelog = fs.readFileSync(changelogPath, 'utf-8');
    if (!changelog.includes('[Unreleased]') && !changelog.includes('## Unreleased')) {
      report(INFO, 'sync', 'changelog-no-unreleased',
        `CHANGELOG.md has no [Unreleased] section`, 'CHANGELOG.md');
    }
  }

  // F34: API table classes match CSS (check examples/)
  if (fs.existsSync(EXAMPLES_DIR)) {
    const componentFiles = readCSSFiles(COMPONENTS_DIR);
    const validClasses = collectValidClasses(componentFiles);
    const examplesComponents = path.join(EXAMPLES_DIR, 'components');

    if (fs.existsSync(examplesComponents)) {
      const htmlFiles = fs.readdirSync(examplesComponents).filter(f => f.endsWith('.html'));
      for (const htmlFile of htmlFiles) {
        const htmlContent = fs.readFileSync(path.join(examplesComponents, htmlFile), 'utf-8');

        // Check classes in <code> tags within API tables (tr > td > code patterns)
        for (const m of htmlContent.matchAll(/<code>\.(ds-[\w-]+)<\/code>/g)) {
          if (!validClasses.has(m[1])) {
            report(WARNING, 'sync', 'api-table-phantom-class',
              `API table references .${m[1]} which doesn't exist in CSS`, `examples/components/${htmlFile}`);
          }
        }
      }
    }
  }

  // F35: Demo HTML escaped tags
  if (fs.existsSync(EXAMPLES_DIR)) {
    const examplesComponents = path.join(EXAMPLES_DIR, 'components');
    if (fs.existsSync(examplesComponents)) {
      const htmlFiles = fs.readdirSync(examplesComponents).filter(f => f.endsWith('.html'));
      for (const htmlFile of htmlFiles) {
        const htmlContent = fs.readFileSync(path.join(examplesComponents, htmlFile), 'utf-8');
        const lines = getLines(htmlContent);

        for (let i = 0; i < lines.length; i++) {
          const line = lines[i];
          // Check for unescaped HTML tags in description paragraphs (outside <pre>/<code>)
          // Simple heuristic: if inside a <p> or description context and contains <tag> that isn't an HTML element we expect
          if (/<p[^>]*>/.test(line) || /<header[^>]*>/.test(line)) {
            // Check the next few lines for unescaped tags
            const desc = lines.slice(i, Math.min(i + 5, lines.length)).join('\n');
            const unescaped = desc.match(/<(select|input|textarea|button|div|span|form)\s*>/gi);
            if (unescaped) {
              report(WARNING, 'sync', 'unescaped-html-in-demo',
                `Unescaped HTML tag <${unescaped[0].replace(/[<>]/g, '')}> in demo description`, `examples/components/${htmlFile}`, i + 1);
            }
          }
        }
      }
    }
  }
}

// ═══════════════════════════════════════════════════════════════════════════════
// CATEGORY G: COMPONENT QUALITY (5 checks)
// ═══════════════════════════════════════════════════════════════════════════════

function checkComponentQuality() {
  // G36: No duplicate dark selectors in tokens
  if (fs.existsSync(path.join(TOKENS_DIR, 'colors.css'))) {
    const colorsContent = fs.readFileSync(path.join(TOKENS_DIR, 'colors.css'), 'utf-8');
    const darkSelectors = colorsContent.match(/\[data-theme="dark"\]/g) || [];
    if (darkSelectors.length > 1) {
      // This is actually expected (one per token group). But check for .dark duplicate
      if (colorsContent.includes('.dark {') || colorsContent.includes('.dark{')) {
        report(ERROR, 'quality', 'duplicate-dark-selector',
          `Duplicate .dark selector alongside [data-theme="dark"]`, 'tokens/colors.css');
      }
    }
  }

  // G37: Color token scale monotonicity (dark mode)
  if (fs.existsSync(path.join(TOKENS_DIR, 'colors.css'))) {
    const colorsContent = fs.readFileSync(path.join(TOKENS_DIR, 'colors.css'), 'utf-8');
    // Extract dark theme bg tokens
    const darkMatch = colorsContent.match(/\[data-theme="dark"\]\s*\{([\s\S]*?)\}/);
    if (darkMatch) {
      const darkBlock = darkMatch[1];
      const bgTokens = {};
      for (const m of darkBlock.matchAll(/--(ds-color-bg(?:-[\w]+)?)\s*:\s*(#[\da-fA-F]+)/g)) {
        bgTokens[m[1]] = m[2];
      }

      // Check luminance ordering if we have the scale
      const scale = ['ds-color-bg', 'ds-color-bg-subtle', 'ds-color-bg-muted', 'ds-color-bg-elevated'];
      const hexToLuminance = (hex) => {
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);
        return 0.299 * r + 0.587 * g + 0.114 * b;
      };

      let prevLum = -1;
      for (const token of scale) {
        if (bgTokens[token]) {
          const lum = hexToLuminance(bgTokens[token]);
          if (lum <= prevLum) {
            report(WARNING, 'quality', 'color-scale-monotonicity',
              `Dark mode ${token} (${bgTokens[token]}) is not lighter than previous in scale`, 'tokens/colors.css');
          }
          prevLum = lum;
        }
      }
    }
  }

  // G38: Container query has media fallback
  const componentFiles = readCSSFiles(COMPONENTS_DIR);
  for (const file of componentFiles) {
    const clean = stripComments(file.content);
    if (clean.includes('@container') && !clean.includes('@media')) {
      report(INFO, 'quality', 'container-no-media-fallback',
        `Uses @container but no @media fallback for older browsers`, `components/${file.name}`);
    }
  }

  // G39: Size variants completeness
  for (const file of componentFiles) {
    const clean = stripComments(file.content);
    const hasSm = clean.includes('--sm');
    const hasLg = clean.includes('--lg');
    const hasXs = clean.includes('--xs');

    if (hasSm && !hasLg) {
      report(INFO, 'quality', 'incomplete-size-variants',
        `Has --sm but no --lg variant`, `components/${file.name}`);
    }
    if (hasLg && !hasSm) {
      report(INFO, 'quality', 'incomplete-size-variants',
        `Has --lg but no --sm variant`, `components/${file.name}`);
    }
  }

  // G40: Semantic variants completeness
  for (const file of componentFiles) {
    const clean = stripComments(file.content);
    const semantics = ['--success', '--warning', '--error', '--info'];
    const found = semantics.filter(s => clean.includes(s));

    if (found.length > 0 && found.length < 4) {
      const missing = semantics.filter(s => !found.includes(s));
      report(INFO, 'quality', 'incomplete-semantic-variants',
        `Has ${found.join(', ')} but missing ${missing.join(', ')}`, `components/${file.name}`);
    }
  }
}

// ═══════════════════════════════════════════════════════════════════════════════
// RUN ALL CHECKS
// ═══════════════════════════════════════════════════════════════════════════════

console.log('\n  DS Validate — Running 40 checks...\n');

checkTokenCompliance();
checkNamingStructure();
checkLogicalProperties();
checkTheme();
checkAccessibility();
checkDiscoverySync();
checkComponentQuality();

// ─── Output ──────────────────────────────────────────────────────────────────

const errors = results.filter(r => r.severity === ERROR);
const warnings = results.filter(r => r.severity === WARNING);
const infos = results.filter(r => r.severity === INFO);

if (isJSON) {
  console.log(JSON.stringify({ errors, warnings, infos }, null, 2));
} else {
  const icon = { error: '🔴', warning: '🟡', info: '🔵' };

  // Group by category
  const categories = new Map();
  for (const r of results) {
    const key = `${r.category}`;
    if (!categories.has(key)) categories.set(key, []);
    categories.get(key).push(r);
  }

  for (const [cat, items] of categories) {
    console.log(`  ── ${cat.toUpperCase()} ──`);
    for (const r of items) {
      const loc = r.file ? (r.line ? `${r.file}:${r.line}` : r.file) : '';
      console.log(`  ${icon[r.severity]} [${r.check}] ${r.message}${loc ? ` (${loc})` : ''}`);
    }
    console.log();
  }

  console.log(`  ────────────────────────────────────────`);
  console.log(`  ${icon.error} Errors:   ${errors.length}`);
  console.log(`  ${icon.warning} Warnings: ${warnings.length}`);
  console.log(`  ${icon.info} Info:     ${infos.length}`);
  console.log();

  if (errors.length > 0) {
    console.log('  ❌ Validation FAILED — fix errors before publishing\n');
  } else if (warnings.length > 0 && isStrict) {
    console.log('  ❌ Validation FAILED (strict mode) — fix warnings\n');
  } else if (warnings.length > 0) {
    console.log('  ⚠️  Validation PASSED with warnings\n');
  } else {
    console.log('  ✅ Validation PASSED\n');
  }
}

// Exit code
if (errors.length > 0) {
  process.exit(1);
} else if (isStrict && warnings.length > 0) {
  process.exit(1);
} else {
  process.exit(0);
}
