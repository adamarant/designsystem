import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import { cn } from "../utils/cn";
const sizeMap = {
    sm: "ds-pagination--sm",
    md: "",
    lg: "ds-pagination--lg",
};
const List = forwardRef(function List({ size = "md", className, ...rest }, ref) {
    return (_jsx("ul", { ref: ref, className: cn("ds-pagination", sizeMap[size], className), ...rest }));
});
const Item = forwardRef(function Item({ active, className, ...rest }, ref) {
    return (_jsx("button", { ref: ref, "aria-current": active ? "page" : undefined, className: cn("ds-pagination__item", active && "ds-pagination__item--active", className), ...rest }));
});
const PaginationRoot = forwardRef(function Pagination({ className, ...rest }, ref) {
    return _jsx("nav", { ref: ref, "aria-label": "Pagination", className: className, ...rest });
});
/* Flat exports — RSC-safe (dot access on client refs is undefined in RSC). */
export { List as PaginationList, Item as PaginationItem };
export const Pagination = Object.assign(PaginationRoot, { List, Item });
//# sourceMappingURL=Pagination.js.map