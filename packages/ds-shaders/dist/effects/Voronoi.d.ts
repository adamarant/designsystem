import { voronoiPresets, type VoronoiProps } from "@paper-design/shaders-react";
import { type PaletteName } from "../lib/use-ds-colors.js";
export interface DsVoronoiProps extends Omit<VoronoiProps, "colors"> {
    palette?: PaletteName;
    colors?: VoronoiProps["colors"];
}
export declare function Voronoi({ palette, colors, ...rest }: DsVoronoiProps): import("react/jsx-runtime").JSX.Element;
export declare namespace Voronoi {
    var displayName: string;
}
export { voronoiPresets };
//# sourceMappingURL=Voronoi.d.ts.map