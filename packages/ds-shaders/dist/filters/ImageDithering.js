"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { ImageDithering as Upstream, imageDitheringPresets, } from "@paper-design/shaders-react";
import { useDsColors } from "../lib/use-ds-colors.js";
export function ImageDithering({ palette = "brand", colorFront, colorBack, ...rest }) {
    const ds = useDsColors(palette);
    return (_jsx(Upstream, { colorFront: colorFront ?? ds[0], colorBack: colorBack ?? ds[ds.length - 1], ...rest }));
}
ImageDithering.displayName = "DsImageDithering";
export { imageDitheringPresets };
//# sourceMappingURL=ImageDithering.js.map