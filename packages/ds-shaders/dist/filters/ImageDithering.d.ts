import { imageDitheringPresets, type ImageDitheringProps } from "@paper-design/shaders-react";
import { type PaletteName } from "../lib/use-ds-colors.js";
export interface DsImageDitheringProps extends Omit<ImageDitheringProps, "colorFront" | "colorBack"> {
    palette?: PaletteName;
    colorFront?: ImageDitheringProps["colorFront"];
    colorBack?: ImageDitheringProps["colorBack"];
}
export declare function ImageDithering({ palette, colorFront, colorBack, ...rest }: DsImageDitheringProps): import("react/jsx-runtime").JSX.Element;
export declare namespace ImageDithering {
    var displayName: string;
}
export { imageDitheringPresets };
//# sourceMappingURL=ImageDithering.d.ts.map