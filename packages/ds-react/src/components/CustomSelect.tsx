import { type ComponentPropsWithoutRef, forwardRef } from "react";
import { cn } from "../utils/cn";

export interface CustomSelectProps extends ComponentPropsWithoutRef<"div"> { className?: string; }

export const CustomSelect = forwardRef<HTMLDivElement, CustomSelectProps>(
  function CustomSelect({ className, ...rest }, ref) {
    return <div ref={ref} className={cn("ds-LCustom-LSelect", className)} {...rest} />;
  },
);
