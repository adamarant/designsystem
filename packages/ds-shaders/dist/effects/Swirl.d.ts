import { swirlPresets, type SwirlProps } from "@paper-design/shaders-react";
import { type PaletteName } from "../lib/use-ds-colors.js";
export interface DsSwirlProps extends Omit<SwirlProps, "colors"> {
    palette?: PaletteName;
    colors?: SwirlProps["colors"];
}
export declare function Swirl({ palette, colors, ...rest }: DsSwirlProps): import("react/jsx-runtime").JSX.Element;
export declare namespace Swirl {
    var displayName: string;
}
export { swirlPresets };
//# sourceMappingURL=Swirl.d.ts.map