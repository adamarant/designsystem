import { pulsingBorderPresets, type PulsingBorderProps } from "@paper-design/shaders-react";
import { type PaletteName } from "../lib/use-ds-colors.js";
export interface DsPulsingBorderProps extends Omit<PulsingBorderProps, "colors"> {
    palette?: PaletteName;
    colors?: PulsingBorderProps["colors"];
}
export declare function PulsingBorder({ palette, colors, ...rest }: DsPulsingBorderProps): import("react/jsx-runtime").JSX.Element;
export declare namespace PulsingBorder {
    var displayName: string;
}
export { pulsingBorderPresets };
//# sourceMappingURL=PulsingBorder.d.ts.map