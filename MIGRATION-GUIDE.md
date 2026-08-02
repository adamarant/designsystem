# Migration Guide

> This file stopped at 0.8.0 on 1 Jun 2026 and nothing was written for the
> 29 releases after it. 0.38.0 is where it restarts, because it is the first
> one since with anything a consumer has to act on.

## v0.37.2 → v0.38.0

The largest deprecation round in the DS's history: **12 classes deprecated,
29 added, 47 tokens added, nothing removed or renamed.** Every deprecated
class is frozen and still works — the ones due for removal go at the next
major, not in a 0.x.

Counted by grep across the 21 registered consumers on 2 Aug 2026 (occurrences
in `src/`, `app/`, `components/`, including CSS), so treat them as scale, not
as a work list.

### 1. Looks different with no change on your side

These hit markup you already ship. Nothing to edit; there is something to
look at.

| what | who is affected | what changes |
|---|---|---|
| **`.ds-alert`** | 121 uses, 11 consumers | The 3px accent stripe on the leading edge is **gone** — the semantic signal is now the icon plus the tinted fill, as the reference has it. Items also align to the **top** instead of centre: a single-line alert is unaffected, one with a title and a description no longer has its icon floating in the middle. |
| **`.ds-segmented`** | 28 uses, 4 consumers | The border reads `--ds-color-border` instead of `--ds-color-border-subtle`. In dark, `border-subtle` is `#18181b` — the exact value of the control's own fill, so **the border never rendered at all**; in light it was lighter than what it surrounded. The token is unchanged and its five other users are untouched. |
| **`.ds-nav`** | 120 uses, 9 consumers | The bar is a **column** with `min-height: 4rem` instead of a row with `height: 4rem`. The mobile panel was a second child squeezed to zero width beside `__inner` and clipped out of the fixed box — measured 0 × 574px, never visible in any consumer using `SiteHeader`. Above `md` the panel is `display: none`, so the column has one child and **desktop renders identically**, border included: the bar is `calc(4rem - 1px)` precisely so no fixed-header offset moves by a pixel. |
| **`.ds-input`** and the select chevron | ecosystem-wide | The hand-drawn 12px triangle is now the icon set's chevron, at `--ds-color-text-tertiary` (`#71717a`) instead of a hardcoded `#a1a1aa` that matched no token in either theme. |
| **`.ds-checkbox`**, **`.ds-star-rating`** | ecosystem-wide | Both were drawing their own glyph — a hand-written check path, and the text character `★` layered over an SVG that never lined up with it. Both now use the icon set's mark. |
| **`.ds-stat-number`** | 48 uses, 16 consumers | Same rendering on web. It now reads tokens instead of hardcoding, so under `data-surface="product"` it switches to the sans face at a heavier weight — the display face on a dashboard metric is what the typography law forbids. |

**Zero change, said explicitly** so nobody goes hunting: the seven floating
panels (`dropdown`, `custom-select`, `popover`, `combobox`, `context-menu`,
`datepicker`, `command`) and the six scrims (`modal`, `drawer`, `command`, …)
now read one shared rule instead of each declaring its own. The removed
declarations were byte-identical to what the shared rule declares. No markup
changes, no class renames.

### 2. New, and entirely opt-in

- **`.ds-heading-1` … `.ds-heading-6`, `.ds-copy`, `.ds-caption`** — the type
  role ladder. The class names what the text *is*; the surface and the
  viewport decide the number.
- **`data-surface="product"`** on a shell — the same classes render at
  product sizes on the sans face. Web is the default; without the attribute
  nothing changes.
- **`data-radius="sharp" | "soft" | "pill"`** — the radius ramp, set once per
  brand. Default (no attribute) is today's values.
- **`.ds-overlay`, `.ds-panel`** — the scrim and the floating surface, now
  nameable on their own.
- **`.ds-stat`** (`__value`, `__label`, `__icon`, `__detail`) — the metric as
  a block, to put inside a `.ds-card`.
- **`.ds-badge--interactive | --active | --inverted | --removable`,
  `.ds-badge__remove`** — badge absorbing what tag and chip did.
- **`.ds-alert__actions`, `.ds-alert--actions-inline`** — real `.ds-btn` go
  inside; the alert arranges them, it does not restyle them.
