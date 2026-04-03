import { type ComponentPropsWithoutRef } from "react";
type ToastVariant = "default" | "success" | "error" | "warning" | "info";
export interface ToastProps extends ComponentPropsWithoutRef<"div"> {
    variant?: ToastVariant;
    className?: string;
}
export interface ToastCloseProps extends ComponentPropsWithoutRef<"button"> {
    className?: string;
}
export declare const Toast: import("react").ForwardRefExoticComponent<ToastProps & import("react").RefAttributes<HTMLDivElement>> & {
    Close: import("react").ForwardRefExoticComponent<ToastCloseProps & import("react").RefAttributes<HTMLButtonElement>>;
};
export {};
//# sourceMappingURL=Toast.d.ts.map