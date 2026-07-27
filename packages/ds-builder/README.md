# @adamarant/ds-builder

Block-based visual page builder for `@adamarant/designsystem` consumers. Lets a
non-technical admin edit pages — change text and images, reorder sections — while
every output stays DS-compliant, because blocks are typed sections that developers
author once and the admin only fills in.

> **Status: 0.5.0 — Phases 0–3 done, first pilot live.** Core model, content
> store, the editor MVP, and composition (palette, reorder, undo/redo) are in. See the roadmap.

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
  `listPages`, `reorderPages`, `getDraft`, `getPublished`, `createPage`, `saveDraft`,
  `publishPage`, `deletePage`. Draft and published content live side by side; publishing
  snapshots the draft into a versions table and bumps the counter. Schema in
  [`sql/schema.sql`](sql/schema.sql); upgrades in [`sql/migrations/`](sql/migrations)
  (**0.6.0 needs `0001_pages_position.sql`** — the page switcher's order column).

### i18n

Locale-agnostic by design. A field marked `localized` stores a per-locale map; the
renderer collapses it to the active locale (falling back to the document's default
locale, then the field default). Adding a language — Japanese included — is **data
in the consumer's config, not a package change**.

### Shared blocks

`@adamarant/ds-builder/blocks` exports `sharedBlocks` — the sections every site
needs — to spread into your registry alongside your own:

```ts
export const registry = createRegistry([...sharedBlocks, MyCustomBlock])
```

| Block | What it is |
|---|---|
| `HeroBlock` | Centered overline, title, lede, optional CTA. |
| `ProseBlock` | Long-form text with an optional heading; blank lines split paragraphs. |
| `CtaBlock` | Centered band with up to two buttons. |
| `ImageBlock` | Full-width image with an optional caption. |
| `ContactsBlock` | A contact page in one block: details on the left, an optional message form on the right, side by side from `lg` up. |

`ContactsBlock` carries the only interactive markup in the set. Its form POSTs
`{nome, cognome, email, messaggio}` as JSON to the `endpoint` field's URL and
reads success from the HTTP status, so delivery (Resend, a queue, a CRM) stays a
route in your app and the block holds no secrets. Leave `endpoint` empty and the
fields render but submitting does nothing — lay the page out before the route
exists. Its `titleStyle` field picks `h1` (the block *is* the page) or `h2` (a
band inside another page), so a section instance never emits a second `h1`.

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

export function AdminPageEditor({ slug, initialDoc, pages }) {
  return (
    <PageEditor
      registry={registry}
      document={initialDoc}
      // optional: the page switcher. A rail beside the canvas from 1024px up,
      // a select in the toolbar below it. Feed it from `listPages`.
      pages={pages.map((p) => ({ slug: p.slug, label: p.title, href: `/admin/pages/${p.slug}/edit` }))}
      currentSlug={slug}
      // optional: passing this makes the rail draggable (grip handle, arrow
      // keys). Wire it to a route that calls `reorderPages` server-side.
      onReorderPages={(slugs) => fetch('/api/admin/pages/order', {
        method: 'PUT', body: JSON.stringify({ slugs }),
      }).then(() => undefined)}
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
| 3 ✅ | Composition: block palette (add), per-block reorder + delete controls, undo/redo (coalesced field edits). Reorder ships button/keyboard-first — drag (dnd-kit) deferred to keep the package dependency-free |
| 4 | Pilot: migrate a real consumer page (esys home) |
| 5 | Docs, authoring guide, versioning guide, snapshot tests |
