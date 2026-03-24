# CLAUDE.md — Design System Guidelines

## Project Overview

CSS-only design system. Zero dependencies. Install anywhere, override tokens, nothing breaks.

**Package:** `@digiko-npm/designsystem`
**Stack:** Pure CSS + CSS Custom Properties
**Build:** `node scripts/build.js` (concatenates all CSS into `dist/designsystem.css`)
**Theme:** Light default, dark via `[data-theme="dark"]`
**Typography:** Clash Display (headings) + Switzer (body) + Geist Mono (code) — overridable

---

## Critical Rules

### 1. No Hardcoding — Tokens Are the Only Truth

**Every value in every component must come from a `--ds-*` token.** If you're typing a literal color, spacing, font, radius, shadow, z-index, duration, or easing — you're doing it wrong.

The token files are the single source of truth:

| Token file | What it defines |
|-----------|-----------------|
| `src/tokens/colors.css` | All colors (bg, surface, text, border, status, accent) per theme |
| `src/tokens/typography.css` | Font families, sizes, weights, line-heights, letter-spacing |
| `src/tokens/spacing.css` | Spacing scale, container sizes, border-radius, z-index |
| `src/tokens/shadows.css` | Focus ring, transitions, easing, opacity |

#### Absolute Prohibitions

```css
/* FORBIDDEN — Hardcoded color */
color: #52525b;
background-color: rgba(0, 0, 0, 0.5);
border-color: rgb(39, 39, 42);

/* REQUIRED — Token reference */
color: var(--ds-color-text-secondary);
background-color: var(--ds-color-overlay);
border-color: var(--ds-color-border);

/* FORBIDDEN — Hardcoded spacing */
padding: 12px 20px;
gap: 8px;
margin-bottom: 24px;

/* REQUIRED — Spacing tokens */
padding: var(--ds-space-3) var(--ds-space-5);
gap: var(--ds-space-2);
margin-bottom: var(--ds-space-6);

/* FORBIDDEN — Hardcoded typography */
font-family: "Inter", sans-serif;
font-size: 14px;
font-weight: 500;

/* REQUIRED — Typography tokens */
font-family: var(--ds-font-sans);
font-size: var(--ds-text-sm);
font-weight: var(--ds-weight-medium);

/* FORBIDDEN — Hardcoded radius/shadow/timing */
border-radius: 12px;
box-shadow: 0 4px 12px rgba(0,0,0,0.1);
transition: all 200ms ease;

/* REQUIRED — Effect tokens */
border-radius: var(--ds-radius-lg);
box-shadow: var(--ds-shadow-md);
transition: all var(--ds-duration-normal) var(--ds-ease-default);
```

**Only acceptable hardcoded values:** structural geometry that can't be tokenized (`2px` border on toggle thumb, `::after` arrow borders, `100%`, `50%`, `0`, `1fr`, `none`, `auto`).

### 2. Component Authoring — The Contract

Every component file must follow this exact pattern:

**Naming:** `ds-` prefix, BEM structure
```
.ds-component                 /* Block */
.ds-component__element        /* Element */
.ds-component--modifier       /* Modifier */
```

**File header:**
```css
/* ==========================================================================
   Component: ComponentName
   Brief one-line description.
   ========================================================================== */
```

**State patterns:**
```css
.ds-component:hover { }
.ds-component:focus-visible { }
.ds-component:disabled,
.ds-component[aria-disabled="true"] { }
.ds-component[aria-checked="true"] { }
.ds-component--open { }
.ds-component--active { }
```

**Size variants:** `--xs`, `--sm`, `--md` (default, no class needed), `--lg`
**Semantic variants:** `--success`, `--warning`, `--error`, `--info`
**Visual variants:** `--outline`, `--ghost`, `--compact`, `--flush`

### 3. Available Token Reference

Before writing any value, check if a token exists:

**Colors** — `var(--ds-color-*)`
```
bg, bg-subtle, bg-muted, bg-elevated
surface, surface-hover, surface-active
text, text-secondary, text-tertiary, text-disabled
inverted, on-inverted
border, border-hover, border-active, border-subtle
interactive, interactive-hover
overlay, overlay-subtle, overlay-hover, overlay-active
nav-bg, nav-border
selection-bg, selection-text
success, success-subtle, success-border
warning, warning-subtle, warning-border
error, error-subtle, error-border
info, info-subtle, info-border
accent-blue, accent-purple, accent-green, accent-orange (+ -subtle variants)
```

