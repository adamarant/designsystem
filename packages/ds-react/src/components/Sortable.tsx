import { type ComponentPropsWithoutRef, forwardRef } from "react";
import { cn } from "../utils/cn";

export interface SortableProps extends ComponentPropsWithoutRef<"div"> { className?: string; }

export const Sortable = forwardRef<HTMLDivElement, SortableProps>(
  function Sortable({ className, ...rest }, ref) {
    return <div ref={ref} className={cn("ds-LSortable", className)} {...rest} />;
  },
);
