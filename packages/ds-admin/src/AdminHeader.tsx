'use client'

import { useSidebar } from './SidebarContext.js'
import type { AdminHeaderProps } from './types.js'

export function AdminHeader({ left, center, right }: AdminHeaderProps) {
  const { isMobileOpen, openMobile, closeMobile } = useSidebar()

  return (
    <header className="ds-admin__header">
      <div className="ds-admin__header-inner">
        {left && <div className="ds-flex ds-items-center ds-gap-3 ds-flex-1 ds-min-w-0">{left}</div>}
        {center && <div className="ds-flex ds-items-center ds-flex-1 ds-justify-center">{center}</div>}
        {right && <div className="ds-flex ds-items-center ds-gap-3 ds-ml-auto">{right}</div>}

        <button
          onClick={isMobileOpen ? closeMobile : openMobile}
          className="ds-nav__icon-btn ds-admin__header-toggle"
          aria-label="Toggle menu"
        >
          {isMobileOpen ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>
      </div>
    </header>
  )
}
