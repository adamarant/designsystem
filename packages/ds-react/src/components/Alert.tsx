import { type ComponentPropsWithoutRef, forwardRef } from "react";
import { cn } from "../utils/cn";

/* ================================================================== */
/*  Types                                                              */
/* ================================================================== */

type AlertVariant = "default" | "info" | "success" | "warning" | "error";

export interface AlertProps extends ComponentPropsWithoutRef<"div"> {
  /** Semantic color variant. Default: "default" */
  variant?: AlertVariant;
  /** Reduced padding, no border-radius. Default: false */
  compact?: boolean;
  /** Full-width banner (no left accent, horizontal borders). Default: false */
  banner?: boolean;
  /** Additional className */
  className?: string;
}

export interface AlertIconProps extends ComponentPropsWithoutRef<"div"> {
  className?: string;
}

export interface AlertContentProps extends ComponentPropsWithoutRef<"div"> {
  className?: string;
}

export interface AlertTitleProps extends ComponentPropsWithoutRef<"p"> {
  className?: string;
}

export interface AlertDescriptionProps extends ComponentPropsWithoutRef<"p"> {
  className?: string;
}

export interface AlertCloseProps extends ComponentPropsWithoutRef<"button"> {
  className?: string;
}

/* ================================================================== */
/*  Maps                                                               */
/* ================================================================== */

const variantMap: Record<AlertVariant, string> = {
  default: "",
  info: "ds-alert--info",
  success: "ds-alert--success",
  warning: "ds-alert--warning",
  error: "ds-alert--error",
};

/* ================================================================== */
/*  Sub-components                                                     */
/* ================================================================== */

const AlertIcon = forwardRef<HTMLDivElement, AlertIconProps>(
  function AlertIcon({ className, ...rest }, ref) {
    return (
      <div ref={ref} className={cn("ds-alert__icon", className)} {...rest} />
    );
  },
);

const AlertContent = forwardRef<HTMLDivElement, AlertContentProps>(
  function AlertContent({ className, ...rest }, ref) {
    return (
      <div
        ref={ref}
        className={cn("ds-alert__content", className)}
        {...rest}
      />
    );
  },
);

const AlertTitle = forwardRef<HTMLParagraphElement, AlertTitleProps>(
  function AlertTitle({ className, ...rest }, ref) {
    return (
      <p ref={ref} className={cn("ds-alert__title", className)} {...rest} />
    );
  },
);

const AlertDescription = forwardRef<
  HTMLParagraphElement,
  AlertDescriptionProps
>(function AlertDescription({ className, ...rest }, ref) {
  return (
    <p
      ref={ref}
      className={cn("ds-alert__description", className)}
      {...rest}
    />
  );
});

const AlertClose = forwardRef<HTMLButtonElement, AlertCloseProps>(
  function AlertClose({ className, ...rest }, ref) {
    return (
      <button
        ref={ref}
        aria-label="Dismiss"
        className={cn("ds-alert__close", className)}
        {...rest}
      />
    );
  },
);

/* ================================================================== */
/*  Alert (root + dot notation)                                        */
/* ================================================================== */

const AlertRoot = forwardRef<HTMLDivElement, AlertProps>(
  function Alert(
    { variant = "default", compact, banner, className, ...rest },
    ref,
  ) {
    return (
      <div
        ref={ref}
        role="alert"
        className={cn(
          "ds-alert",
          variantMap[variant],
          compact && "ds-alert--compact",
          banner && "ds-alert--banner",
          className,
        )}
        {...rest}
      />
    );
  },
);

export const Alert = Object.assign(AlertRoot, {
  Icon: AlertIcon,
  Content: AlertContent,
  Title: AlertTitle,
  Description: AlertDescription,
  Close: AlertClose,
});
