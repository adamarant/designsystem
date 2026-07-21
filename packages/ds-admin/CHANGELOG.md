# Changelog — @adamarant/ds-admin

Entries before 0.10.0 were reconstructed from git history: the package shipped
nine minors without a changelog, which is part of why consumers stayed on 0.1.2
without knowing what they were missing.

## 0.16.0

**`AdminUserMenu`** — who is signed in, and the things you do to yourself
(requires `@adamarant/designsystem` ≥ 0.23.4).

```tsx
<AdminShell
  userMenu={<AdminUserMenu email={user.email} name={user.name}
                           roleLabel="Superadmin" onSignOut={signOut} />}
  allowedSections={user.sections}
/>
```

It owns no geometry: the trigger is `.ds-avatar--sm` and the panel is
`.ds-dropdown`, both already in the design system. `--sm` is `--ds-size-2`, so
the trigger is the same 32px as the icon buttons and the theme toggle next to
it — the header row is one height because the components share a tier, not
because this one hard-codes a number.

**`allowedSections`** filters the sidebar. An item with children keeps only
the children the user may reach and disappears when none survive; a child that
is allowed keeps its parent reachable even when the parent itself isn't listed.

The header title still resolves against the **full** nav, not the filtered one
— otherwise a route the sidebar is hiding would render with a blank title.

**This is navigation, not authorisation.** A hidden link does not stop anyone
typing the URL and does not protect the route behind it. Enforce the same
answer server-side, where the data is.

**Theme toggle sizes now land on the tiers**: 24 / 32 / 40 (`--ds-size-1/2/3`)
instead of 24 / 28 / 36. The default used to fall between two tiers and sat 4px
shorter than everything beside it in a header row. Track width is twice the
height and the thumb travel is derived from it, so the geometry stays
consistent at every size.

## 0.15.2

**The nav row is 20px by construction** (requires `@adamarant/designsystem` ≥ 0.23.2).

`.ds-admin__nav-label` declared no `line-height`, so it inherited
`--ds-leading-normal` from the body: 14px x 1.5 = **21px**, one pixel taller
than the icon slot that is supposed to set the row. The two children centred
against each other by accident rather than by rule, and the label read as
sitting high. It now takes its line box from `--ds-admin-nav-icon-size`, so
both children of a nav row are the same height.

**`AdminSidebarLink` uses the nav label class**, not utilities. It was
`ds-text-sm ds-font-medium` here and `.ds-admin__nav-label` there — two
mechanisms for one thing, inside one package, so this fix would have left the
footer behind.

That also fixes a collapsed-state bug: `.ds-admin--collapsed` hides
`.ds-admin__nav-label`, which the footer's utilities never matched, so "Go to
site" and "Sign out" stayed visible and overflowed the 4rem rail.

**Icon stroke thinned to 1.5** via `--ds-admin-nav-icon-stroke`. A 20px icon at
the icon set's default stroke of 2 outweighs the 14px label beside it; thinning
the stroke keeps the slot's size without letting the icon dominate.

## 0.15.1

**The icon slot sizes its own icon** (requires `@adamarant/designsystem` ≥ 0.23.1).

`.ds-admin__nav-icon` declared a 20×20 box and then left its contents alone,
so the size had to be restated on every icon the consumer passed — fifty-odd
call sites across seven panels. Predictably one drifted to 18, and
digiko-marketplace passed no size at all, letting lucide's 24px default
overflow the box without anyone noticing.

The design system now sizes the `svg` inside the slot, and the box reads
`--ds-admin-nav-icon-size` (default 20px). Drop `size` from your nav icons;
override the custom property if you need a different one.

`AdminSidebarLink` puts its icon in the same slot, so the footer rows follow
without a second rule.

Not breaking for anyone already passing 20 — which, after this session, is all
seven CMS consumers. `divasti` (16/18) and `cortex` (16) will see their nav
icons settle at 20, and `digiko-marketplace` stops overflowing.

## 0.15.0

**`AdminSidebarLink` — the footer row.**

The last piece of the frame still left to the consumer. Across seven panels
that produced: three with the same twenty-five-line `SidebarFooter` copied
verbatim, one with sign-out only, one with sign-out as an icon in the header
instead, and two with no footer at all — so two panels had no way out of the
admin except the browser's back button.

```tsx
sidebarFooter={
  <>
    <AdminSidebarLink href="/" external icon={<ExternalLink size={20} />}>
      Go to site
    </AdminSidebarLink>
    <AdminSidebarLink onClick={signOut} icon={<LogOut size={20} />}>
      Sign out
    </AdminSidebarLink>
  </>
}
```

What differs per project is the *action*, not the row: a callback, a fetch, a
server action. So the row is here and the action is a prop — `href` renders a
link, `onClick` a button, and `type="submit"` lets it sit inside a
server-action `<form>`, which is how one consumer signs out.

Labels stay with the consumer: the package ships no user-facing strings, and
these panels run in three languages.

It closes the mobile drawer on activation. A footer row either navigates away
or ends the session; leaving the drawer open behind it is wrong in both cases.

## 0.14.0

**`AdminShell` owns the wordmark.**

`brand` was a slot, and a slot is what let seven panels answer the same
question seven ways: two shipped an SVG logo, five wrote text, across three
type treatments (`ds-font-display ds-text-xl`, `ds-heading-ui`,
`ds-heading-ui ds-text-primary`) — and only three carried the "Admin" badge.

```tsx
<AdminShell brandName="vibhe" brandBadge="Admin" brandHref="/admin" … />
```

`brandBadge` is a prop with no default rather than a hardcoded "Admin": the
package ships no user-facing strings beyond a11y defaults, and that rule
shouldn't bend for a short word.

`brand` stays as the escape hatch for a panel that genuinely needs its own
mark, and still wins when both are passed. Nothing breaks: it was already the
only option, so every existing call keeps working — it is now optional rather
than required.

Collapsed, the rail is 4rem and a wordmark can't fit, so only the collapse
control shows unless `collapsedBrand` is supplied. That was already the
behaviour; it is now the documented one.

## 0.13.1

**Fix: a nav entry owns its whole subtree, not just its last segment.**

0.13.0 derived the title map by taking each nav href's *last segment*. That
breaks the moment two sections share a leaf, and one of the seven consumers hit
it immediately: enzo-spatalino's "Pagine" entry points at
`/admin/pages/home/edit`, so the segment `edit` mapped to "Pagine" — and every
`/admin/blog/[id]/edit` route inherited that title.

Nav matching is now by **longest href prefix**: `/admin/blog/abc/edit` sits
under `/admin/blog` and gets "Blog", while `/admin/pages/home/edit` matches its
own entry exactly. Longest-wins means a root entry at `/admin` never shadows a
deeper one.

`titles` is unchanged — still matched by segment, last first, and still wins
over the nav.

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
