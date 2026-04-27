import { wavesPresets, type WavesProps } from "@paper-design/shaders-react";
import { type PaletteName } from "../lib/use-ds-colors.js";
export interface DsWavesProps extends Omit<WavesProps, "colorFront" | "colorBack"> {
    palette?: PaletteName;
    colorFront?: WavesProps["colorFront"];
    colorBack?: WavesProps["colorBack"];
}
export declare function Waves({ palette, colorFront, colorBack, ...rest }: DsWavesProps): import("react/jsx-runtime").JSX.Element;
export declare namespace Waves {
    var displayName: string;
}
export { wavesPresets };
//# sourceMappingURL=Waves.d.ts.map