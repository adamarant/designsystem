'use client'

import type { AdminFormLayoutProps } from './types.js'

/**
 * Two-column admin edit shell over .ds-admin-form: a growing main column and an
 * optional fixed-width sidebar. Replaces the hand-rolled *-form__layout grid.
 *
 * Both columns own their internal rhythm as of 0.11.0 — drop AdminCards in as
 * siblings and they space themselves. Do NOT put a bottom-margin utility on the
 * cards: that was the workaround from when the columns were bare min-width
 * guards, and it now doubles up with the column gap.
 */
export function AdminFormLayout({ children, sidebar, className }: AdminFormLayoutProps) {
  return (
    <div className={className ? `ds-admin-form ${className}` : 'ds-admin-form'}>
      <div className="ds-admin-form__main">{children}</div>
      {sidebar && <aside className="ds-admin-form__sidebar">{sidebar}</aside>}
    </div>
  )
}
