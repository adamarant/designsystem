import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import { cn } from "../utils/cn";
/* ================================================================== */
/*  Maps                                                               */
/* ================================================================== */
const sizeMap = {
    sm: "ds-spinner--sm",
    md: "ds-spinner--md",
    default: "",
    lg: "ds-spinner--lg",
};
const variantMap = {
    default: "",
    muted: "ds-spinner--muted",
    light: "ds-spinner--light",
};
/* ================================================================== */
/*  Spinner                                                            */
/* ================================================================== */
export const Spinner = forwardRef(function Spinner({ size = "default", variant = "default", className, ...rest }, ref) {
    return (_jsx("span", { ref: ref, role: "status", "aria-label": "Loading", className: cn("ds-spinner", sizeMap[size], variantMap[variant], className), ...rest }));
});
//# sourceMappingURL=Spinner.js.map