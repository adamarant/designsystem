"use client";
import {
  Swirl as Upstream,
  swirlPresets,
  type SwirlProps,
} from "@paper-design/shaders-react";
import { useDsColors, type PaletteName } from "../lib/use-ds-colors.js";

export interface DsSwirlProps extends Omit<SwirlProps, "colors"> {
  palette?: PaletteName;
  colors?: SwirlProps["colors"];
}

export function Swirl({ palette = "brand", colors, ...rest }: DsSwirlProps) {
  const dsColors = useDsColors(palette);
  return <Upstream colors={colors ?? dsColors} {...rest} />;
}

Swirl.displayName = "DsSwirl";

export { swirlPresets };
