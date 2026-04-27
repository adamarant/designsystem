"use client";
import {
  PerlinNoise as Upstream,
  perlinNoisePresets,
  type PerlinNoiseProps,
} from "@paper-design/shaders-react";
import { useDsColors, type PaletteName } from "../lib/use-ds-colors.js";

export interface DsPerlinNoiseProps
  extends Omit<PerlinNoiseProps, "colorFront" | "colorBack"> {
  palette?: PaletteName;
  colorFront?: PerlinNoiseProps["colorFront"];
  colorBack?: PerlinNoiseProps["colorBack"];
}

export function PerlinNoise({
  palette = "brand",
  colorFront,
  colorBack,
  ...rest
}: DsPerlinNoiseProps) {
  const ds = useDsColors(palette);
  return (
    <Upstream
      colorFront={colorFront ?? ds[0]}
      colorBack={colorBack ?? ds[ds.length - 1]}
      {...rest}
    />
  );
}

PerlinNoise.displayName = "DsPerlinNoise";

export { perlinNoisePresets };
