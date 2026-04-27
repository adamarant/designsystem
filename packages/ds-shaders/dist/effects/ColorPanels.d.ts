import { colorPanelsPresets, type ColorPanelsProps } from "@paper-design/shaders-react";
import { type PaletteName } from "../lib/use-ds-colors.js";
export interface DsColorPanelsProps extends Omit<ColorPanelsProps, "colors"> {
    palette?: PaletteName;
    colors?: ColorPanelsProps["colors"];
}
export declare function ColorPanels({ palette, colors, ...rest }: DsColorPanelsProps): import("react/jsx-runtime").JSX.Element;
export declare namespace ColorPanels {
    var displayName: string;
}
export { colorPanelsPresets };
//# sourceMappingURL=ColorPanels.d.ts.map