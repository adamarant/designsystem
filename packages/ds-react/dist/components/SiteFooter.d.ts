import { type ComponentPropsWithoutRef, type ReactNode } from "react";
export interface SiteFooterProps extends ComponentPropsWithoutRef<"footer"> {
    /** v1 simple mode — brand text/logo (ignored when children are used). */
    brand?: ReactNode;
    /** v1 simple mode — nav slot next to the brand. */
    nav?: ReactNode;
    /** v1 simple mode — left side of the legal row. */
    legal?: ReactNode;
    /** v1 simple mode — right side of the legal row. */
    meta?: ReactNode;
    className?: string;
}
export interface SiteFooterBrandProps extends ComponentPropsWithoutRef<"div"> {
    /** Subordinate line under the brand slot. */
    tagline?: ReactNode;
    className?: string;
}
export interface SiteFooterColumnsProps extends ComponentPropsWithoutRef<"div"> {
    className?: string;
}
export interface SiteFooterColumnProps extends Omit<ComponentPropsWithoutRef<"nav">, "title"> {
    /** Overline title above the links. */
    title?: ReactNode;
    className?: string;
}
export interface SiteFooterSocialProps extends Omit<ComponentPropsWithoutRef<"div">, "title"> {
    /** Optional overline title (esys: "Follow us"). */
    title?: ReactNode;
    className?: string;
}
export interface SiteFooterRowProps extends Omit<ComponentPropsWithoutRef<"div">, "title"> {
    /** Optional overline title (esys: "Explore the blog"). */
    title?: ReactNode;
    className?: string;
}
export interface SiteFooterBottomProps extends ComponentPropsWithoutRef<"div"> {
    className?: string;
}
export interface SiteFooterWordmarkProps extends ComponentPropsWithoutRef<"div"> {
    className?: string;
}
export declare const SiteFooterBrand: import("react").ForwardRefExoticComponent<SiteFooterBrandProps & import("react").RefAttributes<HTMLDivElement>>;
export declare const SiteFooterColumns: import("react").ForwardRefExoticComponent<SiteFooterColumnsProps & import("react").RefAttributes<HTMLDivElement>>;
export declare const SiteFooterColumn: import("react").ForwardRefExoticComponent<SiteFooterColumnProps & import("react").RefAttributes<HTMLElement>>;
export declare const SiteFooterSocial: import("react").ForwardRefExoticComponent<SiteFooterSocialProps & import("react").RefAttributes<HTMLDivElement>>;
export declare const SiteFooterRow: import("react").ForwardRefExoticComponent<SiteFooterRowProps & import("react").RefAttributes<HTMLDivElement>>;
export declare const SiteFooterBottom: import("react").ForwardRefExoticComponent<SiteFooterBottomProps & import("react").RefAttributes<HTMLDivElement>>;
export declare const SiteFooterWordmark: import("react").ForwardRefExoticComponent<SiteFooterWordmarkProps & import("react").RefAttributes<HTMLDivElement>>;
export declare const SiteFooter: import("react").ForwardRefExoticComponent<SiteFooterProps & import("react").RefAttributes<HTMLElement>> & {
    Brand: import("react").ForwardRefExoticComponent<SiteFooterBrandProps & import("react").RefAttributes<HTMLDivElement>>;
    Columns: import("react").ForwardRefExoticComponent<SiteFooterColumnsProps & import("react").RefAttributes<HTMLDivElement>>;
    Column: import("react").ForwardRefExoticComponent<SiteFooterColumnProps & import("react").RefAttributes<HTMLElement>>;
    Social: import("react").ForwardRefExoticComponent<SiteFooterSocialProps & import("react").RefAttributes<HTMLDivElement>>;
    Row: import("react").ForwardRefExoticComponent<SiteFooterRowProps & import("react").RefAttributes<HTMLDivElement>>;
    Bottom: import("react").ForwardRefExoticComponent<SiteFooterBottomProps & import("react").RefAttributes<HTMLDivElement>>;
    Wordmark: import("react").ForwardRefExoticComponent<SiteFooterWordmarkProps & import("react").RefAttributes<HTMLDivElement>>;
};
//# sourceMappingURL=SiteFooter.d.ts.map