**Spacing** — `var(--ds-space-*)`
```
0, 0-5, 1, 1-5, 2, 2-5, 3, 4, 5, 6, 8, 10, 12, 16, 20, 24, 32
```

**Component Heights** — `var(--ds-size-*)`
```
1: 1.5rem (24px) — xs: btn--xs, input--xs
2: 2rem  (32px) — sm: btn--sm, input--sm
3: 2.5rem (40px) — md: btn, input (default)
4: 3rem  (48px) — lg: btn--lg, input--lg
```
Inline components at the same size tier MUST share the same height.
Button XS + Input XS = both 24px. Always.
Applied via explicit `height` + flexbox centering (not via padding math).
Textarea is exempt (multi-line, uses `height: auto`).

**Typography** — `var(--ds-text-*)`, `var(--ds-weight-*)`, `var(--ds-leading-*)`, `var(--ds-tracking-*)`
```
text: 2xs, xs, sm, base, lg, xl, 2xl, 3xl, 4xl, 5xl, 6xl, 7xl
weight: light, normal, medium, semibold, bold
leading: none, tight, snug, normal, relaxed, loose
tracking: tighter, tight, normal, wide
font: display, sans, mono
```

**Radius** — `var(--ds-radius-*)`
```
none, sm, md, lg, xl, 2xl, full
```

**Shadows** — `var(--ds-shadow-*)`
```
sm, md, lg (defined per-theme in colors.css)
```

**Z-Index** — `var(--ds-z-*)`
```
base: 0, dropdown: 50, sticky: 60, overlay: 80, modal: 100, toast: 150, tooltip: 200
```

**Transitions** — `var(--ds-duration-*)`, `var(--ds-ease-*)`
```
duration: fast (100ms), normal (200ms), slow (400ms), slower (800ms)
ease: default, out, out-expo, bounce
```

### 4. Light/Dark Mode — Automatic

Colors are defined per-theme in `tokens/colors.css`. Components never need `@media (prefers-color-scheme)` or `.dark` classes — they just use tokens and both themes work automatically.

Theme switching is via `data-theme` attribute on `<html>`:
```html
<html data-theme="light">  <!-- or "dark" -->
```

### 5. Adding a New Component

1. Create `src/components/component-name.css` (with header comment in detailed format — see `accordion.css`)
2. Add `@import './component-name.css';` to `src/components/index.css` (in the right tier section)
3. Add entry to `components.json` with classes, variants, sizes, modifiers, and HTML examples
4. Run `npm run build` — auto-updates exports map, validates manifest, builds CSS + minified
5. Run `npm run docs` — generates the component demo page at `examples/components/component-name.html`
6. Verify at `localhost:3000` with `npm run dev`

### 6. Code Integrity

Don't remove or modify existing components without explicit confirmation. Other projects depend on every class name.

---

## Architecture

