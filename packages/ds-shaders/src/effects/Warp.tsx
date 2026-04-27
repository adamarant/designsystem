"use client";
import {
  Warp as Upstream,
  warpPresets,
  type WarpProps,
} from "@paper-design/shaders-react";
import { useDsColors, type PaletteName } from "../lib/use-ds-colors.js";

export interface DsWarpProps extends Omit<WarpProps, "colors"> {
  palette?: PaletteName;
  colors?: WarpProps["colors"];
}

export function Warp({ palette = "brand", colors, ...rest }: DsWarpProps) {
  const dsColors = useDsColors(palette);
  return <Upstream colors={colors ?? dsColors} {...rest} />;
}

Warp.displayName = "DsWarp";

export { warpPresets };
