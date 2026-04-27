"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { SmokeRing as Upstream, smokeRingPresets, } from "@paper-design/shaders-react";
import { useDsColors } from "../lib/use-ds-colors.js";
export function SmokeRing({ palette = "brand", colors, ...rest }) {
    const dsColors = useDsColors(palette);
    return _jsx(Upstream, { colors: colors ?? dsColors, ...rest });
}
SmokeRing.displayName = "DsSmokeRing";
export { smokeRingPresets };
//# sourceMappingURL=SmokeRing.js.map