"use client";
import {
  Metaballs as Upstream,
  metaballsPresets,
  type MetaballsProps,
} from "@paper-design/shaders-react";
import { useDsColors, type PaletteName } from "../lib/use-ds-colors.js";

export interface DsMetaballsProps extends Omit<MetaballsProps, "colors"> {
  palette?: PaletteName;
  colors?: MetaballsProps["colors"];
}

export function Metaballs({
  palette = "brand",
  colors,
  ...rest
}: DsMetaballsProps) {
  const dsColors = useDsColors(palette);
  return <Upstream colors={colors ?? dsColors} {...rest} />;
}

Metaballs.displayName = "DsMetaballs";

export { metaballsPresets };
