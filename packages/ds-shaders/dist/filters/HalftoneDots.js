"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { HalftoneDots as Upstream, halftoneDotsPresets, } from "@paper-design/shaders-react";
import { useDsColors } from "../lib/use-ds-colors.js";
export function HalftoneDots({ palette = "brand", colorFront, colorBack, ...rest }) {
    const ds = useDsColors(palette);
    return (_jsx(Upstream, { colorFront: colorFront ?? ds[0], colorBack: colorBack ?? ds[ds.length - 1], ...rest }));
}
HalftoneDots.displayName = "DsHalftoneDots";
export { halftoneDotsPresets };
//# sourceMappingURL=HalftoneDots.js.map