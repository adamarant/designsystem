import { type ComponentPropsWithoutRef, forwardRef } from "react";
import { cn } from "../utils/cn";

export interface NumberInputProps extends ComponentPropsWithoutRef<"div"> { className?: string; }

export const NumberInput = forwardRef<HTMLDivElement, NumberInputProps>(
  function NumberInput({ className, ...rest }, ref) {
    return <div ref={ref} className={cn("ds-LNumber-LInput", className)} {...rest} />;
  },
);
