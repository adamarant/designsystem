import { type ComponentPropsWithoutRef, forwardRef } from "react";
import { cn } from "../utils/cn";

export interface PinInputProps extends ComponentPropsWithoutRef<"div"> { className?: string; }

export const PinInput = forwardRef<HTMLDivElement, PinInputProps>(
  function PinInput({ className, ...rest }, ref) {
    return <div ref={ref} className={cn("ds-LPin-LInput", className)} {...rest} />;
  },
);
