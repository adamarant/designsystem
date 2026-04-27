import { meshGradientPresets, type MeshGradientProps } from "@paper-design/shaders-react";
import { type PaletteName } from "../lib/use-ds-colors.js";
export interface DsMeshGradientProps extends Omit<MeshGradientProps, "colors"> {
    /** DS-themed palette. Override with explicit `colors`. */
    palette?: PaletteName;
    /** Raw color array. Takes precedence over `palette`. */
    colors?: MeshGradientProps["colors"];
}
export declare function MeshGradient({ palette, colors, ...rest }: DsMeshGradientProps): import("react/jsx-runtime").JSX.Element;
export declare namespace MeshGradient {
    var displayName: string;
}
export { meshGradientPresets };
//# sourceMappingURL=MeshGradient.d.ts.map