import { perlinNoisePresets, type PerlinNoiseProps } from "@paper-design/shaders-react";
import { type PaletteName } from "../lib/use-ds-colors.js";
export interface DsPerlinNoiseProps extends Omit<PerlinNoiseProps, "colorFront" | "colorBack"> {
    palette?: PaletteName;
    colorFront?: PerlinNoiseProps["colorFront"];
    colorBack?: PerlinNoiseProps["colorBack"];
}
export declare function PerlinNoise({ palette, colorFront, colorBack, ...rest }: DsPerlinNoiseProps): import("react/jsx-runtime").JSX.Element;
export declare namespace PerlinNoise {
    var displayName: string;
}
export { perlinNoisePresets };
//# sourceMappingURL=PerlinNoise.d.ts.map