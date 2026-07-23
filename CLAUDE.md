# CLAUDE.md — Design System Guidelines

## DS Health → [/Projects/infra/DS_HEALTH.md](/Projects/infra/DS_HEALTH.md)

Metriche, azioni aperte, CONTROLLED MODE rules generali, regole DS per tutti i progetti: centralizzate in DS_HEALTH.md.

## CONTROLLED MODE — Regole Specifiche per il DS Source

Il DS e in fase di consolidamento. Queste regole si aggiungono a quelle generali in DS_HEALTH.md.

### Regola Fondamentale — Backward Compatibility

**Le classi DS pubblicate NON si cancellano e NON si rinominano. Mai.**

Tutti i progetti consumer dipendono da queste classi. Rinominare o rimuovere una classe rompe silenziosamente le UI senza errori in console — il bug peggiore possibile.

Se una classe deve cambiare:
1. **Depreca** — aggiungi commento `/* @deprecated — use .ds-new-name instead */` e mantieni la vecchia classe funzionante
2. **Aggiungi la nuova** — la nuova classe coesiste con la vecchia
3. **Comunica** — documenta in DS_HEALTH.md sezione "Deprecazioni" con deadline di rimozione
4. **Aspetta** — i consumer hanno almeno 2 versioni minor per migrare
5. **Solo dopo** — rimuovi la vecchia classe in una major version

Stesso principio per i token (`--ds-*`): non rinominare, non rimuovere. Aggiungi il nuovo, depreca il vecchio.

### BLOCCATO — Non fare MAI senza approvazione esplicita dell'utente:
- Aggiungere nuovi componenti CSS
- Modificare API di componenti esistenti (classi, modifier, varianti)
- Cambiare valori token in `src/tokens/`
- Aggiungere breaking changes
- Cancellare o rinominare classi/token esistenti
- Pubblicare nuove major/minor version (solo patch per bugfix)

### CONSENTITO senza chiedere:
- Bug fix su componenti esistenti (es. phantom tokens, hardcoded values)
- Migliorare documentazione (ARIA docs, examples, header comments)
- Aggiungere check al `scripts/validate.js`
- Fixare violazioni trovate dal validate (`npm run validate`)
- Migliorare build/tooling/codemod
- Rimuovere codice morto o ridondante (ma MAI classi pubbliche — vedi regola sopra)

### Se pensi di dover aggiungere qualcosa:
1. STOP — non farlo
2. Chiedi all'utente: "Serve davvero un nuovo componente/modifier/token, o posso comporre con quelli esistenti?"
3. Solo l'utente puo sbloccare CONTROLLED MODE per una modifica specifica

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
Full rationale: `infra/ECOSYSTEM_ROADMAP.md` §2 Principle #1.

### 3. Token Reference — Read the Source

**Non mantenere liste di token in questo file.** I token cambiano — la lista qui diventa stale.

Per sapere quali token esistono, leggi direttamente:
- `src/tokens/colors.css` per i colori
- `src/tokens/typography.css` per font size, weight, leading, tracking
- `src/tokens/spacing.css` per spacing, radius, z-index, container
- `src/tokens/shadows.css` per shadow, duration, easing

**Component Heights (size tiers):** Le 4 tier sono stabili:
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

**Non elencare i componenti qui.** Per la lista corrente, leggi `src/components/index.css` (importa tutto) o `components.json` (metadati).

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

- `ds.manifest.json` nella root del progetto traccia versione DS, override strutturali, metriche (NON più la narrativa di sessione)
- A chiusura sessione: `node ~/Projects/generate-manifest.js` rigenera conteggi e `last_session` automaticamente
- **Note**: il campo `last_session_summary` è stato rimosso dallo schema (v2, 12 Apr 2026, sottrazione A). La narrativa vive in `git log` + `DS_HEALTH.md` quando emerge una lezione cross-project
- Per stato ecosistema: `node ~/Projects/ds-registry.js`
- Il manifest va committato in git

---

## End-of-Session Checklist

For DS-wide checklist (CONTROLLED MODE, compliance, build, git) → [DS_HEALTH.md](/Projects/DS_HEALTH.md)

**Questa checklist include commit, push, e publish. Eseguire tutti gli step in ordine.**

### 1. Verifica Codice
- [ ] **No hardcoded values** — grep touched files for hex colors, px spacing, raw font names
- [ ] **BEM naming correct** — `ds-component__element--modifier`
- [ ] **File header present** — every new/modified component file has the header comment
- [ ] **index.css updated** — new components imported in the right tier section
- [ ] **No breaking changes** — existing class names unchanged, no removed selectors
- [ ] **`npm run validate`** — zero errors

### 2. Build
- [ ] `node scripts/build.js` — zero errori, dist/ aggiornato
- [ ] **Light + dark work** — verificare componenti toccati in entrambi i temi

### 3. Commit & Push
- [ ] Commit per modifica logica (non commit unico)
- [ ] `git push origin master`

### 4. Publish (OIDC trusted publishing — nessun token)
- [ ] `npm version patch` (o minor/major) — crea commit + tag `vX.Y.Z`
- [ ] `git push origin master --follow-tags` — il push del tag fa partire la GitHub Action (`.github/workflows/publish.yml`) che builda e pubblica via OIDC, con provenance firmata
- [ ] Verificare run verde (`gh run watch`) e versione live su npm
- [ ] **Workspace** (ds-react/ds-shaders/ds-admin): `npm version patch --workspace=packages/<pkg> --no-git-tag-version` → commit → `git tag ds-<pkg>-vX.Y.Z` → `git push origin master ds-<pkg>-vX.Y.Z`
- Mai `npm publish` locale: pubblica la CI. Setup, schema tag per-package e gotcha in `infra/DEV_CONVENTIONS.md`.

### 5. Living Registry
- [ ] `node ~/Projects/generate-manifest.js` per rigenerare `ds.manifest.json` (aggiorna `last_session` e metriche)
- [ ] `node ~/Projects/ds-registry.js` per verificare stato ecosistema
