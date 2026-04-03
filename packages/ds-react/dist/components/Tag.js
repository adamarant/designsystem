import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import { cn } from "../utils/cn";
/* ================================================================== */
/*  Maps                                                               */
/* ================================================================== */
const variantMap = {
    default: "",
    primary: "ds-tag--primary",
    success: "ds-tag--success",
    warning: "ds-tag--warning",
    error: "ds-tag--error",
    info: "ds-tag--info",
    purple: "ds-tag--purple",
    outline: "ds-tag--outline",
};
const sizeMap = {
    sm: "ds-tag--sm",
    md: "",
    lg: "ds-tag--lg",
};
/* ================================================================== */
/*  Sub-components                                                     */
/* ================================================================== */
const TagRemove = forwardRef(function TagRemove({ className, ...rest }, ref) {
    return (_jsx("button", { ref: ref, "aria-label": "Remove", className: cn("ds-tag__remove", className), ...rest }));
});
/* ================================================================== */
/*  Tag (root + dot notation)                                          */
/* ================================================================== */
const TagRoot = forwardRef(function Tag({ variant = "default", size = "md", removable, className, ...rest }, ref) {
    return (_jsx("span", { ref: ref, className: cn("ds-tag", variantMap[variant], sizeMap[size], removable && "ds-tag--removable", className), ...rest }));
});
export const Tag = Object.assign(TagRoot, {
    Remove: TagRemove,
});
//# sourceMappingURL=Tag.js.map