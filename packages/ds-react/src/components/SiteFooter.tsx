import { type ComponentPropsWithoutRef, type ReactNode, forwardRef } from "react";
import { cn } from "../utils/cn";

/* ==================================================================
   SiteKit — SiteFooter (ECOSYSTEM_ROADMAP, Fase 6)

   The footer 19 projects used to copy: bordered section, container,
   brand row + nav slot, divider, legal row. Pure composition of
   existing DS classes — universal (server-renders with zero JS).
   ================================================================== */

export interface SiteFooterProps
  extends Omit<ComponentPropsWithoutRef<"footer">, "children"> {
  /** Brand slot (name, wordmark…). */
  brand: ReactNode;
  /** Nav slot next to the brand (links, columns…). */
  nav?: ReactNode;
  /** Left side of the legal row (© line). */
  legal?: ReactNode;
  /** Right side of the legal row (contact, credits…). */
  meta?: ReactNode;
  /** Extra rows between the header row and the legal row. */
  children?: ReactNode;
  className?: string;
}

export const SiteFooter = forwardRef<HTMLElement, SiteFooterProps>(
  function SiteFooter(
    { brand, nav, legal, meta, children, className, ...rest },
    ref,
  ) {
    return (
      <footer
        ref={ref}
        className={cn("ds-section", "ds-section--bordered", className)}
        {...rest}
      >
        <div className="ds-container ds-flex ds-flex-col ds-gap-8">
          <div className="ds-flex ds-flex-wrap ds-justify-between ds-gap-6">
            <div className="ds-heading-ui">{brand}</div>
            {nav}
          </div>
          {children}
          {(legal || meta) && (
            <>
              <div className="ds-divider" />
              <div className="ds-flex ds-flex-wrap ds-justify-between ds-gap-3">
                <div className="ds-text-tertiary">{legal}</div>
                <div className="ds-text-tertiary">{meta}</div>
              </div>
            </>
          )}
        </div>
      </footer>
    );
  },
);
