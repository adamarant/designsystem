import { type ComponentPropsWithoutRef } from "react";
import type { Size } from "../types";
type SpinnerSize = Exclude<Size, "xs"> | "default";
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