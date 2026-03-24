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
- `@digiko-npm/ds-hooks` companion package (8 React hooks)
- Token validation script
- Tier reorganization (icon-btn → Core, search/spinner → Tier 1)

## Next (v0.9.0)
- Fix remaining token reference warnings (--ds-ease → --ds-ease-default, etc.)
- Figma token sync via Style Dictionary + DTCG
- Visual regression testing (Playwright + screenshot comparison)
- Documentation site (Astro/11ty)

## Future
- CSS @custom-media (waiting for browser support)
- Style queries for theming
- CSS mixins (when spec ships)
- Tree View component
- Calendar (full month view, not datepicker)
