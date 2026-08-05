# CLAUDE.md — Design System Guidelines

## DS Health → [/Projects/infra/DS_HEALTH.md](/Projects/infra/DS_HEALTH.md)

Metrics, open actions, general CONTROLLED MODE rules, DS rules for every project: all centralised in DS_HEALTH.md.

## CONTROLLED MODE — Rules Specific to the DS Source

The DS is in a consolidation phase. These rules are additional to the general ones in DS_HEALTH.md.

### The Fundamental Rule — Backward Compatibility

**Published DS classes are NEVER deleted and NEVER renamed. Ever.**

Every consumer project depends on these classes. Renaming or removing one breaks UIs silently, with no console error — the worst kind of bug there is.

If a class has to change:
1. **Deprecate** — add a `/* @deprecated — use .ds-new-name instead */` comment and keep the old class working
2. **Add the new one** — the new class coexists with the old one
3. **Announce** — document it in the DS_HEALTH.md "Deprecations" section with a removal deadline
4. **Wait** — consumers get at least 2 minor versions to migrate
5. **Only then** — remove the old class, in a major version

Same principle for tokens (`--ds-*`): never rename, never remove. Add the new one, deprecate the old one.

### BLOCKED — NEVER do these without the user's explicit approval:
- Adding new CSS components
- Changing the API of existing components (classes, modifiers, variants)
- Changing token values in `src/tokens/`
- Introducing breaking changes
- Deleting or renaming existing classes/tokens
- Publishing new major/minor versions (patch only, for bugfixes)

### ALLOWED without asking:
- Bug fixes on existing components (e.g. phantom tokens, hardcoded values)
- Improving documentation (ARIA docs, examples, header comments)
- Adding checks to `scripts/validate.js`
- Fixing violations reported by the validator (`npm run validate`)
- Improving build/tooling/codemods
- Removing dead or redundant code (but NEVER public classes — see the rule above)

### If you think you need to add something:
1. STOP — don't
2. Ask the user: "Do we genuinely need a new component/modifier/token, or can I compose it from what exists?"
3. Only the user can unlock CONTROLLED MODE for a specific change

---

## Project Overview

CSS-only design system. Zero dependencies. Install anywhere, override tokens, nothing breaks.

**Package:** `@adamarant/designsystem`
**Stack:** Pure CSS + CSS Custom Properties
**Build:** `node scripts/build.js` (concatenates all CSS into `dist/designsystem.css`)
**Validate:** `node scripts/validate.js` (automated checks — run before every publish)
**Theme:** Light default, dark via `[data-theme="dark"]`

---

## Critical Rules

### 1. No Hardcoding — Tokens Are the Only Truth

**Every value in every component must come from a `--ds-*` token.** If you're typing a literal color, spacing, font, radius, shadow, z-index, duration, or easing — you're doing it wrong.

**Where to find tokens:** Read the source files directly — they are the single source of truth:
- `src/tokens/colors.css` — All colors per theme
- `src/tokens/typography.css` — Font families, sizes, weights, line-heights
- `src/tokens/spacing.css` — Spacing scale, containers, radius, z-index
- `src/tokens/shadows.css` — Focus ring, transitions, easing, opacity

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

### 2b. API Shape — one per component, chosen by nature

When you build the ds-react wrapper for a component, it gets **exactly one**
API. Two axes, never confused:

- **Look** (colour, font, radius, density, dark) → **always tokens**, never
  structure. It's the only brand-customization channel.
- **Structure** (what goes where) → one API, decided by the component's form:
  - **Closed / opinionated** (a canonical shape, you only vary the data) →
    **data-driven props**. Footer, nav items, field lists, breadcrumb.
    Compound here is a fork = drift across consumers.
  - **Open / compositional** (composition *is* the point, you can't enumerate
    it as data) → **compound parts**. Card, Modal, Table, Accordion.
    Data-driven here is a prop explosion that still can't express it.

The sin is not the choice — it's offering **both** for the same component.
Full rationale in the commit that introduced the rule; `ECOSYSTEM_ROADMAP.md` was deleted on 28 Jul 2026.

### 3. Token Reference — Read the Source

**Do not keep token lists in this file.** Tokens change — a list here goes stale.

To find out which tokens exist, read the source directly:
- `src/tokens/colors.css` for colours
- `src/tokens/typography.css` for font size, weight, leading, tracking
- `src/tokens/spacing.css` for spacing, radius, z-index, container
- `src/tokens/shadows.css` for shadow, duration, easing

**Component Heights (size tiers):** the 4 tiers are stable:
- `--ds-size-1`: 1.5rem (24px) — tier xs
- `--ds-size-2`: 2rem (32px) — tier sm
- `--ds-size-3`: 2.5rem (40px) — tier md (default)
- `--ds-size-4`: 3rem (48px) — tier lg

Inline components at the same size tier MUST share the same height.

