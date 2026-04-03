import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import { cn } from "../utils/cn";
const variantMap = {
    default: "", success: "ds-toast--success", error: "ds-toast--error",
    warning: "ds-toast--warning", info: "ds-toast--info",
};
const ToastClose = forwardRef(function ToastClose({ className, ...rest }, ref) {
    return _jsx("button", { ref: ref, "aria-label": "Dismiss", className: cn("ds-toast__close", className), ...rest });
});
const ToastRoot = forwardRef(function Toast({ variant = "default", className, ...rest }, ref) {
    return _jsx("div", { ref: ref, role: "status", className: cn("ds-toast", variantMap[variant], className), ...rest });
});
export const Toast = Object.assign(ToastRoot, { Close: ToastClose });
//# sourceMappingURL=Toast.js.map