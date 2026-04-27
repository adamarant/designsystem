"use client";
import {
  Waves as Upstream,
  wavesPresets,
  type WavesProps,
} from "@paper-design/shaders-react";
import { useDsColors, type PaletteName } from "../lib/use-ds-colors.js";

export interface DsWavesProps
  extends Omit<WavesProps, "colorFront" | "colorBack"> {
  palette?: PaletteName;
  colorFront?: WavesProps["colorFront"];
  colorBack?: WavesProps["colorBack"];
}

export function Waves({
  palette = "brand",
  colorFront,
  colorBack,
  ...rest
}: DsWavesProps) {
  const ds = useDsColors(palette);
  return (
    <Upstream
      colorFront={colorFront ?? ds[0]}
      colorBack={colorBack ?? ds[ds.length - 1]}
      {...rest}
    />
  );
}

Waves.displayName = "DsWaves";

export { wavesPresets };
