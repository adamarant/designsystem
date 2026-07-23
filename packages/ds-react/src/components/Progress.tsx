import { type ComponentPropsWithoutRef, forwardRef } from "react";
import { cn } from "../utils/cn";
import type { Size } from "../types";

type ProgressVariant = "default" | "success" | "warning" | "error";
type ProgressSize = Exclude<Size, "xs">;

export interface ProgressProps extends ComponentPropsWithoutRef<"div"> {
  value?: number;
  max?: number;
  variant?: ProgressVariant;
  size?: ProgressSize;
  className?: string;
}

export interface ProgressBarProps extends ComponentPropsWithoutRef<"div"> {
  className?: string;
}

const variantMap: Record<ProgressVariant, string> = {
  default: "",
  success: "ds-progress--success",
  warning: "ds-progress--warning",
  error: "ds-progress--error",
};

const sizeMap: Record<ProgressSize, string> = {
  sm: "ds-progress--sm",
  md: "",
  lg: "ds-progress--lg",
};

const ProgressBar = forwardRef<HTMLDivElement, ProgressBarProps>(
  function ProgressBar({ className, style, ...rest }, ref) {
    return <div ref={ref} className={cn("ds-progress__bar", className)} style={style} {...rest} />;
  },
);

const ProgressRoot = forwardRef<HTMLDivElement, ProgressProps>(
  function Progress({ value, max = 100, variant = "default", size = "md", className, children, ...rest }, ref) {
    const pct = value != null ? Math.min(100, Math.max(0, (value / max) * 100)) : undefined;
    return (
      <div
        ref={ref}
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={max}
        className={cn("ds-progress", variantMap[variant], sizeMap[size], className)}
        {...rest}
      >
        {children || (pct != null && <ProgressBar style={{ width: `${pct}%` }} />)}
      </div>
    );
  },
);

/* Flat exports — RSC-safe (dot access on client refs is undefined in RSC). */
export { ProgressBar };

export const Progress = Object.assign(ProgressRoot, { Bar: ProgressBar });
