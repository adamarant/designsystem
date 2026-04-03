import { type ComponentPropsWithoutRef, forwardRef } from "react";
import { cn } from "../utils/cn";

/* ================================================================== */
/*  Types                                                              */
/* ================================================================== */

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

/* ================================================================== */
/*  Maps                                                               */
/* ================================================================== */

const sortMap: Record<SortDirection, string> = {
  none: "",
  asc: "ds-table__sort--asc",
  desc: "ds-table__sort--desc",
};

/* ================================================================== */
/*  Sub-components                                                     */
/* ================================================================== */

const TableWrapper = forwardRef<HTMLDivElement, TableWrapperProps>(
  function TableWrapper({ className, ...rest }, ref) {
    return (
      <div ref={ref} className={cn("ds-table-wrapper", className)} {...rest} />
    );
  },
);

const TableSort = forwardRef<HTMLButtonElement, TableSortProps>(
  function TableSort({ direction = "none", className, ...rest }, ref) {
    return (
      <button
        ref={ref}
        aria-sort={direction === "none" ? undefined : (direction === "asc" ? "ascending" : "descending")}
        className={cn("ds-table__sort", sortMap[direction], className)}
        {...rest}
      />
    );
  },
);

const TableFooter = forwardRef<HTMLDivElement, TableFooterProps>(
  function TableFooter({ className, ...rest }, ref) {
    return (
      <div ref={ref} className={cn("ds-table-footer", className)} {...rest} />
    );
  },
);

/* ================================================================== */
/*  Table (root + dot notation)                                        */
/* ================================================================== */

const TableRoot = forwardRef<HTMLTableElement, TableProps>(
  function Table(
    { compact, dense, striped, bordered, stickyHeader, noHover, stack, className, ...rest },
    ref,
  ) {
    return (
      <table
        ref={ref}
        className={cn(
          "ds-table",
          compact && "ds-table--compact",
          dense && "ds-table--dense",
          striped && "ds-table--striped",
          bordered && "ds-table--bordered",
          stickyHeader && "ds-table--sticky-header",
          noHover && "ds-table--no-hover",
          stack && "ds-table--stack",
          className,
        )}
        {...rest}
      />
    );
  },
);

export const Table = Object.assign(TableRoot, {
  Wrapper: TableWrapper,
  Sort: TableSort,
  Footer: TableFooter,
});
