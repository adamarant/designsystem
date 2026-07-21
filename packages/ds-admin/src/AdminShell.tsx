'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { AdminLayout } from './AdminLayout.js'
import { AdminSidebar } from './AdminSidebar.js'
import { AdminHeader } from './AdminHeader.js'
import { AdminEmptyState } from './AdminEmptyState.js'
import { useSidebar } from './SidebarContext.js'
import type { AdminShellProps, NavItem } from './types.js'

/* ==========================================================================
   Chrome — inline SVG, like the rest of the package. ds-admin stays
   icon-library-free; consumer icons arrive as NavItem.icon.
   ========================================================================== */

function ChevronIcon({ direction }: { direction: 'start' | 'end' }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polyline points={direction === 'start' ? '15 18 9 12 15 6' : '9 18 15 12 9 6'} />
    </svg>
  )
}

function CollapseControl() {
  const { isCollapsed, toggleCollapse } = useSidebar()

  return (
    <button
      type="button"
      onClick={toggleCollapse}
      className={isCollapsed ? 'ds-icon-btn' : 'ds-icon-btn ds-ml-auto'}
      aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
    >
      <ChevronIcon direction={isCollapsed ? 'end' : 'start'} />
    </button>
  )
}

/* ==========================================================================
   Title resolution
   ========================================================================== */

interface NavMatch {
  href: string
  label: string
  id: string
  /** Set when the match is a child, so a permission granted on the parent
      section still covers it. */
  parentId?: string
}

function flattenNav(nav: NavItem[]): NavMatch[] {
  const flat: NavMatch[] = []

  for (const item of nav) {
    flat.push({ href: item.href, label: item.label, id: item.id })
    for (const child of item.children ?? []) {
      flat.push({
        href: child.href,
        label: child.label,
        id: child.id,
        parentId: item.id,
      })
    }
  }

  return flat
}

/** The nav entry whose subtree contains this path — longest href wins, so a
    root entry never shadows a deeper one. */
function navMatch(pathname: string, nav: NavItem[]): NavMatch | undefined {
  let best: NavMatch | undefined

  for (const item of flattenNav(nav)) {
    const matches = pathname === item.href || pathname.startsWith(`${item.href}/`)
    if (matches && (!best || item.href.length > best.href.length)) best = item
  }

  return best
}

/** The longest nav href the pathname sits under.
 *
 *  A nav entry owns its whole subtree, so `/admin/blog/abc/edit` resolves to
 *  "Blog" — matching by *segment* instead would break as soon as two sections
 *  share a leaf. A real case: a "Pages" entry pointing at
 *  `/admin/pages/home/edit` would claim the segment `edit` and then every
 *  blog edit route would be titled "Pages". Longest match wins, so a root
 *  entry at `/admin` never shadows a deeper one. */
function navTitle(pathname: string, nav: NavItem[]): string | undefined {
  return navMatch(pathname, nav)?.label
}

/** Whether this route is inside a section the user may reach. A permission on
    a parent covers its children, so granting "blog" is enough for the
    categories page under it. */
function mayReach(
  pathname: string,
  nav: NavItem[],
  allowed?: string[]
): boolean {
  if (!allowed) return true

  const match = navMatch(pathname, nav)
  // A route with no nav entry at all (a detail page hanging off nothing) is
  // left alone: blocking what we can't classify would break more than it
  // protects, and the API is the real boundary either way.
  if (!match) return true

  return (
    allowed.includes(match.id) ||
    (match.parentId !== undefined && allowed.includes(match.parentId))
  )
}

/** The nav already carries a label for every section it links to, so the header
    and the sidebar cannot disagree — a hand-written map is a copy of that list
    that goes stale the first time a label is renamed. `titles` covers the
    routes with no nav entry, and wins where both apply. It is matched by path
    segment, last segment first, so a detail route keeps its section's title. */
function resolveTitle(
  pathname: string,
  nav: NavItem[],
  titles: Record<string, string>,
  fallback: string,
): string {
  const segments = pathname.split('/').filter(Boolean)

  for (let i = segments.length - 1; i >= 0; i -= 1) {
    const segment = segments[i]
    if (segment && titles[segment]) return titles[segment]
  }

  return navTitle(pathname, nav) ?? fallback
}

