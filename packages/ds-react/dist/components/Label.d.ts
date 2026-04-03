import { type ComponentPropsWithoutRef } from "react";
type LabelColor = "primary" | "secondary";
type LabelSpacing = "1" | "1.5" | "2" | "3";
export interface LabelProps extends ComponentPropsWithoutRef<"label"> {
    /** Text color. Default: "secondary" */
    color?: LabelColor;
    /** Bottom margin. Default: "2" (ds-mb-2) */
    spacing?: LabelSpacing;
    /** Additional className */
    className?: string;
}
export declare const Label: import("react").ForwardRefExoticComponent<LabelProps & import("react").RefAttributes<HTMLLabelElement>>;
export {};
//# sourceMappingURL=Label.d.ts.map