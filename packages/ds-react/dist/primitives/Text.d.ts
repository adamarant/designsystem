import { type ElementType, type ComponentPropsWithoutRef } from "react";
type TextSize = "xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl";
type TextWeight = "light" | "normal" | "medium" | "semibold" | "bold";
type TextColor = "primary" | "secondary" | "tertiary" | "success" | "warning" | "error" | "info" | "interactive" | "on-inverted" | "always-white" | "always-black" | "accent-blue" | "accent-purple" | "accent-green" | "accent-orange";
type TextAlign = "left" | "center" | "right" | "balance";
type TextLeading = "tight" | "snug" | "normal" | "relaxed";
type TextTracking = "tighter" | "tight" | "normal" | "wide" | "wider";
type TextTransform = "uppercase" | "lowercase" | "capitalize";
type TextClamp = "1" | "2" | "3";
export interface TextProps extends ComponentPropsWithoutRef<"span"> {
    /** Render as a different HTML element. Default: "span" */
    as?: ElementType;
    /** Font size */
    size?: TextSize;
    /** Font weight */
    weight?: TextWeight;
    /** Text color */
    color?: TextColor;
    /** Text alignment */
    align?: TextAlign;
    /** Line height */
    leading?: TextLeading;
    /** Letter spacing */
    tracking?: TextTracking;
    /** Text transform */
    transform?: TextTransform;
    /** Truncate with ellipsis (single line) */
    truncate?: boolean;
    /** Multi-line clamp (1, 2, or 3 lines) */
    clamp?: TextClamp;
    /** Monospace font */
    mono?: boolean;
    /** Additional className */
    className?: string;
}
export declare const Text: import("react").ForwardRefExoticComponent<TextProps & import("react").RefAttributes<HTMLElement>>;
export {};
//# sourceMappingURL=Text.d.ts.map