```
src/
├── index.css                  # Entry point — imports all layers
├── tokens/
│   ├── index.css              # Imports all token files
│   ├── colors.css             # Light + dark color tokens
│   ├── typography.css         # Font families, sizes, weights, line-heights
│   ├── spacing.css            # Spacing scale, containers, radius, z-index
│   └── shadows.css            # Focus ring, transitions, easing, opacity
├── base/
│   ├── index.css              # Imports reset + typography
│   ├── reset.css              # Modern CSS reset
│   └── typography.css         # Heading hierarchy, prose, overline, hero
├── components/
│   ├── index.css              # Imports all 28 components
│   │
│   │  # Core (8)
│   ├── button.css             # ds-btn, variants, sizes, groups, loading, pill
│   ├── card.css               # ds-card, interactive, elevated, stat-card
│   ├── input.css              # ds-input, textarea, select, label, checkbox, radio
│   ├── badge.css              # ds-badge, semantic colors, dot, outline, upper
│   ├── nav.css                # ds-nav, sidebar, mobile nav, glass effect
│   ├── modal.css              # ds-modal, backdrop blur, size variants
│   ├── toast.css              # ds-toast, positions, enter/exit animations
│   ├── table.css              # ds-table, compact, wrapper
│   │
│   │  # Tier 1 — Essential (8)
│   ├── tabs.css               # ds-tabs, pills, vertical, full-width
│   ├── alert.css              # ds-alert, info/success/warning/error, banner
│   ├── divider.css            # ds-divider, vertical, subtle, label
│   ├── dropdown.css           # ds-dropdown, menu items, dividers, headers
│   ├── tooltip.css            # ds-tooltip, 4 directions, CSS-only arrows
│   ├── avatar.css             # ds-avatar, sizes, groups, status indicators
│   ├── skeleton.css           # ds-skeleton, text/heading/circle/card/btn/input
│   ├── empty-state.css        # ds-empty-state, icon/title/description/actions
│   │
│   │  # Tier 2 — Common (7)
│   ├── toggle.css             # ds-toggle, switch with thumb, sizes, label
│   ├── breadcrumb.css         # ds-breadcrumb, links, current, separator
│   ├── pagination.css         # ds-pagination, items, prev/next, ellipsis
│   ├── tag.css                # ds-tag, removable, semantic colors, sizes
│   ├── accordion.css          # ds-accordion, trigger/content, flush, separated
│   ├── drawer.css             # ds-drawer, right/left/bottom, sizes
│   ├── progress.css           # ds-progress bar + ds-steps indicator
│   │
│   │  # Tier 3 — Advanced (5)
│   ├── popover.css            # ds-popover, 4 directions, size variants
│   ├── slider.css             # ds-slider, custom range input, labels
│   ├── timeline.css           # ds-timeline, vertical dots, states
│   ├── kbd.css                # ds-kbd, 3D key effect, combos
│   └── command.css            # ds-command, cmd+k search overlay
├── utilities/
│   ├── index.css              # Imports all utility files
│   ├── layout.css             # Container, flex, grid, gap, display, position
│   ├── text.css               # Text size/weight/color, bg, border, radius, shadow, animations
│   └── spacing.css            # Padding + margin utilities
├── js/
│   └── theme.js               # Light/dark toggle with localStorage
├── dist/
│   ├── designsystem.css       # Compiled bundle (all-in-one)
│   └── designsystem.js        # Theme manager
└── examples/
    └── index.html             # Live demo of all components
```

---

## How Consuming Projects Should Use This

### Installation

```bash
npm install @digiko-npm/designsystem

# Import in CSS (all-in-one)
@import '@digiko-npm/designsystem';

# Or import individual layers
@import '@digiko-npm/designsystem/tokens';
@import '@digiko-npm/designsystem/components';

# Or cherry-pick single components (tokens + base required)
@import '@digiko-npm/designsystem/tokens';
@import '@digiko-npm/designsystem/base';
@import '@digiko-npm/designsystem/components/button';
@import '@digiko-npm/designsystem/components/card';

# Minified bundle
@import '@digiko-npm/designsystem/min';
```

### Component-First Hierarchy (CRITICAL)

Components are **self-contained and fully styled by default**. This is the correct priority order:

**1. Use DS components first** — they work out of the box, no extra classes needed:
```html
<input class="ds-input" />                    <!-- fully styled -->
<button class="ds-btn">Save</button>          <!-- fully styled -->
<div class="ds-card"><div class="ds-card__body">Content</div></div>
```

**2. Use BEM modifiers for variants** — size, state, visual style:
```html
<input class="ds-input ds-input--lg" />
<input class="ds-input ds-input--error" />
<button class="ds-btn ds-btn--secondary ds-btn--sm">Cancel</button>
```

**3. Use utilities ONLY for layout composition** — arranging components within a container:
```html
<div class="ds-flex ds-gap-4">
  <input class="ds-input" />
  <button class="ds-btn">Search</button>
</div>
```

### Anti-Patterns — Do NOT Do This

```html
<!-- WRONG: Using utilities to style what a component already handles -->
<input class="ds-bg-surface ds-border ds-rounded-xl ds-p-4 ds-text-sm" />

<!-- RIGHT: The component handles all of that -->
<input class="ds-input" />

<!-- WRONG: Utility soup to build a card -->
<div class="ds-bg-surface ds-border ds-rounded-xl ds-p-6 ds-shadow-md">

<!-- RIGHT: Use the component -->
<div class="ds-card"><div class="ds-card__body">

<!-- WRONG: Mixing utilities that duplicate component styles -->
<button class="ds-btn ds-bg-surface ds-border ds-rounded-lg ds-p-3">

<!-- RIGHT: Use the modifier -->
<button class="ds-btn ds-btn--secondary">
```

**Rule of thumb:** If you're adding more than 2-3 utility classes to a single element, check if a DS component already does what you need. Utilities are for **layout** (flex, grid, gap, margin between sections), not for **styling** individual elements.

