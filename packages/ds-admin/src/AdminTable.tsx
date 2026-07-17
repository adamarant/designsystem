'use client'

import { useState } from 'react'
import { GripVerticalIcon } from './icons.js'
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
 * rows), empty state, sortable headers (.ds-table__sort), a footer slot inside
 * the one bordered wrapper, and — opt-in — drag-to-reorder, inline editing, and
 * a trailing add row.
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
  onReorder,
  editingKey,
  appendRow,
  rowClassName,
  className,
}: AdminTableProps<Row>) {
  const getKey = (row: Row, i: number): string =>
    rowKey ? rowKey(row) : String((row as { id?: string | number }).id ?? i)

  const reorderable = !!onReorder
  const [draggedKey, setDraggedKey] = useState<string | null>(null)
  const [overKey, setOverKey] = useState<string | null>(null)
  const colCount = columns.length + (reorderable ? 1 : 0)

  function reorder(fromKey: string, toKey: string) {
    if (!onReorder || fromKey === toKey) return
    const keys = rows.map((r, i) => getKey(r, i))
    const from = keys.indexOf(fromKey)
    const to = keys.indexOf(toKey)
    if (from === -1 || to === -1) return
    const next = [...rows]
    const [moved] = next.splice(from, 1)
    next.splice(to, 0, moved)
    onReorder(next)
  }

  function dragProps(key: string) {
    if (!reorderable) return {}
    return {
      draggable: true,
      onDragStart: (e: React.DragEvent) => {
        setDraggedKey(key)
        e.dataTransfer.effectAllowed = 'move'
        e.dataTransfer.setData('text/plain', key)
      },
      onDragEnd: () => {
        setDraggedKey(null)
        setOverKey(null)
      },
      onDragOver: (e: React.DragEvent) => {
        if (!draggedKey) return
        e.preventDefault()
        e.dataTransfer.dropEffect = 'move'
      },
      onDragEnter: () => {
        if (draggedKey && draggedKey !== key) setOverKey(key)
      },
      onDragLeave: () => setOverKey(null),
      onDrop: (e: React.DragEvent) => {
        e.preventDefault()
        if (draggedKey) reorder(draggedKey, key)
        setDraggedKey(null)
        setOverKey(null)
      },
    }
  }

  function rowClass(key: string, row: Row): string | undefined {
    return [
      reorderable && draggedKey === key ? 'ds-sortable--dragging' : '',
      reorderable && overKey === key ? 'ds-sortable--over' : '',
      rowClassName?.(row) ?? '',
    ]
      .filter(Boolean)
      .join(' ') || undefined
  }

  return (
    <div className={className ? `ds-table-wrapper ${className}` : 'ds-table-wrapper'}>
      <table className="ds-table">
        <thead>
          <tr>
            {reorderable && <th aria-hidden="true" />}
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
                {Array.from({ length: colCount }).map((_, c) => (
                  <td key={c} />
                ))}
              </tr>
            ))
          ) : rows.length === 0 && !appendRow ? (
            <tr className="ds-table__empty">
              <td colSpan={colCount}>{empty}</td>
            </tr>
          ) : (
            rows.map((row, i) => {
              const key = getKey(row, i)
              const editing = editingKey != null && editingKey === key
              const ctx = { editing }
              return (
                <tr key={key} className={rowClass(key, row)} {...(editing ? {} : dragProps(key))}>
                  {reorderable && (
                    <td>
                      {!editing && (
                        <span className="ds-sortable__handle ds-sortable__handle--visible">
                          <GripVerticalIcon width={16} height={16} />
                        </span>
                      )}
                    </td>
                  )}
                  {columns.map((col) => (
                    <td key={col.key} className={cellClass(col) || undefined}>
                      {col.cell(row, ctx)}
                    </td>
                  ))}
                </tr>
              )
            })
          )}
          {appendRow && (
            <tr>
              {reorderable && <td />}
              {appendRow}
            </tr>
          )}
        </tbody>
      </table>
      {footer && <div className="ds-table-footer">{footer}</div>}
    </div>
  )
}
