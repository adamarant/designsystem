#!/usr/bin/env node

/**
 * Generates every copy of the icon geometry from icons.json.
 *
 * The set exists in two places by necessity: React consumers get components
 * from ds-react, and CSS-only consumers copy markup out of the docs. Neither
 * is authored by hand — both come from here, so a re-export (the three marks
 * still at stroke 3, say) is one edit rather than a hunt through fifteen.
 *
 *   node scripts/generate-icons.js           write both targets
 *   node scripts/generate-icons.js --check    exit 1 if either has drifted
 *
 * Targets:
 *   packages/ds-react/src/icons.tsx   — the components, fully generated
 *   components.json                   — inline marks in the HTML examples,
 *                                       matched by their data-icon attribute
 *                                       so the surrounding example is left
 *                                       exactly as its author wrote it
 */

const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const SOURCE = path.join(ROOT, "icons.json");
const TSX = path.join(ROOT, "packages/ds-react/src/icons.tsx");
const MANIFEST = path.join(ROOT, "components.json");

const check = process.argv.includes("--check");
const src = JSON.parse(fs.readFileSync(SOURCE, "utf-8"));
const icons = src.icons;

const GROUP_TITLES = {
  disclosure: "Disclosure and navigation",
  confirm: "Confirm and dismiss",
  status: "Status — variant-determined on Alert, Toast and Result",
  affordance: "Affordances",
  editor: "Editor history",
  chrome: "Theme and chrome",
  unused: "No consumer yet — kept for the Input password reveal",
};

/* ---------------------------------------------------------------- icons.tsx */

const HEAD = `/* ==========================================================================
   Icons — GENERATED, do not edit.
   Source: icons.json · Regenerate: node scripts/generate-icons.js

   The closed starter set. Not a library: these are exactly the marks the
   design system's own components decide for themselves, and the set does not
   grow on request. Anything the *content* decides — a nav item, a stat card, a
   tab — stays a slot the consumer fills with their own icon set.

   Geometry: ${src.spec.source}, style ${src.spec.style}, stroke ${src.spec.stroke}, corner ${src.spec.corner}, on a
   24 viewBox. One grid, one weight, no exceptions. Chevron left/right are the
   down chevron rotated rather than separate drawings, so the four can never
   drift apart — they swap in place in accordions, sort headers and pagination.

   Named Icon* and not *Icon, which is the reflex. The suffix collides with the
   package's own convention that a compound part is also exported flat, so
   \`Search.Icon\` has to be \`SearchIcon\` — and \`SearchIcon\` is obviously the
   magnifier. exports-shape.test.ts enforces that convention and caught it. The
   prefix also reads as a marker during the migration, where a file can hold
   both these and lucide's \`SearchIcon\` at once, and it happens to match how
   Central names them.

   Every icon takes \`size\` (px number or any CSS length, default 24) and
   forwards the rest to the <svg>. Colour comes from \`currentColor\`, so an icon
   inherits whatever text colour its container sets. They are decorative by
   default (\`aria-hidden\`); if a mark is the only content of a control, label
   the control, not the glyph.
   ========================================================================== */

import { forwardRef, type ReactNode, type SVGProps } from "react";

export interface IconProps extends Omit<SVGProps<SVGSVGElement>, "children"> {
  /** Rendered box. A number is px; a string passes through, so
   *  \`size="var(--ds-icon-1)"\` follows the token scale. Default 24. */
  size?: number | string;
}

function createIcon(displayName: string, children: ReactNode) {
  const Icon = forwardRef<SVGSVGElement, IconProps>(function Icon(
    { size = 24, ...rest },
    ref,
  ) {
    return (
      <svg
        ref={ref}
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
        focusable="false"
        {...rest}
      >
        {children}
      </svg>
    );
  });
  Icon.displayName = displayName;
  return Icon;
}
`;

function buildTsx() {
  const parts = [HEAD];
  for (const [group, title] of Object.entries(GROUP_TITLES)) {
    const members = Object.entries(icons).filter(([, i]) => i.group === group);
    if (!members.length) continue;
    parts.push(`\n/* ${"-".repeat(72)}\n   ${title}\n   ${"-".repeat(72)} */\n`);
    for (const [slug, icon] of members) {
      parts.push(
        `/** \`${slug}\` */\nexport const ${icon.export} = createIcon(\n  "${icon.export}",\n  <>\n    ${icon.jsx}\n  </>,\n);\n\n`,
      );
    }
  }
  return parts.join("");
}

/* ----------------------------------------------------------- components.json

   Marks in the examples carry data-icon="<slug>", which is both the anchor for
   regeneration and a readable signal that the markup is not hand-authored. The
   size attribute stays whatever the example set, since a mark in a 32px control
   is not the same size as one in a 48px control. */

const SVG_RE = /<svg\b[^>]*\bdata-icon="([a-z-]+)"[^>]*>[\s\S]*?<\/svg>/g;

function renderSvg(slug, size) {
  const icon = icons[slug];
  if (!icon) throw new Error(`components.json references unknown icon "${slug}"`);
  return (
    `<svg data-icon="${slug}" width="${size}" height="${size}" ` +
    `viewBox="0 0 24 24" fill="none" aria-hidden="true">${icon.html}</svg>`
  );
}

function refreshManifest(raw) {
  return raw.replace(SVG_RE, (match, slug) => {
    const size = (match.match(/\bwidth=\\?"(\d+)\\?"/) || [, "16"])[1];
    // components.json stores HTML inside JSON strings, so quotes arrive escaped
    const escaped = match.includes('\\"');
    const fresh = renderSvg(slug, size);
    return escaped ? fresh.replace(/"/g, '\\"') : fresh;
  });
}

/* --------------------------------------------------------------------- run */

const targets = [
  { file: TSX, next: buildTsx(), label: "packages/ds-react/src/icons.tsx" },
  {
    file: MANIFEST,
    next: refreshManifest(fs.readFileSync(MANIFEST, "utf-8")),
    label: "components.json",
  },
];

let drifted = 0;
for (const { file, next, label } of targets) {
  const current = fs.existsSync(file) ? fs.readFileSync(file, "utf-8") : "";
  if (current === next) {
    console.log(`  ok      ${label}`);
    continue;
  }
  drifted++;
  if (check) {
    console.error(`  DRIFT   ${label} — run: node scripts/generate-icons.js`);
  } else {
    fs.writeFileSync(file, next);
    console.log(`  written ${label}`);
  }
}

const count = Object.keys(icons).length;
if (check && drifted) process.exit(1);
console.log(
  `${count} icons${check ? " checked" : " generated"}` +
    (Object.keys(src.pending || {}).length
      ? ` · ${Object.keys(src.pending).length} still pending a re-export`
      : ""),
);