### 4. Light/Dark Mode — Automatic

Colors are defined per-theme in `tokens/colors.css`. Components never need `@media (prefers-color-scheme)` or `.dark` classes — they just use tokens and both themes work automatically.

Theme switching is via `data-theme` attribute on `<html>`:
```html
<html data-theme="light">  <!-- or "dark" -->
```

### 5. Adding a New Component

1. Create `src/components/component-name.css` (with header comment — see `accordion.css` for format)
2. Add `@import './component-name.css';` to `src/components/index.css` (in the right tier section)
3. Add entry to `components.json` with classes, variants, sizes, modifiers, and HTML examples
4. Run `npm run build` — auto-updates exports map, validates manifest, builds CSS + minified
5. Run `npm run docs` — generates the component demo page
6. Verify at `localhost:3000` with `npm run dev`

### 6. Code Integrity

Don't remove or modify existing components without explicit confirmation. Other projects depend on every class name.

### 7. CSS Layers — `@layer tokens, base, components, utilities`

The DS uses CSS `@layer` for cascade control. The layer order is: `tokens -> base -> components -> utilities`. The build script preserves this structure in the dist bundle. All new code must respect the existing layer assignments.

### 8. Logical Properties — No Physical Direction

All new components MUST use logical properties:
- `padding-inline` / `padding-block` (not `padding-left/right/top/bottom`)
- `margin-inline` / `margin-block` (not `margin-left/right/top/bottom`)
- `inset-inline-start/end` / `inset-block-start/end` (not `left/right/top/bottom`)
- `border-inline-start/end` / `border-block-start/end` (not `border-left/right/top/bottom`)
- `text-align: start/end` (not `text-align: left/right`)

**Exceptions:** `transform: translateX/Y`, CSS arrow triangles (tooltip borders), spinner `border-top-color`, and divider `border-top/bottom` (intentionally physical).

---

## Architecture

**Do not list the components here.** For the current list, read `src/components/index.css` (it imports everything) or `components.json` (metadata).

```
src/
├── index.css                  # Entry point — imports all layers
├── tokens/                    # CSS custom properties (colors, typography, spacing, shadows)
├── base/                      # CSS reset + typography hierarchy
├── components/                # All DS components (see index.css for current list)
│   └── index.css              # Imports all components, organized by category
├── utilities/                 # Layout, text, spacing, sizing, state utilities
│   └── index.css              # Imports all utility files
├── js/
│   └── theme.js               # Light/dark toggle with localStorage
├── dist/
│   ├── designsystem.css       # Compiled bundle (all-in-one)
│   └── designsystem.js        # Theme manager
└── examples/                  # Generated demo pages (npm run docs)
```

### 9. Accessibility (WCAG 2.2 AA)

**Target Sizes:** All interactive components meet the WCAG 2.5.8 minimum of 24x24 CSS pixels via explicit `min-width`/`min-height: 1.5rem`.

**Focus Not Obscured:** All focusable components include `scroll-margin-block` on `:focus-visible`.

**Color Contrast:**
- `--ds-color-text` (primary) and `--ds-color-text-secondary` both pass WCAG AAA in both themes — but **AAA-pass is not a licence to use secondary as the default text colour.** See "Text Colour Hierarchy" (§10) below: primary is the default for body and content; secondary is reserved for the subordinate member of a pair.
- `--ds-color-text-tertiary` does NOT meet 4.5:1 — use only for decorative/supplementary text
- `--ds-color-text-disabled` is exempt per WCAG 1.4.3

**ARIA Reference:** Every component CSS file includes an ARIA requirements block in its header comment. Check the component file header for the exact attributes needed.

**Motion:** Components with animations include `@media (prefers-reduced-motion: reduce)` blocks.

---

### 10. Text Colour Hierarchy

**Primary is the default text colour. Secondary is the exception, never the rule.**

A surface whose text is mostly secondary reads as washed-out and loses concreteness. This is the single most common way DS-built pages go flat, so the law is explicit:

- **Body, content, labels, values, list items, card body, the active nav item → `--ds-color-text` (primary)**, or no colour class at all (text inherits primary from `body`). When in doubt, primary.
- **`--ds-color-text-secondary` is only for a genuinely subordinate sibling sitting next to a primary element in the same group** — a description under a primary title, a caption under a value. It is the *lesser of a pair*; it must always have a primary companion nearby. Secondary alone, with nothing primary above it, is the wrong colour.
- **Secondary must never be the dominant text colour of a surface.** If you are reaching for secondary on most elements of a card, section, or page, the correct colour is primary.
- **`--ds-color-text-tertiary`** is decorative/supplementary only (timestamps, counts, copyright) and does not meet 4.5:1 — never for content.
- **Icons follow the same law.** An icon that carries meaning is foreground/primary, not secondary. Secondary icons only when paired with, and subordinate to, a primary element.
- **Menus / nav are the one place an all-secondary block is correct** — inactive items in secondary, the active item in primary. But express that with the nav component's own state classes (`.ds-nav__item` active state, `--ds-color-surface-active`), not by hand-stacking `ds-text-secondary` / `ds-text-primary`. Footers are the same low-emphasis exception.

