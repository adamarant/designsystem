"use client";
import {
  Spiral as Upstream,
  spiralPresets,
  type SpiralProps,
} from "@paper-design/shaders-react";
import { useDsColors, type PaletteName } from "../lib/use-ds-colors.js";

export interface DsSpiralProps
  extends Omit<SpiralProps, "colorFront" | "colorBack"> {
  palette?: PaletteName;
  colorFront?: SpiralProps["colorFront"];
  colorBack?: SpiralProps["colorBack"];
}

export function Spiral({
  palette = "brand",
  colorFront,
  colorBack,
  ...rest
}: DsSpiralProps) {
  const ds = useDsColors(palette);
  return (
    <Upstream
      colorFront={colorFront ?? ds[0]}
      colorBack={colorBack ?? ds[ds.length - 1]}
      {...rest}
    />
  );
}

Spiral.displayName = "DsSpiral";

export { spiralPresets };
