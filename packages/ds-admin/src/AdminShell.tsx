'use client'

import { usePathname } from 'next/navigation'
import { AdminLayout } from './AdminLayout.js'
import { AdminSidebar } from './AdminSidebar.js'
import { AdminHeader } from './AdminHeader.js'
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

function flattenNav(nav: NavItem[]): { href: string; label: string }[] {
  const flat: { href: string; label: string }[] = []

  for (const item of nav) {
    flat.push({ href: item.href, label: item.label })
    for (const child of item.children ?? []) {
      flat.push({ href: child.href, label: child.label })
    }
  }

  return flat
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
  let best: { href: string; label: string } | undefined

  for (const item of flattenNav(nav)) {
    const matches = pathname === item.href || pathname.startsWith(`${item.href}/`)
    if (matches && (!best || item.href.length > best.href.length)) best = item
  }

  return best?.label
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
   Shell parts — separate components because they read useSidebar/usePathname,
   which only resolve inside the provider AdminLayout mounts.
   ========================================================================== */

function ShellSidebarHeader({
  brand,
  collapsedBrand,
  collapsible,
}: Pick<AdminShellProps, 'brand' | 'collapsedBrand' | 'collapsible'>) {
  const { isCollapsed } = useSidebar()

  return (
    <>
      {isCollapsed ? collapsedBrand : brand}
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
}: Pick<
  AdminShellProps,
  'nav' | 'title' | 'titles' | 'fallbackTitle' | 'headerCenter' | 'headerActions' | 'themeToggle'
>) {
  const pathname = usePathname()
  const resolved =
    title ?? resolveTitle(pathname, nav, titles ?? {}, fallbackTitle ?? 'Admin')

  const right =
    themeToggle || headerActions ? (
      <>
        {themeToggle}
        {headerActions}
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
export function AdminShell({
  children,
  nav,
  brand,
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
  storageKey,
  defaultCollapsed,
  collapsible = true,
  afterHeader,
  afterMain,
  className,
}: AdminShellProps) {
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
          items={nav}
          isActive={isActive}
          afterNav={afterNav}
          mobileHeader={mobileHeader}
          footer={sidebarFooter}
          header={
            <ShellSidebarHeader
              brand={brand}
              collapsedBrand={collapsedBrand}
              collapsible={collapsible}
            />
          }
        />
      }
      header={
        <ShellHeader
          nav={nav}
          title={title}
          titles={titles}
          fallbackTitle={fallbackTitle}
          headerCenter={headerCenter}
          headerActions={headerActions}
          themeToggle={themeToggle}
        />
      }
    >
      {children}
    </AdminLayout>
  )
}
