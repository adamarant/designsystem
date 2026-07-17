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
/**
 * Data table over the DS .ds-table component. Columns are declarative and each
 * cell is a render function, so different row shapes fit the same table without
 * the table ever touching a row field. Uses the DS-native loading (shimmer
 * rows) and empty states, closing the hand-rolled __header-row / __header-cell
 * phantom classes that grew from copy-pasting tables.
 */
export function AdminTable({ columns, rows, rowKey, loading = false, loadingRows = 5, empty, className, }) {
    const getKey = (row, i) => rowKey ? rowKey(row) : String(row.id ?? i);
    return (_jsx("div", { className: className ? `ds-table-wrapper ${className}` : 'ds-table-wrapper', children: _jsxs("table", { className: "ds-table", children: [_jsx("thead", { children: _jsx("tr", { children: columns.map((col) => (_jsx("th", { className: cellClass(col) || undefined, children: col.header }, col.key))) }) }), _jsx("tbody", { children: loading ? (Array.from({ length: loadingRows }).map((_, r) => (_jsx("tr", { className: "ds-table__loading", children: columns.map((col) => (_jsx("td", {}, col.key))) }, `sk-${r}`)))) : rows.length === 0 ? (_jsx("tr", { className: "ds-table__empty", children: _jsx("td", { colSpan: columns.length, children: empty }) })) : (rows.map((row, i) => (_jsx("tr", { children: columns.map((col) => (_jsx("td", { className: cellClass(col) || undefined, children: col.cell(row) }, col.key))) }, getKey(row, i))))) })] }) }));
}
//# sourceMappingURL=AdminTable.js.map