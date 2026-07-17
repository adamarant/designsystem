'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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
 * rows), empty state, sortable headers (.ds-table__sort), and a footer slot
 * that lives inside the one bordered wrapper — no outer card, no double border.
 */
export function AdminTable({ columns, rows, rowKey, loading = false, loadingRows = 5, empty, sort, onSortChange, footer, className, }) {
    const getKey = (row, i) => rowKey ? rowKey(row) : String(row.id ?? i);
    return (_jsxs("div", { className: className ? `ds-table-wrapper ${className}` : 'ds-table-wrapper', children: [_jsxs("table", { className: "ds-table", children: [_jsx("thead", { children: _jsx("tr", { children: columns.map((col) => {
                                const sortable = col.sortKey && onSortChange;
                                return (_jsx("th", { className: cellClass(col) || undefined, children: sortable ? (_jsx("button", { type: "button", className: sortButtonClass(sort, col.sortKey), onClick: () => onSortChange(nextSort(sort, col.sortKey)), "aria-label": typeof col.header === 'string' ? `Sort by ${col.header}` : undefined, children: col.header })) : (col.header) }, col.key));
                            }) }) }), _jsx("tbody", { children: loading ? (Array.from({ length: loadingRows }).map((_, r) => (_jsx("tr", { className: "ds-table__loading", children: columns.map((col) => (_jsx("td", {}, col.key))) }, `sk-${r}`)))) : rows.length === 0 ? (_jsx("tr", { className: "ds-table__empty", children: _jsx("td", { colSpan: columns.length, children: empty }) })) : (rows.map((row, i) => (_jsx("tr", { children: columns.map((col) => (_jsx("td", { className: cellClass(col) || undefined, children: col.cell(row) }, col.key))) }, getKey(row, i))))) })] }), footer && _jsx("div", { className: "ds-table-footer", children: footer })] }));
}
//# sourceMappingURL=AdminTable.js.map