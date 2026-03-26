#!/usr/bin/env node

/**
 * Build script — concatenates all CSS into a single dist file.
 * Flattens CSS nesting to ensure compatibility.
 * No dependencies needed. Pure Node.js.
 *
 * Usage: node scripts/build.js
 *        node scripts/build.js --watch
 */

const fs = require('fs');
const path = require('path');

const SRC = path.join(__dirname, '..', 'src');
const DIST = path.join(__dirname, '..', 'dist');

function resolveImports(filePath, seen = new Set()) {
  if (seen.has(filePath)) return '';
  seen.add(filePath);

  const content = fs.readFileSync(filePath, 'utf-8');
  const dir = path.dirname(filePath);

  return content.replace(/@import\s+['"](.+?)['"]\s*(?:layer\((\w+)\))?\s*;/g, (match, importPath, layerName) => {
    const resolved = path.resolve(dir, importPath);
    if (!fs.existsSync(resolved)) {
      console.warn(`  Warning: ${importPath} not found (from ${filePath})`);
      return `/* Missing: ${importPath} */`;
    }
    const resolved_css = resolveImports(resolved, seen);
    if (layerName) {
      return `@layer ${layerName} {\n${resolved_css}\n}`;
    }
    return resolved_css;
  });
}

/**
 * Flatten CSS nesting (&-based selectors) into flat CSS.
 * Handles:
 *   &:hover       → .parent:hover
 *   &--modifier   → .parent--modifier
 *   &__element    → .parent__element
 *   & .other      → .parent .other
 *   nested &      → keeps parent context
 *   @media/@container inside nesting → unwrapped correctly
 *   @keyframes    → left untouched
 */
function flattenNesting(css) {
  // Tokenize strings and comments to avoid processing them
  const tokens = [];
  let tokenized = css.replace(/\/\*[\s\S]*?\*\//g, (m) => {
    tokens.push(m);
    return `/*TOKEN_${tokens.length - 1}*/`;
  });

  const result = processBlock(tokenized, []);

  // Restore tokens
  let output = result.replace(/\/\*TOKEN_(\d+)\*\//g, (_, i) => tokens[i]);
  return output;
}

