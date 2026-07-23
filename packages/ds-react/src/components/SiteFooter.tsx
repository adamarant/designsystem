import {
  type ComponentPropsWithoutRef,
  type ElementType,
  type ReactNode,
  forwardRef,
} from "react";
import { cn } from "../utils/cn";
import {
  SiteFooterNewsletter,
  type SiteFooterNewsletterProps,
} from "./SiteFooterNewsletter";

/* ==================================================================
   SiteKit — SiteFooter (ECOSYSTEM_ROADMAP, Fase 6)

   ONE canonical footer for every consumer, on the ds-footer component.
   Three stacked zones (owner brief, 23 lug 2026):
     1. Newsletter — optional titled block with an inline email form.
     2. Body — brand blurb (+ social) beside titled link columns.
     3. Credits — the last small row: copyright + legal/meta links.

   Two ways to use it:
   - DATA-DRIVEN (the common case): pass `columns`, `brand`, `newsletter`,
     `copyright`, `legal`… and get the whole footer. One prop set, valid
     for everyone.
   - COMPOUND (escape): pass children built from SiteFooter.Newsletter /
     .Body / .Brand / .Columns / .Column / .Social / .Credits.

   Router-free: links render through `LinkComponent` (pass next/link).
   Universal: server-renders with zero client JS (the newsletter form is
   the only client island).
   ================================================================== */

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

export interface SiteFooterProps
  extends Omit<ComponentPropsWithoutRef<"footer">, "children" | "title"> {
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

/* ---------- compound parts ---------- */

export const SiteFooterBody = forwardRef<
  HTMLDivElement,
  ComponentPropsWithoutRef<"div">
>(function SiteFooterBody({ className, ...rest }, ref) {
  return <div ref={ref} className={cn("ds-footer__body", className)} {...rest} />;
});

export interface SiteFooterBrandProps extends ComponentPropsWithoutRef<"div"> {
  tagline?: ReactNode;
}

export const SiteFooterBrand = forwardRef<HTMLDivElement, SiteFooterBrandProps>(
  function SiteFooterBrand({ tagline, className, children, ...rest }, ref) {
    return (
      <div ref={ref} className={cn("ds-footer__brand", className)} {...rest}>
        {children}
        {tagline != null && <p className="ds-footer__tagline">{tagline}</p>}
      </div>
    );
  },
);

export const SiteFooterColumns = forwardRef<
  HTMLDivElement,
  ComponentPropsWithoutRef<"div">
>(function SiteFooterColumns({ className, ...rest }, ref) {
  return (
    <div ref={ref} className={cn("ds-footer__columns", className)} {...rest} />
  );
});

export interface SiteFooterColumnProps
  extends Omit<ComponentPropsWithoutRef<"nav">, "title"> {
  title?: ReactNode;
}

export const SiteFooterColumn = forwardRef<HTMLElement, SiteFooterColumnProps>(
  function SiteFooterColumn({ title, className, children, ...rest }, ref) {
    return (
      <nav ref={ref} className={cn("ds-footer__column", className)} {...rest}>
        {title != null && (
          <span className="ds-footer__column-title">{title}</span>
        )}
        {children}
      </nav>
    );
  },
);

export const SiteFooterSocial = forwardRef<
  HTMLDivElement,
  ComponentPropsWithoutRef<"div">
>(function SiteFooterSocial({ className, ...rest }, ref) {
  return (
    <div ref={ref} className={cn("ds-footer__social", className)} {...rest} />
  );
});

export const SiteFooterCredits = forwardRef<
  HTMLDivElement,
  ComponentPropsWithoutRef<"div">
>(function SiteFooterCredits({ className, ...rest }, ref) {
  return (
    <div ref={ref} className={cn("ds-footer__credits", className)} {...rest} />
  );
});

/* ---------- root ---------- */

const SiteFooterRoot = forwardRef<HTMLElement, SiteFooterProps>(
  function SiteFooter(
    {
      brand,
      tagline,
      social,
      columns,
      newsletter,
      copyright,
      legal,
      LinkComponent = "a",
      className,
      children,
      ...rest
    },
    ref,
  ) {
    const renderLink = (link: SiteFooterLink, cls: string) => {
      const Cmp = link.external ? "a" : LinkComponent;
      return (
        <Cmp key={link.href} href={link.href} className={cls}>
          {link.label}
        </Cmp>
      );
    };

    return (
      <footer ref={ref} className={cn("ds-footer", className)} {...rest}>
        <div className="ds-container ds-footer__inner">
          {children ?? (
            <>
              {newsletter && <SiteFooterNewsletter {...newsletter} />}

              {(brand || columns?.length) && (
                <div className="ds-footer__body">
                  {(brand || tagline || social) && (
                    <SiteFooterBrand tagline={tagline}>
                      {brand}
                      {social && (
                        <div className="ds-footer__social">{social}</div>
                      )}
                    </SiteFooterBrand>
                  )}
                  {columns?.length ? (
                    <div className="ds-footer__columns">
                      {columns.map((col, i) => (
                        <SiteFooterColumn key={i} title={col.title}>
                          {col.links.map((l) =>
                            renderLink(l, "ds-footer__link"),
                          )}
                        </SiteFooterColumn>
                      ))}
                    </div>
                  ) : null}
                </div>
              )}

              {(copyright || legal?.length) && (
                <div className="ds-footer__credits">
                  <span>{copyright}</span>
                  {legal?.length ? (
                    <div className="ds-footer__credits-links">
                      {legal.map((l) => renderLink(l, ""))}
                    </div>
                  ) : null}
                </div>
              )}
            </>
          )}
        </div>
      </footer>
    );
  },
);

export const SiteFooter = Object.assign(SiteFooterRoot, {
  Newsletter: SiteFooterNewsletter,
  Body: SiteFooterBody,
  Brand: SiteFooterBrand,
  Columns: SiteFooterColumns,
  Column: SiteFooterColumn,
  Social: SiteFooterSocial,
  Credits: SiteFooterCredits,
});
