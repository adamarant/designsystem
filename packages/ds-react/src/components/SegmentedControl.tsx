import { type ComponentPropsWithoutRef, forwardRef } from "react";
import { cn } from "../utils/cn";

export interface SegmentedControlProps extends ComponentPropsWithoutRef<"div"> { className?: string; }
export interface SegmentedControlItemProps extends ComponentPropsWithoutRef<"button"> {
  active?: boolean;
  className?: string;
}

const Item = forwardRef<HTMLButtonElement, SegmentedControlItemProps>(
  function Item({ active, className, ...rest }, ref) {
    return <button ref={ref} aria-pressed={active} className={cn("ds-segmented-control__item", active && "ds-segmented-control__item--active", className)} {...rest} />;
  },
);
const Root = forwardRef<HTMLDivElement, SegmentedControlProps>(
  function SegmentedControl({ className, ...rest }, ref) {
    return <div ref={ref} role="group" className={cn("ds-segmented-control", className)} {...rest} />;
  },
);

export const SegmentedControl = Object.assign(Root, { Item });
