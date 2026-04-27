"use client";
import {
  GemSmoke as Upstream,
  gemSmokePresets,
  type GemSmokeProps,
} from "@paper-design/shaders-react";
import { useDsColors, type PaletteName } from "../lib/use-ds-colors.js";

export interface DsGemSmokeProps extends Omit<GemSmokeProps, "colors"> {
  palette?: PaletteName;
  colors?: GemSmokeProps["colors"];
}

export function GemSmoke({
  palette = "brand",
  colors,
  ...rest
}: DsGemSmokeProps) {
  const dsColors = useDsColors(palette);
  return <Upstream colors={colors ?? dsColors} {...rest} />;
}

GemSmoke.displayName = "DsGemSmoke";

export { gemSmokePresets };
