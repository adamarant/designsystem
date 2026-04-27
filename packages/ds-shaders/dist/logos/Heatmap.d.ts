import { heatmapPresets, type HeatmapProps } from "@paper-design/shaders-react";
import { type PaletteName } from "../lib/use-ds-colors.js";
export interface DsHeatmapProps extends Omit<HeatmapProps, "colors"> {
    palette?: PaletteName;
    colors?: HeatmapProps["colors"];
}
export declare function Heatmap({ palette, colors, ...rest }: DsHeatmapProps): import("react/jsx-runtime").JSX.Element;
export declare namespace Heatmap {
    var displayName: string;
}
export { heatmapPresets };
//# sourceMappingURL=Heatmap.d.ts.map