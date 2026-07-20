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

function lastSegment(href: string): string | undefined {
  const segments = href.split('/').filter(Boolean)
  return segments[segments.length - 1]
}

/** The nav already carries a label for every section it links to. Deriving the
    default titles from it means the header and the sidebar cannot disagree —
    a hand-written map is a copy of this list that silently goes stale the
    first time a label is renamed. `titles` then only needs the routes that
    aren't in the nav (settings, a builder, a profile page). */
function navTitles(nav: NavItem[]): Record<string, string> {
  const map: Record<string, string> = {}

  for (const item of nav) {
    const segment = lastSegment(item.href)
    if (segment) map[segment] = item.label

    for (const child of item.children ?? []) {
      const childSegment = lastSegment(child.href)
      if (childSegment) map[childSegment] = child.label
    }
  }

  return map
}

/** Walks path segments from the last to the first and returns the first one
    present in the map, so `/admin/projects/abc123` resolves to the "projects"
    title instead of falling through to the generic label. The hand-written
    resolvers this replaces all matched the last segment only, which is why
    detail routes showed the fallback. */
function resolveTitle(
  pathname: string,
  titles: Record<string, string>,
  fallback: string,
): string {
  const segments = pathname.split('/').filter(Boolean)

  for (let i = segments.length - 1; i >= 0; i -= 1) {
    const segment = segments[i]
    if (segment && titles[segment]) return titles[segment]
  }

  return fallback
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

  // Nav labels first, then the consumer's overrides for routes outside the nav.
  const map = { ...navTitles(nav), ...titles }
  const resolved = title ?? resolveTitle(pathname, map, fallbackTitle ?? 'Admin')

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
