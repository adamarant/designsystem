import { type ComponentPropsWithoutRef } from "react";
type ProgressVariant = "default" | "success" | "warning" | "error";
type ProgressSize = "sm" | "md" | "lg";
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
export declare const Progress: import("react").ForwardRefExoticComponent<ProgressProps & import("react").RefAttributes<HTMLDivElement>> & {
    Bar: import("react").ForwardRefExoticComponent<ProgressBarProps & import("react").RefAttributes<HTMLDivElement>>;
};
export {};
//# sourceMappingURL=Progress.d.ts.map