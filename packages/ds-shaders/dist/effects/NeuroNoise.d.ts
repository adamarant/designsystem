import { neuroNoisePresets, type NeuroNoiseProps } from "@paper-design/shaders-react";
import { type PaletteName } from "../lib/use-ds-colors.js";
export interface DsNeuroNoiseProps extends Omit<NeuroNoiseProps, "colorFront" | "colorMid" | "colorBack"> {
    palette?: PaletteName;
    colorFront?: NeuroNoiseProps["colorFront"];
    colorMid?: NeuroNoiseProps["colorMid"];
    colorBack?: NeuroNoiseProps["colorBack"];
}
export declare function NeuroNoise({ palette, colorFront, colorMid, colorBack, ...rest }: DsNeuroNoiseProps): import("react/jsx-runtime").JSX.Element;
export declare namespace NeuroNoise {
    var displayName: string;
}
export { neuroNoisePresets };
//# sourceMappingURL=NeuroNoise.d.ts.map