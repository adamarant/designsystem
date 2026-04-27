"use client";
import {
  GrainGradient as Upstream,
  grainGradientPresets,
  type GrainGradientProps,
} from "@paper-design/shaders-react";
import { useDsColors, type PaletteName } from "../lib/use-ds-colors.js";

export interface DsGrainGradientProps
  extends Omit<GrainGradientProps, "colors"> {
  palette?: PaletteName;
  colors?: GrainGradientProps["colors"];
}

export function GrainGradient({
  palette = "brand",
  colors,
  ...rest
}: DsGrainGradientProps) {
  const dsColors = useDsColors(palette);
  return <Upstream colors={colors ?? dsColors} {...rest} />;
}

GrainGradient.displayName = "DsGrainGradient";

export { grainGradientPresets };
