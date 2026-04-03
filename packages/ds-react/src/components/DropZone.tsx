import { type ComponentPropsWithoutRef, forwardRef } from "react";
import { cn } from "../utils/cn";

export interface DropZoneProps extends ComponentPropsWithoutRef<"div"> { className?: string; }

export const DropZone = forwardRef<HTMLDivElement, DropZoneProps>(
  function DropZone({ className, ...rest }, ref) {
    return <div ref={ref} className={cn("ds-LDrop-LZone", className)} {...rest} />;
  },
);
