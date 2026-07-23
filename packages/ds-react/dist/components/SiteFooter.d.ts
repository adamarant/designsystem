import { type ComponentPropsWithoutRef, type ReactNode } from "react";
export interface SiteFooterProps extends Omit<ComponentPropsWithoutRef<"footer">, "children"> {
    /** Brand slot (name, wordmark…). */
    brand: ReactNode;
    /** Nav slot next to the brand (links, columns…). */
    nav?: ReactNode;
    /** Left side of the legal row (© line). */
    legal?: ReactNode;
    /** Right side of the legal row (contact, credits…). */
    meta?: ReactNode;
    /** Extra rows between the header row and the legal row. */
    children?: ReactNode;
    className?: string;
}
export declare const SiteFooter: import("react").ForwardRefExoticComponent<SiteFooterProps & import("react").RefAttributes<HTMLElement>>;
//# sourceMappingURL=SiteFooter.d.ts.map