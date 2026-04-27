"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { PaperTexture as Upstream, paperTexturePresets, } from "@paper-design/shaders-react";
import { useDsColors } from "../lib/use-ds-colors.js";
export function PaperTexture({ palette = "brand", colorFront, colorBack, ...rest }) {
    const ds = useDsColors(palette);
    return (_jsx(Upstream, { colorFront: colorFront ?? ds[0], colorBack: colorBack ?? ds[ds.length - 1], ...rest }));
}
PaperTexture.displayName = "DsPaperTexture";
export { paperTexturePresets };
//# sourceMappingURL=PaperTexture.js.map