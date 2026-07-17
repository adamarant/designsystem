'use client'

import { ChevronLeftIcon, ChevronRightIcon } from './icons.js'
import type { AdminPaginationProps } from './types.js'

/**
 * Simple table-footer pagination: an info string on the left, prev / "p / n" /
 * next on the right. Composes the DS .ds-pagination parts; renders nothing when
 * there is a single page.
 */
export function AdminPagination({
  page,
  totalPages,
  onPageChange,
  info,
  prevLabel = 'Previous page',
  nextLabel = 'Next page',
  className,
}: AdminPaginationProps) {
  if (totalPages <= 1) return null

  return (
    <div
      className={
        className
          ? `ds-flex ds-justify-between ds-items-center ${className}`
          : 'ds-flex ds-justify-between ds-items-center'
      }
    >
      <span className="ds-text-sm ds-text-secondary">{info}</span>
      <nav className="ds-pagination" aria-label="Pagination">
        <button
          type="button"
          className="ds-pagination__prev"
          onClick={() => onPageChange(Math.max(1, page - 1))}
          disabled={page <= 1}
          aria-label={prevLabel}
        >
          <ChevronLeftIcon width={16} height={16} />
        </button>
        <span className="ds-pagination__info">
          {page} / {totalPages}
        </span>
        <button
          type="button"
          className="ds-pagination__next"
          onClick={() => onPageChange(Math.min(totalPages, page + 1))}
          disabled={page >= totalPages}
          aria-label={nextLabel}
        >
          <ChevronRightIcon width={16} height={16} />
        </button>
      </nav>
    </div>
  )
}
