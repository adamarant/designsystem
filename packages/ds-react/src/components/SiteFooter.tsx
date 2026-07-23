import { type ComponentPropsWithoutRef, type ReactNode, forwardRef } from "react";
import { cn } from "../utils/cn";

/* ==================================================================
   SiteKit — SiteFooter v2 (ECOSYSTEM_ROADMAP, Fase 6)

   Modeled on the real footers of the ecosystem, not on a minimal slot
   pair: esys (brand + tagline + social block, titled columns, dynamic
   rows, bottom bar) and studio (ink band, uppercase column titles,
   full-width wordmark — the Bending Spoons reference). Compound parts,
   free composition; the simple brand/nav/legal/meta props from v1 keep
   working when no children are passed. Universal: zero JS shipped.

   Composition sketch (esys-like):
     <SiteFooter>
       <Grid cols="1" className="ds-md:grid-cols-2 ds-gap-12">
         <SiteFooterBrand tagline="…">
           <Logo />
           <SiteFooterSocial>…icon links…</SiteFooterSocial>
         </SiteFooterBrand>
         <SiteFooterColumns>
           <SiteFooterColumn title="Navigation">…links…</SiteFooterColumn>
           <SiteFooterColumn title="Legal">…links…</SiteFooterColumn>
         </SiteFooterColumns>
       </Grid>
       <SiteFooterRow title="Explore">…chips…</SiteFooterRow>
       <SiteFooterBottom>© 2026 … <a>Admin</a></SiteFooterBottom>
       <SiteFooterWordmark><BrandWordmark /></SiteFooterWordmark>
     </SiteFooter>
   ================================================================== */

export interface SiteFooterProps
  extends ComponentPropsWithoutRef<"footer"> {
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

export interface SiteFooterBrandProps
  extends ComponentPropsWithoutRef<"div"> {
  /** Subordinate line under the brand slot. */
  tagline?: ReactNode;
  className?: string;
}

export interface SiteFooterColumnsProps
  extends ComponentPropsWithoutRef<"div"> {
  className?: string;
}

export interface SiteFooterColumnProps
  extends Omit<ComponentPropsWithoutRef<"nav">, "title"> {
  /** Overline title above the links. */
  title?: ReactNode;
  className?: string;
}

export interface SiteFooterSocialProps
  extends Omit<ComponentPropsWithoutRef<"div">, "title"> {
  /** Optional overline title (esys: "Follow us"). */
  title?: ReactNode;
  className?: string;
}

export interface SiteFooterRowProps
  extends Omit<ComponentPropsWithoutRef<"div">, "title"> {
  /** Optional overline title (esys: "Explore the blog"). */
  title?: ReactNode;
  className?: string;
}

export interface SiteFooterBottomProps
  extends ComponentPropsWithoutRef<"div"> {
  className?: string;
}

export interface SiteFooterWordmarkProps
  extends ComponentPropsWithoutRef<"div"> {
  className?: string;
}

/* ---------- parts ---------- */

export const SiteFooterBrand = forwardRef<HTMLDivElement, SiteFooterBrandProps>(
  function SiteFooterBrand({ tagline, className, children, ...rest }, ref) {
    return (
      <div
        ref={ref}
        className={cn("ds-flex ds-flex-col ds-gap-3", className)}
        {...rest}
      >
        {children}
        {tagline != null && (
          <p className="ds-text-sm ds-text-secondary">{tagline}</p>
        )}
      </div>
    );
  },
);

export const SiteFooterColumns = forwardRef<
  HTMLDivElement,
  SiteFooterColumnsProps
>(function SiteFooterColumns({ className, ...rest }, ref) {
  return (
    <div
      ref={ref}
      className={cn("ds-flex ds-flex-wrap ds-gap-8", className)}
      {...rest}
    />
  );
});

export const SiteFooterColumn = forwardRef<HTMLElement, SiteFooterColumnProps>(
  function SiteFooterColumn({ title, className, children, ...rest }, ref) {
    return (
      <nav
        ref={ref}
        className={cn("ds-flex ds-flex-col ds-gap-2", className)}
        {...rest}
      >
        {title != null && <span className="ds-overline">{title}</span>}
        {children}
      </nav>
    );
  },
);

export const SiteFooterSocial = forwardRef<
  HTMLDivElement,
  SiteFooterSocialProps
>(function SiteFooterSocial({ title, className, children, ...rest }, ref) {
  return (
    <div ref={ref} className={className} {...rest}>
      {title != null && <span className="ds-overline">{title}</span>}
      <div className={cn("ds-flex ds-gap-3", title != null && "ds-mt-3")}>
        {children}
      </div>
    </div>
  );
});

export const SiteFooterRow = forwardRef<HTMLDivElement, SiteFooterRowProps>(
  function SiteFooterRow({ title, className, children, ...rest }, ref) {
    return (
      <div ref={ref} className={className} {...rest}>
        {title != null && <span className="ds-overline">{title}</span>}
        <div
          className={cn(
            "ds-flex ds-flex-wrap ds-gap-3",
            title != null && "ds-mt-3",
          )}
        >
          {children}
        </div>
      </div>
    );
  },
);

export const SiteFooterBottom = forwardRef<
  HTMLDivElement,
  SiteFooterBottomProps
>(function SiteFooterBottom({ className, ...rest }, ref) {
  return (
    <div
      ref={ref}
      className={cn(
        "ds-flex ds-flex-wrap ds-items-center ds-justify-between ds-gap-3 ds-text-sm ds-text-tertiary",
        className,
      )}
      {...rest}
    />
  );
});

export const SiteFooterWordmark = forwardRef<
  HTMLDivElement,
  SiteFooterWordmarkProps
>(function SiteFooterWordmark({ className, ...rest }, ref) {
  return <div ref={ref} className={cn("ds-w-full", className)} {...rest} />;
});

/* ---------- root ---------- */

const SiteFooterRoot = forwardRef<HTMLElement, SiteFooterProps>(
  function SiteFooter(
    { brand, nav, legal, meta, className, children, ...rest },
    ref,
  ) {
    return (
      <footer
        ref={ref}
        className={cn("ds-section", "ds-section--bordered", className)}
        {...rest}
      >
        <div className="ds-container ds-flex ds-flex-col ds-gap-8">
          {children ?? (
            <>
              <div className="ds-flex ds-flex-wrap ds-justify-between ds-gap-6">
                <div className="ds-heading-ui">{brand}</div>
                {nav}
              </div>
              {(legal || meta) && (
                <>
                  <div className="ds-divider" />
                  <SiteFooterBottom>
                    <div>{legal}</div>
                    <div>{meta}</div>
                  </SiteFooterBottom>
                </>
              )}
            </>
          )}
        </div>
      </footer>
    );
  },
);

export const SiteFooter = Object.assign(SiteFooterRoot, {
  Brand: SiteFooterBrand,
  Columns: SiteFooterColumns,
  Column: SiteFooterColumn,
  Social: SiteFooterSocial,
  Row: SiteFooterRow,
  Bottom: SiteFooterBottom,
  Wordmark: SiteFooterWordmark,
});
