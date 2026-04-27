"use client";
import {
  StaticRadialGradient as Upstream,
  staticRadialGradientPresets,
  type StaticRadialGradientProps,
} from "@paper-design/shaders-react";
import { useDsColors, type PaletteName } from "../lib/use-ds-colors.js";

export interface DsStaticRadialGradientProps
  extends Omit<StaticRadialGradientProps, "colors"> {
  palette?: PaletteName;
  colors?: StaticRadialGradientProps["colors"];
}

export function StaticRadialGradient({
  palette = "brand",
  colors,
  ...rest
}: DsStaticRadialGradientProps) {
  const dsColors = useDsColors(palette);
  return <Upstream colors={colors ?? dsColors} {...rest} />;
}

StaticRadialGradient.displayName = "DsStaticRadialGradient";

export { staticRadialGradientPresets };
