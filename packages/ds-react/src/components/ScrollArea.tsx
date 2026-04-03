import { type ComponentPropsWithoutRef, forwardRef } from "react";
import { cn } from "../utils/cn";

export interface ScrollAreaProps extends ComponentPropsWithoutRef<"div"> { className?: string; }

export const ScrollArea = forwardRef<HTMLDivElement, ScrollAreaProps>(
  function ScrollArea({ className, ...rest }, ref) {
    return <div ref={ref} className={cn("ds-scroll-area", className)} {...rest} />;
  },
);
