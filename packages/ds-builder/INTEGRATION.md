# Integrating `@adamarant/ds-builder` into a consumer

A block-based editable-pages system: admin edits pages visually, the public site
renders the published result. The **editor is centralized in this package** — you
never rebuild it. A consumer wires ~4 small files + creates 2 tables + chooses
blocks. Reference implementation: **enzo-spatalino** (homepage).

Budget: ~10–15 minutes if the project already has the design system + CMS auth.

## Prerequisites

The consumer should already have:

- **`@adamarant/designsystem`** (the block CSS classes) + **`@adamarant/ds-react`**
  `>=0.8.0` — required at runtime by the editor (it renders DS-React controls).
- A **service-role Supabase client** and an **admin auth guard**. Every project on
  `@adamarant/cms` has these: `getAdminClient()` (from `cms/supabase`) and
  `verifyAdminRequest` (from `cms/next`). The examples below assume those names.

```bash
npm install @adamarant/ds-builder
```

## 1. Database — two tables (prefix per project)

Copy `node_modules/@adamarant/ds-builder/sql/schema.sql`, replace `builder_` with
your project prefix (e.g. `esys_`), and run it (Supabase Management API or SQL
editor). Two tables: `<prefix>_pages` + `<prefix>_page_versions`, both RLS-enabled
with **no public policy** — access is service-role only.

## 2. Blocks — `src/blocks/index.tsx`

```tsx
import { createRegistry } from '@adamarant/ds-builder'
import { sharedBlocks } from '@adamarant/ds-builder/blocks' // Hero, Prose, CTA, Image

// Add project-specific blocks alongside the shared ones:
//   createRegistry([...sharedBlocks, MyCustomBlock])
export const registry = createRegistry([...sharedBlocks])
```

A custom block is a `defineBlock({ type, version, label, fields, render })`; the
property panel in the editor is **auto-generated from `fields`**. See the shared
blocks in this package (`src/blocks/*.tsx`) for the pattern.

## 3. Store config — `src/lib/pageStore.ts`

```ts
import type { PageStoreConfig } from '@adamarant/ds-builder/server'

export const pageStore: PageStoreConfig = {
  pagesTable: '<prefix>_pages',
  versionsTable: '<prefix>_page_versions',
}
```

## 4. API routes (auth-guarded, service-role)

`src/app/api/admin/pages/[slug]/draft/route.ts`:

```ts
import { NextRequest, NextResponse } from 'next/server'
import { saveDraft } from '@adamarant/ds-builder/server'
import { validateDocument } from '@adamarant/ds-builder'
import { verifyAdminRequest } from '@/lib/admin-auth'
import { getAdminClient } from '@/lib/supabase/server'
import { pageStore } from '@/lib/pageStore'
import { registry } from '@/blocks'

export async function PUT(request: NextRequest, { params }: { params: Promise<{ slug: string }> }) {
  const auth = await verifyAdminRequest(request)
  if (!auth.authorized) return auth.response
  const { slug } = await params
  const doc = await request.json()
  const v = validateDocument(registry, doc)
  if (!v.valid) return NextResponse.json({ error: 'invalid', issues: v.issues }, { status: 422 })
  await saveDraft(getAdminClient(), pageStore, slug, doc)
  return NextResponse.json({ success: true })
}
```

`src/app/api/admin/pages/[slug]/publish/route.ts` — same guard, then:

```ts
import { saveDraft, publishPage } from '@adamarant/ds-builder/server'
// ...inside POST, after validateDocument:
const sb = getAdminClient()
await saveDraft(sb, pageStore, slug, doc)
const { version } = await publishPage(sb, pageStore, slug)
return NextResponse.json({ success: true, version })
```

## 5. Admin editor route

`src/app/admin/.../pages/[slug]/edit/page.tsx` (server — creates the page on first open):

```tsx
import { getDraft, createPage } from '@adamarant/ds-builder/server'
import { getAdminClient } from '@/lib/supabase/server'
import { pageStore } from '@/lib/pageStore'
import { AdminEditor } from './AdminEditor'

export const dynamic = 'force-dynamic'

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const sb = getAdminClient()
  const doc = (await getDraft(sb, pageStore, slug))
    ?? (await createPage(sb, pageStore, { slug, defaultLocale: 'it', locales: ['it'] })).draft_content
  return <AdminEditor slug={slug} initialDoc={doc} />
}
```

`AdminEditor.tsx` (client — the centralized editor; do not rebuild it):

```tsx
'use client'
import { PageEditor } from '@adamarant/ds-builder/editor'
import '@adamarant/ds-builder/styles/editor'
import type { PageDocument } from '@adamarant/ds-builder'
import { registry } from '@/blocks'

const send = (url: string, method: string, doc: PageDocument) =>
  fetch(url, { method, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(doc) })
    .then((r) => { if (!r.ok) throw new Error('save failed') })

export function AdminEditor({ slug, initialDoc }: { slug: string; initialDoc: PageDocument }) {
  return (
    <PageEditor
      registry={registry}
      document={initialDoc}
      initialLocale="it"
      onSaveDraft={(doc) => send(`/api/admin/pages/${slug}/draft`, 'PUT', doc)}
      onPublish={(doc) => send(`/api/admin/pages/${slug}/publish`, 'POST', doc)}
    />
  )
}
```

Add a nav entry to the page editor (e.g. `/admin/pages/home/edit`).

## 6. Public rendering

In the page you want builder-driven (e.g. the homepage), a server component:

```tsx
import { PageRenderer } from '@adamarant/ds-builder/render'
import { getPublished } from '@adamarant/ds-builder/server'
import { getAdminClient } from '@/lib/supabase/server'
import { pageStore } from '@/lib/pageStore'
import { registry } from '@/blocks'

export const dynamic = 'force-dynamic'

export default async function HomePage() {
  const doc = await getPublished(getAdminClient(), pageStore, 'home')
  if (doc) return <PageRenderer document={doc} registry={registry} />
  return <Fallback /> // your existing static page until 'home' is published
}
```

`getPublished` uses the service-role client **server-side only** — never expose it
to the browser.

## Notes

- **The editor (canvas, palette, toolbar, property panel) is 100% this package.**
  You import `@adamarant/ds-builder/styles/editor` (namespaced `dsb-`, inherits DS
  tokens → matches the project theme automatically) and get the whole UI. Improve
  it once here; every consumer gets it on `npm update`.
- Editor UI labels default to English — pass `labels` to `PageEditor` to translate.
- `richtext` fields are a plain textarea (a `string`); the shared Prose block splits
  blank lines into paragraphs. No markdown/WYSIWYG yet.
- `list` fields hold simple values, not multi-field objects — a repeating card grid
  (FeatureGrid) needs a package enhancement (roadmap).
