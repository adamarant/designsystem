import { type ComponentPropsWithoutRef } from "react";
import type { Size } from "../types";
type ToggleSize = Exclude<Size, "xs">;
export interface ToggleProps extends Omit<ComponentPropsWithoutRef<"button">, "role"> {
    /** Checked state. */
    checked: boolean;
    /** Called when the user toggles. */
    onCheckedChange: (checked: boolean) => void;
    /** Size. Default: "md" */
    size?: ToggleSize;
    /** Additional className */
    className?: string;
}
export interface ToggleLabelProps extends ComponentPropsWithoutRef<"label"> {
    /** Additional className */
    className?: string;
}
export interface ToggleLabelTextProps extends ComponentPropsWithoutRef<"span"> {
    /** Additional className */
    className?: string;
}
declare const ToggleLabel: import("react").ForwardRefExoticComponent<ToggleLabelProps & import("react").RefAttributes<HTMLLabelElement>>;
declare const ToggleLabelText: import("react").ForwardRefExoticComponent<ToggleLabelTextProps & import("react").RefAttributes<HTMLSpanElement>>;
export { ToggleLabel, ToggleLabelText };
export declare const Toggle: import("react").ForwardRefExoticComponent<ToggleProps & import("react").RefAttributes<HTMLButtonElement>> & {
    Label: import("react").ForwardRefExoticComponent<ToggleLabelProps & import("react").RefAttributes<HTMLLabelElement>>;
    LabelText: import("react").ForwardRefExoticComponent<ToggleLabelTextProps & import("react").RefAttributes<HTMLSpanElement>>;
};
//# sourceMappingURL=Toggle.d.ts.map