import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import { cn } from "../utils/cn";
/* ------------------------------------------------------------------ */
/*  Maps                                                               */
/* ------------------------------------------------------------------ */
const variantMap = {
    primary: "",
    secondary: "ds-btn--secondary",
    outline: "ds-btn--outline",
    ghost: "ds-btn--ghost",
    danger: "ds-btn--danger",
    success: "ds-btn--success",
    "success-solid": "ds-btn--success-solid",
};
const sizeMap = {
    xs: "ds-btn--xs",
    sm: "ds-btn--sm",
    md: "",
    lg: "ds-btn--lg",
    xl: "ds-btn--xl",
    "2xl": "ds-btn--2xl",
};
/* ------------------------------------------------------------------ */
/*  Button                                                             */
/* ------------------------------------------------------------------ */
export const Button = forwardRef(function Button({ variant = "primary", size = "md", pill, full, icon, loading, className, ...rest }, ref) {
    return (_jsx("button", { ref: ref, "aria-busy": loading || undefined, "aria-disabled": loading || undefined, className: cn("ds-btn", variantMap[variant], sizeMap[size], pill && "ds-btn--pill", full && "ds-btn--full", icon && "ds-btn--icon", loading && "ds-btn--loading", className), ...rest }));
});
export const ButtonGroup = forwardRef(function ButtonGroup({ className, ...rest }, ref) {
    return (_jsx("div", { ref: ref, role: "group", className: cn("ds-btn-group", className), ...rest }));
});
//# sourceMappingURL=Button.js.map