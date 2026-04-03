import { type ComponentPropsWithoutRef, forwardRef } from "react";
import { cn } from "../utils/cn";

export interface ChipProps extends ComponentPropsWithoutRef<"span"> {
  className?: string;
}

export const Chip = forwardRef<HTMLSpanElement, ChipProps>(
  function Chip({ className, ...rest }, ref) {
    return <span ref={ref} className={cn("ds-chip", className)} {...rest} />;
  },
);
