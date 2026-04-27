import { warpPresets, type WarpProps } from "@paper-design/shaders-react";
import { type PaletteName } from "../lib/use-ds-colors.js";
export interface DsWarpProps extends Omit<WarpProps, "colors"> {
    palette?: PaletteName;
    colors?: WarpProps["colors"];
}
export declare function Warp({ palette, colors, ...rest }: DsWarpProps): import("react/jsx-runtime").JSX.Element;
export declare namespace Warp {
    var displayName: string;
}
export { warpPresets };
//# sourceMappingURL=Warp.d.ts.map