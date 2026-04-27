"use client";
import {
  DotOrbit as Upstream,
  dotOrbitPresets,
  type DotOrbitProps,
} from "@paper-design/shaders-react";
import { useDsColors, type PaletteName } from "../lib/use-ds-colors.js";

export interface DsDotOrbitProps extends Omit<DotOrbitProps, "colors"> {
  palette?: PaletteName;
  colors?: DotOrbitProps["colors"];
}

export function DotOrbit({
  palette = "brand",
  colors,
  ...rest
}: DsDotOrbitProps) {
  const dsColors = useDsColors(palette);
  return <Upstream colors={colors ?? dsColors} {...rest} />;
}

DotOrbit.displayName = "DsDotOrbit";

export { dotOrbitPresets };
