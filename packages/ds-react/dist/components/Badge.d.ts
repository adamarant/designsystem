import { type ComponentPropsWithoutRef } from "react";
import { type Size } from "../types";
type BadgeVariant = "default" | "primary" | "success" | "warning" | "error" | "info" | "purple" | "outline" | "inverted";
type BadgeOwnProps = {
    /** Semantic color variant. Default: "default" (neutral muted) */
    variant?: BadgeVariant;
    /** Show colored dot indicator before text. Default: false */
    dot?: boolean;
    /** Uppercase small caps style (for "NEW", "BETA", etc.). Default: false */
    upper?: boolean;
    /** Size tier. Default: "md" (no class emitted). */
    size?: Exclude<Size, "xs">;
    /**
     * Selected state — the filter/toggle "this one is on". Distinct from
     * variant="inverted", which is a look: a brand may render its selected
     * badge inverted, but the two are not the same thing.
     */
    active?: boolean;
    /** Leaves room for <Badge.Remove> on the trailing edge. */
    removable?: boolean;
    /** Additional className */
    className?: string;
};
/**
 * Clickable form. Renders a <button type="button"> and takes the control
 * contract: 24px WCAG target, hover, focus ring, disabled. Set it (or pass
 * onClick, which implies it) for filter and toggle badges.
 */
export type BadgeProps = (BadgeOwnProps & Omit<ComponentPropsWithoutRef<"span">, keyof BadgeOwnProps> & {
    interactive?: false;
}) | (BadgeOwnProps & Omit<ComponentPropsWithoutRef<"button">, keyof BadgeOwnProps> & {
    interactive: true;
});
export interface BadgeRemoveProps extends ComponentPropsWithoutRef<"button"> {
    className?: string;
}
declare const BadgeRemove: import("react").ForwardRefExoticComponent<BadgeRemoveProps & import("react").RefAttributes<HTMLButtonElement>>;
export { BadgeRemove };
export declare const Badge: import("react").ForwardRefExoticComponent<BadgeProps & import("react").RefAttributes<HTMLButtonElement | HTMLSpanElement>> & {
    Remove: import("react").ForwardRefExoticComponent<BadgeRemoveProps & import("react").RefAttributes<HTMLButtonElement>>;
};
//# sourceMappingURL=Badge.d.ts.map