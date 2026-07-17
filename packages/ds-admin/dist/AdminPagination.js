'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ChevronLeftIcon, ChevronRightIcon } from './icons.js';
/**
 * Page controls: prev / "p / n" / next, over the DS .ds-pagination parts.
 * Renders only the nav cluster — an accompanying info string and the footer
 * layout belong to the container (e.g. AdminTable's .ds-table-footer). Renders
 * nothing on a single page.
 */
export function AdminPagination({ page, totalPages, onPageChange, prevLabel = 'Previous page', nextLabel = 'Next page', className, }) {
    if (totalPages <= 1)
        return null;
    return (_jsxs("nav", { className: className ? `ds-pagination ${className}` : 'ds-pagination', "aria-label": "Pagination", children: [_jsx("button", { type: "button", className: "ds-pagination__prev", onClick: () => onPageChange(Math.max(1, page - 1)), disabled: page <= 1, "aria-label": prevLabel, children: _jsx(ChevronLeftIcon, { width: 16, height: 16 }) }), _jsxs("span", { className: "ds-pagination__info", children: [page, " / ", totalPages] }), _jsx("button", { type: "button", className: "ds-pagination__next", onClick: () => onPageChange(Math.min(totalPages, page + 1)), disabled: page >= totalPages, "aria-label": nextLabel, children: _jsx(ChevronRightIcon, { width: 16, height: 16 }) })] }));
}
//# sourceMappingURL=AdminPagination.js.map