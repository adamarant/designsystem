"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { ColorPanels as Upstream, colorPanelsPresets, } from "@paper-design/shaders-react";
import { useDsColors } from "../lib/use-ds-colors.js";
export function ColorPanels({ palette = "brand", colors, ...rest }) {
    const dsColors = useDsColors(palette);
    return _jsx(Upstream, { colors: colors ?? dsColors, ...rest });
}
ColorPanels.displayName = "DsColorPanels";
export { colorPanelsPresets };
//# sourceMappingURL=ColorPanels.js.map