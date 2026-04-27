"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { GemSmoke as Upstream, gemSmokePresets, } from "@paper-design/shaders-react";
import { useDsColors } from "../lib/use-ds-colors.js";
export function GemSmoke({ palette = "brand", colors, ...rest }) {
    const dsColors = useDsColors(palette);
    return _jsx(Upstream, { colors: colors ?? dsColors, ...rest });
}
GemSmoke.displayName = "DsGemSmoke";
export { gemSmokePresets };
//# sourceMappingURL=GemSmoke.js.map