/* ==========================================================================
   Brand
   ========================================================================== */

/** The wordmark: the panel's name, and a badge saying which panel it is.
 *
 *  A shape rather than a slot, because a slot is what let seven panels answer
 *  the same question seven ways — two shipped an SVG logo, five wrote text, in
 *  three different type treatments. Pass `brand` instead when a panel genuinely
 *  needs its own mark. */
function ShellBrand({
  brandName,
  brandBadge,
  brandHref,
}: Pick<AdminShellProps, 'brandName' | 'brandBadge' | 'brandHref'>) {
  const mark = (
    <>
      <span className="ds-heading-ui">{brandName}</span>
      {brandBadge && <span className="ds-admin__sidebar-badge">{brandBadge}</span>}
    </>
  )

  if (!brandHref) return mark

  return (
    <Link href={brandHref} className="ds-flex ds-items-center ds-gap-2 ds-text-primary">
      {mark}
    </Link>
  )
}

/* ==========================================================================
   Shell parts — separate components because they read useSidebar/usePathname,
   which only resolve inside the provider AdminLayout mounts.
   ========================================================================== */

function ShellSidebarHeader({
  brand,
  brandName,
  brandBadge,
  brandHref,
  collapsedBrand,
  collapsible,
}: Pick<
  AdminShellProps,
  'brand' | 'brandName' | 'brandBadge' | 'brandHref' | 'collapsedBrand' | 'collapsible'
>) {
  const { isCollapsed } = useSidebar()

  // Collapsed, the rail is 4rem: a wordmark can't fit, so only the control
  // shows unless the consumer supplied a mark sized for it.
  const expanded = brand ?? (
    <ShellBrand brandName={brandName} brandBadge={brandBadge} brandHref={brandHref} />
  )

  return (
    <>
      {isCollapsed ? collapsedBrand : expanded}
      {collapsible && <CollapseControl />}
    </>
  )
}

function ShellHeader({
  nav,
  title,
  titles,
  fallbackTitle,
  headerCenter,
  headerActions,
  themeToggle,
  userMenu,
}: Pick<
  AdminShellProps,
  | 'nav'
  | 'title'
  | 'titles'
  | 'fallbackTitle'
  | 'headerCenter'
  | 'headerActions'
  | 'themeToggle'
  | 'userMenu'
>) {
  const pathname = usePathname()
  const resolved =
    title ?? resolveTitle(pathname, nav, titles ?? {}, fallbackTitle ?? 'Admin')

  const right =
    themeToggle || headerActions || userMenu ? (
      <>
        {themeToggle}
        {headerActions}
        {userMenu}
      </>
    ) : undefined

  return (
    <AdminHeader
      /* A span, not a heading: AdminPageHeader owns the page's h1. Two h1s per
         page is what the hand-written headers were producing. */
      left={<span className="ds-heading-ui ds-text-lg">{resolved}</span>}
      center={headerCenter}
      right={right}
    />
  )
}

/* ==========================================================================
   AdminShell
   ========================================================================== */

/**
 * The admin frame: sidebar, header, and the content well.
 *
 * `AdminPage` owns the rhythm inside a page; this owns the chrome around every
 * page. It exists for the same reason: the composition of
 * `AdminLayout` + `AdminSidebar` + `AdminHeader` was left to the consumer, so
 * each project invented it — two shell shapes across seven projects, four
 * different title treatments, and the collapse control hand-rolled wherever it
 * appeared.
 *
 * What stays a slot is what is genuinely per-project: the brand mark, the
 * sidebar footer (sign-out differs per auth model), and extra header controls.
 * Everything structural — element, classes, placement, the collapse toggle —
 * belongs to the shell and has no prop to override it.
 */
/** The nav this user may see. An item with children keeps only the children
    they may reach, and disappears when none survive. */
