"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { NeuroNoise as Upstream, neuroNoisePresets, } from "@paper-design/shaders-react";
import { useDsColors } from "../lib/use-ds-colors.js";
export function NeuroNoise({ palette = "brand", colorFront, colorMid, colorBack, ...rest }) {
    const ds = useDsColors(palette);
    return (_jsx(Upstream, { colorFront: colorFront ?? ds[0], colorMid: colorMid ?? ds[1], colorBack: colorBack ?? ds[ds.length - 1], ...rest }));
}
NeuroNoise.displayName = "DsNeuroNoise";
export { neuroNoisePresets };
//# sourceMappingURL=NeuroNoise.js.map