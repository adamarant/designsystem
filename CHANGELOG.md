# Changelog

All notable changes to `@digiko-npm/designsystem` will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

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
