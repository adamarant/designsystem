"use client";
import {
  Dithering as Upstream,
  ditheringPresets,
  type DitheringProps,
} from "@paper-design/shaders-react";
import { useDsColors, type PaletteName } from "../lib/use-ds-colors.js";

export interface DsDitheringProps
  extends Omit<DitheringProps, "colorFront" | "colorBack"> {
  palette?: PaletteName;
  colorFront?: DitheringProps["colorFront"];
  colorBack?: DitheringProps["colorBack"];
}

export function Dithering({
  palette = "brand",
  colorFront,
  colorBack,
  ...rest
}: DsDitheringProps) {
  const ds = useDsColors(palette);
  return (
    <Upstream
      colorFront={colorFront ?? ds[0]}
      colorBack={colorBack ?? ds[ds.length - 1]}
      {...rest}
    />
  );
}

Dithering.displayName = "DsDithering";

export { ditheringPresets };
