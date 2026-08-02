import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import { cn } from "../utils/cn";
import { IconClose } from "../icons";
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
const AlertClose = forwardRef(function AlertClose({ className, children, ...rest }, ref) {
    return (_jsx("button", { ref: ref, "aria-label": "Dismiss", className: cn("ds-alert__close", className), ...rest, children: children ?? _jsx(IconClose, { size: 16 }) }));
});
/* The buttons the alert is asking for. Put real <Button>s inside: the alert
   arranges them, it does not restyle them.

   Stacked (the default): render it INSIDE <Alert.Content>, after the
   description. Inline: render it as a SIBLING of Content and set
   actionsInline on the root. */
const AlertActions = forwardRef(function AlertActions({ className, ...rest }, ref) {
    return (_jsx("div", { ref: ref, className: cn("ds-alert__actions", className), ...rest }));
});
/* ================================================================== */
/*  Alert (root + dot notation)                                        */
/* ================================================================== */
const AlertRoot = forwardRef(function Alert({ variant = "default", compact, banner, actionsInline, className, ...rest }, ref) {
    return (_jsx("div", { ref: ref, role: "alert", className: cn("ds-alert", variantMap[variant], compact && "ds-alert--compact", banner && "ds-alert--banner", actionsInline && "ds-alert--actions-inline", className), ...rest }));
});
/* Flat exports — RSC-safe (dot access on client refs is undefined in RSC). */
export { AlertIcon, AlertContent, AlertTitle, AlertDescription, AlertClose, AlertActions };
export const Alert = Object.assign(AlertRoot, {
    Icon: AlertIcon,
    Content: AlertContent,
    Title: AlertTitle,
    Description: AlertDescription,
    Close: AlertClose,
    Actions: AlertActions,
});
//# sourceMappingURL=Alert.js.map