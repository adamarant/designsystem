"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { StaticRadialGradient as Upstream, staticRadialGradientPresets, } from "@paper-design/shaders-react";
import { useDsColors } from "../lib/use-ds-colors.js";
export function StaticRadialGradient({ palette = "brand", colors, ...rest }) {
    const dsColors = useDsColors(palette);
    return _jsx(Upstream, { colors: colors ?? dsColors, ...rest });
}
StaticRadialGradient.displayName = "DsStaticRadialGradient";
export { staticRadialGradientPresets };
//# sourceMappingURL=StaticRadialGradient.js.map