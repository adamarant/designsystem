import { type ComponentPropsWithoutRef } from "react";
export interface TableWrapperProps extends ComponentPropsWithoutRef<"div"> {
    className?: string;
}
export interface TableProps extends ComponentPropsWithoutRef<"table"> {
    /** Reduced padding. */
    compact?: boolean;
    /** Minimal padding + smaller font. */
    dense?: boolean;
    /** Alternating row backgrounds. */
    striped?: boolean;
    /** Cell borders. */
    bordered?: boolean;
    /** Sticky thead. */
    stickyHeader?: boolean;
    /** Disable row hover. */
    noHover?: boolean;
    /** Card-style stacking on mobile. */
    stack?: boolean;
    /** Additional className */
    className?: string;
}
type SortDirection = "asc" | "desc" | "none";
export interface TableSortProps extends ComponentPropsWithoutRef<"button"> {
    /** Current sort direction. Default: "none" */
    direction?: SortDirection;
    /** Additional className */
    className?: string;
}
export interface TableFooterProps extends ComponentPropsWithoutRef<"div"> {
    className?: string;
}
export declare const Table: import("react").ForwardRefExoticComponent<TableProps & import("react").RefAttributes<HTMLTableElement>> & {
    Wrapper: import("react").ForwardRefExoticComponent<TableWrapperProps & import("react").RefAttributes<HTMLDivElement>>;
    Sort: import("react").ForwardRefExoticComponent<TableSortProps & import("react").RefAttributes<HTMLButtonElement>>;
    Footer: import("react").ForwardRefExoticComponent<TableFooterProps & import("react").RefAttributes<HTMLDivElement>>;
};
export {};
//# sourceMappingURL=Table.d.ts.map