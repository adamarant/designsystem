import { spiralPresets, type SpiralProps } from "@paper-design/shaders-react";
import { type PaletteName } from "../lib/use-ds-colors.js";
export interface DsSpiralProps extends Omit<SpiralProps, "colorFront" | "colorBack"> {
    palette?: PaletteName;
    colorFront?: SpiralProps["colorFront"];
    colorBack?: SpiralProps["colorBack"];
}
export declare function Spiral({ palette, colorFront, colorBack, ...rest }: DsSpiralProps): import("react/jsx-runtime").JSX.Element;
export declare namespace Spiral {
    var displayName: string;
}
export { spiralPresets };
//# sourceMappingURL=Spiral.d.ts.map