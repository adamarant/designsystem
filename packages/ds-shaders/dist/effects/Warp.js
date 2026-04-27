"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { Warp as Upstream, warpPresets, } from "@paper-design/shaders-react";
import { useDsColors } from "../lib/use-ds-colors.js";
export function Warp({ palette = "brand", colors, ...rest }) {
    const dsColors = useDsColors(palette);
    return _jsx(Upstream, { colors: colors ?? dsColors, ...rest });
}
Warp.displayName = "DsWarp";
export { warpPresets };
//# sourceMappingURL=Warp.js.map