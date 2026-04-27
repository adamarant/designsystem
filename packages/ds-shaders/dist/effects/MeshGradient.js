"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { MeshGradient as Upstream, meshGradientPresets, } from "@paper-design/shaders-react";
import { useDsColors } from "../lib/use-ds-colors.js";
export function MeshGradient({ palette = "brand", colors, ...rest }) {
    const dsColors = useDsColors(palette);
    return _jsx(Upstream, { colors: colors ?? dsColors, ...rest });
}
MeshGradient.displayName = "DsMeshGradient";
export { meshGradientPresets };
//# sourceMappingURL=MeshGradient.js.map