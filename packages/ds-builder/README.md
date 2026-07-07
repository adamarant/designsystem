# @adamarant/ds-builder

Block-based visual page builder for `@adamarant/designsystem` consumers. Lets a
non-technical admin edit pages — change text and images, reorder sections — while
every output stays DS-compliant, because blocks are typed sections that developers
author once and the admin only fills in.

> **Status: 0.0.0 — Phases 0–2 done (not published).** Core model, content store,
> and the editor MVP are in; drag-reorder + the real pilot come next. See the roadmap.

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

## Editor

`@adamarant/ds-builder/editor` ships `PageEditor` — a live canvas plus a
property panel **auto-generated from each block's schema**, with debounced draft
autosave and a validated publish. It's decoupled from transport and storage:
persistence is injected, so the editor never touches Supabase or auth directly.

```tsx
'use client'
import { PageEditor } from '@adamarant/ds-builder/editor'
import '@adamarant/ds-builder/styles/editor'
import { registry } from '@/blocks' // your createRegistry([...])

export function AdminPageEditor({ slug, initialDoc }) {
  return (
    <PageEditor
      registry={registry}
      document={initialDoc}
      onSaveDraft={(doc) => fetch(`/api/admin/pages/${slug}/draft`, {
        method: 'PUT', body: JSON.stringify(doc),
      }).then(() => undefined)}
      onPublish={(doc) => fetch(`/api/admin/pages/${slug}/publish`, {
        method: 'POST', body: JSON.stringify(doc),
      }).then(() => undefined)}
      // optional: wire the CMS MediaPicker; falls back to a URL input if omitted
      renderImagePicker={({ onSelect, onClose }) => (
        <MediaPicker onSelect={(m) => onSelect({ mediaId: m.id, url: m.url, alt: m.alt_text ?? '' })} onClose={onClose} />
      )}
    />
  )
}
```

The matching API routes call `validateDocument(registry, doc)` then the page
store (`saveDraft` / `publishPage`) from `@adamarant/ds-builder/server`.

Field types map to controls automatically: text→input, `multiline`→textarea,
richtext→textarea, number→number input, boolean→toggle, select→dropdown,
colorToken→token dropdown, link→url+label, image→picker/URL, list→repeater.
Localized fields edit one locale at a time via the toolbar language switch.

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
| 2 ✅ | Editor MVP: canvas + auto-generated property panels + injected media picker + draft autosave + validated publish |
| 3 | Composition: dnd-kit reorder, block palette (add/remove), undo/redo |
| 4 | Pilot: migrate a real consumer page (esys home) |
| 5 | Docs, authoring guide, versioning guide, snapshot tests |
