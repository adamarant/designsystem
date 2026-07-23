import { type ComponentPropsWithoutRef, type ElementType, type ReactNode } from "react";
import { type SiteFooterNewsletterProps } from "./SiteFooterNewsletter";
export interface SiteFooterLink {
    label: ReactNode;
    href: string;
    /** Plain <a> (skips the router) — for feeds, mailto, external. */
    external?: boolean;
}
export interface SiteFooterColumnData {
    title?: ReactNode;
    links: SiteFooterLink[];
}
export interface SiteFooterProps extends Omit<ComponentPropsWithoutRef<"footer">, "children" | "title"> {
    /** Brand slot (logo/name) at the start of the body zone. */
    brand?: ReactNode;
    /** Subordinate line under the brand. */
    tagline?: ReactNode;
    /** Social links, already rendered (icon anchors). */
    social?: ReactNode;
    /** Titled link columns. */
    columns?: SiteFooterColumnData[];
    /** Newsletter zone. Omit to hide it. */
    newsletter?: SiteFooterNewsletterProps;
    /** Credits copyright (left of the credits row). */
    copyright?: ReactNode;
    /** Credits legal/meta links (right of the credits row). */
    legal?: SiteFooterLink[];
    /** Link component (e.g. next/link). Default: "a". */
    LinkComponent?: ElementType;
    className?: string;
}
export interface SiteFooterBrandProps extends ComponentPropsWithoutRef<"div"> {
    tagline?: ReactNode;
}
export interface SiteFooterColumnProps extends Omit<ComponentPropsWithoutRef<"nav">, "title"> {
    title?: ReactNode;
}
export declare const SiteFooter: import("react").ForwardRefExoticComponent<SiteFooterProps & import("react").RefAttributes<HTMLElement>>;
//# sourceMappingURL=SiteFooter.d.ts.map