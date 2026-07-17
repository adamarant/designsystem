'use client'

import type { AdminConfirmDialogProps } from './types.js'

/**
 * Confirmation modal over the DS .ds-modal — the delete-confirm dialog every
 * table rebuilds by hand. Renders nothing when closed.
 */
export function AdminConfirmDialog({
  open,
  title,
  children,
  onConfirm,
  onCancel,
  confirmLabel = 'Confirm',
  cancelLabel = 'Cancel',
  danger = true,
  busy = false,
}: AdminConfirmDialogProps) {
  if (!open) return null

  return (
    <div className="ds-modal ds-modal--open" role="dialog" aria-modal="true">
      <div className="ds-modal__content">
        <div className="ds-modal__header">
          <h3>{title}</h3>
        </div>
        <div className="ds-modal__body">{children}</div>
        <div className="ds-modal__footer">
          <button
            type="button"
            onClick={onCancel}
            className="ds-btn ds-btn--secondary"
            disabled={busy}
          >
            {cancelLabel}
          </button>
          <button
            type="button"
            onClick={onConfirm}
            disabled={busy}
            className={danger ? 'ds-btn ds-btn--danger' : 'ds-btn'}
          >
            {confirmLabel}
          </button>
        </div>
      </div>
    </div>
  )
}
