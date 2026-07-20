import type { AdminThemeToggleProps } from './types.js';
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
export declare function AdminThemeToggle({ size, defaultTheme, className, }: AdminThemeToggleProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=AdminThemeToggle.d.ts.map