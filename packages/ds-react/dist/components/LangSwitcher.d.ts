import { type ComponentPropsWithoutRef, type ElementType } from "react";
export interface LangSwitcherItem {
    /** Locale code, shown uppercase ("it", "en"…). */
    code: string;
    /** Sibling-slug href for the current page in that locale. */
    href: string;
}
export interface LangSwitcherProps extends Omit<ComponentPropsWithoutRef<"nav">, "children"> {
    items: LangSwitcherItem[];
    /** The active locale code. */
    current: string;
    /** Link component (e.g. next/link). Default: "a". */
    LinkComponent?: ElementType;
    className?: string;
}
export declare const LangSwitcher: import("react").ForwardRefExoticComponent<LangSwitcherProps & import("react").RefAttributes<HTMLElement>>;
//# sourceMappingURL=LangSwitcher.d.ts.map