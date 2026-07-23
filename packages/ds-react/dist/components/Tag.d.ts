import { type ComponentPropsWithoutRef } from "react";
import type { Size } from "../types";
type TagVariant = "default" | "primary" | "success" | "warning" | "error" | "info" | "purple" | "outline";
type TagSize = Exclude<Size, "xs">;
export interface TagProps extends ComponentPropsWithoutRef<"span"> {
    /** Semantic color variant. Default: "default" (neutral muted) */
    variant?: TagVariant;
    /** Size. Default: "md" */
    size?: TagSize;
    /** Removable — tighter right padding for close button. Default: false */
    removable?: boolean;
    /** Additional className */
    className?: string;
}
export interface TagRemoveProps extends ComponentPropsWithoutRef<"button"> {
    /** Additional className */
    className?: string;
}
declare const TagRemove: import("react").ForwardRefExoticComponent<TagRemoveProps & import("react").RefAttributes<HTMLButtonElement>>;
export { TagRemove };
export declare const Tag: import("react").ForwardRefExoticComponent<TagProps & import("react").RefAttributes<HTMLSpanElement>> & {
    Remove: import("react").ForwardRefExoticComponent<TagRemoveProps & import("react").RefAttributes<HTMLButtonElement>>;
};
//# sourceMappingURL=Tag.d.ts.map