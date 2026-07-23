import { type ComponentPropsWithoutRef } from "react";
type TooltipPlacement = "top" | "bottom" | "left" | "right";
export interface TooltipProps extends ComponentPropsWithoutRef<"div"> {
    /** Placement relative to trigger. Default: "top" */
    placement?: TooltipPlacement;
    /** 200ms delay before showing. Default: false */
    delay?: boolean;
    /** Additional className */
    className?: string;
}
export interface TooltipContentProps extends ComponentPropsWithoutRef<"div"> {
    /** Additional className */
    className?: string;
}
declare const TooltipContent: import("react").ForwardRefExoticComponent<TooltipContentProps & import("react").RefAttributes<HTMLDivElement>>;
export { TooltipContent };
export declare const Tooltip: import("react").ForwardRefExoticComponent<TooltipProps & import("react").RefAttributes<HTMLDivElement>> & {
    Content: import("react").ForwardRefExoticComponent<TooltipContentProps & import("react").RefAttributes<HTMLDivElement>>;
};
//# sourceMappingURL=Tooltip.d.ts.map