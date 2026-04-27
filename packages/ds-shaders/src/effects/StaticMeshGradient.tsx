"use client";
import {
  StaticMeshGradient as Upstream,
  staticMeshGradientPresets,
  type StaticMeshGradientProps,
} from "@paper-design/shaders-react";
import { useDsColors, type PaletteName } from "../lib/use-ds-colors.js";

export interface DsStaticMeshGradientProps
  extends Omit<StaticMeshGradientProps, "colors"> {
  palette?: PaletteName;
  colors?: StaticMeshGradientProps["colors"];
}

export function StaticMeshGradient({
  palette = "brand",
  colors,
  ...rest
}: DsStaticMeshGradientProps) {
  const dsColors = useDsColors(palette);
  return <Upstream colors={colors ?? dsColors} {...rest} />;
}

StaticMeshGradient.displayName = "DsStaticMeshGradient";

export { staticMeshGradientPresets };
