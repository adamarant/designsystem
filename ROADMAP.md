# Roadmap

## Done (v0.7.x)
- @layer architecture (tokens, base, components, utilities)
- Logical properties throughout all components
- Accessibility hardening (WCAG 2.2 AA)
- Field, Collapsible, Description List, Result components
- Multi-select custom-select
- Stylelint configuration
- W3C DTCG tokens export (`tokens.json`)
- Container queries on card, toolbar, search
- color-mix() fallbacks

## Done (v0.8.0)
- CSS nesting (all 54 components)
- Container queries expansion (pagination, stat-card)
- Combobox / Autocomplete component
- Bottom Sheet component (mobile)
- Segmented Control component
- Star Rating component
- Number Input / Pin Input components
- Gallery + Lightbox component
- Copy Button, Color Picker, Scroll Area, Truncated Text
- Table enhancement (sorting, selection, sticky headers, responsive stacking)
- Field enhancement (animated errors, success, counter)
- `@adamarant/ds-hooks` companion package (8 React hooks)
- Token validation script
- Tier reorganization (icon-btn → Core, search/spinner → Tier 1)

## Done (v0.9.x)
- Fix all token reference warnings (zero phantom tokens, zero hardcoded values)
- Comprehensive state variant utilities (hover, focus, active, group-hover)
- Admin Layout component (`ds-admin-layout`)
- `@adamarant/ds-admin` React layout components
- Prose & Hero components
- Sizing utilities + responsive utilities expansion
- Button sizes `--xl` (56px), `--2xl` (64px) + `--success-solid` variant
- Tabs `--lg` size variant
- Dropdown `--full` width variant
- Semantic token audit (bg-elevated, surface-hover, overlay corrections)
- Interactive demos + recommended JS for all components
- Component categories reorganized by function
- Dark theme token tuning (bg-muted-hover / bg-elevated contrast)
- Hover/active state fixes across all components

## Next (v1.0.0)
- Icon set: adopted 1 Aug 2026 — 28 marks in `ds-react/src/icons.tsx`, all
  generated from `icons.json`, with `scripts/generate-icons.js --check` wired
  into validate. What is left:
  - Re-export `IconClose` / `IconCheck` / `IconArrowLeft` at stroke 2 (they
    measure 3) and settle `IconMenu` at two or three bars. One edit to
    icons.json, then regenerate — every copy follows.
  - ds-builder still draws its own seven. It has `@adamarant/ds-react@0.8.0`
    installed in its own node_modules shadowing the workspace symlink, so it
    compiles against a version that predates the set. Either publish, or clear
    that install so it links the workspace.
  - `Pagination` has no Prev/Next/Ellipsis parts and `Chip` has no Remove part,
    so their marks still come from the consumer. Adding them is new API, not a
    rewire.
  - Five examples still render a pictographic character because the closed set
    has no mark for them: a gear and an envelope and a house in `bottom-nav`, a
    chart in `stat-card` and `card`, a document in `empty-state`. All are slots
    the consumer fills, so the fix is a decision about scope — either those
    examples stop pretending to be real content, or the set grows, which is the
    thing it is designed not to do. Flagged as a warning by `validate`, not an
    error, for exactly that reason.
- Figma token sync via Style Dictionary + DTCG
- Visual regression testing (Playwright + screenshot comparison)
- Documentation site (Astro/11ty)

## Future
- CSS @custom-media (waiting for browser support)
- Style queries for theming
- CSS mixins (when spec ships)
- Tree View component
- Calendar (full month view, not datepicker)
