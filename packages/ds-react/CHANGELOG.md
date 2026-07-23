# Changelog — @adamarant/ds-react

First entry at 0.10.0: nine prior minors shipped without a changelog, which is
part of how a phantom component (see below) went unnoticed. History before
this point is reconstructable from `git log` only.

## 1.0.0

**The trust reset.** This package is now the one consumer API of the design
system (ECOSYSTEM_ROADMAP, Fase 1): typed, tested, server-first. Nothing in
the public API was renamed or removed — 1.0 is a contract change, not a
rewrite. What changed underneath:

- **Behavior is bought, not hand-rolled.** New dependency `@base-ui/react`
  (MUI's headless primitives). First remount: `Modal` runs on Base UI
  Dialog — real focus trap, scroll lock, Escape, outside-press, focus
  restore. Public API unchanged (`open`/`onClose`/`size`/
  `fullscreenMobile` + parts); `Modal.Content` is the Dialog popup.
- **One size vocabulary.** `type Size = "xs" | "sm" | "md" | "lg"` exported
  from the barrel, mapped 1:1 onto the `--ds-size-1..4` height tiers. All
  row controls derive from it (Button adds `xl`/`2xl`; controls without an
  xs tier use `Exclude<Size, "xs">`). "Same row, same size" is now a type,
  not a convention. Local `XxxSize` aliases still exported.
- **Server-first architecture.** The barrel no longer carries `"use
  client"`: 54 components are universal (server-render with zero client
  JS), 12 interactive files declare their own directive. Fixes a latent
  break: `Combobox`/`Dropdown`/`Tabs`/`Tooltip` used hooks without the
  directive and exploded when imported via subpath into a Server Component.
- **Every compound is RSC-safe.** All 33 compounds export their parts flat
  (`DropdownItem`, `EmptyStateIcon`, `HeroTitle`, …, 82 in total) next to
  the dot notation — dot access on a client-reference proxy is `undefined`
  in Server Components; the named imports always work. The convention
  `Comp.Part === CompPart` is enforced by a test on every export, forever.
- **Checkbox and Radio are components now.** `label` / `description` /
  `size` / `name` / `checked` / `onCheckedChange` render the canonical
  native-input markup the CSS is built around. Children-only usage keeps
  the old shell behavior byte-identical. Server-safe: handlers attach only
  when you pass one.
- **New `PageHeader`** — the last CSS component without a wrapper (lead /
  title / description / actions / back).
- **Dropdown a11y** — focus returns to the trigger on Escape and item
  selection; `Home`/`End` jump across items.
- **Tests exist now: 231.** Export-shape (no phantom exports, compound↔flat
  convention), mount-all with the contract "every mounted `ds-*` class
  exists in the built CSS bundle" (the phantom-class bug family is dead),
  directive discipline (client APIs ⇒ `"use client"`), server-render smoke
  with no DOM, and behavior suites for Modal, Dropdown, Checkbox, Radio.

Migration from 0.10.0: `npm install @adamarant/ds-react@^1` — no code
changes required. Deprecated and unchanged: `CustomSelect` (alias of
`<Select panel>`), `ClipReveal`, `AdminLayout` (use `@adamarant/ds-admin`).
Known debt, scheduled next major-window: Base UI remounts for
Dropdown/Tooltip (positioning model), real `Command`/`Datepicker`
implementations, Stack/Flex gap vocabulary unification.

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
