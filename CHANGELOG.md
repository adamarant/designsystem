# Changelog

All notable changes to `@adamarant/designsystem` will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

> **Note:** entries between 0.9.0 and 0.21.0 were never written. The file
> resumes at 0.22.0; the gap is reconstructable from `git log` only.

## [0.23.5] - 2026-07-22

**`.ds-input-group__icon` accepts an interactive affix.**

The slot was click-through by design, so tapping a decorative icon focuses the
input. That also meant it only ever fitted decoration: anyone needing a
show/hide password toggle or a clear button had to hand-roll the positioning
with utilities — and one consumer did exactly that, centring a button with
`ds-top-1/2` and `-ds-translate-y-1/2` written with the CSS escaping still in
the class name, so neither rule ever matched and the icon floated out of place.

A `button` or `a` inside the slot now takes pointer events and gets the
secondary/hover colour pair. Decorative icons keep passing clicks through, so
nothing that uses the slot today changes.

## [0.23.3] - 2026-07-21

**Admin nav label is optically centred against its icon.**

`.ds-admin__nav-label` had its box height matched to the icon (0.23.2), but
equal boxes don't centre the *ink*: a font places its glyphs off-centre in the
line box by `(descender − ascender + cap) / 2`, independent of line-height.
Every body font the consumers use is top-heavy — Telegraf sits +0.73px high,
Switzer +0.35px at 14px — so the label rode above the icon, visible on a retina
display. A fixed nudge can't fix it because the amount is per-font.

`text-box: trim-both cap alphabetic` trims the label box to its cap-to-baseline
edges, so the box centre is the ink centre for any font and `align-items:
center` lands it dead-centre. Progressive enhancement: where `text-box` isn't
supported the existing line-height keeps the 20px row and the sub-pixel lean.
Applies to the footer rows too (`AdminSidebarLink` uses the same class).

## [0.23.0] - 2026-07-18

### Changed
- `ds-admin-form__main` / `__sidebar` diventano colonne flex con
  `gap: var(--ds-space-6)`. Prima erano semplici guardie `min-width: 0`: la
  griglia spaziava le due colonne ma non le card dentro ciascuna, quindi ogni
  consumer se le impilava a mano. Un solo valore ora regge gap fra colonne,
  gap fra card e stack di `.ds-admin-page`.
  **Attenzione:** margini bottom scritti a mano sulle card ora si sommano al
  gap — vanno rimossi. Coppia con `@adamarant/ds-admin` 0.11.0.

## [0.22.0] - 2026-07-18

### Added
- `ds-admin-page` — the vertical-rhythm contract for an admin page
  (`components/admin-page.css`). Lays out header, `__toolbar`, `__body` and
  `__footer` with one system-owned gap, and zeroes `.ds-page-header`'s own
  `margin-block-end` when nested inside it, so the margin and the stack gap
  stop adding up. Paired with `AdminPage` in `@adamarant/ds-admin` 0.10.0.

## [0.8.0] - 2026-03-24

### Added — New Components (11)
- `ds-combobox` — text input with filterable dropdown, single/multi-select, inline creation
- `ds-number-input` — numeric stepper with +/- buttons
- `ds-pin-input` — OTP/PIN verification input (one-char-per-field)
- `ds-segmented-control` — toggle between 2-5 options (compact tab alternative)
- `ds-gallery` — image gallery with thumbnails + `ds-lightbox` fullscreen overlay
- `ds-copy-button` — clipboard copy with idle→copied feedback state
- `ds-scroll-area` — custom-styled scrollbar (thin/horizontal variants)
- `ds-color-picker` — swatch grid with selection ring
- `ds-truncated-text` — middle/end truncation + `ds-hash` display
- `ds-bottom-sheet` — mobile slide-up overlay with drag handle
- `ds-star-rating` — display/input star ratings with half-star support

### Added — `@adamarant/ds-hooks` companion package
- `useClickOutside` — close dropdowns/modals on outside click
- `useEscapeKey` — close overlays on Escape
- `useKeyboardNav` — arrow key navigation for lists
- `useDebouncedValue` — debounce search input values
- `useFocusTrap` — trap Tab focus inside modals/drawers
- `useScrollLock` — prevent body scroll with scrollbar compensation
- `useClipboard` — copy to clipboard with timed feedback
- `useMediaQuery` — reactive CSS media query matching

### Enhanced
- **Table**: sort headers, row selection, sticky headers, striped/bordered/dense modifiers, loading skeleton rows, responsive card-stacking (`--stack`), table footer area
- **Field**: animated error appearance, success message, character counter with limit state
- **Pagination**: container query (hides page numbers when narrow)
- **Stat Card**: container query (compact sizing when narrow)

### Changed
- All 54 components converted to **native CSS nesting**
- Tier reorganization: `icon-btn` promoted to Core, `search` + `spinner` promoted to Tier 1
- `search.css`: hardcoded `blur(20px)` replaced with `var(--ds-blur-lg)`
- `icon-btn.css`: fixed documentation claiming `--sm` was 28px (actual: 32px)

