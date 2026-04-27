"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { Dithering as Upstream, ditheringPresets, } from "@paper-design/shaders-react";
import { useDsColors } from "../lib/use-ds-colors.js";
export function Dithering({ palette = "brand", colorFront, colorBack, ...rest }) {
    const ds = useDsColors(palette);
    return (_jsx(Upstream, { colorFront: colorFront ?? ds[0], colorBack: colorBack ?? ds[ds.length - 1], ...rest }));
}
Dithering.displayName = "DsDithering";
export { ditheringPresets };
//# sourceMappingURL=Dithering.js.map