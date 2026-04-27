"use client";
import {
  HalftoneDots as Upstream,
  halftoneDotsPresets,
  type HalftoneDotsProps,
} from "@paper-design/shaders-react";
import { useDsColors, type PaletteName } from "../lib/use-ds-colors.js";

export interface DsHalftoneDotsProps
  extends Omit<HalftoneDotsProps, "colorFront" | "colorBack"> {
  palette?: PaletteName;
  colorFront?: HalftoneDotsProps["colorFront"];
  colorBack?: HalftoneDotsProps["colorBack"];
}

export function HalftoneDots({
  palette = "brand",
  colorFront,
  colorBack,
  ...rest
}: DsHalftoneDotsProps) {
  const ds = useDsColors(palette);
  return (
    <Upstream
      colorFront={colorFront ?? ds[0]}
      colorBack={colorBack ?? ds[ds.length - 1]}
      {...rest}
    />
  );
}

HalftoneDots.displayName = "DsHalftoneDots";

export { halftoneDotsPresets };
