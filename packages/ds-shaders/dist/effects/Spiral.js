"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { Spiral as Upstream, spiralPresets, } from "@paper-design/shaders-react";
import { useDsColors } from "../lib/use-ds-colors.js";
export function Spiral({ palette = "brand", colorFront, colorBack, ...rest }) {
    const ds = useDsColors(palette);
    return (_jsx(Upstream, { colorFront: colorFront ?? ds[0], colorBack: colorBack ?? ds[ds.length - 1], ...rest }));
}
Spiral.displayName = "DsSpiral";
export { spiralPresets };
//# sourceMappingURL=Spiral.js.map