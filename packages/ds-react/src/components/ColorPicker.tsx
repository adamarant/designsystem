import { type ComponentPropsWithoutRef, forwardRef } from "react";
import { cn } from "../utils/cn";

export interface ColorPickerProps extends ComponentPropsWithoutRef<"div"> { className?: string; }

export const ColorPicker = forwardRef<HTMLDivElement, ColorPickerProps>(
  function ColorPicker({ className, ...rest }, ref) {
    return <div ref={ref} className={cn("ds-LColor-LPicker", className)} {...rest} />;
  },
);
