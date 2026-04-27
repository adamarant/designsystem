"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { PerlinNoise as Upstream, perlinNoisePresets, } from "@paper-design/shaders-react";
import { useDsColors } from "../lib/use-ds-colors.js";
export function PerlinNoise({ palette = "brand", colorFront, colorBack, ...rest }) {
    const ds = useDsColors(palette);
    return (_jsx(Upstream, { colorFront: colorFront ?? ds[0], colorBack: colorBack ?? ds[ds.length - 1], ...rest }));
}
PerlinNoise.displayName = "DsPerlinNoise";
export { perlinNoisePresets };
//# sourceMappingURL=PerlinNoise.js.map