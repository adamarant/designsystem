import { grainGradientPresets, type GrainGradientProps } from "@paper-design/shaders-react";
import { type PaletteName } from "../lib/use-ds-colors.js";
export interface DsGrainGradientProps extends Omit<GrainGradientProps, "colors"> {
    palette?: PaletteName;
    colors?: GrainGradientProps["colors"];
}
export declare function GrainGradient({ palette, colors, ...rest }: DsGrainGradientProps): import("react/jsx-runtime").JSX.Element;
export declare namespace GrainGradient {
    var displayName: string;
}
export { grainGradientPresets };
//# sourceMappingURL=GrainGradient.d.ts.map