# @adamarant/ds-builder

Block-based visual page builder for `@adamarant/designsystem` consumers. Lets a
non-technical admin edit pages — change text and images, reorder sections — while
every output stays DS-compliant, because blocks are typed sections that developers
author once and the admin only fills in.

> **Status: 0.0.0 — Phases 0–1 done (not published).** Core model + content store
> validated; the editor UI lands in later phases. See the roadmap below.

## Why block-based (not free-form)

A free-form canvas (Webflow-style) would emit arbitrary classes/styles and break
the design system's controlled-mode governance. A **block registry** keeps the
admin inside typed, DS-composed sections: preview and production render from the
**same component**, so they can never diverge.

## Model

- **`defineBlock`** — author a block: a typed `fields` schema + one render
  component (used by both editor and public site). `data` is inferred from the schema.
- **`createRegistry`** — the consumer's list of blocks. The consumer owns which
  blocks exist.
- **`PageDocument`** — a page's content as JSON (stored in Supabase). Ordered
  `blocks`, each with `data`. Localized fields hold `{ [locale]: value }` maps.
- **`PageRenderer`** (from `@adamarant/ds-builder/render`) — renders a document to
  React. Server-safe and lightweight; the only piece a public site ships.
- **`validateDocument(registry, doc)`** — validates content against the registry
  (unknown blocks, per-field type/required/select/localized checks). Run it before
  saving so blocks only ever receive well-formed data.
- **Page store** (from `@adamarant/ds-builder/server`) — service-role Supabase CRUD:
  `listPages`, `getDraft`, `getPublished`, `createPage`, `saveDraft`, `publishPage`,
  `deletePage`. Draft and published content live side by side; publishing snapshots
  the draft into a versions table and bumps the counter. Schema in [`sql/schema.sql`](sql/schema.sql).

### i18n

Locale-agnostic by design. A field marked `localized` stores a per-locale map; the
renderer collapses it to the active locale (falling back to the document's default
locale, then the field default). Adding a language — Japanese included — is **data
in the consumer's config, not a package change**.

## Resilience ("non si rompe")

- **Unknown block type** → `renderUnknown` fallback; the page still renders.
- **A block throws** → isolated per-block and the rest of the page survives.
  - *Spike finding:* under streaming SSR (Next App Router), a thrown error only
    stays contained if the block is wrapped in a `<Suspense>` boundary — an
    unwrapped throw errors the whole shell. `PageRenderer` therefore wraps every
    block in `Suspense` + an error boundary. Phase 1 adds data validation so
    blocks rarely throw in the first place (prevention over recovery).
- **Schema evolution** → each block carries a `version`; `migrate()` upgrades old
  stored data, and unknown stored keys are dropped on resolve.

## Verify the spike

```bash
npm run build --workspace=packages/ds-builder
npm run smoke --workspace=packages/ds-builder   # JSON → HTML, i18n, fallback, crash isolation
```

## Roadmap

| Phase | Scope |
|---|---|
| 0 ✅ | Core primitives, crash-safe renderer, i18n, Hero spike |
| 1 ✅ | Supabase content model (`<prefix>_pages` + versions, RLS), server CRUD, data validation |
| 2 | Editor MVP: admin shell + canvas + auto-generated property panels + MediaPicker + draft/publish |
| 3 | Composition: dnd-kit reorder, block palette (add/remove), undo/redo |
| 4 | Pilot: migrate a real consumer page (esys home) |
| 5 | Docs, authoring guide, versioning guide, snapshot tests |
