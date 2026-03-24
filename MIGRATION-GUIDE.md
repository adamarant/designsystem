# Migration Guide: v0.3.x → v0.4.0

## Breaking Changes

### `ds-select` default width changed from `100%` to `auto`

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

---

## Visual Changes

### Focus rings now use `box-shadow` instead of `outline`

All 32 components now use `box-shadow` for focus rings instead of `outline` with `outline-offset`. This eliminates the double-border gap that was visible on inputs, buttons, selects, and all interactive elements.

**What changed visually:** The 2px gap between the element border and the focus ring is gone. The ring now hugs the element tightly.

**Action if you have custom focus overrides:**
- Remove any `outline` overrides on DS components — the DS now sets `outline: none` on all components
- If you added `*:focus-visible` global rules, scope them to exclude DS components:
  ```css
  *:focus-visible:not(.ds-input):not(.ds-textarea):not(.ds-select):not(.ds-btn):not([class*="ds-btn--"]) {
    /* your custom focus ring */
  }
  ```
- If you override `box-shadow` on DS components for focus, ensure it uses `var(--ds-ring-width)` and `var(--ds-ring-color)` tokens

**Token deprecation:** `--ds-ring-offset` is no longer used by any component except the slider thumb (which can't use box-shadow on pseudo-elements). It will be removed in v0.5.0.

---

## New Modifiers

### Input/Select Layout

| Modifier | What it does |
|---|---|
| `ds-select--full` | `width: 100%` — opt-in full-width for selects in forms |
| `ds-input--flush` | Strips all chrome: no border, no background, no padding, no focus ring. For naked inputs inside styled containers (e.g. swap amount fields) |
| `ds-input--inline` | `width: auto; display: inline-flex` — for inputs used as inline filters in flex rows |

### Input Group

| Modifier | What it does |
|---|---|
| `ds-input-group--icon-right` | Moves the icon to the right side and flips the input padding |

### Dropdown Menu Width

| Modifier | What it does |
|---|---|
| `ds-dropdown__menu--sm` | `min-width: 8rem` (narrower menus) |
| `ds-dropdown__menu--lg` | `min-width: 20rem` (wider menus) |
| `ds-dropdown__menu--auto` | `min-width: auto` (content-sized) |

### Card Media Aspect Ratio

| Modifier | What it does |
|---|---|
| `ds-card__media--square` | `aspect-ratio: 1` |
| `ds-card__media--video` | `aspect-ratio: 16/9` |
| `ds-card__media--auto` | `aspect-ratio: auto` (height from content) |

### Empty State Alignment

| Modifier | What it does |
|---|---|
| `ds-empty-state--left` | Left-aligned text and content (default is centered) |

---

## Accessibility Fixes

- `button.ds-tag` now has a visible focus ring (was `outline: none` with no replacement)
- `.ds-sortable__handle` now has a visible focus ring (had only `opacity: 1`)

---

## Migration Checklist

Run these searches on your project and fix each match:

- [ ] **`ds-select` in forms** — Add `ds-select--full` where the select should be full-width
- [ ] **`style={{ width` on DS components** — Replace with appropriate modifier (`--full`, `--inline`, `--sm`, `--lg`)
- [ ] **`ds-bg-transparent ds-border-none` on inputs** — Replace with `ds-input--flush`
- [ ] **`ds-w-auto` on selects** — Remove (select is auto by default now)
- [ ] **Custom `outline` on DS components** — Remove (DS handles focus rings via box-shadow)
- [ ] **Global `*:focus-visible` rules** — Scope to exclude DS components with `:not()` selectors
- [ ] **`--ds-ring-offset` overrides** — Remove (token is deprecated, unused by most components)
