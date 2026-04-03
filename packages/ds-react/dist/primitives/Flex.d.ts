import { type ElementType, type ComponentPropsWithoutRef } from "react";
type Gap = "0" | "0.5" | "1" | "1.5" | "2" | "3" | "4" | "5" | "6" | "8" | "10" | "12" | "16" | "20";
type Align = "start" | "center" | "end" | "stretch" | "baseline";
type Justify = "start" | "center" | "end" | "between" | "around" | "evenly";
export interface FlexProps extends ComponentPropsWithoutRef<"div"> {
    /** Render as a different HTML element. Default: "div" */
    as?: ElementType;
    /** Flex direction. Default: row */
    direction?: "row" | "col";
    /** Use inline-flex instead of flex */
    inline?: boolean;
    /** Enable flex-wrap */
    wrap?: boolean;
    /** align-items */
    align?: Align;
    /** justify-content */
    justify?: Justify;
    /** Gap between children */
    gap?: Gap;
    /** Additional className */
    className?: string;
}
export declare const Flex: import("react").ForwardRefExoticComponent<FlexProps & import("react").RefAttributes<HTMLElement>>;
export {};
//# sourceMappingURL=Flex.d.ts.map