- **`.ds-drawer__handle`, `.ds-kbd--flat`**.
- **47 tokens**: `--ds-weight-delicate | standard | robust | intense`, the
  `--ds-type-*` roles, `--ds-icon-1…4` (the glyph that belongs inside a
  `--ds-size-N` control), `--ds-rhythm-section | block | element`,
  `--ds-stat-value-*`.

### 3. Deprecated — frozen, removal at the next major

**Typography.** The whole named-class family gives way to the role ladder.
This is the big one by volume and the least urgent by risk: every class below
is byte-identical to 0.37.2 and will keep rendering until a major.

| deprecated | successor | uses / consumers | note |
|---|---|---|---|
| `.ds-hero-title` | `.ds-heading-1` | 73 / 16 | 56→80px vs this 40→72 |
| `.ds-section-title` | `.ds-heading-2` | 194 / 17 | 40→56px vs this 30→36 — the hierarchy fix, review per page |
| `.ds-editorial-title` | `.ds-heading-1` | 57 / 9 | |
| `.ds-editorial-lede` | `.ds-copy` | 144 / 14 | the Figma scale has no separate lede step |
| `.ds-editorial-body` | `.ds-copy` | 63 / 8 | |
| `.ds-heading-ui` | `.ds-heading-3/4/5` under `data-surface="product"` | 133 / 19 | the successors finally give it a size |
| `.ds-admin-title` | `.ds-heading-1` under `data-surface="product"` | 1 / 1 | 28px vs this 20→24 |

`.ds-overline`, `.ds-body` and `.ds-meta` are **not** deprecated — they read
role tokens now, at the same values. `.ds-label` is not deprecated either.

**Components.**

| deprecated | successor | uses / consumers | why |
|---|---|---|---|
| `.ds-tag` | `.ds-badge` | 15 / 3 | |
| `.ds-chip` | `.ds-badge--interactive` | 14 / 4 | badge has 169 uses; these two were the same component three times |
| `.ds-stat-card` | `.ds-card` + `.ds-stat` | 40 / 3 | it re-declared the card's box declaration for declaration, so it could never inherit a card modifier |
| `.ds-form-group` | `.ds-field` | 37 / 4 | **not a rename** — `.ds-form-group` pushes 16px down from each group, `.ds-field` puts 6px between its own parts and lets the form own the distance between fields. Per-page review, not a codemod |
| `.ds-help` | `.ds-field__hint` | 0 | |
| `.ds-bottom-sheet` | `.ds-drawer--bottom` | 0 | |
| `.ds-toolbar__segmented` | a real `.ds-segmented` inside the toolbar | 29 / 1 (cortex) | it was a second segmented control that had drifted on every visible axis |

`StatCard` and `CustomSelect` carry the matching `@deprecated` in ds-react.

### Migration checklist

- [ ] `npm update @adamarant/designsystem @adamarant/ds-react`
- [ ] **Look at your alerts** — multi-line ones lost the stripe and now top-align
- [ ] **Look at your header on mobile** — the panel that never opened now does
- [ ] Optional and safe: `.ds-tag` → `.ds-badge`, `.ds-chip` →
      `.ds-badge--interactive`, `.ds-stat-card` → `.ds-card` + `.ds-stat`
- [ ] Needs judgement, not a codemod: `.ds-form-group` → `.ds-field`, and the
      typography family → the role ladder
- [ ] Only if you want the new behaviour: `data-surface`, `data-radius`

---

## v0.7.x → v0.8.0

### New Components (11)

| Component | Description |
|---|---|
| `ds-combobox` | Text input with filterable dropdown, single/multi-select, inline creation |
| `ds-number-input` | Numeric stepper with +/- buttons |
| `ds-pin-input` | OTP/PIN verification input (one-char-per-field) |
| `ds-segmented-control` | Toggle between 2-5 options (compact tab alternative) |
| `ds-gallery` + `ds-lightbox` | Image gallery with thumbnails + fullscreen overlay |
| `ds-copy-button` | Clipboard copy with feedback state |
| `ds-scroll-area` | Custom-styled scrollbar |
| `ds-color-picker` | Color swatch grid |
| `ds-truncated-text` + `ds-hash` | Text truncation + hash/address display |
| `ds-bottom-sheet` | Mobile slide-up overlay |
| `ds-star-rating` | Star ratings (display + input) |

