import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef, } from "react";
import { cn } from "../utils/cn";
/* ================================================================== */
/*  Maps                                                               */
/* ================================================================== */
const sizeMap = {
    sm: "ds-theme-toggle--sm",
    md: "",
};
/* ================================================================== */
/*  Icons (self-contained — no icon-library dependency)                */
/* ================================================================== */
function SunIcon() {
    return (_jsxs("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true", children: [_jsx("circle", { cx: "12", cy: "12", r: "4" }), _jsx("path", { d: "M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" })] }));
}
function MoonIcon() {
    return (_jsx("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true", children: _jsx("path", { d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" }) }));
}
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
    return (_jsxs("button", { ref: ref, type: "button", role: "switch", "aria-checked": isDark, "aria-label": ariaLabel ?? `Switch to ${isDark ? "light" : "dark"} mode`, disabled: disabled, onClick: handleClick, className: cn("ds-theme-toggle", sizeMap[size], className), ...rest, children: [_jsx("span", { className: "ds-theme-toggle__thumb" }), _jsx("span", { className: "ds-theme-toggle__icon ds-theme-toggle__icon--sun", children: _jsx(SunIcon, {}) }), _jsx("span", { className: "ds-theme-toggle__icon ds-theme-toggle__icon--moon", children: _jsx(MoonIcon, {}) })] }));
});
//# sourceMappingURL=ThemeToggle.js.map