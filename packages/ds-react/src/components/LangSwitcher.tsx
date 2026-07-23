import {
  type ComponentPropsWithoutRef,
  type ElementType,
  forwardRef,
} from "react";
import { cn } from "../utils/cn";

/* ==================================================================
   SiteKit — LangSwitcher (ECOSYSTEM_ROADMAP, Fase 6)

   Locale switcher for [lang] sites. The hrefs MUST be the sibling
   slugs of the current page, computed by the consumer — never a bare
   prefix swap (i18n lesson: reference_i18n_switcher_sibling_slugs).
   Universal: no router dependency, links via LinkComponent.
   ================================================================== */

export interface LangSwitcherItem {
  /** Locale code, shown uppercase ("it", "en"…). */
  code: string;
  /** Sibling-slug href for the current page in that locale. */
  href: string;
}

export interface LangSwitcherProps
  extends Omit<ComponentPropsWithoutRef<"nav">, "children"> {
  items: LangSwitcherItem[];
  /** The active locale code. */
  current: string;
  /** Link component (e.g. next/link). Default: "a". */
  LinkComponent?: ElementType;
  className?: string;
}

export const LangSwitcher = forwardRef<HTMLElement, LangSwitcherProps>(
  function LangSwitcher(
    { items, current, LinkComponent = "a", className, ...rest },
    ref,
  ) {
    return (
      <nav
        ref={ref}
        aria-label="Language"
        className={cn("ds-flex ds-items-center ds-gap-2", className)}
        {...rest}
      >
        {items.map((item) => {
          const active = item.code === current;
          return (
            <LinkComponent
              key={item.code}
              href={item.href}
              hrefLang={item.code}
              aria-current={active ? "true" : undefined}
              className={cn(
                "ds-text-sm ds-uppercase",
                active ? "ds-text-primary" : "ds-text-secondary",
              )}
            >
              {item.code}
            </LinkComponent>
          );
        })}
      </nav>
    );
  },
);
