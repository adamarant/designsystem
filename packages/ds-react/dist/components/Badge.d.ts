import { type ComponentPropsWithoutRef } from "react";
type BadgeVariant = "default" | "primary" | "success" | "warning" | "error" | "info" | "purple" | "outline";
export interface BadgeProps extends ComponentPropsWithoutRef<"span"> {
    /** Semantic color variant. Default: "default" (neutral muted) */
    variant?: BadgeVariant;
    /** Show colored dot indicator before text. Default: false */
    dot?: boolean;
    /** Uppercase small caps style (for "NEW", "BETA", etc.). Default: false */
    upper?: boolean;
    /** Additional className */
    className?: string;
}
export declare const Badge: import("react").ForwardRefExoticComponent<BadgeProps & import("react").RefAttributes<HTMLSpanElement>>;
export {};
//# sourceMappingURL=Badge.d.ts.map