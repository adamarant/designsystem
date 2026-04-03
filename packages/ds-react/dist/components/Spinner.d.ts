import { type ComponentPropsWithoutRef } from "react";
type SpinnerSize = "sm" | "md" | "default" | "lg";
type SpinnerVariant = "default" | "muted" | "light";
export interface SpinnerProps extends ComponentPropsWithoutRef<"span"> {
    /** Size. Default: "default" (24px) */
    size?: SpinnerSize;
    /** Color variant. Default: "default" (border + interactive top) */
    variant?: SpinnerVariant;
    /** Additional className */
    className?: string;
}
export declare const Spinner: import("react").ForwardRefExoticComponent<SpinnerProps & import("react").RefAttributes<HTMLSpanElement>>;
export {};
//# sourceMappingURL=Spinner.d.ts.map