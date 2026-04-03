import { type ComponentPropsWithoutRef, forwardRef } from "react";
import { cn } from "../utils/cn";

export interface ComboboxProps extends ComponentPropsWithoutRef<"div"> { className?: string; }

export const Combobox = forwardRef<HTMLDivElement, ComboboxProps>(
  function Combobox({ className, ...rest }, ref) {
    return <div ref={ref} className={cn("ds-LCombobox", className)} {...rest} />;
  },
);