function processBlock(css, parentSelectors) {
  let output = '';
  let i = 0;

  while (i < css.length) {
    // Skip whitespace
    if (css[i] === ' ' || css[i] === '\n' || css[i] === '\r' || css[i] === '\t') {
      output += css[i];
      i++;
      continue;
    }

    // Handle comments (tokenized)
    if (css[i] === '/' && css[i + 1] === '*') {
      const end = css.indexOf('*/', i + 2);
      if (end === -1) { output += css.slice(i); break; }
      output += css.slice(i, end + 2);
      i = end + 2;
      continue;
    }

    // Try to parse a rule or at-rule
    const remaining = css.slice(i);

    // @keyframes — pass through entirely (don't flatten inside)
    const keyframesMatch = remaining.match(/^@keyframes\s+[\w-]+\s*\{/);
    if (keyframesMatch) {
      const braceStart = i + keyframesMatch[0].length - 1;
      const braceEnd = findMatchingBrace(css, braceStart);
      output += css.slice(i, braceEnd + 1);
      i = braceEnd + 1;
      continue;
    }

    // @layer — pass through the declaration, process contents
    const layerDeclMatch = remaining.match(/^@layer\s+[^{]+\{/);
    if (layerDeclMatch) {
      const braceStart = i + layerDeclMatch[0].length - 1;
      const braceEnd = findMatchingBrace(css, braceStart);
      const innerCSS = css.slice(braceStart + 1, braceEnd);
      const processedInner = processBlock(innerCSS, []);
      output += layerDeclMatch[0] + processedInner + '}';
      i = braceEnd + 1;
      continue;
    }

    // @media / @container / @supports — at-rules with blocks
    const atRuleMatch = remaining.match(/^(@(?:media|container|supports)[^{]+)\{/);
    if (atRuleMatch) {
      const braceStart = i + atRuleMatch[0].length - 1;
      const braceEnd = findMatchingBrace(css, braceStart);
      const innerCSS = css.slice(braceStart + 1, braceEnd);
      const processedInner = processBlock(innerCSS, parentSelectors);
      output += atRuleMatch[1].trim() + ' {\n' + processedInner + '}\n';
      i = braceEnd + 1;
      continue;
    }

    // @-rules without blocks (e.g. @layer tokens, base, components;)
    const atRuleLineMatch = remaining.match(/^@[^{]+;/);
    if (atRuleLineMatch) {
      output += atRuleLineMatch[0];
      i += atRuleLineMatch[0].length;
      continue;
    }

    // Try to match a selector + block
    const selectorEnd = css.indexOf('{', i);
    if (selectorEnd === -1) {
      output += css.slice(i);
      break;
    }

    // Check if this is actually a property (no nested block) by looking for ; before {
    const nextSemicolon = css.indexOf(';', i);
    const nextNewline = css.indexOf('\n', i);

    // Get the selector text
    let selectorText = css.slice(i, selectorEnd).trim();

    // If selectorText looks like a property (contains : but no & and no selector-like chars)
    if (!selectorText.includes('{') && selectorText.includes(':') && !selectorText.includes('&') &&
        !selectorText.match(/^[.#\[\w@*:>~+]/) && nextSemicolon !== -1 && nextSemicolon < selectorEnd) {
      // It's a property declaration, just output until ;
      output += css.slice(i, nextSemicolon + 1);
      i = nextSemicolon + 1;
      continue;
    }

    // It's a selector block
    const braceEnd = findMatchingBrace(css, selectorEnd);
    const innerCSS = css.slice(selectorEnd + 1, braceEnd);

    // Check if inner contains nested blocks (& selectors)
    const hasNesting = innerCSS.includes('&') || hasNestedBlocks(innerCSS);

    const selectorHasAmpersand = selectorText.includes('&');
    const needsFlatten = selectorHasAmpersand && parentSelectors.length > 0;

    if (!needsFlatten && (!hasNesting || (parentSelectors.length === 0 && !selectorHasAmpersand))) {
      // No nesting or top-level rule — process inner for potential nesting
      if (hasNesting) {
        const selectors = parseSelectors(selectorText);
        const { properties, nestedRules } = separatePropertiesAndNested(innerCSS);

        if (properties.trim()) {
          output += selectorText + ' {\n' + properties + '}\n';
        }

        // Process nested rules with current selector as parent
        for (const nested of nestedRules) {
          output += processNestedRule(nested, selectors);
        }
      } else {
        output += selectorText + ' {' + innerCSS + '}';
      }
    } else {
      // Nested selector — resolve against parent
      const resolvedSelectors = resolveNesting(selectorText, parentSelectors);
      const { properties, nestedRules } = separatePropertiesAndNested(innerCSS);

      if (properties.trim()) {
        output += resolvedSelectors.join(',\n') + ' {\n' + properties + '}\n';
      }

      for (const nested of nestedRules) {
        output += processNestedRule(nested, resolvedSelectors);
      }
    }

    i = braceEnd + 1;
  }

  return output;
}

function processNestedRule(rule, parentSelectors) {
  let output = '';
  const { selector, inner } = rule;

  // Handle @media/@container inside a selector
  const atRuleMatch = selector.match(/^@(media|container|supports)\s/);
  if (atRuleMatch) {
    const innerOutput = processBlock(inner, parentSelectors);
    output += selector + ' {\n' + innerOutput + '}\n';
    return output;
  }

  const resolvedSelectors = resolveNesting(selector, parentSelectors);
  const { properties, nestedRules } = separatePropertiesAndNested(inner);

  if (properties.trim()) {
    output += resolvedSelectors.join(',\n') + ' {\n' + properties + '}\n';
  }

  for (const nested of nestedRules) {
    output += processNestedRule(nested, resolvedSelectors);
  }

  return output;
}

function resolveNesting(selectorText, parentSelectors) {
  const childSelectors = parseSelectors(selectorText);
  const resolved = [];

  for (const parent of parentSelectors) {
    for (const child of childSelectors) {
      if (child.includes('&')) {
        // Replace & with parent selector
        resolved.push(child.replace(/&/g, parent));
      } else {
        // Implicit descendant
        resolved.push(parent + ' ' + child);
      }
    }
  }

  return resolved;
}

function parseSelectors(selectorText) {
  // Split by comma, but not inside parentheses
  const selectors = [];
  let depth = 0;
  let current = '';

  for (const char of selectorText) {
    if (char === '(') depth++;
    else if (char === ')') depth--;
    else if (char === ',' && depth === 0) {
      selectors.push(current.trim());
      current = '';
      continue;
    }
    current += char;
  }
  if (current.trim()) selectors.push(current.trim());
  return selectors;
}

function separatePropertiesAndNested(innerCSS) {
  let properties = '';
  const nestedRules = [];
  let i = 0;

  while (i < innerCSS.length) {
    // Skip whitespace
    if (innerCSS[i] === ' ' || innerCSS[i] === '\n' || innerCSS[i] === '\r' || innerCSS[i] === '\t') {
      properties += innerCSS[i];
      i++;
      continue;
    }

    // Comments
    if (innerCSS[i] === '/' && innerCSS[i + 1] === '*') {
      const end = innerCSS.indexOf('*/', i + 2);
      if (end === -1) { properties += innerCSS.slice(i); break; }
      properties += innerCSS.slice(i, end + 2);
      i = end + 2;
      continue;
    }

    const remaining = innerCSS.slice(i);

    // Check for nested block: find next { and next ;
    const nextBrace = innerCSS.indexOf('{', i);
    const nextSemicolon = innerCSS.indexOf(';', i);

    // If no more braces, rest is properties
    if (nextBrace === -1) {
      properties += innerCSS.slice(i);
      break;
    }

    // If semicolon comes before brace, it's a property
    if (nextSemicolon !== -1 && nextSemicolon < nextBrace) {
      properties += innerCSS.slice(i, nextSemicolon + 1);
      i = nextSemicolon + 1;
      continue;
    }

    // It's a nested rule
    const selector = innerCSS.slice(i, nextBrace).trim();
    const braceEnd = findMatchingBrace(innerCSS, nextBrace);
    const inner = innerCSS.slice(nextBrace + 1, braceEnd);
    nestedRules.push({ selector, inner });
    i = braceEnd + 1;
  }

  return { properties, nestedRules };
}

function hasNestedBlocks(css) {
  // Quick check: does the inner content contain selector-like patterns with braces?
  let depth = 0;
  for (let i = 0; i < css.length; i++) {
    if (css[i] === '{') {
      depth++;
      if (depth > 0) return true;
    }
    if (css[i] === '}') depth--;
  }
  return false;
}

function findMatchingBrace(css, openPos) {
  let depth = 1;
  let i = openPos + 1;
  while (i < css.length && depth > 0) {
    if (css[i] === '{') depth++;
    else if (css[i] === '}') depth--;
    if (depth === 0) return i;
    i++;
  }
  return css.length - 1;
}

function build() {
  const start = Date.now();

  // Ensure dist exists
  if (!fs.existsSync(DIST)) {
    fs.mkdirSync(DIST, { recursive: true });
  }

  // Build CSS
  const entryCSS = path.join(SRC, 'index.css');
  let css = resolveImports(entryCSS);

  // Flatten CSS nesting
  css = flattenNesting(css);

  const banner = `/* @ds/designsystem v${require('../package.json').version} */\n`;
  fs.writeFileSync(path.join(DIST, 'designsystem.css'), banner + css);

  // Copy JS
  const jsSource = path.join(SRC, 'js', 'theme.js');
  if (fs.existsSync(jsSource)) {
    fs.copyFileSync(jsSource, path.join(DIST, 'designsystem.js'));
  }

  // Minified bundle
  const minified = minifyCSS(css);
  fs.writeFileSync(path.join(DIST, 'designsystem.min.css'), banner + minified);

  const elapsed = Date.now() - start;
  const size = (Buffer.byteLength(css) / 1024).toFixed(1);
  const minSize = (Buffer.byteLength(minified) / 1024).toFixed(1);
  console.log(`  Built designsystem.css (${size}KB) + min (${minSize}KB) in ${elapsed}ms`);
}

function minifyCSS(css) {
  return css
    .replace(/\/\*[\s\S]*?\*\//g, '')       // Remove comments
    .replace(/\s+/g, ' ')                    // Collapse whitespace
    .replace(/\s*([{}:;,>~+])\s*/g, '$1')   // Remove space around symbols
    .replace(/;}/g, '}')                     // Remove trailing semicolons
    .trim();
}

function updateExportsMap() {
  const pkgPath = path.join(__dirname, '..', 'package.json');
  const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf-8'));

  const componentsDir = path.join(SRC, 'components');
  const componentFiles = fs.readdirSync(componentsDir)
    .filter(f => f.endsWith('.css') && f !== 'index.css')
    .sort();

  const exports = {
    '.': './dist/designsystem.css',
    './min': './dist/designsystem.min.css',
    './tokens': './src/tokens/index.css',
    './base': './src/base/index.css',
    './components': './src/components/index.css',
  };

  for (const file of componentFiles) {
    const name = file.replace('.css', '');
    exports[`./components/${name}`] = `./src/components/${file}`;
  }

  exports['./utilities'] = './src/utilities/index.css';
  exports['./js'] = './dist/designsystem.js';
  exports['./tokens/json'] = './src/tokens/tokens.json';

  pkg.exports = exports;
  fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2) + '\n');
  console.log(`  Updated exports map (${componentFiles.length} components)`);
}

function validateManifest() {
  const manifestPath = path.join(__dirname, '..', 'components.json');
  if (!fs.existsSync(manifestPath)) {
    console.warn('  Warning: components.json not found — skipping validation');
    return;
  }

  const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf-8'));
  const manifestNames = new Set(manifest.components.map(c => c.name));

  const componentsDir = path.join(SRC, 'components');
  const cssFiles = fs.readdirSync(componentsDir)
    .filter(f => f.endsWith('.css') && f !== 'index.css')
    .map(f => f.replace('.css', ''));
  const cssNames = new Set(cssFiles);

  let warnings = 0;

  // CSS files missing from manifest
  for (const name of cssNames) {
    if (!manifestNames.has(name)) {
      console.warn(`  Warning: ${name}.css has no entry in components.json`);
      warnings++;
    }
  }

  // Manifest entries with missing CSS files
  for (const name of manifestNames) {
    if (!cssNames.has(name)) {
      console.warn(`  Warning: components.json has "${name}" but ${name}.css not found`);
      warnings++;
    }
  }

  if (warnings === 0) {
    console.log(`  Manifest validated (${manifestNames.size} components in sync)`);
  }
}

// Run
build();
updateExportsMap();
validateManifest();

// Run validation (non-blocking in build, just report)
if (!process.argv.includes('--watch')) {
  try {
    require('child_process').execSync('node scripts/validate.js', {
      cwd: path.join(__dirname, '..'),
      stdio: 'inherit',
    });
  } catch (e) {
    console.warn('  ⚠️  Validation found issues — run `npm run validate` for details');
  }
}

// Watch mode
if (process.argv.includes('--watch')) {
  console.log('  Watching for changes...\n');
  fs.watch(SRC, { recursive: true }, (event, filename) => {
    if (filename && filename.endsWith('.css')) {
      console.log(`  Changed: ${filename}`);
      build();
    }
  });
}
