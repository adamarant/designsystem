"use client";
import {
  GodRays as Upstream,
  godRaysPresets,
  type GodRaysProps,
} from "@paper-design/shaders-react";
import { useDsColors, type PaletteName } from "../lib/use-ds-colors.js";

export interface DsGodRaysProps extends Omit<GodRaysProps, "colors"> {
  palette?: PaletteName;
  colors?: GodRaysProps["colors"];
}

export function GodRays({
  palette = "brand",
  colors,
  ...rest
}: DsGodRaysProps) {
  const dsColors = useDsColors(palette);
  return <Upstream colors={colors ?? dsColors} {...rest} />;
}

GodRays.displayName = "DsGodRays";

export { godRaysPresets };
