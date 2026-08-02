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
    inverted: "ds-badge--inverted",
};
const sizeMap = {
    sm: "ds-badge--sm",
    md: "",
    lg: "ds-badge--lg",
};
/* ------------------------------------------------------------------ */
/*  Badge                                                              */
/* ------------------------------------------------------------------ */
/* One element, two forms. `interactive` (or an onClick, which implies it)
   renders a real <button>: a badge that can be clicked is a control, and
   the control contract — target size, focus ring, disabled — belongs to
   the component, not to the page that happens to use it. */
const BadgeRoot = forwardRef(function Badge(props, ref) {
    const { variant = "default", size = "md", dot, upper, active, removable, interactive, className, ...rest } = props;
    const isInteractive = interactive ?? "onClick" in props;
    const classes = cn("ds-badge", variantMap[variant], sizeMap[size], dot && "ds-badge--dot", upper && "ds-badge--upper", active && "ds-badge--active", removable && "ds-badge--removable", isInteractive && "ds-badge--interactive", className);
    if (isInteractive) {
        return (_jsx("button", { ref: ref, type: "button", className: classes, ...rest }));
    }
    return (_jsx("span", { ref: ref, className: classes, ...rest }));
});
/* The remove control. Its own button, its own label: aria-label is required
   by the component's ARIA contract ("Remove [name]"). */
const BadgeRemove = forwardRef(function BadgeRemove({ className, children, ...rest }, ref) {
    return (_jsx("button", { ref: ref, type: "button", className: cn("ds-badge__remove", className), ...rest, children: children ?? "×" }));
});
/* Flat exports — RSC-safe (dot access on client refs is undefined in RSC). */
export { BadgeRemove };
export const Badge = Object.assign(BadgeRoot, { Remove: BadgeRemove });
//# sourceMappingURL=Badge.js.map