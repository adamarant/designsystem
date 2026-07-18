# Changelog — @adamarant/ds-admin

Entries before 0.10.0 were reconstructed from git history: the package shipped
nine minors without a changelog, which is part of why consumers stayed on 0.1.2
without knowing what they were missing.

## 0.10.0

**`AdminPage` — the page-level contract.**

Adds the component that owns the vertical rhythm of an admin page, closing the
gap that made every consumer invent its own wrapper.

- **New:** `AdminPage`. Composes header + toolbar + body + footer with a single
  system-owned gap. Props: `title`, `description`, `onBack`, `actions`,
  `search`, `filters`, `toolbarActions`, `toolbar`, `status`, `empty`,
  `pagination`, `footer`, `overlays`, `children`.
- **New:** `status` prop (`'ready' | 'loading' | 'empty'`) centralises the two
  states every list page reimplemented by hand. Header and toolbar stay mounted
  in all three — unlike the `if (loading) return <Spinner/>` early return, which
  drops the search box and the page's accessible name mid-fetch.
- **New:** `overlays` slot renders modals outside the spacing stack, so a closed
  overlay that still returns a node can't add a phantom gap to the page bottom.
- **New:** `AdminPageProps`, `AdminPageStatus` types.
- **New:** README with a written scope contract — who owns what, and what the
  consumer must *not* own. First one this package has had.
- **CSS (requires `@adamarant/designsystem` ≥ 0.22.0):** new
  `components/admin-page.css`. Zeroes `.ds-page-header`'s own
  `margin-block-end` inside `.ds-admin-page`, since otherwise the margin and the
  stack gap add up — the 48px-vs-24px divergence that prompted this release.

Migration is additive: existing pages keep working. To adopt, replace the page's
outer wrapper and its header/toolbar/state plumbing with one `AdminPage`. See
the README.

## 0.9.0
- `AdminPageHeader` gains `description`.

## 0.8.0
- `AdminModal`, `AdminDetailList`. `AdminCard` gains `description`.

## 0.7.0
- `AdminEmptyState`, `AdminSpinner`.

## 0.6.0
- `AdminTable` gains `onRowClick`. `AdminToolbar` gains the `segmented` filter
  variant.

## 0.5.1
- `AdminTable` gains `rowClassName`.

## 0.5.0
- `AdminTable` gains row reorder, inline edit, add-row.

## 0.4.0
- Form primitives: `AdminFormLayout`, `AdminCard`, `AdminField`,
  `AdminLocaleSwitcher`.

## 0.2.0
- Data & page primitives: `AdminPageHeader`, `AdminToolbar`, `AdminTable`,
  `AdminStatusBadge`, `AdminRowActions`, `AdminPagination`,
  `AdminConfirmDialog`. Sortable columns and table footer.

## 0.1.2
- First published release under the `@adamarant` scope (was `@digiko-npm`).
  Shell only: `AdminLayout`, `AdminSidebar`, `AdminHeader`, `SidebarProvider`.
