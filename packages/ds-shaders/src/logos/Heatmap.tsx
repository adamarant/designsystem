"use client";
import {
  Heatmap as Upstream,
  heatmapPresets,
  type HeatmapProps,
} from "@paper-design/shaders-react";
import { useDsColors, type PaletteName } from "../lib/use-ds-colors.js";

export interface DsHeatmapProps extends Omit<HeatmapProps, "colors"> {
  palette?: PaletteName;
  colors?: HeatmapProps["colors"];
}

export function Heatmap({
  palette = "brand",
  colors,
  ...rest
}: DsHeatmapProps) {
  const dsColors = useDsColors(palette);
  return <Upstream colors={colors ?? dsColors} {...rest} />;
}

Heatmap.displayName = "DsHeatmap";

export { heatmapPresets };
