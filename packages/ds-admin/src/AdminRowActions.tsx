'use client'

import type { AdminRowAction, AdminRowActionsProps } from './types.js'

function actionClass(action: AdminRowAction): string {
  return `ds-btn ds-btn--icon ds-btn--ghost ds-btn--sm${action.danger ? ' ds-text-error' : ''}`
}

/**
 * The trailing icon-button cluster of a table row (view / edit / delete).
 * Icons are passed by the consumer, so ds-admin stays icon-free; the component
 * gives every row the same button styling and spacing.
 */
export function AdminRowActions({ actions, className }: AdminRowActionsProps) {
  return (
    <div className={className ? `ds-flex ds-gap-1 ${className}` : 'ds-flex ds-gap-1'}>
      {actions.map((action, i) =>
        action.href ? (
          <a
            key={i}
            href={action.href}
            className={actionClass(action)}
            title={action.label}
            aria-label={action.label}
            {...(action.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
          >
            {action.icon}
          </a>
        ) : (
          <button
            key={i}
            type="button"
            onClick={action.onClick}
            disabled={action.disabled}
            className={actionClass(action)}
            title={action.label}
            aria-label={action.label}
          >
            {action.icon}
          </button>
        )
      )}
    </div>
  )
}
