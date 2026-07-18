'use client'

import type { AdminSpinnerProps } from './types.js'

const SIZE_CLASS: Record<NonNullable<AdminSpinnerProps['size']>, string> = {
  sm: 'ds-spinner--sm',
  md: '',
  lg: 'ds-spinner--lg',
}

/**
 * Loading spinner over the DS .ds-spinner. By default it centres itself in a
 * padded block, which is what a panel waiting on a fetch needs; set
 * block={false} to drop it inline next to something.
 *
 * Tables don't need this — AdminTable renders skeleton rows via `loading`.
 * Use it for the surfaces that aren't tables (card grids, editors, panels).
 */
export function AdminSpinner({
  size = 'md',
  muted = false,
  block = true,
  label = 'Loading',
  className,
}: AdminSpinnerProps) {
  const spinner = (
    <span
      className={
        ['ds-spinner', SIZE_CLASS[size], muted ? 'ds-spinner--muted' : '', block ? '' : className]
          .filter(Boolean)
          .join(' ')
      }
      role="status"
      aria-label={label}
    />
  )

  if (!block) return spinner

  return (
    <div
      className={
        ['ds-flex', 'ds-items-center', 'ds-justify-center', 'ds-py-20', className]
          .filter(Boolean)
          .join(' ')
      }
    >
      {spinner}
    </div>
  )
}
