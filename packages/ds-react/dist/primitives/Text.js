import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import { cn } from "../utils/cn";
const sizeMap = {
    xs: "ds-text-xs",
    sm: "ds-text-sm",
    base: "ds-text-base",
    lg: "ds-text-lg",
    xl: "ds-text-xl",
    "2xl": "ds-text-2xl",
    "3xl": "ds-text-3xl",
    "4xl": "ds-text-4xl",
    "5xl": "ds-text-5xl",
    "6xl": "ds-text-6xl",
    "7xl": "ds-text-7xl",
};
const weightMap = {
    light: "ds-font-light",
    normal: "ds-font-normal",
    medium: "ds-font-medium",
    semibold: "ds-font-semibold",
    bold: "ds-font-bold",
};
const colorMap = {
    primary: "ds-text-primary",
    secondary: "ds-text-secondary",
    tertiary: "ds-text-tertiary",
    success: "ds-text-success",
    warning: "ds-text-warning",
    error: "ds-text-error",
    info: "ds-text-info",
    interactive: "ds-text-interactive",
    "on-inverted": "ds-text-on-inverted",
    "always-white": "ds-text-always-white",
    "always-black": "ds-text-always-black",
    "accent-blue": "ds-text-accent-blue",
    "accent-purple": "ds-text-accent-purple",
    "accent-green": "ds-text-accent-green",
    "accent-orange": "ds-text-accent-orange",
};
const alignMap = {
    left: "ds-text-left",
    center: "ds-text-center",
    right: "ds-text-right",
    balance: "ds-text-balance",
};
const leadingMap = {
    tight: "ds-leading-tight",
    snug: "ds-leading-snug",
    normal: "ds-leading-normal",
    relaxed: "ds-leading-relaxed",
};
const trackingMap = {
    tighter: "ds-tracking-tighter",
    tight: "ds-tracking-tight",
    normal: "ds-tracking-normal",
    wide: "ds-tracking-wide",
    wider: "ds-tracking-wider",
};
const transformMap = {
    uppercase: "ds-uppercase",
    lowercase: "ds-lowercase",
    capitalize: "ds-capitalize",
};
const clampMap = {
    "1": "ds-line-clamp-1",
    "2": "ds-line-clamp-2",
    "3": "ds-line-clamp-3",
};
export const Text = forwardRef(function Text({ as: Tag = "span", size, weight, color, align, leading, tracking, transform, truncate, clamp, mono, className, ...rest }, ref) {
    return (_jsx(Tag, { ref: ref, className: cn(size && sizeMap[size], weight && weightMap[weight], color && colorMap[color], align && alignMap[align], leading && leadingMap[leading], tracking && trackingMap[tracking], transform && transformMap[transform], truncate && "ds-truncate", clamp && clampMap[clamp], mono && "ds-font-mono", className), ...rest }));
});
//# sourceMappingURL=Text.js.map