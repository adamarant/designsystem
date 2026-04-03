import { type ComponentPropsWithoutRef, forwardRef } from "react";
import { cn } from "../utils/cn";

export interface BottomNavProps extends ComponentPropsWithoutRef<"nav"> { className?: string; }
export interface BottomNavItemProps extends ComponentPropsWithoutRef<"button"> {
  active?: boolean;
  className?: string;
}

const Item = forwardRef<HTMLButtonElement, BottomNavItemProps>(
  function Item({ active, className, ...rest }, ref) {
    return <button ref={ref} className={cn("ds-bottom-nav__item", active && "ds-bottom-nav__item--active", className)} {...rest} />;
  },
);
const Root = forwardRef<HTMLElement, BottomNavProps>(
  function BottomNav({ className, ...rest }, ref) {
    return <nav ref={ref} className={cn("ds-bottom-nav", className)} {...rest} />;
  },
);
export const BottomNav = Object.assign(Root, { Item });
