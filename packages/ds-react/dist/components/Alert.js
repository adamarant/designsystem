import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import { cn } from "../utils/cn";
/* ================================================================== */
/*  Maps                                                               */
/* ================================================================== */
const variantMap = {
    default: "",
    info: "ds-alert--info",
    success: "ds-alert--success",
    warning: "ds-alert--warning",
    error: "ds-alert--error",
};
/* ================================================================== */
/*  Sub-components                                                     */
/* ================================================================== */
const AlertIcon = forwardRef(function AlertIcon({ className, ...rest }, ref) {
    return (_jsx("div", { ref: ref, className: cn("ds-alert__icon", className), ...rest }));
});
const AlertContent = forwardRef(function AlertContent({ className, ...rest }, ref) {
    return (_jsx("div", { ref: ref, className: cn("ds-alert__content", className), ...rest }));
});
const AlertTitle = forwardRef(function AlertTitle({ className, ...rest }, ref) {
    return (_jsx("p", { ref: ref, className: cn("ds-alert__title", className), ...rest }));
});
const AlertDescription = forwardRef(function AlertDescription({ className, ...rest }, ref) {
    return (_jsx("p", { ref: ref, className: cn("ds-alert__description", className), ...rest }));
});
const AlertClose = forwardRef(function AlertClose({ className, ...rest }, ref) {
    return (_jsx("button", { ref: ref, "aria-label": "Dismiss", className: cn("ds-alert__close", className), ...rest }));
});
/* ================================================================== */
/*  Alert (root + dot notation)                                        */
/* ================================================================== */
const AlertRoot = forwardRef(function Alert({ variant = "default", compact, banner, className, ...rest }, ref) {
    return (_jsx("div", { ref: ref, role: "alert", className: cn("ds-alert", variantMap[variant], compact && "ds-alert--compact", banner && "ds-alert--banner", className), ...rest }));
});
/* Flat exports — RSC-safe (dot access on client refs is undefined in RSC). */
export { AlertIcon, AlertContent, AlertTitle, AlertDescription, AlertClose };
export const Alert = Object.assign(AlertRoot, {
    Icon: AlertIcon,
    Content: AlertContent,
    Title: AlertTitle,
    Description: AlertDescription,
    Close: AlertClose,
});
//# sourceMappingURL=Alert.js.map