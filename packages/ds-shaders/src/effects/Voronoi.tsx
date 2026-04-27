"use client";
import {
  Voronoi as Upstream,
  voronoiPresets,
  type VoronoiProps,
} from "@paper-design/shaders-react";
import { useDsColors, type PaletteName } from "../lib/use-ds-colors.js";

export interface DsVoronoiProps extends Omit<VoronoiProps, "colors"> {
  palette?: PaletteName;
  colors?: VoronoiProps["colors"];
}

export function Voronoi({
  palette = "brand",
  colors,
  ...rest
}: DsVoronoiProps) {
  const dsColors = useDsColors(palette);
  return <Upstream colors={colors ?? dsColors} {...rest} />;
}

Voronoi.displayName = "DsVoronoi";

export { voronoiPresets };
