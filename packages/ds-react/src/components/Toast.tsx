import { type ComponentPropsWithoutRef, forwardRef } from "react";
import { cn } from "../utils/cn";

type ToastVariant = "default" | "success" | "error" | "warning" | "info";

export interface ToastProps extends ComponentPropsWithoutRef<"div"> {
  variant?: ToastVariant;
  className?: string;
}
export interface ToastCloseProps extends ComponentPropsWithoutRef<"button"> { className?: string; }

const variantMap: Record<ToastVariant, string> = {
  default: "", success: "ds-toast--success", error: "ds-toast--error",
  warning: "ds-toast--warning", info: "ds-toast--info",
};

const ToastClose = forwardRef<HTMLButtonElement, ToastCloseProps>(
  function ToastClose({ className, ...rest }, ref) {
    return <button ref={ref} aria-label="Dismiss" className={cn("ds-toast__close", className)} {...rest} />;
  },
);
const ToastRoot = forwardRef<HTMLDivElement, ToastProps>(
  function Toast({ variant = "default", className, ...rest }, ref) {
    return <div ref={ref} role="status" className={cn("ds-toast", variantMap[variant], className)} {...rest} />;
  },
);
/* Flat exports — RSC-safe (dot access on client refs is undefined in RSC). */
export { ToastClose };

export const Toast = Object.assign(ToastRoot, { Close: ToastClose });
