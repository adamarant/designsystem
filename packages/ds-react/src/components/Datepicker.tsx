import { type ComponentPropsWithoutRef, forwardRef } from "react";
import { cn } from "../utils/cn";

export interface DatepickerProps extends ComponentPropsWithoutRef<"div"> { className?: string; }

export const Datepicker = forwardRef<HTMLDivElement, DatepickerProps>(
  function Datepicker({ className, ...rest }, ref) {
    return <div ref={ref} className={cn("ds-LDatepicker", className)} {...rest} />;
  },
);
