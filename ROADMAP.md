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
- Icon set: finish the adoption. The 28 marks ship from `ds-react/src/icons.tsx`
  (1 Aug 2026) but nothing is wired to them yet, so the old drawings are still
  what renders. Outstanding, in order: re-export `CloseIcon` / `CheckIcon` /
  `ArrowLeftIcon` at stroke 2 (they measure 3) and settle `MenuIcon` at two or
  three lines; point Select, Combobox, ThemeToggle, SiteHeader and Pagination at
  the set and retire their private copies; convert the marks still faked in CSS
  (checkbox and input data-URIs with hardcoded `white` / `#a1a1aa`, the
  accordion, collapsible and table border-arrows, `/` in breadcrumb, `★` in
  star-rating, `☁` in drop-zone); give ds-admin a `@adamarant/ds-react` peer dep
  so it can drop its six duplicates. Each step changes rendering in every
  consumer, so each is its own confirmed change.
- Figma token sync via Style Dictionary + DTCG
- Visual regression testing (Playwright + screenshot comparison)
- Documentation site (Astro/11ty)

## Future
- CSS @custom-media (waiting for browser support)
- Style queries for theming
- CSS mixins (when spec ships)
- Tree View component
- Calendar (full month view, not datepicker)