### Added — Tooling
- `scripts/validate-tokens.js` — validates all `var(--ds-*)` references exist in token files

### Stats
- 54 components (was 43)
- 153KB minified (was 131KB)
- 0 runtime dependencies (unchanged)

## [0.7.2] - 2026-03-24

### Fixed
- `bg-elevated` dark mode color adjusted to `#1c1c20`
- Unstaged changes in `demo.css` and `nav.css`

## [0.7.1] - 2026-03-24

### Fixed
- Swapped `bg-muted` and `bg-elevated` values in dark mode (were inverted)

## [0.7.0] - 2026-03-24

### Added
- `ds-collapsible` component
- `ds-description-list` component
- `ds-field` component (form field wrapper with label, hint, error)
- `ds-result` component
- `ds-stat-card` component (separated from card)
- Multi-select support for `ds-custom-select`

### Changed
- WCAG 2.2 AA hardening — minimum 24×24px target sizes, `scroll-margin-block` on focus, ARIA requirement docs in all component headers
- Added `ds-sr-only`, `ds-skip-link`, `ds-focus-visible-only`, `ds-reduce-motion` utility classes

## [0.6.0] - 2026-03-24

### Changed
- Added `@layer tokens, base, components, utilities` cascade control
- Converted all components to CSS logical properties (`padding-inline`, `margin-block`, `inset-inline-start`, etc.)
- Documented responsive breakpoints

## [0.5.1] - 2026-03-24

### Fixed
- Broken token reference in `drop-zone.css`
- Broken token reference in `chip.css`
- `icon-btn` sm size aligned to `--ds-size-2` (32px)
- Removed duplicate `.dark` selector
- `bottom-nav` hardcoded values replaced with tokens
- `avatar` sizes mapped to design tokens

## [0.5.0] - 2026-03-24

### Added
- `ds-search` component
- `ds-toolbar` component
- `ds-chip` component
- `ds-icon-btn` component
- `ds-bottom-nav` component
- `ds-spinner` component
- Component manifest entries for all new components

## [0.4.0] - 2026-03-24

### Changed
- **BREAKING:** `ds-select` default width changed from `100%` to `auto` — add `ds-select--full` for full-width selects in forms
- Focus rings migrated from `outline` to `box-shadow` across all 32 components (eliminates 2px gap)
- `--ds-ring-offset` token deprecated (removed in v0.5.0)

### Added
- `ds-select--full` modifier
- `ds-input--flush` modifier (strips all chrome)
- `ds-input--inline` modifier
- `ds-input-group--icon-right` modifier
- `ds-dropdown__menu--sm`, `--lg`, `--auto` width variants
- `ds-card__media--square`, `--video`, `--auto` aspect ratio modifiers
- `ds-empty-state--left` alignment modifier
- Migration guide (`MIGRATION-GUIDE.md`)

### Fixed
- `button.ds-tag` missing focus ring
- `.ds-sortable__handle` missing focus ring

## [0.3.x] - 2026-02-28 to 2026-03-24

### Added
- `ds-custom-select` component (v0.3.30)
- `ds-drop-zone` component (v0.3.30)
- `ds-sortable` component (v0.3.30)
- `ds-datepicker` component (v0.3.34)
- `ds-form` pattern and `ds-input-group`
- `ds-inset-x-0`, `ds-inset-y-0`, `ds-top-full`, `ds-bottom-full` utilities
- Responsive padding, text, col-span, gap-10, tracking-wider, auto margin utilities (v0.3.3)
- Expanded utility layer for Tailwind-free projects (v0.3.0)
- Size variants for `ds-select`
- Component height scale `--ds-size-1` through `--ds-size-4`

### Fixed
- Replaced hardcoded line-heights with typography tokens
- Replaced hardcoded px values in datepicker with DS tokens
- Tokenized remaining hardcoded px values across components
- Nav hover styles wrapped in `@media (hover: hover)`
- Scrollbar + `scrollbar-gutter` support
- Mobile nav link touch target sizes
- Input focus ring system overhauled

### Changed
- Dropdown item padding increased
- Dark mode tertiary text color lightened for contrast

## [0.2.0] - 2026-02-25

### Added
- Per-component imports via package exports map
- Minified bundle (`dist/designsystem.min.css`)
- `components.json` manifest with all 28 components
- Multi-page demo site with catalog, search, and per-component docs
- Foundation pages (colors, typography, spacing, effects)

## [0.1.0] - 2026-02-24

### Added
- Initial release with 8 core components: button, card, input, badge, nav, modal, toast, table
- 8 Tier 1 components: tabs, alert, divider, dropdown, tooltip, avatar, skeleton, empty-state
- 7 Tier 2 components: toggle, breadcrumb, pagination, tag, accordion, drawer, progress
- 5 Tier 3 components: popover, slider, timeline, kbd, command
- Design tokens: colors (light + dark), typography, spacing, shadows
- CSS reset and base typography
- Theme switching via `data-theme` attribute
- Layout, text, and spacing utility classes
