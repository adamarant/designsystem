import { type ElementType, type ComponentPropsWithoutRef } from "react";
type Cols = "1" | "2" | "3" | "4";
type Gap = "0" | "0.5" | "1" | "1.5" | "2" | "3" | "4" | "5" | "6" | "8" | "10" | "12" | "16" | "20";
export interface GridProps extends ComponentPropsWithoutRef<"div"> {
    /** Render as a different HTML element. Default: "div" */
    as?: ElementType;
    /** Number of columns. Default: none (inherits from ds-grid default) */
    cols?: Cols;
    /** Responsive columns at sm breakpoint (640px) */
    smCols?: Cols;
    /** Responsive columns at md breakpoint (768px) */
    mdCols?: Cols;
    /** Responsive columns at lg breakpoint (1024px) */
    lgCols?: Cols;
    /** Gap between cells. Overrides the ds-grid default gap. */
    gap?: Gap;
    /** Additional className */
    className?: string;
}
export declare const Grid: import("react").ForwardRefExoticComponent<GridProps & import("react").RefAttributes<HTMLElement>>;
export {};
//# sourceMappingURL=Grid.d.ts.map