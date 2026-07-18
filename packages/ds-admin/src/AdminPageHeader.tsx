'use client'

import { ArrowLeftIcon } from './icons.js'
import type { AdminPageHeaderProps } from './types.js'

/**
 * Top bar of an admin page: optional back arrow, title, right-aligned actions.
 * Replaces the flex-justify-between + heading every admin page rebuilds by hand.
 */
export function AdminPageHeader({
  title,
  description,
  onBack,
  backLabel = 'Back',
  actions,
  titleClassName = 'ds-admin-title',
  className,
}: AdminPageHeaderProps) {
  return (
    <div className={className ? `ds-page-header ${className}` : 'ds-page-header'}>
      <div className="ds-page-header__lead">
        {onBack && (
          <button
            type="button"
            onClick={onBack}
            className="ds-page-header__back"
            aria-label={backLabel}
          >
            <ArrowLeftIcon />
          </button>
        )}
        <div className="ds-min-w-0">
          <h1 className={`ds-page-header__title ${titleClassName}`}>{title}</h1>
          {description && <p className="ds-page-header__description">{description}</p>}
        </div>
      </div>
      {actions && <div className="ds-page-header__actions">{actions}</div>}
    </div>
  )
}
