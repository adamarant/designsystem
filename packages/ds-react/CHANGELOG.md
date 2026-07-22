# Changelog — @adamarant/ds-react

First entry at 0.10.0: nine prior minors shipped without a changelog, which is
part of how a phantom component (see below) went unnoticed. History before
this point is reconstructable from `git log` only.

## 0.10.0

**One `Select`, two renderings — props decide.**

The same need was being met three ways: a native-only `Select` here, a
`CustomSelect` here that was a **ten-line phantom** (it rendered a single
unstyled `<div class="ds-LCustom-LSelect">`, a class that has never existed in
the design system), and the real searchable panel living in
`@adamarant/cms/ui` — found only by the two projects that knew about it.
Which dropdown you got depended on which of the three you happened to know
existed. Two consumers also carried their own hand-written `Select` wrapper.

```tsx
<Select options={opts} />                 // native — right for short lists
<Select options={opts} searchable />      // styled panel with a filter box
<Select options={opts} panel />           // panel; search auto (>5 options)
```

- **Native mode is byte-identical to before** — same classes, same props,
  `children` still work; `options` now renders them for you. Additive:
  `onValueChange(value)` fires alongside the native `onChange(event)`.
- **Panel mode is a faithful port** of the `@adamarant/cms/ui` implementation
  that has run in production in the esys and cavallino admin panels:
  `position: fixed` and repositioned from the trigger rect (never clipped by a
  modal or a scrolling container — the documented Combobox limitation),
  fullscreen sheet with header and body-scroll lock on mobile, Escape and
  outside-click to close, auto-focused search. Icons are inline SVG; the
  package stays icon-dependency-free.
- Verified before publishing: SSR render of both modes, and a driven browser
  session at mobile and desktop viewports — open, filter, select, Escape,
  panel escaping an `overflow: hidden` box, trigger-anchored geometry.

**`CustomSelect` is now a working deprecated alias** of `<Select panel>`,
prop-compatible with the `@adamarant/cms/ui` implementation so migrating a
consumer is an import swap. Its props changed from the phantom's div-props —
nothing could have used a component that rendered one unstyled div and worked.
Removal in the next major.

**Known gaps, carried over deliberately, not hidden:** no arrow-key navigation
on the panel options (the production implementation never had it; adding it
needs an active-option class in the DS, which goes through the class-grant
flow) and no `multiple` — the CSS ships `--multi` and tag classes, but no
React implementation has ever existed, and shipping an unproven one the same
night as the port would be two risks in one release.
