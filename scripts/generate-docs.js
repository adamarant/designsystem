#!/usr/bin/env node

/**
 * Generates the demo site from components.json
 * No dependencies. Pure Node.js.
 *
 * Usage: node scripts/generate-docs.js
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const EXAMPLES = path.join(ROOT, 'examples');
const COMPONENTS_DIR = path.join(EXAMPLES, 'components');

// Load manifest
const manifest = JSON.parse(fs.readFileSync(path.join(ROOT, 'components.json'), 'utf-8'));
const allComponents = manifest.components;

// Ensure output directory
if (!fs.existsSync(COMPONENTS_DIR)) {
  fs.mkdirSync(COMPONENTS_DIR, { recursive: true });
}

function escapeHTML(html) {
  return html.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function getCategoryLabel(id) {
  const cat = manifest.categories.find(c => c.id === id);
  return cat ? cat.label : id;
}

// Build sidebar HTML (shared across all component pages)
function buildSidebar(activeName) {
  let html = '';
  for (const cat of manifest.categories) {
    const components = allComponents.filter(c => c.category === cat.id);
    html += `      <div class="demo-sidebar__group">
        <div class="demo-sidebar__label">${cat.label}</div>
${components.map(c => {
  const active = c.name === activeName ? ' demo-sidebar__link--active' : '';
  return `        <a href="${c.name}.html" class="demo-sidebar__link${active}">${c.title}</a>`;
}).join('\n')}
      </div>\n`;
  }
  return html;
}

// Build examples HTML
function buildExamples(component) {
  return component.examples.map(ex => `
    <section class="demo-example">
      <h2>${ex.title}</h2>
      <div class="demo-preview">
        ${ex.html}
      </div>
      <details class="demo-code">
        <summary>View Code</summary>
        <pre><code>${escapeHTML(ex.html)}</code></pre>
      </details>
    </section>`).join('\n');
}

// Build API table
function buildAPI(component) {
  const rows = [];

  // Base class
  for (const cls of component.classes) {
    rows.push(`<tr><td><code>${cls}</code></td><td>Base component</td></tr>`);
  }

  // Elements
  if (component.elements?.length) {
    for (const el of component.elements) {
      const fullClass = component.classes[0] + el;
      rows.push(`<tr><td><code>${fullClass}</code></td><td>Element</td></tr>`);
    }
  }

  // Variants
  if (component.variants?.length) {
    for (const v of component.variants) {
      const fullClass = component.classes[0] + v;
      rows.push(`<tr><td><code>${fullClass}</code></td><td>Variant</td></tr>`);
    }
  }

  // Sizes
  if (component.sizes?.length) {
    for (const s of component.sizes) {
      const fullClass = component.classes[0] + s;
      rows.push(`<tr><td><code>${fullClass}</code></td><td>Size</td></tr>`);
    }
  }

  // Modifiers
  if (component.modifiers?.length) {
    for (const m of component.modifiers) {
      const fullClass = component.classes[0] + m;
      rows.push(`<tr><td><code>${fullClass}</code></td><td>Modifier</td></tr>`);
    }
  }

  if (rows.length === 0) return '';

  return `
    <section class="demo-api">
      <h2>API</h2>
      <table class="ds-table">
        <thead><tr><th>Class</th><th>Type</th></tr></thead>
        <tbody>${rows.join('\n          ')}</tbody>
      </table>
    </section>`;
}

// Build prev/next navigation
function buildNavFooter(index) {
  const prev = index > 0 ? allComponents[index - 1] : null;
  const next = index < allComponents.length - 1 ? allComponents[index + 1] : null;

  return `
    <nav class="demo-nav-footer">
      ${prev ? `<a href="${prev.name}.html">&larr; ${prev.title}</a>` : '<span></span>'}
      ${next ? `<a href="${next.name}.html">${next.title} &rarr;</a>` : '<span></span>'}
    </nav>`;
}

// Generate each component page
let generated = 0;
let skipped = 0;

for (let i = 0; i < allComponents.length; i++) {
  const comp = allComponents[i];
  const outputPath = path.join(COMPONENTS_DIR, `${comp.name}.html`);

  // Skip hand-edited files
  if (fs.existsSync(outputPath)) {
    const existing = fs.readFileSync(outputPath, 'utf-8');
    if (existing.startsWith('<!-- hand-edited -->')) {
      skipped++;
      continue;
    }
  }

  const html = `<!DOCTYPE html>
<html lang="en" data-theme="light">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${comp.title} — Design System</title>
  <link rel="stylesheet" href="../../dist/designsystem.css">
  <link rel="stylesheet" href="../_shared/demo.css">
</head>
<body>

  <div class="demo-layout">
    <aside class="demo-sidebar">
      <a href="../" class="demo-sidebar__brand">Design System</a>
      <input class="ds-input ds-input--sm" id="componentSearch" placeholder="Search...">
${buildSidebar(comp.name)}
      <div style="margin-top: auto; padding-top: var(--ds-space-4); border-top: 1px solid var(--ds-color-border-subtle);">
        <button class="ds-btn ds-btn--ghost ds-btn--sm" data-toggle-theme style="width: 100%;">Toggle Theme</button>
      </div>
    </aside>

    <main class="demo-main">
      <header>
        <h1>${comp.title}</h1>
        <p>${comp.description}</p>
        <div class="demo-meta">
          <span class="ds-badge">${getCategoryLabel(comp.category)}</span>
          <code>@import '@digiko-npm/designsystem/components/${comp.name}';</code>
        </div>
      </header>

${buildExamples(comp)}
${buildAPI(comp)}
${buildNavFooter(i)}
    </main>
  </div>

  <script src="../_shared/demo.js"></script>
</body>
</html>
`;

  fs.writeFileSync(outputPath, html);
  generated++;
}

console.log(`  Generated ${generated} component pages${skipped ? `, skipped ${skipped} hand-edited` : ''}`);

// Generate homepage
const homepageHTML = `<!DOCTYPE html>
<html lang="en" data-theme="light">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Design System</title>
  <link rel="stylesheet" href="../dist/designsystem.css">
  <link rel="stylesheet" href="_shared/demo.css">
</head>
<body>

  <div class="demo-layout">
    <aside class="demo-sidebar">
      <a href="./" class="demo-sidebar__brand">Design System</a>
      <input class="ds-input ds-input--sm" id="componentSearch" placeholder="Search components...">
      <nav id="componentNav"></nav>
      <div style="margin-top: auto; padding-top: var(--ds-space-4); border-top: 1px solid var(--ds-color-border-subtle);">
        <button class="ds-btn ds-btn--ghost ds-btn--sm" data-toggle-theme style="width: 100%;">Toggle Theme</button>
      </div>
    </aside>

    <main class="demo-main">
      <header>
        <h1>Design System</h1>
        <p>CSS-only design system. ${allComponents.length} components, zero dependencies. Install anywhere, override tokens, nothing breaks.</p>
        <div class="demo-meta">
          <code>npm install @digiko-npm/designsystem</code>
        </div>
      </header>

      <div id="catalog"></div>
    </main>
  </div>

  <script src="_shared/demo.js"></script>
</body>
</html>
`;

fs.writeFileSync(path.join(EXAMPLES, 'index.html'), homepageHTML);
console.log('  Generated homepage catalog');
