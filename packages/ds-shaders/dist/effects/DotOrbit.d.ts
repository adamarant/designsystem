import { dotOrbitPresets, type DotOrbitProps } from "@paper-design/shaders-react";
import { type PaletteName } from "../lib/use-ds-colors.js";
export interface DsDotOrbitProps extends Omit<DotOrbitProps, "colors"> {
    palette?: PaletteName;
    colors?: DotOrbitProps["colors"];
}
export declare function DotOrbit({ palette, colors, ...rest }: DsDotOrbitProps): import("react/jsx-runtime").JSX.Element;
export declare namespace DotOrbit {
    var displayName: string;
}
export { dotOrbitPresets };
//# sourceMappingURL=DotOrbit.d.ts.map