import { paperTexturePresets, type PaperTextureProps } from "@paper-design/shaders-react";
import { type PaletteName } from "../lib/use-ds-colors.js";
export interface DsPaperTextureProps extends Omit<PaperTextureProps, "colorFront" | "colorBack"> {
    palette?: PaletteName;
    colorFront?: PaperTextureProps["colorFront"];
    colorBack?: PaperTextureProps["colorBack"];
}
export declare function PaperTexture({ palette, colorFront, colorBack, ...rest }: DsPaperTextureProps): import("react/jsx-runtime").JSX.Element;
export declare namespace PaperTexture {
    var displayName: string;
}
export { paperTexturePresets };
//# sourceMappingURL=PaperTexture.d.ts.map