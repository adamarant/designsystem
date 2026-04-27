"use client";
import {
  ColorPanels as Upstream,
  colorPanelsPresets,
  type ColorPanelsProps,
} from "@paper-design/shaders-react";
import { useDsColors, type PaletteName } from "../lib/use-ds-colors.js";

export interface DsColorPanelsProps extends Omit<ColorPanelsProps, "colors"> {
  palette?: PaletteName;
  colors?: ColorPanelsProps["colors"];
}

export function ColorPanels({
  palette = "brand",
  colors,
  ...rest
}: DsColorPanelsProps) {
  const dsColors = useDsColors(palette);
  return <Upstream colors={colors ?? dsColors} {...rest} />;
}

ColorPanels.displayName = "DsColorPanels";

export { colorPanelsPresets };
