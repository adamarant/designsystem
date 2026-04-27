import { metaballsPresets, type MetaballsProps } from "@paper-design/shaders-react";
import { type PaletteName } from "../lib/use-ds-colors.js";
export interface DsMetaballsProps extends Omit<MetaballsProps, "colors"> {
    palette?: PaletteName;
    colors?: MetaballsProps["colors"];
}
export declare function Metaballs({ palette, colors, ...rest }: DsMetaballsProps): import("react/jsx-runtime").JSX.Element;
export declare namespace Metaballs {
    var displayName: string;
}
export { metaballsPresets };
//# sourceMappingURL=Metaballs.d.ts.map