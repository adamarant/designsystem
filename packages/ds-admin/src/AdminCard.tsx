'use client'

import type { AdminCardProps } from './types.js'

/**
 * A titled admin card over .ds-card. The header holds the title and an optional
 * right-aligned actions slot (e.g. a locale switcher); the body holds anything.
 * Omit the title for a plain body-only card.
 */
export function AdminCard({ title, actions, children, className }: AdminCardProps) {
  return (
    <div className={className ? `ds-card ${className}` : 'ds-card'}>
      {title && (
        <div className="ds-card__header ds-flex ds-justify-between ds-items-center">
          <h2 className="ds-card__title">{title}</h2>
          {actions}
        </div>
      )}
      <div className="ds-card__body">{children}</div>
    </div>
  )
}
