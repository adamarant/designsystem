import { type ComponentPropsWithoutRef, type ElementType, type ReactNode } from "react";
import type { Size } from "../types";
export interface LangSwitcherItem {
    /** Locale code ("it", "en"…). Shown uppercase in the trigger. */
    code: string;
    /** Full name shown in the menu ("Italiano"). Falls back to the code. */
    label?: ReactNode;
    /** Icon slot (flag component). */
    icon?: ReactNode;
    /** Sibling-slug href for the current page in that locale. */
    href: string;
}
export interface LangSwitcherProps extends Omit<ComponentPropsWithoutRef<"div">, "children"> {
    items: LangSwitcherItem[];
    /** The active locale code. */
    current: string;
    /** Control tier of the trigger. Default: "md" */
    size?: Size;
    /** "dropdown" (esys model, default) or "inline" (footer rows). */
    variant?: "dropdown" | "inline";
    /** Resolve hrefs from the page's hreflang alternate tags when present. */
    preferHreflang?: boolean;
    /** Link component (e.g. next/link). Default: "a". */
    LinkComponent?: ElementType;
    /** Accessible label prefix. Default: "Language" */
    ariaLabel?: string;
    className?: string;
}
export declare const LangSwitcher: import("react").ForwardRefExoticComponent<LangSwitcherProps & import("react").RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=LangSwitcher.d.ts.map