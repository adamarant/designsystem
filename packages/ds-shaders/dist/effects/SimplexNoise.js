"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { SimplexNoise as Upstream, simplexNoisePresets, } from "@paper-design/shaders-react";
import { useDsColors } from "../lib/use-ds-colors.js";
export function SimplexNoise({ palette = "brand", colors, ...rest }) {
    const dsColors = useDsColors(palette);
    return _jsx(Upstream, { colors: colors ?? dsColors, ...rest });
}
SimplexNoise.displayName = "DsSimplexNoise";
export { simplexNoisePresets };
//# sourceMappingURL=SimplexNoise.js.map