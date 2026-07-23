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
    /** Compound escape — bypasses the data-driven layout. */
    children?: ReactNode;
    className?: string;
}
export declare const SiteFooterBody: import("react").ForwardRefExoticComponent<Omit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & import("react").RefAttributes<HTMLDivElement>>;
export interface SiteFooterBrandProps extends ComponentPropsWithoutRef<"div"> {
    tagline?: ReactNode;
}
export declare const SiteFooterBrand: import("react").ForwardRefExoticComponent<SiteFooterBrandProps & import("react").RefAttributes<HTMLDivElement>>;
export declare const SiteFooterColumns: import("react").ForwardRefExoticComponent<Omit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & import("react").RefAttributes<HTMLDivElement>>;
export interface SiteFooterColumnProps extends Omit<ComponentPropsWithoutRef<"nav">, "title"> {
    title?: ReactNode;
}
export declare const SiteFooterColumn: import("react").ForwardRefExoticComponent<SiteFooterColumnProps & import("react").RefAttributes<HTMLElement>>;
export declare const SiteFooterSocial: import("react").ForwardRefExoticComponent<Omit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & import("react").RefAttributes<HTMLDivElement>>;
export declare const SiteFooterCredits: import("react").ForwardRefExoticComponent<Omit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & import("react").RefAttributes<HTMLDivElement>>;
export declare const SiteFooter: import("react").ForwardRefExoticComponent<SiteFooterProps & import("react").RefAttributes<HTMLElement>> & {
    Newsletter: import("react").ForwardRefExoticComponent<SiteFooterNewsletterProps & import("react").RefAttributes<HTMLDivElement>>;
    Body: import("react").ForwardRefExoticComponent<Omit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & import("react").RefAttributes<HTMLDivElement>>;
    Brand: import("react").ForwardRefExoticComponent<SiteFooterBrandProps & import("react").RefAttributes<HTMLDivElement>>;
    Columns: import("react").ForwardRefExoticComponent<Omit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & import("react").RefAttributes<HTMLDivElement>>;
    Column: import("react").ForwardRefExoticComponent<SiteFooterColumnProps & import("react").RefAttributes<HTMLElement>>;
    Social: import("react").ForwardRefExoticComponent<Omit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & import("react").RefAttributes<HTMLDivElement>>;
    Credits: import("react").ForwardRefExoticComponent<Omit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & import("react").RefAttributes<HTMLDivElement>>;
};
//# sourceMappingURL=SiteFooter.d.ts.map