#!/usr/bin/env node

/**
 * Build script — concatenates all CSS into a single dist file.
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

function build() {
  const start = Date.now();

  // Ensure dist exists
  if (!fs.existsSync(DIST)) {
    fs.mkdirSync(DIST, { recursive: true });
  }

  // Build CSS
  const entryCSS = path.join(SRC, 'index.css');
  const css = resolveImports(entryCSS);

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
