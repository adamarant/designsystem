'use client'

import type { AdminEmptyStateProps } from './types.js'

const VARIANT_CLASS: Record<NonNullable<AdminEmptyStateProps['variant']>, string> = {
  plain: '',
  card: 'ds-empty-state--card',
  compact: 'ds-empty-state--compact',
}

/**
 * "Nothing here yet" state over the DS .ds-empty-state component. Every admin
 * surface needs one — a list with no rows, a filtered result set, an empty
 * panel — so it lives here instead of being rebuilt per project out of
 * utility classes.
 *
 * Pass it to AdminTable's `empty` prop, or render it standalone for non-table
 * surfaces (card grids, panels).
 */
export function AdminEmptyState({
  title,
  description,
  icon,
  actions,
  variant = 'plain',
  align = 'center',
  className,
}: AdminEmptyStateProps) {
  const classes = [
    'ds-empty-state',
    VARIANT_CLASS[variant],
    align === 'left' ? 'ds-empty-state--left' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={classes}>
      {icon && <div className="ds-empty-state__icon">{icon}</div>}
      <h3 className="ds-empty-state__title">{title}</h3>
      {description && <p className="ds-empty-state__description">{description}</p>}
      {actions && <div className="ds-empty-state__actions">{actions}</div>}
    </div>
  )
}
