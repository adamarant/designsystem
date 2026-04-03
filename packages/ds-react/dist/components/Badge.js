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
/* ------------------------------------------------------------------ */
/*  Badge                                                              */
/* ------------------------------------------------------------------ */
export const Badge = forwardRef(function Badge({ variant = "default", dot, upper, className, ...rest }, ref) {
    return (_jsx("span", { ref: ref, className: cn("ds-badge", variantMap[variant], dot && "ds-badge--dot", upper && "ds-badge--upper", className), ...rest }));
});
//# sourceMappingURL=Badge.js.map