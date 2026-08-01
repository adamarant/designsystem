"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef, } from "react";
import { cn } from "../utils/cn";
import { IconMoon, IconSun } from "../icons";
/* ================================================================== */
/*  Maps                                                               */
/* ================================================================== */
const sizeMap = {
    sm: "ds-theme-toggle--sm",
    md: "",
    lg: "ds-theme-toggle--lg",
};
/* ================================================================== */
/*  Icons (self-contained — no icon-library dependency)                */
/* ================================================================== */
/* ================================================================== */
/*  ThemeToggle                                                        */
/* ================================================================== */
export const ThemeToggle = forwardRef(function ThemeToggle({ theme, onThemeChange, size = "md", disabled, className, onClick, "aria-label": ariaLabel, ...rest }, ref) {
    const isDark = theme === "dark";
    const handleClick = (e) => {
        if (!disabled)
            onThemeChange(isDark ? "light" : "dark");
        onClick?.(e);
    };
    return (_jsxs("button", { ref: ref, type: "button", role: "switch", "aria-checked": isDark, "aria-label": ariaLabel ?? `Switch to ${isDark ? "light" : "dark"} mode`, disabled: disabled, onClick: handleClick, className: cn("ds-theme-toggle", sizeMap[size], className), ...rest, children: [_jsx("span", { className: "ds-theme-toggle__thumb" }), _jsx("span", { className: "ds-theme-toggle__icon ds-theme-toggle__icon--sun", children: _jsx(IconSun, { size: 16 }) }), _jsx("span", { className: "ds-theme-toggle__icon ds-theme-toggle__icon--moon", children: _jsx(IconMoon, { size: 16 }) })] }));
});
//# sourceMappingURL=ThemeToggle.js.map