"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { Heatmap as Upstream, heatmapPresets, } from "@paper-design/shaders-react";
import { useDsColors } from "../lib/use-ds-colors.js";
export function Heatmap({ palette = "brand", colors, ...rest }) {
    const dsColors = useDsColors(palette);
    return _jsx(Upstream, { colors: colors ?? dsColors, ...rest });
}
Heatmap.displayName = "DsHeatmap";
export { heatmapPresets };
//# sourceMappingURL=Heatmap.js.map