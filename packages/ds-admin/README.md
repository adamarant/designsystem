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
| **The whole frame (sidebar, header, title, wordmark, collapse control)** | **`AdminShell`** |
| The shell parts, for a panel `AdminShell` can't express | `AdminLayout` + `AdminSidebar` + `AdminHeader` |
| The light/dark switch | `AdminThemeToggle` (at `@adamarant/ds-admin/theme`) |
| Page padding and max-width | `.ds-admin__content` / `.ds-admin__container` (in designsystem) |
| **Vertical rhythm of a page** | **`AdminPage`** |
| Header row (back arrow, title, description, actions) | `AdminPageHeader` |
| Toolbar row (search, filters, actions) | `AdminToolbar` |
| Tables, row actions, status badges, pagination | `AdminTable` and friends |
| Loading and empty states | `AdminPage` `status` prop / `AdminSpinner` / `AdminEmptyState` |
| Modals and confirmations | `AdminModal` / `AdminConfirmDialog` |
| Form scaffolding, **and the rhythm inside both its columns** | `AdminFormLayout` / `AdminCard` / `AdminField` |

**The consumer owns:**

- Data fetching, state, routing, auth.
- The *content* of the body — which table columns, which cards, which form fields.
- Copy and i18n. Nothing here ships user-facing strings beyond a11y defaults.
- Navigation structure (the `NavItem[]` passed to `AdminShell`).
- The sidebar footer (the sign-out path differs per auth model) and any extra
  header controls — these are `AdminShell` slots.

**The consumer must not own:**

- The header title's element or classes. `AdminShell` renders a `<span>`, not a
  heading, because `AdminPageHeader` already owns the page's `h1` — and it uses
  the body font, because `typography.css` says admin titles must not reach for
  the display font. Seven consumers had produced four different answers to this
  before 0.12.0, two of which were defects rather than preferences.
- The wordmark's type treatment. Pass `brandName`; `brand` exists for a panel
  that genuinely needs its own mark, not as the default way in. The same seven
  consumers had three type treatments here too, and only three of them showed
  the badge.
- Spacing between the parts of a page. If you find yourself writing
  `ds-mb-4` on an `AdminToolbar`, or wrapping `AdminPageHeader` in a
  `ds-flex ds-flex-col ds-gap-6`, that's the bug this package exists to
  prevent. Use `AdminPage`.
- Spacing between the cards inside an `AdminFormLayout` column. Both columns
  space their own children as of 0.11.0; a bottom-margin utility on a card now
  doubles up with the column gap.
- A hand-rolled spinner, empty state, status badge, pagination, or modal.
  All five exist here. The audit found 14 spinners in 4 dialects and 4 raw
  `window.confirm()` calls across the consumers.

If something genuinely doesn't fit, that's a gap in this package. Open it as a
change here rather than solving it locally — a local solution is invisible to
the other thirteen panels.

---

## Mounting a panel

`AdminShell` is the entry point for the panel, the way `AdminPage` is the entry
point for a page. Mount it once in the admin `layout.tsx` so the sidebar and
header persist across navigations.

```tsx
'use client'
import { AdminShell } from '@adamarant/ds-admin'
import { AdminThemeToggle } from '@adamarant/ds-admin/theme'

const NAV = [
  { id: 'dashboard', label: 'Dashboard', href: '/admin', icon: <LayoutDashboard size={18} /> },
  { id: 'projects', label: 'Projects', href: '/admin/projects', icon: <FolderOpen size={18} /> },
]

export function Shell({ children }: { children: ReactNode }) {
  return (
    <AdminShell
      nav={NAV}
      brandName="Adamarant"
      brandBadge="Admin"
      brandHref="/admin"
      titles={{ settings: 'Settings' }}   // only routes the nav doesn't cover
      fallbackTitle="Admin"
      themeToggle={<AdminThemeToggle />}
      sidebarFooter={<SignOutButton />}
      storageKey="admin_sidebar_collapsed"
    >
      {children}
    </AdminShell>
  )
}
```

**Header titles come from the nav.** Every `NavItem` already carries the label
for the section it links to, so listing those again in `titles` is a copy that
goes stale the moment one is renamed. Pass `titles` only for routes with no nav
entry; it merges over the derived map, so it doubles as an override.

Resolution walks the pathname **last segment first**, so `/admin/projects/abc123`
shows "Projects" rather than the fallback. Pass `title` instead when a page's
name isn't derivable from its route at all.

The theme toggle is a slot rather than a built-in because `AdminThemeToggle`
needs `next-themes`, which not every consumer installs — importing it from the
barrel would break those builds. `AdminShell` still owns where it sits.
It needs a `next-themes` provider with `attribute="data-theme"` above it, and
its `defaultTheme` should match the provider's.

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
