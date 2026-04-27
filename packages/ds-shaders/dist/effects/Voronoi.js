"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { Voronoi as Upstream, voronoiPresets, } from "@paper-design/shaders-react";
import { useDsColors } from "../lib/use-ds-colors.js";
export function Voronoi({ palette = "brand", colors, ...rest }) {
    const dsColors = useDsColors(palette);
    return _jsx(Upstream, { colors: colors ?? dsColors, ...rest });
}
Voronoi.displayName = "DsVoronoi";
export { voronoiPresets };
//# sourceMappingURL=Voronoi.js.map