'use client'

import type { AdminFormLayoutProps } from './types.js'

/**
 * Two-column admin edit shell over .ds-admin-form: a growing main column and an
 * optional fixed-width sidebar. Replaces the hand-rolled *-form__layout grid.
 */
export function AdminFormLayout({ children, sidebar, className }: AdminFormLayoutProps) {
  return (
    <div className={className ? `ds-admin-form ${className}` : 'ds-admin-form'}>
      <div className="ds-admin-form__main">{children}</div>
      {sidebar && <aside className="ds-admin-form__sidebar">{sidebar}</aside>}
    </div>
  )
}
