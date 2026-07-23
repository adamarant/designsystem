import { type ComponentPropsWithoutRef } from "react";
import type { Size } from "../types";
type ProgressVariant = "default" | "success" | "warning" | "error";
type ProgressSize = Exclude<Size, "xs">;
export interface ProgressProps extends ComponentPropsWithoutRef<"div"> {
    value?: number;
    max?: number;
    variant?: ProgressVariant;
    size?: ProgressSize;
    className?: string;
}
export interface ProgressBarProps extends ComponentPropsWithoutRef<"div"> {
    className?: string;
}
declare const ProgressBar: import("react").ForwardRefExoticComponent<ProgressBarProps & import("react").RefAttributes<HTMLDivElement>>;
export { ProgressBar };
export declare const Progress: import("react").ForwardRefExoticComponent<ProgressProps & import("react").RefAttributes<HTMLDivElement>> & {
    Bar: import("react").ForwardRefExoticComponent<ProgressBarProps & import("react").RefAttributes<HTMLDivElement>>;
};
//# sourceMappingURL=Progress.d.ts.map