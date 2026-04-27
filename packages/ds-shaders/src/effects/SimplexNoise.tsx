"use client";
import {
  SimplexNoise as Upstream,
  simplexNoisePresets,
  type SimplexNoiseProps,
} from "@paper-design/shaders-react";
import { useDsColors, type PaletteName } from "../lib/use-ds-colors.js";

export interface DsSimplexNoiseProps extends Omit<SimplexNoiseProps, "colors"> {
  palette?: PaletteName;
  colors?: SimplexNoiseProps["colors"];
}

export function SimplexNoise({
  palette = "brand",
  colors,
  ...rest
}: DsSimplexNoiseProps) {
  const dsColors = useDsColors(palette);
  return <Upstream colors={colors ?? dsColors} {...rest} />;
}

SimplexNoise.displayName = "DsSimplexNoise";

export { simplexNoisePresets };
