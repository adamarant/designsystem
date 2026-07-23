import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import { cn } from "../utils/cn";
const variantMap = {
    default: "",
    success: "ds-progress--success",
    warning: "ds-progress--warning",
    error: "ds-progress--error",
};
const sizeMap = {
    sm: "ds-progress--sm",
    md: "",
    lg: "ds-progress--lg",
};
const ProgressBar = forwardRef(function ProgressBar({ className, style, ...rest }, ref) {
    return _jsx("div", { ref: ref, className: cn("ds-progress__bar", className), style: style, ...rest });
});
const ProgressRoot = forwardRef(function Progress({ value, max = 100, variant = "default", size = "md", className, children, ...rest }, ref) {
    const pct = value != null ? Math.min(100, Math.max(0, (value / max) * 100)) : undefined;
    return (_jsx("div", { ref: ref, role: "progressbar", "aria-valuenow": value, "aria-valuemin": 0, "aria-valuemax": max, className: cn("ds-progress", variantMap[variant], sizeMap[size], className), ...rest, children: children || (pct != null && _jsx(ProgressBar, { style: { width: `${pct}%` } })) }));
});
/* Flat exports — RSC-safe (dot access on client refs is undefined in RSC). */
export { ProgressBar };
export const Progress = Object.assign(ProgressRoot, { Bar: ProgressBar });
//# sourceMappingURL=Progress.js.map