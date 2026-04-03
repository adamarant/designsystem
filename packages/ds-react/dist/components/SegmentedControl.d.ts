import { type ComponentPropsWithoutRef } from "react";
export interface SegmentedControlProps extends ComponentPropsWithoutRef<"div"> {
    className?: string;
}
export interface SegmentedControlItemProps extends ComponentPropsWithoutRef<"button"> {
    active?: boolean;
    className?: string;
}
export declare const SegmentedControl: import("react").ForwardRefExoticComponent<SegmentedControlProps & import("react").RefAttributes<HTMLDivElement>> & {
    Item: import("react").ForwardRefExoticComponent<SegmentedControlItemProps & import("react").RefAttributes<HTMLButtonElement>>;
};
//# sourceMappingURL=SegmentedControl.d.ts.map