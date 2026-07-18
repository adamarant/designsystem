'use client'

import type { AdminDetailListProps } from './types.js'

/**
 * Read-only label/value pairs over the DS .ds-description-list — settings
 * summaries, metadata panels, the "details" half of a record. This is the
 * read-only counterpart to AdminField: AdminField wraps an editable control,
 * this one just states facts.
 */
export function AdminDetailList({
  items,
  layout = 'stacked',
  bordered = false,
  emptyValue = '—',
  className,
}: AdminDetailListProps) {
  const classes = [
    'ds-description-list',
    layout === 'horizontal' ? 'ds-description-list--horizontal' : '',
    bordered ? 'ds-description-list--bordered' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <dl className={classes}>
      {items.map((item, i) => (
        <div key={i} className="ds-description-list__item">
          <dt className="ds-description-list__term">{item.label}</dt>
          <dd
            className={
              item.mono
                ? 'ds-description-list__detail ds-font-mono'
                : 'ds-description-list__detail'
            }
          >
            {item.value || emptyValue}
          </dd>
        </div>
      ))}
    </dl>
  )
}
