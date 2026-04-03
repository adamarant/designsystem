import { type ComponentPropsWithoutRef, forwardRef } from "react";
import { cn } from "../utils/cn";

export interface SliderProps extends ComponentPropsWithoutRef<"div"> { className?: string; }

export const Slider = forwardRef<HTMLDivElement, SliderProps>(
  function Slider({ className, ...rest }, ref) {
    return <div ref={ref} className={cn("ds-LSlider", className)} {...rest} />;
  },
);
