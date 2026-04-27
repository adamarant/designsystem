import { gemSmokePresets, type GemSmokeProps } from "@paper-design/shaders-react";
import { type PaletteName } from "../lib/use-ds-colors.js";
export interface DsGemSmokeProps extends Omit<GemSmokeProps, "colors"> {
    palette?: PaletteName;
    colors?: GemSmokeProps["colors"];
}
export declare function GemSmoke({ palette, colors, ...rest }: DsGemSmokeProps): import("react/jsx-runtime").JSX.Element;
export declare namespace GemSmoke {
    var displayName: string;
}
export { gemSmokePresets };
//# sourceMappingURL=GemSmoke.d.ts.map