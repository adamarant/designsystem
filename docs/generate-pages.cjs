#!/usr/bin/env node

/**
 * Generates React demo pages from components.json.
 * Outputs to src/app/components/[name]/page.tsx
 */

const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const DOCS = __dirname;
const manifest = JSON.parse(fs.readFileSync(path.join(ROOT, "components.json"), "utf-8"));

const COMPONENTS_DIR = path.join(DOCS, "src/app/components");
const REACT_EXAMPLES_DIR = path.join(DOCS, "react-examples");

// Load React code examples for components that have ds-react wrappers
function loadReactExamples(name) {
  const file = path.join(REACT_EXAMPLES_DIR, name + ".json");
  if (fs.existsSync(file)) {
    return JSON.parse(fs.readFileSync(file, "utf-8"));
  }
  return null;
}

function escapeJsx(str) {
  return str.replace(/`/g, "\\`").replace(/\$/g, "\\$");
}

function escapeHtml(str) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

function escapeJsxText(str) {
  return str.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/{/g, "&#123;").replace(/}/g, "&#125;");
}

// Build API table rows from component metadata
function buildApiRows(comp) {
  const rows = [];
  comp.classes.forEach(c => rows.push({ name: c, type: "Base" }));
  (comp.elements || []).forEach(e => rows.push({ name: e, type: "Element" }));
  (comp.variants || []).forEach(v => rows.push({ name: v, type: "Variant" }));
  (comp.sizes || []).forEach(s => rows.push({ name: s, type: "Size" }));
  (comp.modifiers || []).forEach(m => rows.push({ name: m, type: "Modifier" }));
  return rows;
}

// Generate page for one component
function generatePage(comp) {
  const apiRows = buildApiRows(comp);
  const reactExamples = loadReactExamples(comp.name);

  const exampleSections = comp.examples.map((ex, i) => {
    // Use React code in View Code if available for this example
    const reactEx = reactExamples && reactExamples[i];
    const codeToShow = reactEx ? escapeHtml(reactEx.code) : escapeHtml(ex.html);
    const codeLabel = reactEx ? "View React Code" : "View Code";

    return `
      <section className="demo-section">
        <h2 className="demo-section__title">${escapeJsxText(reactEx ? reactEx.title : ex.title)}</h2>
        <div className="demo-preview" dangerouslySetInnerHTML={{ __html: \`${escapeJsx(ex.html)}\` }} />
        <details className="demo-code">
          <summary>${codeLabel}</summary>
          <pre><code dangerouslySetInnerHTML={{ __html: \`${escapeJsx(codeToShow)}\` }} /></pre>
        </details>
      </section>`;
  }).join("\n");

  const apiTable = apiRows.length > 0 ? `
      <section className="demo-section">
        <h2 className="demo-section__title">API Reference</h2>
        <div className="ds-table-wrapper">
          <table className="ds-table ds-table--compact">
            <thead>
              <tr>
                <th>Class</th>
                <th>Type</th>
              </tr>
            </thead>
            <tbody>
${apiRows.map(r => `              <tr>
                <td><code>${r.name}</code></td>
                <td>${r.type}</td>
              </tr>`).join("\n")}
            </tbody>
          </table>
        </div>
      </section>` : "";

  return `export default function ${toPascal(comp.name)}Page() {
  return (
    <>
      <div className="demo-page-header">
        <h1>${escapeJsxText(comp.title)}</h1>
        <p>${escapeJsxText(comp.description)}</p>
      </div>
${exampleSections}
${apiTable}
    </>
  );
}
`;
}

function toPascal(str) {
  return str.split("-").map(s => s.charAt(0).toUpperCase() + s.slice(1)).join("");
}

// Generate sidebar nav data
function generateSidebarData() {
  const groups = {};
  manifest.categories.forEach(cat => {
    groups[cat.id] = { label: cat.label, items: [] };
  });
  manifest.components.forEach(comp => {
    if (groups[comp.category]) {
      groups[comp.category].items.push({ name: comp.title, href: `/components/${comp.name}` });
    }
  });
  return groups;
}

// --- Generate all pages ---

let generated = 0;

manifest.components.forEach(comp => {
  const dir = path.join(COMPONENTS_DIR, comp.name);
  fs.mkdirSync(dir, { recursive: true });
  const content = generatePage(comp);
  fs.writeFileSync(path.join(dir, "page.tsx"), content);
  generated++;
});

// --- Generate sidebar data ---
const sidebarData = generateSidebarData();
const foundations = {
  label: "Foundations",
  items: [
    { name: "Colors", href: "/foundations/colors" },
    { name: "Typography", href: "/foundations/typography" },
    { name: "Spacing", href: "/foundations/spacing" },
    { name: "Effects", href: "/foundations/effects" },
  ]
};
// Category display order — essential UI first
const CATEGORY_ORDER = ["action", "form", "layout", "data-display", "navigation", "feedback", "overlay"];
const orderedGroups = CATEGORY_ORDER
  .map(id => sidebarData[id])
  .filter(Boolean);

const allNav = [foundations, ...orderedGroups];
const sidebarContent = `// Auto-generated from components.json — do not edit manually
export const NAV = ${JSON.stringify(allNav, null, 2)};
`;
fs.writeFileSync(path.join(DOCS, "src/components/nav-data.ts"), sidebarContent);

// --- Generate components index ---
const indexItems = manifest.components.map(c => ({
  name: c.title,
  href: `/components/${c.name}`,
  cat: manifest.categories.find(cat => cat.id === c.category)?.label || c.category,
  description: c.description,
}));

const indexContent = `"use client";

import Link from "next/link";

const COMPONENTS = ${JSON.stringify(indexItems, null, 2)};

export default function ComponentsIndex() {
  return (
    <>
      <div className="demo-page-header">
        <h1>Components</h1>
        <p>All ${manifest.components.length} components in the design system.</p>
      </div>
      <div className="demo-preview demo-preview--col">
        {COMPONENTS.map((c) => (
          <Link
            key={c.href}
            href={c.href}
            className="demo-component-link"
            style={{ textDecoration: "none" }}
          >
            <span className="demo-component-link__name">{c.name}</span>
            <span className="demo-component-link__cat">{c.cat}</span>
          </Link>
        ))}
      </div>
    </>
  );
}
`;
fs.writeFileSync(path.join(COMPONENTS_DIR, "page.tsx"), indexContent);

console.log("Generated " + generated + " component pages + index + sidebar data");
