"use client";
import {
  NeuroNoise as Upstream,
  neuroNoisePresets,
  type NeuroNoiseProps,
} from "@paper-design/shaders-react";
import { useDsColors, type PaletteName } from "../lib/use-ds-colors.js";

export interface DsNeuroNoiseProps
  extends Omit<NeuroNoiseProps, "colorFront" | "colorMid" | "colorBack"> {
  palette?: PaletteName;
  colorFront?: NeuroNoiseProps["colorFront"];
  colorMid?: NeuroNoiseProps["colorMid"];
  colorBack?: NeuroNoiseProps["colorBack"];
}

export function NeuroNoise({
  palette = "brand",
  colorFront,
  colorMid,
  colorBack,
  ...rest
}: DsNeuroNoiseProps) {
  const ds = useDsColors(palette);
  return (
    <Upstream
      colorFront={colorFront ?? ds[0]}
      colorMid={colorMid ?? ds[1]}
      colorBack={colorBack ?? ds[ds.length - 1]}
      {...rest}
    />
  );
}

NeuroNoise.displayName = "DsNeuroNoise";

export { neuroNoisePresets };
