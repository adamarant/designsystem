import { type ComponentPropsWithoutRef, forwardRef } from "react";
import { cn } from "../utils/cn";

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

type BadgeVariant =
  | "default"
  | "primary"
  | "success"
  | "warning"
  | "error"
  | "info"
  | "purple"
  | "outline";

export interface BadgeProps extends ComponentPropsWithoutRef<"span"> {
  /** Semantic color variant. Default: "default" (neutral muted) */
  variant?: BadgeVariant;
  /** Show colored dot indicator before text. Default: false */
  dot?: boolean;
  /** Uppercase small caps style (for "NEW", "BETA", etc.). Default: false */
  upper?: boolean;
  /** Additional className */
  className?: string;
}

/* ------------------------------------------------------------------ */
/*  Maps                                                               */
/* ------------------------------------------------------------------ */

const variantMap: Record<BadgeVariant, string> = {
  default: "",
  primary: "ds-badge--primary",
  success: "ds-badge--success",
  warning: "ds-badge--warning",
  error: "ds-badge--error",
  info: "ds-badge--info",
  purple: "ds-badge--purple",
  outline: "ds-badge--outline",
};

/* ------------------------------------------------------------------ */
/*  Badge                                                              */
/* ------------------------------------------------------------------ */

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  function Badge({ variant = "default", dot, upper, className, ...rest }, ref) {
    return (
      <span
        ref={ref}
        className={cn(
          "ds-badge",
          variantMap[variant],
          dot && "ds-badge--dot",
          upper && "ds-badge--upper",
          className,
        )}
        {...rest}
      />
    );
  },
);
