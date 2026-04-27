"use client";
import {
  SmokeRing as Upstream,
  smokeRingPresets,
  type SmokeRingProps,
} from "@paper-design/shaders-react";
import { useDsColors, type PaletteName } from "../lib/use-ds-colors.js";

export interface DsSmokeRingProps extends Omit<SmokeRingProps, "colors"> {
  palette?: PaletteName;
  colors?: SmokeRingProps["colors"];
}

export function SmokeRing({
  palette = "brand",
  colors,
  ...rest
}: DsSmokeRingProps) {
  const dsColors = useDsColors(palette);
  return <Upstream colors={colors ?? dsColors} {...rest} />;
}

SmokeRing.displayName = "DsSmokeRing";

export { smokeRingPresets };
