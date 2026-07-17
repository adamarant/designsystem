import type { AdminPaginationProps } from './types.js';
/**
 * Page controls: prev / "p / n" / next, over the DS .ds-pagination parts.
 * Renders only the nav cluster — an accompanying info string and the footer
 * layout belong to the container (e.g. AdminTable's .ds-table-footer). Renders
 * nothing on a single page.
 */
export declare function AdminPagination({ page, totalPages, onPageChange, prevLabel, nextLabel, className, }: AdminPaginationProps): import("react/jsx-runtime").JSX.Element | null;
//# sourceMappingURL=AdminPagination.d.ts.map