import type { ReactNode } from 'react'

/* ==========================================================================
   Shared types for @digiko-npm/ds-admin
   ========================================================================== */

export interface NavItem {
  id: string
  label: string
  href: string
  icon: ReactNode
  children?: { id: string; label: string; href: string }[]
  disabled?: boolean
  badge?: ReactNode
}

export interface SidebarState {
  isCollapsed: boolean
  isMobileOpen: boolean
  toggleCollapse: () => void
  openMobile: () => void
  closeMobile: () => void
}

export interface SidebarProviderProps {
  children: ReactNode
  /** localStorage key for persisting collapsed state. Default: 'admin_sidebar_collapsed' */
  storageKey?: string
  /** Initial collapsed state. Default: false */
  defaultCollapsed?: boolean
}

export interface AdminLayoutProps {
  children: ReactNode
  /** The sidebar element (use AdminSidebar or custom) */
  sidebar: ReactNode
  /** The header element (use AdminHeader or custom) */
  header?: ReactNode
  /** localStorage key for sidebar state. Default: 'admin_sidebar_collapsed' */
  storageKey?: string
  /** Initial collapsed state. Default: false */
  defaultCollapsed?: boolean
  /** Enable collapse/expand toggle. When false, sidebar is always expanded. Default: true */
  collapsible?: boolean
  /** Slot rendered after the header (e.g. subheader bar) */
  afterHeader?: ReactNode
  /** Slot rendered after main content area (e.g. mobile bottom nav) */
  afterMain?: ReactNode
  /** Additional className on the root ds-admin element */
  className?: string
}

export interface AdminSidebarProps {
  /** Navigation items to render */
  items: NavItem[]
  /** Content for the sidebar header area (logo, branding) */
  header: ReactNode
  /** Content for the sidebar footer area (sign out, links) */
  footer?: ReactNode
  /** Alternative header content when sidebar is collapsed */
  collapsedHeader?: ReactNode
  /** Content rendered after nav items but before footer (e.g. favorites group) */
  afterNav?: ReactNode
  /** Mobile drawer header content. Defaults to a close button. */
  mobileHeader?: ReactNode
  /** Custom active-route detection. Default: startsWith match */
  isActive?: (href: string, pathname: string) => boolean
}

export interface AdminHeaderProps {
  /** Left slot — page title, breadcrumbs */
  left?: ReactNode
  /** Center slot — search bar */
  center?: ReactNode
  /** Right slot — theme toggle, avatar, actions */
  right?: ReactNode
}
