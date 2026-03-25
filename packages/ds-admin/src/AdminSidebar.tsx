'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useSidebar } from './SidebarContext.js'
import type { AdminSidebarProps, NavItem } from './types.js'

function defaultIsActive(href: string, pathname: string): boolean {
  if (href === pathname) return true
  const segments = href.split('/').filter(Boolean)
  if (segments.length <= 1) return pathname === href
  return pathname.startsWith(href)
}

function NavItems({
  items,
  isActiveFn,
  showLabels,
  expandSubnav,
  onNavigate,
  pathname,
}: {
  items: NavItem[]
  isActiveFn: (href: string, pathname: string) => boolean
  showLabels: boolean
  expandSubnav: boolean
  onNavigate?: () => void
  pathname: string
}) {
  return (
    <>
      {items.map((item) => {
        const active = isActiveFn(item.href, pathname)

        return (
          <div key={item.id}>
            {item.disabled ? (
              <span
                className="ds-admin__nav-item"
                style={{ opacity: 0.5, cursor: 'not-allowed' }}
                title={!showLabels ? item.label : undefined}
              >
                <span className="ds-admin__nav-icon">{item.icon}</span>
                {showLabels && (
                  <span className="ds-admin__nav-label">{item.label}</span>
                )}
                {showLabels && item.badge}
              </span>
            ) : (
              <Link
                href={item.href}
                onClick={onNavigate}
                className={`ds-admin__nav-item${active ? ' ds-admin__nav-item--active' : ''}`}
                title={!showLabels ? item.label : undefined}
              >
                <span className="ds-admin__nav-icon">{item.icon}</span>
                {showLabels && (
                  <span className="ds-admin__nav-label">{item.label}</span>
                )}
                {showLabels && item.badge}
              </Link>
            )}

            {showLabels && item.children && (expandSubnav || active) && (
              <div className="ds-admin__subnav">
                {item.children.map((child) => {
                  const childActive = isActiveFn(child.href, pathname)
                  return (
                    <Link
                      key={child.id}
                      href={child.href}
                      onClick={onNavigate}
                      className={`ds-admin__subnav-item${childActive ? ' ds-admin__subnav-item--active' : ''}`}
                    >
                      {child.label}
                    </Link>
                  )
                })}
              </div>
            )}
          </div>
        )
      })}
    </>
  )
}

export function AdminSidebar({
  items,
  header,
  footer,
  collapsedHeader,
  afterNav,
  mobileHeader,
  isActive = defaultIsActive,
}: AdminSidebarProps) {
  const pathname = usePathname()
  const { isCollapsed, isMobileOpen, closeMobile } = useSidebar()

  const showLabels = !isCollapsed

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="ds-admin__sidebar">
        <div className="ds-admin__sidebar-header">
          {isCollapsed && collapsedHeader ? collapsedHeader : header}
        </div>

        <nav className="ds-admin__nav">
          <NavItems
            items={items}
            isActiveFn={isActive}
            showLabels={showLabels}
            expandSubnav={false}
            pathname={pathname}
          />
          {afterNav}
        </nav>

        {footer && (
          <div className="ds-admin__sidebar-footer">{footer}</div>
        )}
      </aside>

      {/* Mobile overlay */}
      {isMobileOpen && (
        <div className="ds-admin__overlay" onClick={closeMobile} />
      )}

      {/* Mobile drawer */}
      <div
        className={`ds-drawer ds-drawer--right ds-admin__mobile-menu${isMobileOpen ? ' ds-drawer--open' : ''}`}
        onClick={closeMobile}
      >
        <div className="ds-drawer__content" onClick={(e) => e.stopPropagation()}>
          {mobileHeader !== undefined ? (
            mobileHeader
          ) : (
            <div className="ds-flex ds-items-center ds-justify-end ds-px-4 ds-py-3">
              <button
                className="ds-nav__icon-btn"
                onClick={closeMobile}
                aria-label="Close menu"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>
          )}

          <div className="ds-drawer__body ds-p-0">
            <nav className="ds-admin__nav">
              <NavItems
                items={items}
                isActiveFn={isActive}
                showLabels
                expandSubnav
                onNavigate={closeMobile}
                pathname={pathname}
              />
              {afterNav}
            </nav>

            {footer && (
              <div className="ds-admin__sidebar-footer">{footer}</div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
