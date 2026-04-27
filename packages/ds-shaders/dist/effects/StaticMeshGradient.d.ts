import { staticMeshGradientPresets, type StaticMeshGradientProps } from "@paper-design/shaders-react";
import { type PaletteName } from "../lib/use-ds-colors.js";
export interface DsStaticMeshGradientProps extends Omit<StaticMeshGradientProps, "colors"> {
    palette?: PaletteName;
    colors?: StaticMeshGradientProps["colors"];
}
export declare function StaticMeshGradient({ palette, colors, ...rest }: DsStaticMeshGradientProps): import("react/jsx-runtime").JSX.Element;
export declare namespace StaticMeshGradient {
    var displayName: string;
}
export { staticMeshGradientPresets };
//# sourceMappingURL=StaticMeshGradient.d.ts.map