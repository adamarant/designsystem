"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { StaticMeshGradient as Upstream, staticMeshGradientPresets, } from "@paper-design/shaders-react";
import { useDsColors } from "../lib/use-ds-colors.js";
export function StaticMeshGradient({ palette = "brand", colors, ...rest }) {
    const dsColors = useDsColors(palette);
    return _jsx(Upstream, { colors: colors ?? dsColors, ...rest });
}
StaticMeshGradient.displayName = "DsStaticMeshGradient";
export { staticMeshGradientPresets };
//# sourceMappingURL=StaticMeshGradient.js.map