import { type ComponentPropsWithoutRef } from "react";
type Theme = "light" | "dark";
type ThemeToggleSize = "sm" | "md" | "lg";
export interface ThemeToggleProps extends Omit<ComponentPropsWithoutRef<"button">, "role" | "aria-checked" | "onChange"> {
    /** Current theme. `"dark"` renders as checked (thumb right, moon active). */
    theme: Theme;
    /** Called with the next theme when the user toggles. */
    onThemeChange: (next: Theme) => void;
    /** Size. Default: "md" */
    size?: ThemeToggleSize;
    /** Additional className */
    className?: string;
}
export declare const ThemeToggle: import("react").ForwardRefExoticComponent<ThemeToggleProps & import("react").RefAttributes<HTMLButtonElement>>;
export {};
//# sourceMappingURL=ThemeToggle.d.ts.map