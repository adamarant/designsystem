import { type ComponentPropsWithoutRef, forwardRef } from "react";
import { cn } from "../utils/cn";

export interface FieldProps extends ComponentPropsWithoutRef<"div"> { className?: string; }

export const Field = forwardRef<HTMLDivElement, FieldProps>(
  function Field({ className, ...rest }, ref) {
    return <div ref={ref} className={cn("ds-field", className)} {...rest} />;
  },
);
