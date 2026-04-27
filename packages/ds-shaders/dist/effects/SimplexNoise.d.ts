import { simplexNoisePresets, type SimplexNoiseProps } from "@paper-design/shaders-react";
import { type PaletteName } from "../lib/use-ds-colors.js";
export interface DsSimplexNoiseProps extends Omit<SimplexNoiseProps, "colors"> {
    palette?: PaletteName;
    colors?: SimplexNoiseProps["colors"];
}
export declare function SimplexNoise({ palette, colors, ...rest }: DsSimplexNoiseProps): import("react/jsx-runtime").JSX.Element;
export declare namespace SimplexNoise {
    var displayName: string;
}
export { simplexNoisePresets };
//# sourceMappingURL=SimplexNoise.d.ts.map