# Migration Guide

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

### New Package: `@digiko-npm/ds-hooks`

Optional React hooks companion. Install separately:
```bash
npm install @digiko-npm/ds-hooks
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
- [ ] Update `@digiko-npm/designsystem` to `^0.8.0`
- [ ] Optionally install `@digiko-npm/ds-hooks` and replace custom click-outside/escape/keyboard-nav implementations
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
@import '@digiko-npm/designsystem';
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
node node_modules/@digiko-npm/designsystem/scripts/codemod.js ./src
node node_modules/@digiko-npm/designsystem/scripts/codemod.js ./src --fix  # apply safe fixes
```
