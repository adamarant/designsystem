import { type ComponentPropsWithoutRef, forwardRef } from "react";
import { cn } from "../utils/cn";

export interface ToolbarProps extends ComponentPropsWithoutRef<"div"> { className?: string; }

export const Toolbar = forwardRef<HTMLDivElement, ToolbarProps>(
  function Toolbar({ className, ...rest }, ref) {
    return <div ref={ref} role="toolbar" className={cn("ds-toolbar", className)} {...rest} />;
  },
);
