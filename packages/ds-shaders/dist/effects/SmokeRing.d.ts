import { smokeRingPresets, type SmokeRingProps } from "@paper-design/shaders-react";
import { type PaletteName } from "../lib/use-ds-colors.js";
export interface DsSmokeRingProps extends Omit<SmokeRingProps, "colors"> {
    palette?: PaletteName;
    colors?: SmokeRingProps["colors"];
}
export declare function SmokeRing({ palette, colors, ...rest }: DsSmokeRingProps): import("react/jsx-runtime").JSX.Element;
export declare namespace SmokeRing {
    var displayName: string;
}
export { smokeRingPresets };
//# sourceMappingURL=SmokeRing.d.ts.map