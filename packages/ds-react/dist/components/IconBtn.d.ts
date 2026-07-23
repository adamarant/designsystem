import { type ComponentPropsWithoutRef } from "react";
import type { Size } from "../types";
type IconBtnVariant = "default" | "ghost" | "outline";
type IconBtnSize = Size;
export interface IconBtnProps extends ComponentPropsWithoutRef<"button"> {
    variant?: IconBtnVariant;
    size?: IconBtnSize;
    className?: string;
}
export declare const IconBtn: import("react").ForwardRefExoticComponent<IconBtnProps & import("react").RefAttributes<HTMLButtonElement>>;
export {};
//# sourceMappingURL=IconBtn.d.ts.map