### New Package: `@adamarant/ds-hooks`

Optional React hooks companion. Install separately:
```bash
npm install @adamarant/ds-hooks
```

8 hooks: `useClickOutside`, `useEscapeKey`, `useKeyboardNav`, `useDebouncedValue`, `useFocusTrap`, `useScrollLock`, `useClipboard`, `useMediaQuery`.

### Enhanced Components

- **Table**: sorting, selection, sticky headers, striped/bordered/dense, loading skeleton, responsive `--stack`
- **Field**: `ds-field__error[data-animate]`, `ds-field__success`, `ds-field__counter`
- **Pagination**: container query (hides pages when narrow)
- **Stat Card**: container query (compact when narrow)

### CSS Nesting

All components now use **native CSS nesting**. This requires:
- Chrome 112+, Firefox 117+, Safari 17.2+ (all 2024+)
- If your build tool strips nesting, ensure it has a nesting plugin (PostCSS Nesting or Lightning CSS)
- No changes needed if you use the pre-built `dist/designsystem.css` bundle

### Tier Reorganization

- `icon-btn` promoted from Tier 3 → **Core**
- `search` promoted from Tier 3 → **Tier 1 Essential**
- `spinner` promoted from Tier 3 → **Tier 1 Essential**

### Breaking Changes
None. All existing class names and tokens unchanged.

### Migration Checklist
- [ ] Update `@adamarant/designsystem` to `^0.8.0`
- [ ] Optionally install `@adamarant/ds-hooks` and replace custom click-outside/escape/keyboard-nav implementations
- [ ] Replace custom table pagination/sorting with DS table modifiers
- [ ] Replace custom combobox/autocomplete with `ds-combobox`
- [ ] Verify browser compatibility with CSS nesting (Chrome 112+, Firefox 117+, Safari 17.2+)

---

## v0.6.0 → v0.7.0

### New Components

| Component | Description |
|---|---|
| `ds-collapsible` | Expandable/collapsible content section |
| `ds-description-list` | Key-value pair display |
| `ds-field` | Form field wrapper (label + input + hint + error) |
| `ds-result` | Success/error/empty result display |
| `ds-stat-card` | Standalone stat card (separated from `ds-card`) |

### New Features
- **Multi-select** support for `ds-custom-select`
- **WCAG 2.2 AA** hardening: minimum 24×24px target sizes, `scroll-margin-block` on focus-visible, ARIA docs in all component headers
- New utility classes: `ds-sr-only`, `ds-skip-link`, `ds-focus-visible-only`, `ds-reduce-motion`

### Breaking Changes
None.

### Actions Required
- [ ] If you had a custom `.ds-stat-card` in your project, check for conflicts with the new DS component
- [ ] Review ARIA docs in component headers and add missing ARIA attributes to your markup

---

## v0.5.x → v0.6.0

### Breaking Changes

#### CSS `@layer` cascade added

All DS styles are now wrapped in `@layer tokens, base, components, utilities`. This changes specificity behavior if your project also uses `@layer`.

**Action:** If you import the DS alongside your own `@layer` declarations, ensure the DS layers are ordered correctly:
```css
@layer tokens, base, components, utilities, app;
@import '@adamarant/designsystem';
/* your app styles in @layer app */
```

If you don't use `@layer` in your project, no action needed — unlayered styles always win over layered styles.

#### Logical properties throughout

All physical direction properties have been replaced with logical equivalents:
- `padding-left/right` → `padding-inline-start/end`
- `margin-left/right` → `margin-inline-start/end`
- `text-align: left` → `text-align: start`

**Action:** If you override DS component styles using physical properties, update them to logical equivalents for consistency. The DS components will still work with physical overrides, but mixing can cause unexpected results in RTL layouts.

### Migration Checklist
- [ ] **`@layer` ordering** — if you use `@layer`, declare DS layers before your app layer
- [ ] **Custom overrides** — update physical property overrides to logical equivalents
- [ ] **RTL testing** — if you support RTL, verify layout with the new logical properties

---

## v0.4.0 → v0.5.0

### New Components

| Component | Description |
|---|---|
| `ds-search` | Search input with icon and clear button |
| `ds-toolbar` | Action toolbar with button groups |
| `ds-chip` | Filterable/removable chip |
| `ds-icon-btn` | Icon-only button |
| `ds-bottom-nav` | Mobile bottom navigation bar |
| `ds-spinner` | Loading spinner |

