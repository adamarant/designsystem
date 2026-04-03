import { type ComponentPropsWithoutRef, forwardRef } from "react";
import { cn } from "../utils/cn";

export interface KbdProps extends ComponentPropsWithoutRef<"kbd"> { className?: string; }

export const Kbd = forwardRef<HTMLElement, KbdProps>(
  function Kbd({ className, ...rest }, ref) {
    return <kbd ref={ref} className={cn("ds-kbd", className)} {...rest} />;
  },
);
