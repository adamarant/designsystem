import { type ComponentPropsWithoutRef, forwardRef } from "react";
import { cn } from "../utils/cn";

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

type ButtonVariant =
  | "primary"
  | "secondary"
  | "outline"
  | "ghost"
  | "danger"
  | "success"
  | "success-solid";

type ButtonSize = "xs" | "sm" | "md" | "lg" | "xl" | "2xl";

export interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  /** Visual style. Default: "primary" (inverted bg) */
  variant?: ButtonVariant;
  /** Size tier. Default: "md" (40px) */
  size?: ButtonSize;
  /** Pill shape (rounded-full). Default: false */
  pill?: boolean;
  /** Full width. Default: false */
  full?: boolean;
  /** Icon-only mode (square, no text padding). Default: false */
  icon?: boolean;
  /** Loading — shows CSS spinner, disables interaction, sets aria-busy. */
  loading?: boolean;
  /** Additional className */
  className?: string;
}

/* ------------------------------------------------------------------ */
/*  Maps                                                               */
/* ------------------------------------------------------------------ */

const variantMap: Record<ButtonVariant, string> = {
  primary: "",
  secondary: "ds-btn--secondary",
  outline: "ds-btn--outline",
  ghost: "ds-btn--ghost",
  danger: "ds-btn--danger",
  success: "ds-btn--success",
  "success-solid": "ds-btn--success-solid",
};

const sizeMap: Record<ButtonSize, string> = {
  xs: "ds-btn--xs",
  sm: "ds-btn--sm",
  md: "",
  lg: "ds-btn--lg",
  xl: "ds-btn--xl",
  "2xl": "ds-btn--2xl",
};

/* ------------------------------------------------------------------ */
/*  Button                                                             */
/* ------------------------------------------------------------------ */

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    {
      variant = "primary",
      size = "md",
      pill,
      full,
      icon,
      loading,
      className,
      ...rest
    },
    ref,
  ) {
    return (
      <button
        ref={ref}
        aria-busy={loading || undefined}
        aria-disabled={loading || undefined}
        className={cn(
          "ds-btn",
          variantMap[variant],
          sizeMap[size],
          pill && "ds-btn--pill",
          full && "ds-btn--full",
          icon && "ds-btn--icon",
          loading && "ds-btn--loading",
          className,
        )}
        {...rest}
      />
    );
  },
);

/* ------------------------------------------------------------------ */
/*  ButtonGroup                                                        */
/* ------------------------------------------------------------------ */

export interface ButtonGroupProps extends ComponentPropsWithoutRef<"div"> {
  /** Additional className */
  className?: string;
}

export const ButtonGroup = forwardRef<HTMLDivElement, ButtonGroupProps>(
  function ButtonGroup({ className, ...rest }, ref) {
    return (
      <div
        ref={ref}
        role="group"
        className={cn("ds-btn-group", className)}
        {...rest}
      />
    );
  },
);
