import { type ElementType, type ComponentPropsWithoutRef } from "react";
type StackSize = "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";
export interface StackProps extends ComponentPropsWithoutRef<"div"> {
    /** Render as a different HTML element. Default: "div" */
    as?: ElementType;
    /**
     * Vertical spacing between children.
     * Maps to ds-stack variants:
     * - sm  = 0.5rem (space-2)
     * - md  = 1rem   (space-4, default ds-stack)
     * - lg  = 2rem   (space-8)
     * - xl  = 3rem   (space-12)
     * - 2xl = 4rem   (space-16)
     * - 3xl = 6rem   (space-24)
     *
     * Default: "md"
     */
    gap?: StackSize;
    /** Additional className */
    className?: string;
}
export declare const Stack: import("react").ForwardRefExoticComponent<StackProps & import("react").RefAttributes<HTMLElement>>;
export {};
//# sourceMappingURL=Stack.d.ts.map