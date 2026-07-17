'use client'

import { SearchIcon } from './icons.js'
import type { AdminToolbarProps } from './types.js'

/**
 * Filter bar above a data table: search box, filter selects, actions slot.
 * The actions slot is where consumer-specific controls live (an AI button, a
 * link to a sub-page) without forking the toolbar.
 */
export function AdminToolbar({ search, filters, actions, className }: AdminToolbarProps) {
  return (
    <div
      className={
        className
          ? `ds-flex ds-flex-wrap ds-gap-3 ds-items-center ${className}`
          : 'ds-flex ds-flex-wrap ds-gap-3 ds-items-center'
      }
    >
      {search && (
        <div className="ds-input-group ds-flex-1">
          <div className="ds-input-group__icon">
            <SearchIcon />
          </div>
          <input
            type="text"
            className="ds-input ds-input--lg"
            placeholder={search.placeholder}
            aria-label={search['aria-label'] ?? search.placeholder}
            value={search.value}
            onChange={(e) => search.onChange(e.target.value)}
            autoComplete="off"
          />
        </div>
      )}

      {filters?.map((filter, i) => (
        <select
          key={i}
          className="ds-select ds-input--lg"
          value={filter.value}
          onChange={(e) => filter.onChange(e.target.value)}
          aria-label={filter['aria-label']}
        >
          {filter.allLabel !== undefined && <option value="">{filter.allLabel}</option>}
          {filter.options.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
      ))}

      {actions}
    </div>
  )
}
