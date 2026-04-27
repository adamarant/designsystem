import { halftoneDotsPresets, type HalftoneDotsProps } from "@paper-design/shaders-react";
import { type PaletteName } from "../lib/use-ds-colors.js";
export interface DsHalftoneDotsProps extends Omit<HalftoneDotsProps, "colorFront" | "colorBack"> {
    palette?: PaletteName;
    colorFront?: HalftoneDotsProps["colorFront"];
    colorBack?: HalftoneDotsProps["colorBack"];
}
export declare function HalftoneDots({ palette, colorFront, colorBack, ...rest }: DsHalftoneDotsProps): import("react/jsx-runtime").JSX.Element;
export declare namespace HalftoneDots {
    var displayName: string;
}
export { halftoneDotsPresets };
//# sourceMappingURL=HalftoneDots.d.ts.map