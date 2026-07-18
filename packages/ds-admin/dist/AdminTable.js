'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { GripVerticalIcon } from './icons.js';
function alignClass(align) {
    // The DS ships physical text-align utilities only.
    if (align === 'end')
        return 'ds-text-right';
    if (align === 'center')
        return 'ds-text-center';
    return '';
}
function cellClass(col) {
    return [col.primary ? 'ds-table__cell--primary' : '', alignClass(col.align), col.className]
        .filter(Boolean)
        .join(' ');
}
function nextSort(current, key) {
    if (current?.key === key) {
        return { key, direction: current.direction === 'asc' ? 'desc' : 'asc' };
    }
    return { key, direction: 'asc' };
}
function sortButtonClass(active, key) {
    if (active?.key !== key)
        return 'ds-table__sort';
    return active.direction === 'asc'
        ? 'ds-table__sort ds-table__sort--asc'
        : 'ds-table__sort ds-table__sort--desc';
}
/**
 * Data table over the DS .ds-table component. Columns are declarative and each
 * cell is a render function, so different row shapes fit the same table without
 * the table ever touching a row field. Uses the DS-native loading (shimmer
 * rows), empty state, sortable headers (.ds-table__sort), a footer slot inside
 * the one bordered wrapper, and — opt-in — drag-to-reorder, inline editing, and
 * a trailing add row.
 */
export function AdminTable({ columns, rows, rowKey, loading = false, loadingRows = 5, empty, sort, onSortChange, footer, onReorder, editingKey, appendRow, rowClassName, onRowClick, className, }) {
    const getKey = (row, i) => rowKey ? rowKey(row) : String(row.id ?? i);
    const reorderable = !!onReorder;
    const [draggedKey, setDraggedKey] = useState(null);
    const [overKey, setOverKey] = useState(null);
    const colCount = columns.length + (reorderable ? 1 : 0);
    function reorder(fromKey, toKey) {
        if (!onReorder || fromKey === toKey)
            return;
        const keys = rows.map((r, i) => getKey(r, i));
        const from = keys.indexOf(fromKey);
        const to = keys.indexOf(toKey);
        if (from === -1 || to === -1)
            return;
        const next = [...rows];
        const [moved] = next.splice(from, 1);
        next.splice(to, 0, moved);
        onReorder(next);
    }
    function dragProps(key) {
        if (!reorderable)
            return {};
        return {
            draggable: true,
            onDragStart: (e) => {
                setDraggedKey(key);
                e.dataTransfer.effectAllowed = 'move';
                e.dataTransfer.setData('text/plain', key);
            },
            onDragEnd: () => {
                setDraggedKey(null);
                setOverKey(null);
            },
            onDragOver: (e) => {
                if (!draggedKey)
                    return;
                e.preventDefault();
                e.dataTransfer.dropEffect = 'move';
            },
            onDragEnter: () => {
                if (draggedKey && draggedKey !== key)
                    setOverKey(key);
            },
            onDragLeave: () => setOverKey(null),
            onDrop: (e) => {
                e.preventDefault();
                if (draggedKey)
                    reorder(draggedKey, key);
                setDraggedKey(null);
                setOverKey(null);
            },
        };
    }
    function rowClass(key, row, clickable) {
        return [
            reorderable && draggedKey === key ? 'ds-sortable--dragging' : '',
            reorderable && overKey === key ? 'ds-sortable--over' : '',
            clickable ? 'ds-cursor-pointer' : '',
            rowClassName?.(row) ?? '',
        ]
            .filter(Boolean)
            .join(' ') || undefined;
    }
    return (_jsxs("div", { className: className ? `ds-table-wrapper ${className}` : 'ds-table-wrapper', children: [_jsxs("table", { className: "ds-table", children: [_jsx("thead", { children: _jsxs("tr", { children: [reorderable && _jsx("th", { "aria-hidden": "true" }), columns.map((col) => {
                                    const sortable = col.sortKey && onSortChange;
                                    return (_jsx("th", { className: cellClass(col) || undefined, children: sortable ? (_jsx("button", { type: "button", className: sortButtonClass(sort, col.sortKey), onClick: () => onSortChange(nextSort(sort, col.sortKey)), "aria-label": typeof col.header === 'string' ? `Sort by ${col.header}` : undefined, children: col.header })) : (col.header) }, col.key));
                                })] }) }), _jsxs("tbody", { children: [loading ? (Array.from({ length: loadingRows }).map((_, r) => (_jsx("tr", { className: "ds-table__loading", children: Array.from({ length: colCount }).map((_, c) => (_jsx("td", {}, c))) }, `sk-${r}`)))) : rows.length === 0 && !appendRow ? (_jsx("tr", { className: "ds-table__empty", children: _jsx("td", { colSpan: colCount, children: empty }) })) : (rows.map((row, i) => {
                                const key = getKey(row, i);
                                const editing = editingKey != null && editingKey === key;
                                const ctx = { editing };
                                const clickable = !!onRowClick && !editing;
                                return (_jsxs("tr", { className: rowClass(key, row, clickable), ...(clickable ? { onClick: () => onRowClick(row) } : {}), ...(editing ? {} : dragProps(key)), children: [reorderable && (_jsx("td", { children: !editing && (_jsx("span", { className: "ds-sortable__handle ds-sortable__handle--visible", children: _jsx(GripVerticalIcon, { width: 16, height: 16 }) })) })), columns.map((col) => (_jsx("td", { className: cellClass(col) || undefined, children: col.cell(row, ctx) }, col.key)))] }, key));
                            })), appendRow && (_jsxs("tr", { children: [reorderable && _jsx("td", {}), appendRow] }))] })] }), footer && _jsx("div", { className: "ds-table-footer", children: footer })] }));
}
//# sourceMappingURL=AdminTable.js.map