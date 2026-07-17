'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ChevronLeftIcon, ChevronRightIcon } from './icons.js';
/**
 * Simple table-footer pagination: an info string on the left, prev / "p / n" /
 * next on the right. Composes the DS .ds-pagination parts; renders nothing when
 * there is a single page.
 */
export function AdminPagination({ page, totalPages, onPageChange, info, prevLabel = 'Previous page', nextLabel = 'Next page', className, }) {
    if (totalPages <= 1)
        return null;
    return (_jsxs("div", { className: className
            ? `ds-flex ds-justify-between ds-items-center ${className}`
            : 'ds-flex ds-justify-between ds-items-center', children: [_jsx("span", { className: "ds-text-sm ds-text-secondary", children: info }), _jsxs("nav", { className: "ds-pagination", "aria-label": "Pagination", children: [_jsx("button", { type: "button", className: "ds-pagination__prev", onClick: () => onPageChange(Math.max(1, page - 1)), disabled: page <= 1, "aria-label": prevLabel, children: _jsx(ChevronLeftIcon, { width: 16, height: 16 }) }), _jsxs("span", { className: "ds-pagination__info", children: [page, " / ", totalPages] }), _jsx("button", { type: "button", className: "ds-pagination__next", onClick: () => onPageChange(Math.min(totalPages, page + 1)), disabled: page >= totalPages, "aria-label": nextLabel, children: _jsx(ChevronRightIcon, { width: 16, height: 16 }) })] })] }));
}
//# sourceMappingURL=AdminPagination.js.map