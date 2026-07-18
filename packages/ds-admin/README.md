# @adamarant/ds-admin

React components for admin panels built on `@adamarant/designsystem`.

The package emits `ds-*` classes only. It ships **no CSS of its own** — the
consumer must already import `@adamarant/designsystem`, which is where every
class used here is defined.

```bash
npm i @adamarant/ds-admin
```

```tsx
import '@adamarant/designsystem'          // required — ds-admin ships no CSS
import { AdminPage } from '@adamarant/ds-admin'
```

---

## Scope contract

This section is the point of the README. Before it existed, "who owns the space
between the header and the toolbar?" had no written answer, so every consumer
answered it differently — an audit across 14 admin panels found **eight
different page wrappers** for that one job, and two pages of the *same* project
sitting 48px and 24px from their toolbars.

**ds-admin owns:**

| Concern | Owner |
|---|---|
| The shell (sidebar, header, collapse state, mobile drawer) | `AdminLayout` + `AdminSidebar` + `AdminHeader` |
| Page padding and max-width | `.ds-admin__content` / `.ds-admin__container` (in designsystem) |
| **Vertical rhythm of a page** | **`AdminPage`** |
| Header row (back arrow, title, description, actions) | `AdminPageHeader` |
| Toolbar row (search, filters, actions) | `AdminToolbar` |
| Tables, row actions, status badges, pagination | `AdminTable` and friends |
| Loading and empty states | `AdminPage` `status` prop / `AdminSpinner` / `AdminEmptyState` |
| Modals and confirmations | `AdminModal` / `AdminConfirmDialog` |
| Form scaffolding | `AdminFormLayout` / `AdminCard` / `AdminField` |

**The consumer owns:**

- Data fetching, state, routing, auth.
- The *content* of the body — which table columns, which cards, which form fields.
- Copy and i18n. Nothing here ships user-facing strings beyond a11y defaults.
- Navigation structure (the `NavItem[]` passed to `AdminSidebar`).

**The consumer must not own:**

- Spacing between the parts of a page. If you find yourself writing
  `ds-mb-4` on an `AdminToolbar`, or wrapping `AdminPageHeader` in a
  `ds-flex ds-flex-col ds-gap-6`, that's the bug this package exists to
  prevent. Use `AdminPage`.
- A hand-rolled spinner, empty state, status badge, pagination, or modal.
  All five exist here. The audit found 14 spinners in 4 dialects and 4 raw
  `window.confirm()` calls across the consumers.

If something genuinely doesn't fit, that's a gap in this package. Open it as a
change here rather than solving it locally — a local solution is invisible to
the other thirteen panels.

---

## Building a page

`AdminPage` is the entry point. It renders the header, toolbar, body and footer
in one stack with a single system-owned gap.

```tsx
'use client'
import { AdminPage, AdminTable, AdminStatusBadge } from '@adamarant/ds-admin'
import { Button } from '@adamarant/ds-react'

export default function ProjectsPage() {
  const { rows, loading, page, totalPages, setPage } = useProjects()

  return (
    <AdminPage
      title="Projects"
      actions={<Button onClick={create}>New Project</Button>}
      search={{ value: q, onChange: setQ, placeholder: 'Search projects…' }}
      filters={[{
        variant: 'segmented',
        value: status,
        onChange: setStatus,
        allLabel: 'All',
        'aria-label': 'Status',
        options: [
          { value: 'draft', label: 'Draft' },
          { value: 'published', label: 'Published' },
        ],
      }]}
      status={loading ? 'loading' : rows.length === 0 ? 'empty' : 'ready'}
      empty={{ title: 'No projects yet', actions: <Button onClick={create}>Create one</Button> }}
      pagination={{ page, totalPages, onPageChange: setPage }}
      overlays={<DeleteDialog open={confirming} onCancel={cancel} />}
    >
      <AdminTable rows={rows} columns={columns} />
    </AdminPage>
  )
}
```

Three details worth knowing:

- **There is no `gap` prop.** A knob here is how the drift started. The rhythm
  is one value for every admin page in every project.
- **Header and toolbar stay mounted while loading.** The common
  `if (loading) return <Spinner/>` early return makes the search box disappear
  mid-fetch and drops the page's accessible name; `status="loading"` doesn't.
- **Overlays go in `overlays`, not `children`.** A modal that returns a wrapper
  node while closed would otherwise take a slot in the flex column and add a
  phantom 24px to the bottom of the page.

A page with no toolbar (a form, a settings screen) just omits the toolbar props:

```tsx
<AdminPage title="Edit project" description="Draft saved 2 minutes ago" onBack={back}>
  <AdminFormLayout main={<Fields />} sidebar={<Publish />} />
</AdminPage>
```

---

## Components

**Shell** — `AdminLayout`, `AdminSidebar`, `AdminHeader`, `SidebarProvider`, `useSidebar`

**Page** — `AdminPage`

**Page parts** — `AdminPageHeader`, `AdminToolbar` (composed by `AdminPage`;
use directly only when building something that isn't a page)

**Data** — `AdminTable`, `AdminStatusBadge`, `AdminRowActions`, `AdminPagination`

**States** — `AdminEmptyState`, `AdminSpinner`

**Overlays** — `AdminModal`, `AdminConfirmDialog`, `AdminDetailList`

**Forms** — `AdminFormLayout`, `AdminCard`, `AdminField`, `AdminLocaleSwitcher`

Every prop is typed in [`src/types.ts`](./src/types.ts), which is the reference
for the details this README doesn't repeat.

---

## Peer requirements

- `react >= 18`
- `next >= 14`
- `@adamarant/designsystem` — for the CSS. Version must be recent enough to
  define the classes a given ds-admin version emits; see the CHANGELOG.
