'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useSyncExternalStore } from 'react';
import { useTheme } from 'next-themes';
/* This file is deliberately NOT re-exported from index.ts. It is the only
   module in the package that imports `next-themes`, and two consumers
   (divasti, vibhe) don't have it installed — pulling it into the barrel would
   break their build for a component they never asked for. It ships as the
   `@adamarant/ds-admin/theme` subpath instead. */
const emptySubscribe = () => () => { };
const sizeClass = {
    sm: 'ds-theme-toggle--sm',
    md: '',
    lg: 'ds-theme-toggle--lg',
};
function SunIcon() {
    return (_jsxs("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true", children: [_jsx("circle", { cx: "12", cy: "12", r: "4" }), _jsx("path", { d: "M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" })] }));
}
function MoonIcon() {
    return (_jsx("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true", children: _jsx("path", { d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" }) }));
}
/**
 * The light/dark switch for the admin header.
 *
 * Replaces the per-project `ThemeToggle` wrapper — four near-identical copies
 * of the same next-themes bridge that differed only in how they spelled the
 * hydration guard.
 *
 * Requires a `next-themes` ThemeProvider with `attribute="data-theme"` above
 * it, which is what the design system's theming keys off.
 */
export function AdminThemeToggle({ size = 'md', defaultTheme = 'dark', className, }) {
    const { resolvedTheme, setTheme } = useTheme();
    const mounted = useSyncExternalStore(emptySubscribe, () => true, () => false);
    // Before mount next-themes hasn't resolved the theme yet. Render the switch
    // inert at the app's default so the thumb doesn't jump: both icons are
    // always visible, only the thumb settles once mounted.
    const theme = mounted ? resolvedTheme : defaultTheme;
    const isDark = theme === 'dark';
    const classes = ['ds-theme-toggle', sizeClass[size], className]
        .filter(Boolean)
        .join(' ');
    return (_jsxs("button", { type: "button", role: "switch", "aria-checked": isDark, "aria-label": `Switch to ${isDark ? 'light' : 'dark'} mode`, disabled: !mounted, onClick: () => setTheme(isDark ? 'light' : 'dark'), className: classes, children: [_jsx("span", { className: "ds-theme-toggle__thumb" }), _jsx("span", { className: "ds-theme-toggle__icon ds-theme-toggle__icon--sun", children: _jsx(SunIcon, {}) }), _jsx("span", { className: "ds-theme-toggle__icon ds-theme-toggle__icon--moon", children: _jsx(MoonIcon, {}) })] }));
}
//# sourceMappingURL=AdminThemeToggle.js.map