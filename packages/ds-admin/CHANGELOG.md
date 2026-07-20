# Changelog — @adamarant/ds-admin

Entries before 0.10.0 were reconstructed from git history: the package shipped
nine minors without a changelog, which is part of why consumers stayed on 0.1.2
without knowing what they were missing.

## 0.13.0

**`AdminShell` derives header titles from the nav.**

0.12.0 asked for a `titles` map. Applying it to the first consumer made the
problem obvious: that map is a copy of the labels already in `nav`, and a copy
goes stale the first time a section is renamed — the sidebar would say one
thing and the header another.

The nav's labels (including `children`) are now the default title source.
`titles` is still there, for routes that have no nav entry — settings, a
builder, a profile page — and still wins where both define a segment.

```tsx
const NAV = [{ id: 'projects', label: 'Projects', href: '/admin/projects', icon: … }]

<AdminShell nav={NAV} titles={{ settings: 'Settings' }} />
//                    ^ only what the nav doesn't already cover
```

Additive: a `titles` map that repeats the nav labels keeps working, it's just
no longer needed.

## 0.12.0

**`AdminShell` — the frame contract.**

Same lesson as `AdminPage`, one level out. The package shipped the parts of the
chrome (`AdminLayout`, `AdminSidebar`, `AdminHeader`) but left their assembly to
the consumer, so every project assembled it differently. Across seven CMS
consumers that produced **two incompatible shell shapes** — a three-file chain
(`AdminShell` → `AdminLayout` → `AdminSidebar` + `AdminHeader`) in
studio/riccardo/vibhe, a single `DashboardShell.tsx` in
esys/riondato/enzo-spatalino/cavallinogroup — and, inside them, four different
treatments of the same header title:

| Treatment | Where |
|---|---|
| `<span class="ds-text-lg ds-font-medium ds-text-primary">` | studio, riccardo |
| `<span class="ds-heading-ui">` | vibhe |
| `<h1 class="ds-font-display ds-text-lg ds-text-primary">` | esys, cavallinogroup |
| `<h1 class="ds-heading-ui ds-text-lg">` | enzo-spatalino |

Two of those were defects, not preferences:

- **`ds-font-display` on an admin title** contradicts `typography.css`, which
  says in as many words that admin is functional and must not reach for the
  display font.
- **`<h1>` in the header** gives the page two h1s, because `AdminPageHeader`
  already renders one. The header title is a context label, not the page
  heading.

`AdminShell` owns the element, the classes, the placement and the collapse
control. There is no `titleClassName` and no `gap` — a knob there is how the
four dialects happened.

```tsx
<AdminShell
  nav={navItems}
  brand={<Link href="/">{<Logo />}</Link>}
  titles={{ projects: 'Projects', media: 'Media' }}
  fallbackTitle="Dashboard"
  themeToggle={<AdminThemeToggle />}
  sidebarFooter={<SignOut />}
>
  {children}
</AdminShell>
```

`titles` resolves against the pathname **last segment first**, so
`/admin/projects/abc123` keeps the "Projects" title instead of falling through
to the generic label — the hand-written resolvers all matched the last segment
only, which is why detail routes showed "Admin".

What remains a slot is what is genuinely per-project: `brand`, `sidebarFooter`
(the sign-out path differs per auth model), `headerActions`, `afterNav`.

**`AdminThemeToggle`, at `@adamarant/ds-admin/theme`.**

Four projects carried a near-identical `ThemeToggle.tsx` bridging `next-themes`
to the design system's switch, differing only in how they spelled the hydration
guard (`useState` + `useEffect` vs `useSyncExternalStore`). Three others had no
toggle at all.

It ships as a **subpath**, not from the barrel, because it is the only module
that imports `next-themes` and two consumers (divasti, vibhe) don't have it
installed — a barrel import would break their build for a component they never
asked for. `next-themes` is an optional peer dependency.

`AdminShell` takes it as the `themeToggle` slot rather than mounting it
directly, for the same reason. The shell still owns *where* it sits, so the
placement is identical everywhere.

Requires a `next-themes` provider with `attribute="data-theme"` above it.
Pass `defaultTheme` matching the provider's, or the thumb jumps on hydration.

## 0.11.1

**Fix: `AdminRowActions` instrada gli href interni su `next/link`.**

Rendeva un `<a>` nudo, quindi ogni "modifica questa riga" era una navigazione
di documento completa: tabella, shell e intero albero client smontati e
ricostruiti su un click che doveva essere una soft nav. `AdminSidebar` usava
già `next/link` — era un'incoerenza interna al pacchetto, non una scelta.
Trovato migrando enzo-spatalino, dove la regressione era visibile.

Le azioni con `external: true` restano un `<a>` puro: escono dall'app comunque.

## 0.11.0

**`AdminFormLayout`: entrambe le colonne possiedono il proprio ritmo.**

Stessa lacuna di `AdminPage`, un livello sotto. `.ds-admin-form` spaziava le due
colonne di 24px ma non diceva nulla sulle card *dentro* ciascuna, quindi ogni
consumer le impilava con un margine scritto a mano — `BlogPostForm`,
`PropertyForm`, `LocalidadForm`, su tre progetti, ognuno arrivato alla stessa
toppa per conto proprio.

- **CSS (richiede `@adamarant/designsystem` ≥ 0.23.0):** `.ds-admin-form__main`
  e `.ds-admin-form__sidebar` diventano colonne flex con
  `gap: var(--ds-space-6)`. Nessun modificatore per cambiarlo: un solo valore
  per il gap fra colonne, per il gap fra card dentro una colonna, e per lo
  stack di `.ds-admin-page`.
- **Breaking di fatto (visivo, non di API):** le card che prima portavano un
  margine da 16px scritto a mano ora si distanziano di 24 — e se quel margine
  resta, si somma al gap. **Rimuovilo dai figli quando aggiorni.**

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
