import { staticRadialGradientPresets, type StaticRadialGradientProps } from "@paper-design/shaders-react";
import { type PaletteName } from "../lib/use-ds-colors.js";
export interface DsStaticRadialGradientProps extends Omit<StaticRadialGradientProps, "colors"> {
    palette?: PaletteName;
    colors?: StaticRadialGradientProps["colors"];
}
export declare function StaticRadialGradient({ palette, colors, ...rest }: DsStaticRadialGradientProps): import("react/jsx-runtime").JSX.Element;
export declare namespace StaticRadialGradient {
    var displayName: string;
}
export { staticRadialGradientPresets };
//# sourceMappingURL=StaticRadialGradient.d.ts.map