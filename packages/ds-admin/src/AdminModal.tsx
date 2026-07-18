'use client'

import { XIcon } from './icons.js'
import type { AdminModalProps } from './types.js'

const SIZE_CLASS: Record<NonNullable<AdminModalProps['size']>, string> = {
  md: 'ds-modal--md',
  lg: 'ds-modal--lg',
}

/**
 * Generic dialog over the DS .ds-modal — the shell every admin modal needs
 * (media picker, history, detail panel) and that projects kept rebuilding by
 * hand. AdminConfirmDialog stays the shortcut for a yes/no; reach for this one
 * whenever the body is real content.
 *
 * The .ds-modal element is itself the backdrop, so there is no separate
 * overlay node — hand-rolled copies that added one were styling nothing,
 * since the DS ships no such element.
 *
 * Renders nothing when closed.
 */
export function AdminModal({
  open,
  title,
  children,
  onClose,
  footer,
  size = 'md',
  closeLabel = 'Close',
  closeOnBackdrop = true,
  className,
}: AdminModalProps) {
  if (!open) return null

  const classes = ['ds-modal', 'ds-modal--open', SIZE_CLASS[size], className]
    .filter(Boolean)
    .join(' ')

  return (
    <div
      className={classes}
      role="dialog"
      aria-modal="true"
      onClick={closeOnBackdrop ? onClose : undefined}
    >
      {/* Stop clicks inside the panel from reaching the backdrop handler. */}
      <div className="ds-modal__content" onClick={(e) => e.stopPropagation()}>
        <div className="ds-modal__header">
          <h3>{title}</h3>
          <button
            type="button"
            onClick={onClose}
            className="ds-modal__close"
            aria-label={closeLabel}
          >
            <XIcon width={18} height={18} />
          </button>
        </div>
        <div className="ds-modal__body">{children}</div>
        {footer && <div className="ds-modal__footer">{footer}</div>}
      </div>
    </div>
  )
}
