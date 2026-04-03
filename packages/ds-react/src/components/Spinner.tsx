import { type ComponentPropsWithoutRef, forwardRef } from "react";
import { cn } from "../utils/cn";

/* ================================================================== */
/*  Types                                                              */
/* ================================================================== */

type SpinnerSize = "sm" | "md" | "default" | "lg";
type SpinnerVariant = "default" | "muted" | "light";

export interface SpinnerProps extends ComponentPropsWithoutRef<"span"> {
  /** Size. Default: "default" (24px) */
  size?: SpinnerSize;
  /** Color variant. Default: "default" (border + interactive top) */
  variant?: SpinnerVariant;
  /** Additional className */
  className?: string;
}

/* ================================================================== */
/*  Maps                                                               */
/* ================================================================== */

const sizeMap: Record<SpinnerSize, string> = {
  sm: "ds-spinner--sm",
  md: "ds-spinner--md",
  default: "",
  lg: "ds-spinner--lg",
};

const variantMap: Record<SpinnerVariant, string> = {
  default: "",
  muted: "ds-spinner--muted",
  light: "ds-spinner--light",
};

/* ================================================================== */
/*  Spinner                                                            */
/* ================================================================== */

export const Spinner = forwardRef<HTMLSpanElement, SpinnerProps>(
  function Spinner(
    { size = "default", variant = "default", className, ...rest },
    ref,
  ) {
    return (
      <span
        ref={ref}
        role="status"
        aria-label="Loading"
        className={cn(
          "ds-spinner",
          sizeMap[size],
          variantMap[variant],
          className,
        )}
        {...rest}
      />
    );
  },
);
