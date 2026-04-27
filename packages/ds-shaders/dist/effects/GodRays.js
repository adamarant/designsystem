"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { GodRays as Upstream, godRaysPresets, } from "@paper-design/shaders-react";
import { useDsColors } from "../lib/use-ds-colors.js";
export function GodRays({ palette = "brand", colors, ...rest }) {
    const dsColors = useDsColors(palette);
    return _jsx(Upstream, { colors: colors ?? dsColors, ...rest });
}
GodRays.displayName = "DsGodRays";
export { godRaysPresets };
//# sourceMappingURL=GodRays.js.map