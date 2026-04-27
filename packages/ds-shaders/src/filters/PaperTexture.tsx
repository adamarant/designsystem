"use client";
import {
  PaperTexture as Upstream,
  paperTexturePresets,
  type PaperTextureProps,
} from "@paper-design/shaders-react";
import { useDsColors, type PaletteName } from "../lib/use-ds-colors.js";

export interface DsPaperTextureProps
  extends Omit<PaperTextureProps, "colorFront" | "colorBack"> {
  palette?: PaletteName;
  colorFront?: PaperTextureProps["colorFront"];
  colorBack?: PaperTextureProps["colorBack"];
}

export function PaperTexture({
  palette = "brand",
  colorFront,
  colorBack,
  ...rest
}: DsPaperTextureProps) {
  const ds = useDsColors(palette);
  return (
    <Upstream
      colorFront={colorFront ?? ds[0]}
      colorBack={colorBack ?? ds[ds.length - 1]}
      {...rest}
    />
  );
}

PaperTexture.displayName = "DsPaperTexture";

export { paperTexturePresets };
