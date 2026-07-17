'use client'

import type { AdminTableAlign, AdminTableColumn, AdminTableProps } from './types.js'

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

/**
 * Data table over the DS .ds-table component. Columns are declarative and each
 * cell is a render function, so different row shapes fit the same table without
 * the table ever touching a row field. Uses the DS-native loading (shimmer
 * rows) and empty states, closing the hand-rolled __header-row / __header-cell
 * phantom classes that grew from copy-pasting tables.
 */
export function AdminTable<Row>({
  columns,
  rows,
  rowKey,
  loading = false,
  loadingRows = 5,
  empty,
  className,
}: AdminTableProps<Row>) {
  const getKey = (row: Row, i: number): string =>
    rowKey ? rowKey(row) : String((row as { id?: string | number }).id ?? i)

  return (
    <div className={className ? `ds-table-wrapper ${className}` : 'ds-table-wrapper'}>
      <table className="ds-table">
        <thead>
          <tr>
            {columns.map((col) => (
              <th key={col.key} className={cellClass(col) || undefined}>
                {col.header}
              </th>
            ))}
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
    </div>
  )
}
