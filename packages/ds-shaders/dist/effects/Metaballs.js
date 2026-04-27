"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { Metaballs as Upstream, metaballsPresets, } from "@paper-design/shaders-react";
import { useDsColors } from "../lib/use-ds-colors.js";
export function Metaballs({ palette = "brand", colors, ...rest }) {
    const dsColors = useDsColors(palette);
    return _jsx(Upstream, { colors: colors ?? dsColors, ...rest });
}
Metaballs.displayName = "DsMetaballs";
export { metaballsPresets };
//# sourceMappingURL=Metaballs.js.map