### Breaking Changes
- `--ds-ring-offset` token **removed** (was deprecated in v0.4.0)

### Actions Required
- [ ] Remove any `--ds-ring-offset` overrides from your CSS
- [ ] Update component manifest usage if consuming `components.json`

---

## v0.3.x → v0.4.0

### Breaking Changes

#### `ds-select` default width changed from `100%` to `auto`

**Before:** `<select class="ds-select">` was full-width by default.
**After:** `ds-select` is now `width: auto` (content-sized). This matches how selects are most commonly used (inline filters, dropdowns in flex rows).

**Action:** Add `ds-select--full` to any `ds-select` that should remain full-width (typically inside forms):

```html
<!-- Before (was full-width by default) -->
<select class="ds-select">

<!-- After (explicit full-width) -->
<select class="ds-select ds-select--full">
```

**Search pattern:** grep for `ds-select` in your templates/JSX. If the select is inside a `ds-form` or form layout and should span the full width, add `ds-select--full`.

#### Focus rings now use `box-shadow` instead of `outline`

All 32 components now use `box-shadow` for focus rings instead of `outline` with `outline-offset`. This eliminates the double-border gap that was visible on inputs, buttons, selects, and all interactive elements.

**Action if you have custom focus overrides:**
- Remove any `outline` overrides on DS components — the DS now sets `outline: none` on all components
- If you added `*:focus-visible` global rules, scope them to exclude DS components:
  ```css
  *:focus-visible:not(.ds-input):not(.ds-textarea):not(.ds-select):not(.ds-btn):not([class*="ds-btn--"]) {
    /* your custom focus ring */
  }
  ```
- If you override `box-shadow` on DS components for focus, ensure it uses `var(--ds-ring-width)` and `var(--ds-ring-color)` tokens

**Token deprecation:** `--ds-ring-offset` is no longer used by any component. It will be removed in v0.5.0.

### New Modifiers

#### Input/Select Layout

| Modifier | What it does |
|---|---|
| `ds-select--full` | `width: 100%` — opt-in full-width for selects in forms |
| `ds-input--flush` | Strips all chrome: no border, no background, no padding, no focus ring |
| `ds-input--inline` | `width: auto; display: inline-flex` — for inputs in flex rows |

#### Input Group

| Modifier | What it does |
|---|---|
| `ds-input-group--icon-right` | Moves the icon to the right side |

#### Dropdown Menu Width

| Modifier | What it does |
|---|---|
| `ds-dropdown__menu--sm` | `min-width: 8rem` |
| `ds-dropdown__menu--lg` | `min-width: 20rem` |
| `ds-dropdown__menu--auto` | `min-width: auto` |

#### Card Media Aspect Ratio

| Modifier | What it does |
|---|---|
| `ds-card__media--square` | `aspect-ratio: 1` |
| `ds-card__media--video` | `aspect-ratio: 16/9` |
| `ds-card__media--auto` | `aspect-ratio: auto` |

#### Empty State Alignment

| Modifier | What it does |
|---|---|
| `ds-empty-state--left` | Left-aligned content |

### Accessibility Fixes
- `button.ds-tag` now has a visible focus ring
- `.ds-sortable__handle` now has a visible focus ring

### Migration Checklist

- [ ] **`ds-select` in forms** — Add `ds-select--full` where the select should be full-width
- [ ] **`style={{ width` on DS components** — Replace with appropriate modifier
- [ ] **`ds-bg-transparent ds-border-none` on inputs** — Replace with `ds-input--flush`
- [ ] **`ds-w-auto` on selects** — Remove (select is auto by default now)
- [ ] **Custom `outline` on DS components** — Remove (DS handles focus rings via box-shadow)
- [ ] **Global `*:focus-visible` rules** — Scope to exclude DS components with `:not()`
- [ ] **`--ds-ring-offset` overrides** — Remove (deprecated, removed in v0.5.0)

### Automated Migration

Run the codemod to detect issues automatically:
```bash
node node_modules/@adamarant/designsystem/scripts/codemod.js ./src
node node_modules/@adamarant/designsystem/scripts/codemod.js ./src --fix  # apply safe fixes
```
