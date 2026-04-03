import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import { cn } from "../utils/cn";
/* ================================================================== */
/*  Maps                                                               */
/* ================================================================== */
const sortMap = {
    none: "",
    asc: "ds-table__sort--asc",
    desc: "ds-table__sort--desc",
};
/* ================================================================== */
/*  Sub-components                                                     */
/* ================================================================== */
const TableWrapper = forwardRef(function TableWrapper({ className, ...rest }, ref) {
    return (_jsx("div", { ref: ref, className: cn("ds-table-wrapper", className), ...rest }));
});
const TableSort = forwardRef(function TableSort({ direction = "none", className, ...rest }, ref) {
    return (_jsx("button", { ref: ref, "aria-sort": direction === "none" ? undefined : (direction === "asc" ? "ascending" : "descending"), className: cn("ds-table__sort", sortMap[direction], className), ...rest }));
});
const TableFooter = forwardRef(function TableFooter({ className, ...rest }, ref) {
    return (_jsx("div", { ref: ref, className: cn("ds-table-footer", className), ...rest }));
});
/* ================================================================== */
/*  Table (root + dot notation)                                        */
/* ================================================================== */
const TableRoot = forwardRef(function Table({ compact, dense, striped, bordered, stickyHeader, noHover, stack, className, ...rest }, ref) {
    return (_jsx("table", { ref: ref, className: cn("ds-table", compact && "ds-table--compact", dense && "ds-table--dense", striped && "ds-table--striped", bordered && "ds-table--bordered", stickyHeader && "ds-table--sticky-header", noHover && "ds-table--no-hover", stack && "ds-table--stack", className), ...rest }));
});
export const Table = Object.assign(TableRoot, {
    Wrapper: TableWrapper,
    Sort: TableSort,
    Footer: TableFooter,
});
//# sourceMappingURL=Table.js.map