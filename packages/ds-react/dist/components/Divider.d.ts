import { type ComponentPropsWithoutRef } from "react";
type DividerVariant = "default" | "subtle" | "strong";
type DividerOrientation = "horizontal" | "vertical";
export interface DividerProps extends ComponentPropsWithoutRef<"hr"> {
    variant?: DividerVariant;
    orientation?: DividerOrientation;
    className?: string;
}
export declare const Divider: import("react").ForwardRefExoticComponent<DividerProps & import("react").RefAttributes<HTMLHRElement>>;
export {};
//# sourceMappingURL=Divider.d.ts.map