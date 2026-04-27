"use client";
import {
  PulsingBorder as Upstream,
  pulsingBorderPresets,
  type PulsingBorderProps,
} from "@paper-design/shaders-react";
import { useDsColors, type PaletteName } from "../lib/use-ds-colors.js";

export interface DsPulsingBorderProps
  extends Omit<PulsingBorderProps, "colors"> {
  palette?: PaletteName;
  colors?: PulsingBorderProps["colors"];
}

export function PulsingBorder({
  palette = "brand",
  colors,
  ...rest
}: DsPulsingBorderProps) {
  const dsColors = useDsColors(palette);
  return <Upstream colors={colors ?? dsColors} {...rest} />;
}

PulsingBorder.displayName = "DsPulsingBorder";

export { pulsingBorderPresets };
