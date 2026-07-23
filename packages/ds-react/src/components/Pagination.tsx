import { type ComponentPropsWithoutRef, forwardRef } from "react";
import { cn } from "../utils/cn";

export interface PaginationProps extends ComponentPropsWithoutRef<"nav"> { className?: string; }
export interface PaginationListProps extends ComponentPropsWithoutRef<"ul"> { className?: string; }
export interface PaginationItemProps extends ComponentPropsWithoutRef<"button"> {
  active?: boolean;
  className?: string;
}

const List = forwardRef<HTMLUListElement, PaginationListProps>(
  function List({ className, ...rest }, ref) {
    return <ul ref={ref} className={cn("ds-pagination", className)} {...rest} />;
  },
);
const Item = forwardRef<HTMLButtonElement, PaginationItemProps>(
  function Item({ active, className, ...rest }, ref) {
    return (
      <button
        ref={ref}
        aria-current={active ? "page" : undefined}
        className={cn("ds-pagination__item", active && "ds-pagination__item--active", className)}
        {...rest}
      />
    );
  },
);

const PaginationRoot = forwardRef<HTMLElement, PaginationProps>(
  function Pagination({ className, ...rest }, ref) {
    return <nav ref={ref} aria-label="Pagination" className={className} {...rest} />;
  },
);

/* Flat exports — RSC-safe (dot access on client refs is undefined in RSC). */
export { List as PaginationList, Item as PaginationItem };

export const Pagination = Object.assign(PaginationRoot, { List, Item });
