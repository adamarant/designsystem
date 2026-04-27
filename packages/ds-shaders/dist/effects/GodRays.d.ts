import { godRaysPresets, type GodRaysProps } from "@paper-design/shaders-react";
import { type PaletteName } from "../lib/use-ds-colors.js";
export interface DsGodRaysProps extends Omit<GodRaysProps, "colors"> {
    palette?: PaletteName;
    colors?: GodRaysProps["colors"];
}
export declare function GodRays({ palette, colors, ...rest }: DsGodRaysProps): import("react/jsx-runtime").JSX.Element;
export declare namespace GodRays {
    var displayName: string;
}
export { godRaysPresets };
//# sourceMappingURL=GodRays.d.ts.map