**Use DS size tiers for alignment.** When mixing elements (icons, text, buttons, inputs, etc.) in a flex row, use the same size tier (`--ds-size-1` through `--ds-size-4`) to ensure consistent heights. Don't reinvent heights with padding math.

### Token Overrides

**Override any token** in the consuming project's CSS:
```css
:root {
  --ds-font-display: "Inter", sans-serif;
  --ds-radius-xl: 24px;
  --ds-container-max: 1400px;
  --ds-color-inverted: #2563eb;  /* blue primary buttons */
}
```

### Project-Specific CSS

Each consuming project may need CSS classes the DS doesn't cover (e.g., a hero overlay, admin sidebar, page-specific patterns). These should:
- Live in `src/styles/components.css`
- Use a **project-specific prefix** (NOT `cx-*` — that prefix is local to the riccardo/CORTEX project)
- Reference `--ds-*` tokens for all values (no hardcoded colors/spacing)

**No `@layer` declarations:** This DS intentionally emits flat (unlayered) CSS. Consuming projects wrap the import in their own layer (e.g., `@import "designsystem" layer(ds)`), keeping full control over layer priority without nested-layer complexity.

---

## Quick Reference

```
Build:          node scripts/build.js
Watch:          node scripts/build.js --watch
Source:         src/
Compiled:       dist/designsystem.css
Components:     src/components/ (28 files)
Tokens:         src/tokens/ (4 files)
Examples:       examples/index.html (open in browser)
```

## End-of-Session Checklist

After every modification session, run through this before closing:

### Code Quality
- [ ] **No utility soup** — if an element has 3+ `ds-*` utility classes, check if a DS component (`ds-input`, `ds-card`, `ds-btn`, etc.) already covers it. Utilities are for layout, not styling.
- [ ] **No hardcoded values** — grep all touched files for hex colors (`#`), `px` values in spacing/font-size, raw font names, hardcoded rgba. Every value must be a `--ds-*` token.
- [ ] **BEM naming correct** — all new classes follow `ds-component__element--modifier`. No typos, no camelCase, no missing prefix.
- [ ] **File header present** — every new/modified component file has the `/* === Component: Name ... === */` comment block.
- [ ] **index.css updated** — new components are imported in `src/components/index.css`, in the right tier section.
- [ ] **No breaking changes** — existing class names unchanged. No removed selectors. No renamed tokens.

### Build & Verify
- [ ] **Build passes** — run `node scripts/build.js` and confirm no warnings. Check output size is reasonable.
- [ ] **dist committed** — `dist/designsystem.css` is rebuilt and included in the commit.
- [ ] **Light + dark work** — visually verify new components render correctly in both themes (open `examples/index.html`, toggle theme).
- [ ] **examples/index.html updated** — if a new component was added, it has a usage example in the demo page.

### Git & Publish
- [ ] **Commit per component** — each new component gets its own `feat:` commit. Index + dist get a separate `chore:` commit at the end.
- [ ] **Bump version** — if publishing to npm, update `version` in `package.json` following semver (patch for fixes, minor for new components, major for breaking changes).
- [ ] **README up to date** — if new components or features were added, update `README.md` (this is the npm package page).
- [ ] **Push to origin** — `git push origin master`.
- [ ] **Publish to npm** — `npm publish --access public`. Requires a valid granular access token with "Bypass 2FA" and "Read and write" permissions (create at npmjs.com > Settings > Access Tokens).

### npm Publishing Quick Reference

```bash
# Build, bump, publish
node scripts/build.js
npm version patch          # or minor / major
npm publish --access public

# If token expired, generate a new one at:
# https://www.npmjs.com/settings/digiko-npm/tokens
# Then: npm config set //registry.npmjs.org/:_authToken <token>
```

### Quick one-liners to catch violations

```bash
# Find hardcoded colors in component files
grep -rn '#[0-9a-fA-F]\{3,8\}' src/components/ --include="*.css" | grep -v '/\*'

# Find hardcoded px spacing (ignore 0px, 1px, 2px structural)
grep -rn '[3-9]px\|[0-9][0-9]px' src/components/ --include="*.css" | grep -v '/\*'

# Find missing ds- prefix
grep -rn '^\.' src/components/ --include="*.css" | grep -v '\.ds-' | grep -v '/\*' | grep -v '::' | grep -v '@'
```

---

## Commit Convention

```
feat: Add new feature       fix: Bug fix
style: Styling changes      refactor: Code refactoring
docs: Documentation         chore: Build, deps, config
```
