'use client'

import { ChevronLeftIcon, ChevronRightIcon } from './icons.js'
import type { AdminPaginationProps } from './types.js'

/**
 * Page controls: prev / "p / n" / next, over the DS .ds-pagination parts.
 * Renders only the nav cluster — an accompanying info string and the footer
 * layout belong to the container (e.g. AdminTable's .ds-table-footer). Renders
 * nothing on a single page.
 */
export function AdminPagination({
  page,
  totalPages,
  onPageChange,
  prevLabel = 'Previous page',
  nextLabel = 'Next page',
  className,
}: AdminPaginationProps) {
  if (totalPages <= 1) return null

  return (
    <nav
      className={className ? `ds-pagination ${className}` : 'ds-pagination'}
      aria-label="Pagination"
    >
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
  )
}
