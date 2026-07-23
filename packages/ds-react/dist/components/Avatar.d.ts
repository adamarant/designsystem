import { type ComponentPropsWithoutRef } from "react";
import type { Size } from "../types";
type AvatarSize = Size | "xl";
type StatusVariant = "online" | "offline" | "busy";
export interface AvatarProps extends ComponentPropsWithoutRef<"span"> {
    /** Size tier. Default: "md" (40px) */
    size?: AvatarSize;
    /** Square shape instead of circle. Default: false */
    square?: boolean;
    /** Border around avatar (useful in groups). Default: false */
    bordered?: boolean;
    /** Additional className */
    className?: string;
}
export interface AvatarStatusProps extends ComponentPropsWithoutRef<"span"> {
    /** Status indicator color. */
    variant: StatusVariant;
    /** Additional className */
    className?: string;
}
export interface AvatarGroupProps extends ComponentPropsWithoutRef<"div"> {
    /** Smaller overlap for small avatars. Default: false */
    sm?: boolean;
    /** Additional className */
    className?: string;
}
declare const AvatarStatus: import("react").ForwardRefExoticComponent<AvatarStatusProps & import("react").RefAttributes<HTMLSpanElement>>;
export { AvatarStatus };
export declare const Avatar: import("react").ForwardRefExoticComponent<AvatarProps & import("react").RefAttributes<HTMLSpanElement>> & {
    Status: import("react").ForwardRefExoticComponent<AvatarStatusProps & import("react").RefAttributes<HTMLSpanElement>>;
};
export declare const AvatarGroup: import("react").ForwardRefExoticComponent<AvatarGroupProps & import("react").RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=Avatar.d.ts.map