"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { DotOrbit as Upstream, dotOrbitPresets, } from "@paper-design/shaders-react";
import { useDsColors } from "../lib/use-ds-colors.js";
export function DotOrbit({ palette = "brand", colors, ...rest }) {
    const dsColors = useDsColors(palette);
    return _jsx(Upstream, { colors: colors ?? dsColors, ...rest });
}
DotOrbit.displayName = "DsDotOrbit";
export { dotOrbitPresets };
//# sourceMappingURL=DotOrbit.js.map