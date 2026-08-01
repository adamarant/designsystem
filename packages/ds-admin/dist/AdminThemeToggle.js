'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useSyncExternalStore } from 'react';
import { useTheme } from 'next-themes';
import { IconMoon, IconSun } from '@adamarant/ds-react';
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
const SunIcon = () => _jsx(IconSun, { width: 16, height: 16 });
const MoonIcon = () => _jsx(IconMoon, { width: 16, height: 16 });
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