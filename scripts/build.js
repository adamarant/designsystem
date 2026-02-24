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

  return content.replace(/@import\s+['"](.+?)['"];/g, (match, importPath) => {
    const resolved = path.resolve(dir, importPath);
    if (!fs.existsSync(resolved)) {
      console.warn(`  Warning: ${importPath} not found (from ${filePath})`);
      return `/* Missing: ${importPath} */`;
    }
    return resolveImports(resolved, seen);
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

  const elapsed = Date.now() - start;
  const size = (Buffer.byteLength(css) / 1024).toFixed(1);
  console.log(`  Built designsystem.css (${size}KB) in ${elapsed}ms`);
}

// Run
build();

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
