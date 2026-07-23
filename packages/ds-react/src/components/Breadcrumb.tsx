import { type ComponentPropsWithoutRef, forwardRef } from "react";
import { cn } from "../utils/cn";

export interface BreadcrumbProps extends ComponentPropsWithoutRef<"nav"> { className?: string; }
export interface BreadcrumbListProps extends ComponentPropsWithoutRef<"ol"> { className?: string; }
export interface BreadcrumbItemProps extends ComponentPropsWithoutRef<"li"> { className?: string; }
export interface BreadcrumbSeparatorProps extends ComponentPropsWithoutRef<"li"> { className?: string; }

const List = forwardRef<HTMLOListElement, BreadcrumbListProps>(
  function List({ className, ...rest }, ref) {
    return <ol ref={ref} className={cn("ds-breadcrumb", className)} {...rest} />;
  },
);
const Item = forwardRef<HTMLLIElement, BreadcrumbItemProps>(
  function Item({ className, ...rest }, ref) {
    return <li ref={ref} className={cn("ds-breadcrumb__item", className)} {...rest} />;
  },
);
/**
 * @deprecated Renders nothing. `breadcrumb.css` draws the separator itself, as
 * a `::after` on every `__item` but the last — so a separator in the DOM was
 * always a second one beside it. It also carried a separator class the DS
 * never defined. Kept as a no-op export so existing trees keep compiling;
 * delete the element when you touch the file.
 */
const Separator = forwardRef<HTMLLIElement, BreadcrumbSeparatorProps>(
  function Separator() {
    return null;
  },
);

const BreadcrumbRoot = forwardRef<HTMLElement, BreadcrumbProps>(
  function Breadcrumb({ className, ...rest }, ref) {
    return <nav ref={ref} aria-label="Breadcrumb" className={className} {...rest} />;
  },
);

/* Flat exports — RSC-safe (dot access on client refs is undefined in RSC). */
export { List as BreadcrumbList, Item as BreadcrumbItem, Separator as BreadcrumbSeparator };

export const Breadcrumb = Object.assign(BreadcrumbRoot, {
  List, Item, Separator,
});
