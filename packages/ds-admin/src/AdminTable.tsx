'use client'

import type {
  AdminTableAlign,
  AdminTableColumn,
  AdminTableProps,
  AdminSortState,
} from './types.js'

function alignClass(align: AdminTableAlign | undefined): string {
  // The DS ships physical text-align utilities only.
  if (align === 'end') return 'ds-text-right'
  if (align === 'center') return 'ds-text-center'
  return ''
}

function cellClass<Row>(col: AdminTableColumn<Row>): string {
  return [col.primary ? 'ds-table__cell--primary' : '', alignClass(col.align), col.className]
    .filter(Boolean)
    .join(' ')
}

function nextSort(current: AdminSortState | undefined, key: string): AdminSortState {
  if (current?.key === key) {
    return { key, direction: current.direction === 'asc' ? 'desc' : 'asc' }
  }
  return { key, direction: 'asc' }
}

function sortButtonClass(active: AdminSortState | undefined, key: string): string {
  if (active?.key !== key) return 'ds-table__sort'
  return active.direction === 'asc'
    ? 'ds-table__sort ds-table__sort--asc'
    : 'ds-table__sort ds-table__sort--desc'
}

/**
 * Data table over the DS .ds-table component. Columns are declarative and each
 * cell is a render function, so different row shapes fit the same table without
 * the table ever touching a row field. Uses the DS-native loading (shimmer
 * rows), empty state, sortable headers (.ds-table__sort), and a footer slot
 * that lives inside the one bordered wrapper — no outer card, no double border.
 */
export function AdminTable<Row>({
  columns,
  rows,
  rowKey,
  loading = false,
  loadingRows = 5,
  empty,
  sort,
  onSortChange,
  footer,
  className,
}: AdminTableProps<Row>) {
  const getKey = (row: Row, i: number): string =>
    rowKey ? rowKey(row) : String((row as { id?: string | number }).id ?? i)

  return (
    <div className={className ? `ds-table-wrapper ${className}` : 'ds-table-wrapper'}>
      <table className="ds-table">
        <thead>
          <tr>
            {columns.map((col) => {
              const sortable = col.sortKey && onSortChange
              return (
                <th key={col.key} className={cellClass(col) || undefined}>
                  {sortable ? (
                    <button
                      type="button"
                      className={sortButtonClass(sort, col.sortKey!)}
                      onClick={() => onSortChange!(nextSort(sort, col.sortKey!))}
                      aria-label={
                        typeof col.header === 'string' ? `Sort by ${col.header}` : undefined
                      }
                    >
                      {col.header}
                    </button>
                  ) : (
                    col.header
                  )}
                </th>
              )
            })}
          </tr>
        </thead>
        <tbody>
          {loading ? (
            Array.from({ length: loadingRows }).map((_, r) => (
              <tr key={`sk-${r}`} className="ds-table__loading">
                {columns.map((col) => (
                  <td key={col.key} />
                ))}
              </tr>
            ))
          ) : rows.length === 0 ? (
            <tr className="ds-table__empty">
              <td colSpan={columns.length}>{empty}</td>
            </tr>
          ) : (
            rows.map((row, i) => (
              <tr key={getKey(row, i)}>
                {columns.map((col) => (
                  <td key={col.key} className={cellClass(col) || undefined}>
                    {col.cell(row)}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
      {footer && <div className="ds-table-footer">{footer}</div>}
    </div>
  )
}
