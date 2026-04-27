"use client";
import {
  ImageDithering as Upstream,
  imageDitheringPresets,
  type ImageDitheringProps,
} from "@paper-design/shaders-react";
import { useDsColors, type PaletteName } from "../lib/use-ds-colors.js";

export interface DsImageDitheringProps
  extends Omit<ImageDitheringProps, "colorFront" | "colorBack"> {
  palette?: PaletteName;
  colorFront?: ImageDitheringProps["colorFront"];
  colorBack?: ImageDitheringProps["colorBack"];
}

export function ImageDithering({
  palette = "brand",
  colorFront,
  colorBack,
  ...rest
}: DsImageDitheringProps) {
  const ds = useDsColors(palette);
  return (
    <Upstream
      colorFront={colorFront ?? ds[0]}
      colorBack={colorBack ?? ds[ds.length - 1]}
      {...rest}
    />
  );
}

ImageDithering.displayName = "DsImageDithering";

export { imageDitheringPresets };
