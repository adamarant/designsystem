import { ditheringPresets, type DitheringProps } from "@paper-design/shaders-react";
import { type PaletteName } from "../lib/use-ds-colors.js";
export interface DsDitheringProps extends Omit<DitheringProps, "colorFront" | "colorBack"> {
    palette?: PaletteName;
    colorFront?: DitheringProps["colorFront"];
    colorBack?: DitheringProps["colorBack"];
}
export declare function Dithering({ palette, colorFront, colorBack, ...rest }: DsDitheringProps): import("react/jsx-runtime").JSX.Element;
export declare namespace Dithering {
    var displayName: string;
}
export { ditheringPresets };
//# sourceMappingURL=Dithering.d.ts.map