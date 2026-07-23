"use client";

import {
  type ComponentPropsWithoutRef,
  type ElementType,
  type ReactNode,
  forwardRef,
  useState,
} from "react";
import { cn } from "../utils/cn";
import { Dropdown } from "./Dropdown";
import type { Size } from "../types";

/* Same tier map as Button: the trigger sits on --ds-size-1..4, so it
   lines up with every other control in the row. */
const triggerSizeMap: Record<Size, string> = {
  xs: "ds-btn--xs",
  sm: "ds-btn--sm",
  md: "",
  lg: "ds-btn--lg",
};

/* ==================================================================
   SiteKit — LangSwitcher v2 (ECOSYSTEM_ROADMAP, Fase 6)

   Ported from the esys switcher, on DS primitives: the trigger is a
   ghost Button so `size` maps 1:1 onto the control tiers
   (--ds-size-1..4) and lines up with everything else in the row; the
   menu is the Dropdown composite (outside click, Escape, keyboard nav
   for free). Flags/icons arrive through the `icon` slot per item.

   Hrefs MUST be the sibling slugs of the current page — never a bare
   prefix swap (reference_i18n_switcher_sibling_slugs). With
   `preferHreflang` the switcher upgrades each href at click time from
   the page's own <link rel="alternate" hreflang> tags (the esys trick,
   generic: those tags already carry the correct per-locale slugs).
   ================================================================== */

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

export interface LangSwitcherProps
  extends Omit<ComponentPropsWithoutRef<"div">, "children"> {
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

function hreflangHref(code: string): string | null {
  if (typeof document === "undefined") return null;
  const link = document.querySelector<HTMLLinkElement>(
    `link[rel="alternate"][hreflang="${code}"]`,
  );
  if (!link?.href) return null;
  try {
    return new URL(link.href).pathname;
  } catch {
    return null;
  }
}

function Caret() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M3.5 5.5 7 9l3.5-3.5" />
    </svg>
  );
}

export const LangSwitcher = forwardRef<HTMLDivElement, LangSwitcherProps>(
  function LangSwitcher(
    {
      items,
      current,
      size = "md",
      variant = "dropdown",
      preferHreflang = false,
      LinkComponent = "a",
      ariaLabel = "Language",
      className,
      ...rest
    },
    ref,
  ) {
    const [open, setOpen] = useState(false);

    const active = items.find((i) => i.code === current);
    const others = items.filter((i) => i.code !== current);
    const hrefOf = (item: LangSwitcherItem) =>
      (preferHreflang && hreflangHref(item.code)) || item.href;

    if (variant === "inline") {
      return (
        <nav
          ref={ref}
          aria-label={ariaLabel}
          className={cn("ds-flex ds-items-center ds-gap-2", className)}
          {...rest}
        >
          {items.map((item) => {
            const isActive = item.code === current;
            return (
              <LinkComponent
                key={item.code}
                href={hrefOf(item)}
                hrefLang={item.code}
                aria-current={isActive ? "true" : undefined}
                className={cn(
                  "ds-text-sm ds-uppercase",
                  isActive ? "ds-text-primary" : "ds-text-secondary",
                )}
              >
                {item.code}
              </LinkComponent>
            );
          })}
        </nav>
      );
    }

    return (
      <Dropdown
        ref={ref}
        open={open}
        onOpenChange={setOpen}
        className={cn("ds-inline-block", className)}
        {...rest}
      >
        <Dropdown.Trigger
          aria-label={
            typeof active?.label === "string"
              ? `${ariaLabel}: ${active.label}`
              : `${ariaLabel}: ${current}`
          }
          className={cn("ds-btn", "ds-btn--ghost", triggerSizeMap[size])}
        >
          {active?.icon}
          <span className="ds-text-xs ds-font-semibold ds-uppercase">
            {current}
          </span>
          <Caret />
        </Dropdown.Trigger>
        <Dropdown.Menu align="right" width="auto">
          {others.map((item) => (
            <LinkComponent
              key={item.code}
              href={hrefOf(item)}
              hrefLang={item.code}
              role="menuitem"
              className="ds-dropdown__item"
              onClick={() => setOpen(false)}
            >
              {item.icon}
              <span>{item.label ?? item.code.toUpperCase()}</span>
            </LinkComponent>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    );
  },
);
