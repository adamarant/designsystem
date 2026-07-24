import { type ComponentPropsWithoutRef } from "react";
import { type Size } from "../types";
export interface ChipProps extends ComponentPropsWithoutRef<"span"> {
    /** Size tier. Default: "md" (no class emitted). */
    size?: Exclude<Size, "xs">;
    className?: string;
}
export declare const Chip: import("react").ForwardRefExoticComponent<ChipProps & import("react").RefAttributes<HTMLSpanElement>>;
//# sourceMappingURL=Chip.d.ts.map