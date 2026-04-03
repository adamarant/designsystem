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
const Separator = forwardRef<HTMLLIElement, BreadcrumbSeparatorProps>(
  function Separator({ className, children, ...rest }, ref) {
    return <li ref={ref} aria-hidden="true" className={cn("ds-breadcrumb__separator", className)} {...rest}>{children || "/"}</li>;
  },
);

const BreadcrumbRoot = forwardRef<HTMLElement, BreadcrumbProps>(
  function Breadcrumb({ className, ...rest }, ref) {
    return <nav ref={ref} aria-label="Breadcrumb" className={className} {...rest} />;
  },
);

export const Breadcrumb = Object.assign(BreadcrumbRoot, {
  List, Item, Separator,
});
