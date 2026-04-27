"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { GrainGradient as Upstream, grainGradientPresets, } from "@paper-design/shaders-react";
import { useDsColors } from "../lib/use-ds-colors.js";
export function GrainGradient({ palette = "brand", colors, ...rest }) {
    const dsColors = useDsColors(palette);
    return _jsx(Upstream, { colors: colors ?? dsColors, ...rest });
}
GrainGradient.displayName = "DsGrainGradient";
export { grainGradientPresets };
//# sourceMappingURL=GrainGradient.js.map