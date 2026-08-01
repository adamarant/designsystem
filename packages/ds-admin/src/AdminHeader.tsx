'use client'

import { useSidebar } from './SidebarContext.js'
import type { AdminHeaderProps } from './types.js'
import { IconClose, IconMenu } from '@adamarant/ds-react'

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
            <IconClose width={20} height={20} />
          ) : (
            <IconMenu width={20} height={20} />
          )}
        </button>
      </div>
    </header>
  )
}
