import { type ComponentPropsWithoutRef, forwardRef } from "react";
import { cn } from "../utils/cn";

export interface ProseProps extends ComponentPropsWithoutRef<"div"> { className?: string; }

export const Prose = forwardRef<HTMLDivElement, ProseProps>(
  function Prose({ className, ...rest }, ref) {
    return <div ref={ref} className={cn("ds-prose", className)} {...rest} />;
  },
);