The reflex "this is sub-text, so secondary" over-generalises into "most text is secondary." Resist it: sub-text means *subordinate within a pair*, not *any text that isn't a heading*.

---

## How Consuming Projects Should Use This

### Installation

```bash
npm install @adamarant/designsystem

# Import in CSS (all-in-one)
@import '@adamarant/designsystem';

# Or with layer control
@import '@adamarant/designsystem' layer(ds);
```

### Component-First Hierarchy (CRITICAL)

Components are **self-contained and fully styled by default**. Priority order:

1. **DS components first** — they work out of the box
2. **BEM modifiers for variants** — size, state, visual style
3. **Utilities ONLY for layout** — arranging components in flex/grid containers

**Rule of thumb:** If you're adding more than 2-3 utility classes to a single element, check if a DS component already does what you need. Utilities are for **layout**, not for **styling** individual elements.

### Token Overrides

Override any token in the consuming project's CSS:
```css
:root {
  --ds-font-display: "Inter", sans-serif;
  --ds-radius-xl: 24px;
}
```

### Project-Specific CSS

- Live in `src/styles/components.css`
- Use **unprefixed BEM** (NOT `ds-` prefix — that's reserved for the DS)
- Reference `--ds-*` tokens for all values
- Wrap the DS import in a layer: `@import "designsystem" layer(ds)`

---

## Quick Reference

```
Build:          node scripts/build.js
Watch:          node scripts/build.js --watch
Validate:       node scripts/validate.js
Docs:           node scripts/generate-docs.js
Source:         src/
Compiled:       dist/designsystem.css
```

### Living Registry

- `ds.manifest.json` in the project root tracks the DS version, structural overrides and metrics (no longer the session narrative)
- At session close: `node ~/Projects/infra/scripts/generate-manifest.js` regenerates the counts and `last_session` automatically
- **Note**: the `last_session_summary` field was removed from the schema (v2, 12 Apr 2026, subtraction A). The narrative lives in `git log` + `DS_HEALTH.md` when a cross-project lesson emerges
- For ecosystem status: `node ~/Projects/ds-ops/scripts/ds-registry.js`
- The manifest is committed to git

---

## End-of-Session Checklist

For DS-wide checklist (CONTROLLED MODE, compliance, build, git) → [DS_HEALTH.md](/Projects/infra/DS_HEALTH.md)

**This checklist covers commit, push and publish. Run every step, in order.**

### 1. Code Check
- [ ] **No hardcoded values** — grep touched files for hex colors, px spacing, raw font names
- [ ] **BEM naming correct** — `ds-component__element--modifier`
- [ ] **File header present** — every new/modified component file has the header comment
- [ ] **index.css updated** — new components imported in the right tier section
- [ ] **No breaking changes** — existing class names unchanged, no removed selectors
- [ ] **`npm run validate`** — zero errors

### 2. Build
- [ ] `node scripts/build.js` — zero errors, dist/ up to date
- [ ] **Light + dark work** — check the components you touched in both themes

### 3. Commit & Push
- [ ] One commit per logical change (not a single lump commit)
- [ ] `git push origin master`

### 4. Publish (OIDC trusted publishing — no tokens)
- [ ] **Write the `MIGRATION-GUIDE.md` section for the new version, first.**
      `npm version` runs `scripts/check-migration-guide.js` and refuses to bump
      without it — a stub heading does not pass either. The shape and the rule
      are at the top of the guide. A release with nothing consumer-visible
      still gets a section saying exactly that.
- [ ] `npm version patch` (or minor/major) — creates the commit + the `vX.Y.Z` tag
- [ ] `git push origin master --follow-tags` — pushing the tag starts the GitHub Action (`.github/workflows/publish.yml`), which builds and publishes over OIDC with signed provenance
- [ ] Check the run is green (`gh run watch`) and the version is live on npm
- [ ] **Workspaces** (ds-react/ds-shaders/ds-admin): `npm version patch --workspace=packages/<pkg> --no-git-tag-version` → commit → `git tag ds-<pkg>-vX.Y.Z` → `git push origin master ds-<pkg>-vX.Y.Z`
- Never `npm publish` locally: CI publishes. Setup, the per-package tag scheme and the gotchas are in `infra/DEV_CONVENTIONS.md`.

### 5. Living Registry
- [ ] `node ~/Projects/infra/scripts/generate-manifest.js` to regenerate `ds.manifest.json` (updates `last_session` and the metrics)
- [ ] `node ~/Projects/ds-ops/scripts/ds-registry.js` to check ecosystem status
