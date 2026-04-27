"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { Waves as Upstream, wavesPresets, } from "@paper-design/shaders-react";
import { useDsColors } from "../lib/use-ds-colors.js";
export function Waves({ palette = "brand", colorFront, colorBack, ...rest }) {
    const ds = useDsColors(palette);
    return (_jsx(Upstream, { colorFront: colorFront ?? ds[0], colorBack: colorBack ?? ds[ds.length - 1], ...rest }));
}
Waves.displayName = "DsWaves";
export { wavesPresets };
//# sourceMappingURL=Waves.js.map