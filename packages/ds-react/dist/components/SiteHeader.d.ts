import { type ComponentPropsWithoutRef, type ElementType, type ReactNode } from "react";
export interface SiteNavChild {
    label: ReactNode;
    href: string;
}
export interface SiteNavItem {
    label: ReactNode;
    /** Plain link when no children; with children it becomes a group:
        desktop = dropdown, mobile = titled section (ds-nav __section/__title). */
    href?: string;
    children?: SiteNavChild[];
}
export interface SiteHeaderProps extends Omit<ComponentPropsWithoutRef<"nav">, "children"> {
    /** Brand slot, rendered inside the ds-nav__brand link area. */
    brand: ReactNode;
    /** Link wrapping the brand. Default: plain "a" to `brandHref`. */
    brandHref?: string;
    items: SiteNavItem[];
    /** Right side of the bar (ThemeToggle, CTA…). */
    actions?: ReactNode;
    /** Extra content at the bottom of the mobile panel (e.g. a CTA). */
    mobileExtra?: ReactNode;
    /** Fixed glass bar (ds-nav). false → ds-nav--static. Default: true */
    fixed?: boolean;
    /** Current pathname — the matching item gets aria-current="page". */
    activeHref?: string;
    /** Link component (e.g. next/link). Default: "a". */
    LinkComponent?: ElementType;
    openLabel?: string;
    closeLabel?: string;
    className?: string;
}
export declare const SiteHeader: import("react").ForwardRefExoticComponent<SiteHeaderProps & import("react").RefAttributes<HTMLElement>>;
//# sourceMappingURL=SiteHeader.d.ts.map