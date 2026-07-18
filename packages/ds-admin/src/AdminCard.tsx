'use client'

import type { AdminCardProps } from './types.js'

/**
 * A titled admin card over .ds-card. The header holds the title and an optional
 * right-aligned actions slot (e.g. a locale switcher); the body holds anything.
 * Omit the title for a plain body-only card.
 */
export function AdminCard({
  title,
  description,
  actions,
  children,
  className,
}: AdminCardProps) {
  return (
    <div className={className ? `ds-card ${className}` : 'ds-card'}>
      {title && (
        <div className="ds-card__header ds-flex ds-justify-between ds-items-center">
          <div className="ds-min-w-0">
            <h2 className="ds-card__title">{title}</h2>
            {description && <p className="ds-card__description">{description}</p>}
          </div>
          {actions}
        </div>
      )}
      <div className="ds-card__body">{children}</div>
    </div>
  )
}