function filterNav(nav: NavItem[], allowed?: string[]): NavItem[] {
  if (!allowed) return nav

  const permitted = new Set(allowed)

  return nav.flatMap((item) => {
    const children = item.children?.filter((child) => permitted.has(child.id))
    if (permitted.has(item.id)) {
      return [item.children ? { ...item, children } : item]
    }
    // The parent isn't allowed but a child is: keep the branch reachable.
    return children?.length ? [{ ...item, children }] : []
  })
}

export function AdminShell({
  children,
  nav,
  brand,
  brandName,
  brandBadge,
  brandHref,
  collapsedBrand,
  sidebarFooter,
  afterNav,
  mobileHeader,
  isActive,
  title,
  titles,
  fallbackTitle,
  headerCenter,
  headerActions,
  themeToggle,
  userMenu,
  allowedSections,
  forbidden,
  storageKey,
  defaultCollapsed,
  collapsible = true,
  afterHeader,
  afterMain,
  className,
}: AdminShellProps) {
  const visibleNav = filterNav(nav, allowedSections)
  return (
    <ShellBody
      nav={nav}
      visibleNav={visibleNav}
      allowedSections={allowedSections}
      forbidden={forbidden}
      brand={brand}
      brandName={brandName}
      brandBadge={brandBadge}
      brandHref={brandHref}
      collapsedBrand={collapsedBrand}
      sidebarFooter={sidebarFooter}
      afterNav={afterNav}
      mobileHeader={mobileHeader}
      isActive={isActive}
      title={title}
      titles={titles}
      fallbackTitle={fallbackTitle}
      headerCenter={headerCenter}
      headerActions={headerActions}
      themeToggle={themeToggle}
      userMenu={userMenu}
      storageKey={storageKey}
      defaultCollapsed={defaultCollapsed}
      collapsible={collapsible}
      afterHeader={afterHeader}
      afterMain={afterMain}
      className={className}
    >
      {children}
    </ShellBody>
  )
}

/** Split out so the forbidden check can read usePathname — AdminShell itself
    is the boundary the consumer renders, and hooks belong below it. */
function ShellBody({
  children,
  nav,
  visibleNav,
  allowedSections,
  forbidden,
  brand,
  brandName,
  brandBadge,
  brandHref,
  collapsedBrand,
  sidebarFooter,
  afterNav,
  mobileHeader,
  isActive,
  title,
  titles,
  fallbackTitle,
  headerCenter,
  headerActions,
  themeToggle,
  userMenu,
  storageKey,
  defaultCollapsed,
  collapsible = true,
  afterHeader,
  afterMain,
  className,
}: AdminShellProps & { visibleNav: NavItem[] }) {
  const pathname = usePathname()

  // The chrome stays: someone who lands here needs a way to somewhere they can
  // actually go, and a bare message with no sidebar is a dead end.
  const body =
    forbidden && !mayReach(pathname, nav, allowedSections) ? (
      <AdminEmptyState {...forbidden} variant={forbidden.variant ?? 'card'} />
    ) : (
      children
    )

  return (
    <AdminLayout
      collapsible={collapsible}
      storageKey={storageKey}
      defaultCollapsed={defaultCollapsed}
      afterHeader={afterHeader}
      afterMain={afterMain}
      className={className}
      sidebar={
        <AdminSidebar
          items={visibleNav}
          isActive={isActive}
          afterNav={afterNav}
          mobileHeader={mobileHeader}
          footer={sidebarFooter}
          header={
            <ShellSidebarHeader
              brand={brand}
              brandName={brandName}
              brandBadge={brandBadge}
              brandHref={brandHref}
              collapsedBrand={collapsedBrand}
              collapsible={collapsible}
            />
          }
        />
      }
      header={
        <ShellHeader
          /* The full nav, not the filtered one: a title must still resolve on
             a route the sidebar is hiding, or the header goes blank there. */
          nav={nav}
          title={title}
          titles={titles}
          fallbackTitle={fallbackTitle}
          headerCenter={headerCenter}
          headerActions={headerActions}
          themeToggle={themeToggle}
          userMenu={userMenu}
        />
      }
    >
      {body}
    </AdminLayout>
  )
}
