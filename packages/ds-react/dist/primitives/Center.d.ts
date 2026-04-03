import { type ElementType, type ComponentPropsWithoutRef } from "react";
export interface CenterProps extends ComponentPropsWithoutRef<"div"> {
    /** Render as a different HTML element. Default: "div" */
    as?: ElementType;
    /** Additional className */
    className?: string;
}
export declare const Center: import("react").ForwardRefExoticComponent<CenterProps & import("react").RefAttributes<HTMLElement>>;
//# sourceMappingURL=Center.d.ts.map