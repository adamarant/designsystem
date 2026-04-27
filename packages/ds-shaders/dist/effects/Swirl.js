"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { Swirl as Upstream, swirlPresets, } from "@paper-design/shaders-react";
import { useDsColors } from "../lib/use-ds-colors.js";
export function Swirl({ palette = "brand", colors, ...rest }) {
    const dsColors = useDsColors(palette);
    return _jsx(Upstream, { colors: colors ?? dsColors, ...rest });
}
Swirl.displayName = "DsSwirl";
export { swirlPresets };
//# sourceMappingURL=Swirl.js.map