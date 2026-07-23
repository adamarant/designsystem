import { type ComponentPropsWithoutRef, forwardRef } from "react";
import { type Size } from "../types";
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
  /** Size tier. Default: "md" (no class emitted). */
  size?: Exclude<Size, "xs">;
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

const sizeMap: Record<Exclude<Size, "xs">, string> = {
  sm: "ds-badge--sm",
  md: "",
  lg: "ds-badge--lg",
};

/* ------------------------------------------------------------------ */
/*  Badge                                                              */
/* ------------------------------------------------------------------ */

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  function Badge(
    { variant = "default", size = "md", dot, upper, className, ...rest },
    ref,
  ) {
    return (
      <span
        ref={ref}
        className={cn(
          "ds-badge",
          variantMap[variant],
          sizeMap[size],
          dot && "ds-badge--dot",
          upper && "ds-badge--upper",
          className,
        )}
        {...rest}
      />
    );
  },
);
