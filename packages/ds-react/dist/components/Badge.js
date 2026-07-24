import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import { cn } from "../utils/cn";
/* ------------------------------------------------------------------ */
/*  Maps                                                               */
/* ------------------------------------------------------------------ */
const variantMap = {
    default: "",
    primary: "ds-badge--primary",
    success: "ds-badge--success",
    warning: "ds-badge--warning",
    error: "ds-badge--error",
    info: "ds-badge--info",
    purple: "ds-badge--purple",
    outline: "ds-badge--outline",
};
const sizeMap = {
    sm: "ds-badge--sm",
    md: "",
    lg: "ds-badge--lg",
};
/* ------------------------------------------------------------------ */
/*  Badge                                                              */
/* ------------------------------------------------------------------ */
export const Badge = forwardRef(function Badge({ variant = "default", size = "md", dot, upper, className, ...rest }, ref) {
    return (_jsx("span", { ref: ref, className: cn("ds-badge", variantMap[variant], sizeMap[size], dot && "ds-badge--dot", upper && "ds-badge--upper", className), ...rest }));
});
//# sourceMappingURL=Badge.js.map