#!/usr/bin/env node

/**
 * Generates the demo site from components.json + token CSS files.
 * No dependencies. Pure Node.js.
 *
 * Usage: node scripts/generate-docs.js
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const SRC = path.join(ROOT, 'src');
const EXAMPLES = path.join(ROOT, 'examples');
const COMPONENTS_DIR = path.join(EXAMPLES, 'components');
const FOUNDATIONS_DIR = path.join(EXAMPLES, 'foundations');

// Load manifest
const manifest = JSON.parse(fs.readFileSync(path.join(ROOT, 'components.json'), 'utf-8'));
const allComponents = manifest.components;

// Ensure output directories
[COMPONENTS_DIR, FOUNDATIONS_DIR].forEach(dir => {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
});

// ============================================================================
// Utilities
// ============================================================================

function escapeHTML(html) {
  return html.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function getCategoryLabel(id) {
  const cat = manifest.categories.find(c => c.id === id);
  return cat ? cat.label : id;
}

/**
 * Parse a CSS file and extract all --ds-* custom properties.
 * Returns array of { name, value, comment }
 */
function parseTokens(filePath) {
  const css = fs.readFileSync(filePath, 'utf-8');
  const tokens = [];
  const regex = /(--ds-[\w-]+)\s*:\s*([^;]+);/g;
  let match;
  while ((match = regex.exec(css)) !== null) {
    const name = match[1];
    const value = match[2].trim();
    // Grab inline comment if present
    const lineEnd = css.indexOf('\n', match.index);
    const line = css.substring(match.index, lineEnd);
    const commentMatch = line.match(/\/\*\s*(.+?)\s*\*\//);
    const comment = commentMatch ? commentMatch[1] : '';
    tokens.push({ name, value, comment });
  }
  return tokens;
}

// ============================================================================
// Foundation pages definition
// ============================================================================

const foundationPages = [
  { name: 'colors', title: 'Colors', description: 'Background, surface, text, border, status, and accent color tokens.' },
  { name: 'typography', title: 'Typography', description: 'Font families, sizes, weights, line heights, and letter spacing.' },
  { name: 'spacing', title: 'Spacing & Layout', description: 'Spacing scale, border radius, z-index, and container sizes.' },
  { name: 'effects', title: 'Effects', description: 'Shadows, transitions, easing curves, and focus ring.' },
];

// ============================================================================
// Sidebar builder (shared across all pages)
// ============================================================================

function buildSidebar(activeName, pathPrefix) {
  let html = '';

  // Foundations section
  html += `      <div class="demo-sidebar__group">
        <div class="demo-sidebar__label">Foundations</div>
${foundationPages.map(f => {
  const active = f.name === activeName ? ' demo-sidebar__link--active' : '';
  return `        <a href="${pathPrefix}foundations/${f.name}.html" class="demo-sidebar__link${active}">${f.title}</a>`;
}).join('\n')}
      </div>\n`;

  // Component categories
  for (const cat of manifest.categories) {
    const components = allComponents.filter(c => c.category === cat.id);
    html += `      <div class="demo-sidebar__group">
        <div class="demo-sidebar__label">${cat.label}</div>
${components.map(c => {
  const active = c.name === activeName ? ' demo-sidebar__link--active' : '';
  return `        <a href="${pathPrefix}components/${c.name}.html" class="demo-sidebar__link${active}">${c.title}</a>`;
}).join('\n')}
      </div>\n`;
  }
  return html;
}

function pageShell(title, activeName, pathPrefix, cssPath, content) {
  return `<!DOCTYPE html>
<html lang="en" data-theme="light">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title} — Design System</title>
  <link rel="stylesheet" href="${cssPath}">
  <link rel="stylesheet" href="${pathPrefix}_shared/demo.css">
</head>
<body>

  <div class="demo-layout">
    <aside class="demo-sidebar">
      <a href="${pathPrefix}" class="demo-sidebar__brand">Design System</a>
      <input class="ds-input ds-input--sm" id="componentSearch" placeholder="Search...">
${buildSidebar(activeName, pathPrefix)}
      <div style="margin-top: auto; padding-top: var(--ds-space-4); border-top: 1px solid var(--ds-color-border-subtle);">
        <button class="ds-btn ds-btn--ghost ds-btn--sm" data-toggle-theme style="width: 100%;">Toggle Theme</button>
      </div>
    </aside>

    <main class="demo-main">
${content}
    </main>
  </div>

  <script src="${pathPrefix}_shared/demo.js"></script>
</body>
</html>
`;
}

// ============================================================================
// Foundation page content generators
// ============================================================================

function generateColorsContent() {
  const tokens = parseTokens(path.join(SRC, 'tokens', 'colors.css'));

  // Group by prefix
  const groups = {};
  for (const t of tokens) {
    // Skip shadows and scrollbar (defined in colors.css but not colors)
    if (t.name.includes('shadow') || t.name.includes('scrollbar') || t.name === 'color-scheme') continue;
    const parts = t.name.replace('--ds-color-', '').split('-');
    const group = parts[0] || 'other';
    if (!groups[group]) groups[group] = [];
    groups[group].push(t);
  }

  // Deduplicate (dark theme overrides same names)
  const seen = new Set();
  const uniqueTokens = tokens.filter(t => {
    if (seen.has(t.name) || t.name.includes('shadow') || t.name.includes('scrollbar') || t.name === 'color-scheme') return false;
    seen.add(t.name);
    return true;
  });

  // Group unique tokens
  const uniqueGroups = {};
  for (const t of uniqueTokens) {
    const key = t.name.replace('--ds-color-', '').split('-')[0];
    if (!uniqueGroups[key]) uniqueGroups[key] = [];
    uniqueGroups[key].push(t);
  }

  let sections = '';
  for (const [group, toks] of Object.entries(uniqueGroups)) {
    const label = group.charAt(0).toUpperCase() + group.slice(1);
    sections += `
      <section class="demo-example">
        <h2>${label}</h2>
        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: var(--ds-space-3);">
          ${toks.map(t => `<div style="display: flex; align-items: center; gap: var(--ds-space-3); padding: var(--ds-space-2);">
            <div style="width: 40px; height: 40px; border-radius: var(--ds-radius-md); border: 1px solid var(--ds-color-border); flex-shrink: 0; background: var(${t.name});"></div>
            <div>
              <div style="font-size: var(--ds-text-sm); font-family: var(--ds-font-mono);">${t.name.replace('--ds-', '')}</div>
            </div>
          </div>`).join('\n          ')}
        </div>
      </section>`;
  }

  return `
      <header>
        <h1>Colors</h1>
        <p>Background, surface, text, border, status, and accent color tokens. All adapt automatically to light/dark theme.</p>
        <div class="demo-meta">
          <span class="ds-badge">Foundation</span>
          <code>@import '@digiko-npm/designsystem/tokens';</code>
        </div>
      </header>
${sections}`;
}

function generateTypographyContent() {
  const tokens = parseTokens(path.join(SRC, 'tokens', 'typography.css'));

  const fonts = tokens.filter(t => t.name.startsWith('--ds-font-') && !t.name.includes('weight'));
  const sizes = tokens.filter(t => t.name.startsWith('--ds-text-'));
  const weights = tokens.filter(t => t.name.startsWith('--ds-weight-'));
  const leadings = tokens.filter(t => t.name.startsWith('--ds-leading-'));
  const trackings = tokens.filter(t => t.name.startsWith('--ds-tracking-'));

  return `
      <header>
        <h1>Typography</h1>
        <p>Font families, sizes, weights, line heights, and letter spacing.</p>
        <div class="demo-meta">
          <span class="ds-badge">Foundation</span>
          <code>@import '@digiko-npm/designsystem/tokens';</code>
        </div>
      </header>

      <section class="demo-example">
        <h2>Font Families</h2>
        <div class="demo-preview" style="flex-direction: column; gap: var(--ds-space-5);">
          ${fonts.map(t => `<div>
            <div style="font-size: var(--ds-text-xs); color: var(--ds-color-text-tertiary); font-family: var(--ds-font-mono); margin-bottom: var(--ds-space-1);">${t.name.replace('--ds-', '')}</div>
            <div style="font-family: var(${t.name}); font-size: var(--ds-text-2xl);">The quick brown fox jumps over the lazy dog</div>
          </div>`).join('\n          ')}
        </div>
      </section>

      <section class="demo-example">
        <h2>Font Sizes</h2>
        <div class="demo-preview" style="flex-direction: column; gap: var(--ds-space-4);">
          ${sizes.map(t => {
            const label = t.name.replace('--ds-text-', '');
            return `<div style="display: flex; align-items: baseline; gap: var(--ds-space-4);">
            <code style="font-family: var(--ds-font-mono); font-size: var(--ds-text-xs); color: var(--ds-color-text-tertiary); min-width: 80px;">${label} <span style="opacity: 0.5">${t.comment || t.value}</span></code>
            <span style="font-size: var(${t.name}); line-height: 1.2;">Design System</span>
          </div>`;
          }).join('\n          ')}
        </div>
      </section>

      <section class="demo-example">
        <h2>Font Weights</h2>
        <div class="demo-preview" style="flex-direction: column; gap: var(--ds-space-3);">
          ${weights.map(t => {
            const label = t.name.replace('--ds-weight-', '');
            return `<div style="display: flex; align-items: baseline; gap: var(--ds-space-4);">
            <code style="font-family: var(--ds-font-mono); font-size: var(--ds-text-xs); color: var(--ds-color-text-tertiary); min-width: 100px;">${label} (${t.value})</code>
            <span style="font-weight: var(${t.name}); font-size: var(--ds-text-lg);">The quick brown fox</span>
          </div>`;
          }).join('\n          ')}
        </div>
      </section>

      <section class="demo-example">
        <h2>Line Heights</h2>
        <div class="demo-preview" style="flex-direction: column; gap: var(--ds-space-5);">
          ${leadings.map(t => {
            const label = t.name.replace('--ds-leading-', '');
            return `<div style="display: flex; gap: var(--ds-space-4);">
            <code style="font-family: var(--ds-font-mono); font-size: var(--ds-text-xs); color: var(--ds-color-text-tertiary); min-width: 80px;">${label} (${t.value})</code>
            <p style="line-height: var(${t.name}); font-size: var(--ds-text-sm); max-width: 400px; background: var(--ds-color-bg-elevated); padding: var(--ds-space-2); border-radius: var(--ds-radius-md);">Typography is the art and technique of arranging type to make written language legible and appealing.</p>
          </div>`;
          }).join('\n          ')}
        </div>
      </section>

      <section class="demo-example">
        <h2>Letter Spacing</h2>
        <div class="demo-preview" style="flex-direction: column; gap: var(--ds-space-3);">
          ${trackings.map(t => {
            const label = t.name.replace('--ds-tracking-', '');
            return `<div style="display: flex; align-items: baseline; gap: var(--ds-space-4);">
            <code style="font-family: var(--ds-font-mono); font-size: var(--ds-text-xs); color: var(--ds-color-text-tertiary); min-width: 80px;">${label} (${t.value})</code>
            <span style="letter-spacing: var(${t.name}); font-size: var(--ds-text-lg);">DESIGN SYSTEM</span>
          </div>`;
          }).join('\n          ')}
        </div>
      </section>`;
}

function generateSpacingContent() {
  const tokens = parseTokens(path.join(SRC, 'tokens', 'spacing.css'));

  const spaces = tokens.filter(t => t.name.startsWith('--ds-space-'));
  const radii = tokens.filter(t => t.name.startsWith('--ds-radius-'));
  const zIndices = tokens.filter(t => t.name.startsWith('--ds-z-'));
  const containers = tokens.filter(t => t.name.startsWith('--ds-container-'));

  return `
      <header>
        <h1>Spacing & Layout</h1>
        <p>Spacing scale, border radius, z-index layers, and container sizes.</p>
        <div class="demo-meta">
          <span class="ds-badge">Foundation</span>
          <code>@import '@digiko-npm/designsystem/tokens';</code>
        </div>
      </header>

      <section class="demo-example">
        <h2>Spacing Scale</h2>
        <div class="demo-preview" style="flex-direction: column; gap: var(--ds-space-2);">
          ${spaces.map(t => {
            const label = t.name.replace('--ds-space-', '');
            return `<div style="display: flex; align-items: center; gap: var(--ds-space-3);">
            <code style="font-family: var(--ds-font-mono); font-size: var(--ds-text-xs); color: var(--ds-color-text-tertiary); min-width: 80px;">space-${label}</code>
            <div style="height: 16px; width: var(${t.name}); background: var(--ds-color-inverted); border-radius: var(--ds-radius-sm); min-width: 2px;"></div>
            <span style="font-size: var(--ds-text-xs); color: var(--ds-color-text-tertiary);">${t.value}${t.comment ? ' / ' + t.comment : ''}</span>
          </div>`;
          }).join('\n          ')}
        </div>
      </section>

      <section class="demo-example">
        <h2>Border Radius</h2>
        <div class="demo-preview" style="gap: var(--ds-space-5); flex-wrap: wrap;">
          ${radii.map(t => {
            const label = t.name.replace('--ds-radius-', '');
            return `<div style="text-align: center;">
            <div style="width: 64px; height: 64px; background: var(--ds-color-inverted); border-radius: var(${t.name});"></div>
            <div style="font-family: var(--ds-font-mono); font-size: var(--ds-text-xs); color: var(--ds-color-text-tertiary); margin-top: var(--ds-space-2);">${label}</div>
            <div style="font-size: var(--ds-text-xs); color: var(--ds-color-text-disabled);">${t.value}</div>
          </div>`;
          }).join('\n          ')}
        </div>
      </section>

      <section class="demo-example">
        <h2>Z-Index Scale</h2>
        <div class="demo-preview" style="flex-direction: column; gap: var(--ds-space-2);">
          ${zIndices.map(t => {
            const label = t.name.replace('--ds-z-', '');
            const width = Math.max(10, (parseInt(t.value) / 200) * 100);
            return `<div style="display: flex; align-items: center; gap: var(--ds-space-3);">
            <code style="font-family: var(--ds-font-mono); font-size: var(--ds-text-xs); color: var(--ds-color-text-tertiary); min-width: 80px;">${label}</code>
            <div style="height: 24px; width: ${width}%; background: var(--ds-color-inverted); border-radius: var(--ds-radius-sm); display: flex; align-items: center; padding-left: var(--ds-space-2);">
              <span style="font-size: var(--ds-text-xs); color: var(--ds-color-on-inverted); font-family: var(--ds-font-mono);">${t.value}</span>
            </div>
          </div>`;
          }).join('\n          ')}
        </div>
      </section>

      <section class="demo-example">
        <h2>Container Sizes</h2>
        <table class="ds-table">
          <thead><tr><th>Token</th><th>Value</th></tr></thead>
          <tbody>
            ${containers.map(t => `<tr><td><code>${t.name.replace('--ds-', '')}</code></td><td>${t.value}</td></tr>`).join('\n            ')}
          </tbody>
        </table>
      </section>`;
}

function generateEffectsContent() {
  const shadowTokens = parseTokens(path.join(SRC, 'tokens', 'colors.css')).filter(t => t.name.startsWith('--ds-shadow-'));
  const effectTokens = parseTokens(path.join(SRC, 'tokens', 'shadows.css'));

  const durations = effectTokens.filter(t => t.name.startsWith('--ds-duration-'));
  const easings = effectTokens.filter(t => t.name.startsWith('--ds-ease-'));

  // Deduplicate shadows (light and dark define same names)
  const seen = new Set();
  const shadows = shadowTokens.filter(t => {
    if (seen.has(t.name)) return false;
    seen.add(t.name);
    return true;
  });

  return `
      <header>
        <h1>Effects</h1>
        <p>Shadows, transition durations, and easing curves. Shadows adapt per theme.</p>
        <div class="demo-meta">
          <span class="ds-badge">Foundation</span>
          <code>@import '@digiko-npm/designsystem/tokens';</code>
        </div>
      </header>

      <section class="demo-example">
        <h2>Shadows</h2>
        <div class="demo-preview" style="gap: var(--ds-space-8); padding: var(--ds-space-10);">
          ${shadows.map(t => {
            const label = t.name.replace('--ds-shadow-', '');
            return `<div style="text-align: center;">
            <div style="width: 120px; height: 80px; background: var(--ds-color-surface); border-radius: var(--ds-radius-lg); box-shadow: var(${t.name});"></div>
            <div style="font-family: var(--ds-font-mono); font-size: var(--ds-text-xs); color: var(--ds-color-text-tertiary); margin-top: var(--ds-space-3);">shadow-${label}</div>
          </div>`;
          }).join('\n          ')}
        </div>
      </section>

      <section class="demo-example">
        <h2>Durations</h2>
        <div class="demo-preview" style="flex-direction: column; gap: var(--ds-space-4);">
          ${durations.map(t => {
            const label = t.name.replace('--ds-duration-', '');
            return `<div style="display: flex; align-items: center; gap: var(--ds-space-4);">
            <code style="font-family: var(--ds-font-mono); font-size: var(--ds-text-xs); color: var(--ds-color-text-tertiary); min-width: 80px;">${label}</code>
            <span style="font-size: var(--ds-text-sm);">${t.value}</span>
            <div style="width: 40px; height: 40px; background: var(--ds-color-inverted); border-radius: var(--ds-radius-md); transition: transform var(${t.name}) var(--ds-ease-out); cursor: pointer;" onmouseenter="this.style.transform='scale(1.3)'" onmouseleave="this.style.transform='scale(1)'"></div>
          </div>`;
          }).join('\n          ')}
        </div>
      </section>

      <section class="demo-example">
        <h2>Easing Curves</h2>
        <div class="demo-preview" style="flex-direction: column; gap: var(--ds-space-4);">
          ${easings.map(t => {
            const label = t.name.replace('--ds-ease-', '');
            return `<div style="display: flex; align-items: center; gap: var(--ds-space-4);">
            <code style="font-family: var(--ds-font-mono); font-size: var(--ds-text-xs); color: var(--ds-color-text-tertiary); min-width: 100px;">${label}</code>
            <span style="font-size: var(--ds-text-xs); color: var(--ds-color-text-disabled); min-width: 200px;">${t.value}</span>
            <div style="width: 40px; height: 40px; background: var(--ds-color-inverted); border-radius: var(--ds-radius-md); transition: transform var(--ds-duration-slow) var(${t.name}); cursor: pointer;" onmouseenter="this.style.transform='translateX(60px)'" onmouseleave="this.style.transform='translateX(0)'"></div>
          </div>`;
          }).join('\n          ')}
        </div>
      </section>`;
}

const foundationGenerators = {
  colors: generateColorsContent,
  typography: generateTypographyContent,
  spacing: generateSpacingContent,
  effects: generateEffectsContent,
};

// ============================================================================
// Generate component pages
// ============================================================================

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

function buildAPI(component) {
  const rows = [];
  for (const cls of component.classes) {
    rows.push(`<tr><td><code>${cls}</code></td><td>Base component</td></tr>`);
  }
  if (component.elements?.length) {
    for (const el of component.elements) {
      rows.push(`<tr><td><code>${component.classes[0]}${el}</code></td><td>Element</td></tr>`);
    }
  }
  if (component.variants?.length) {
    for (const v of component.variants) {
      rows.push(`<tr><td><code>${component.classes[0]}${v}</code></td><td>Variant</td></tr>`);
    }
  }
  if (component.sizes?.length) {
    for (const s of component.sizes) {
      rows.push(`<tr><td><code>${component.classes[0]}${s}</code></td><td>Size</td></tr>`);
    }
  }
  if (component.modifiers?.length) {
    for (const m of component.modifiers) {
      rows.push(`<tr><td><code>${component.classes[0]}${m}</code></td><td>Modifier</td></tr>`);
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

function buildNavFooter(index) {
  const prev = index > 0 ? allComponents[index - 1] : null;
  const next = index < allComponents.length - 1 ? allComponents[index + 1] : null;
  return `
    <nav class="demo-nav-footer">
      ${prev ? `<a href="${prev.name}.html">&larr; ${prev.title}</a>` : '<span></span>'}
      ${next ? `<a href="${next.name}.html">${next.title} &rarr;</a>` : '<span></span>'}
    </nav>`;
}

let generated = 0;
let skipped = 0;

for (let i = 0; i < allComponents.length; i++) {
  const comp = allComponents[i];
  const outputPath = path.join(COMPONENTS_DIR, `${comp.name}.html`);

  if (fs.existsSync(outputPath)) {
    const existing = fs.readFileSync(outputPath, 'utf-8');
    if (existing.startsWith('<!-- hand-edited -->')) { skipped++; continue; }
  }

  const content = `
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
${buildNavFooter(i)}`;

  fs.writeFileSync(outputPath, pageShell(comp.title, comp.name, '../', '../../dist/designsystem.css', content));
  generated++;
}

console.log(`  Generated ${generated} component pages${skipped ? `, skipped ${skipped} hand-edited` : ''}`);

// ============================================================================
// Generate foundation pages
// ============================================================================

let foundationsGenerated = 0;

for (const page of foundationPages) {
  const outputPath = path.join(FOUNDATIONS_DIR, `${page.name}.html`);

  if (fs.existsSync(outputPath)) {
    const existing = fs.readFileSync(outputPath, 'utf-8');
    if (existing.startsWith('<!-- hand-edited -->')) continue;
  }

  const content = foundationGenerators[page.name]();
  fs.writeFileSync(outputPath, pageShell(page.title, page.name, '../', '../../dist/designsystem.css', content));
  foundationsGenerated++;
}

console.log(`  Generated ${foundationsGenerated} foundation pages`);

// ============================================================================
// Generate homepage
// ============================================================================

const homepageContent = `
      <header>
        <h1>Design System</h1>
        <p>CSS-only design system. ${allComponents.length} components, zero dependencies. Install anywhere, override tokens, nothing breaks.</p>
        <div class="demo-meta">
          <code>npm install @digiko-npm/designsystem</code>
        </div>
      </header>

      <div id="catalog"></div>`;

fs.writeFileSync(path.join(EXAMPLES, 'index.html'), pageShell('Design System', '', '', '../dist/designsystem.css', homepageContent));
console.log('  Generated homepage catalog');
