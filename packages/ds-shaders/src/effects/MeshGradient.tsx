"use client";
import {
  MeshGradient as Upstream,
  meshGradientPresets,
  type MeshGradientProps,
} from "@paper-design/shaders-react";
import { useDsColors, type PaletteName } from "../lib/use-ds-colors.js";

export interface DsMeshGradientProps extends Omit<MeshGradientProps, "colors"> {
  /** DS-themed palette. Override with explicit `colors`. */
  palette?: PaletteName;
  /** Raw color array. Takes precedence over `palette`. */
  colors?: MeshGradientProps["colors"];
}

export function MeshGradient({
  palette = "brand",
  colors,
  ...rest
}: DsMeshGradientProps) {
  const dsColors = useDsColors(palette);
  return <Upstream colors={colors ?? dsColors} {...rest} />;
}

MeshGradient.displayName = "DsMeshGradient";

export { meshGradientPresets };
