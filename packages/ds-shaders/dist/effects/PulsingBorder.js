"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { PulsingBorder as Upstream, pulsingBorderPresets, } from "@paper-design/shaders-react";
import { useDsColors } from "../lib/use-ds-colors.js";
export function PulsingBorder({ palette = "brand", colors, ...rest }) {
    const dsColors = useDsColors(palette);
    return _jsx(Upstream, { colors: colors ?? dsColors, ...rest });
}
PulsingBorder.displayName = "DsPulsingBorder";
export { pulsingBorderPresets };
//# sourceMappingURL=PulsingBorder.js.map