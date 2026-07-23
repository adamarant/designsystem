import { type ComponentPropsWithoutRef, forwardRef } from "react";
import { cn } from "../utils/cn";

export interface NavProps extends ComponentPropsWithoutRef<"nav"> { className?: string; }
export interface NavListProps extends ComponentPropsWithoutRef<"ul"> { className?: string; }
export interface NavItemProps extends ComponentPropsWithoutRef<"li"> {
  active?: boolean;
  className?: string;
}

const NavList = forwardRef<HTMLUListElement, NavListProps>(
  function NavList({ className, ...rest }, ref) {
    return <ul ref={ref} className={cn("ds-nav", className)} {...rest} />;
  },
);
const NavItem = forwardRef<HTMLLIElement, NavItemProps>(
  function NavItem({ active, className, ...rest }, ref) {
    return <li ref={ref} className={cn("ds-nav__item", active && "ds-nav__item--active", className)} {...rest} />;
  },
);
const NavRoot = forwardRef<HTMLElement, NavProps>(
  function Nav({ className, ...rest }, ref) {
    return <nav ref={ref} className={className} {...rest} />;
  },
);
/* Flat exports — RSC-safe (dot access on client refs is undefined in RSC). */
export { NavList, NavItem };

export const Nav = Object.assign(NavRoot, { List: NavList, Item: NavItem });
