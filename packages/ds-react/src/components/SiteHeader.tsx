"use client";

import {
  type ComponentPropsWithoutRef,
  type ElementType,
  type ReactNode,
  forwardRef,
  useEffect,
  useState,
} from "react";
import { cn } from "../utils/cn";
import { Dropdown } from "./Dropdown";

/* ==================================================================
   SiteKit — SiteHeader (ECOSYSTEM_ROADMAP, Fase 6)

   The site chrome header, written once: ds-nav glass bar + the mobile
   panel pattern proven in production (riondato), with the behavior every
   consumer used to hand-roll — open state, Escape, body scroll lock,
   aria wiring per nav.css's own ARIA contract.

   This package has no router dependency: links render through
   `LinkComponent` (pass next/link's Link) and the active item comes in
   as `activeHref` (pass your pathname).
   ================================================================== */

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

export interface SiteHeaderProps
  extends Omit<ComponentPropsWithoutRef<"nav">, "children"> {
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

function BurgerIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      aria-hidden="true"
    >
      {open ? (
        <>
          <line x1="4" y1="4" x2="14" y2="14" />
          <line x1="14" y1="4" x2="4" y2="14" />
        </>
      ) : (
        <>
          <line x1="3" y1="6" x2="15" y2="6" />
          <line x1="3" y1="12" x2="15" y2="12" />
        </>
      )}
    </svg>
  );
}

function DesktopGroup({
  item,
  activeHref,
  LinkComponent,
}: {
  item: SiteNavItem;
  activeHref?: string;
  LinkComponent: ElementType;
}) {
  const [open, setOpen] = useState(false);
  return (
    <Dropdown
      open={open}
      onOpenChange={setOpen}
      className="ds-inline-block"
    >
      <Dropdown.Trigger className="ds-nav__link">
        {item.label}
      </Dropdown.Trigger>
      <Dropdown.Menu>
        {item.children?.map((child) => (
          <LinkComponent
            key={child.href}
            href={child.href}
            role="menuitem"
            className="ds-dropdown__item"
            aria-current={activeHref === child.href ? "page" : undefined}
            onClick={() => setOpen(false)}
          >
            {child.label}
          </LinkComponent>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
}

export const SiteHeader = forwardRef<HTMLElement, SiteHeaderProps>(
  function SiteHeader(
    {
      brand,
      brandHref = "/",
      items,
      actions,
      mobileExtra,
      fixed = true,
      activeHref,
      LinkComponent = "a",
      openLabel = "Open menu",
      closeLabel = "Close menu",
      className,
      ...rest
    },
    ref,
  ) {
    const [open, setOpen] = useState(false);

    /* Scroll lock + Escape while the mobile panel is open. */
    useEffect(() => {
      if (!open) return;
      const prevOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      const onKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") setOpen(false);
      };
      window.addEventListener("keydown", onKeyDown);
      return () => {
        document.body.style.overflow = prevOverflow;
        window.removeEventListener("keydown", onKeyDown);
      };
    }, [open]);

    const close = () => setOpen(false);

    return (
      <nav
        ref={ref}
        aria-label="Main navigation"
        className={cn("ds-nav", !fixed && "ds-nav--static", className)}
        {...rest}
      >
        <div className="ds-nav__inner">
          <LinkComponent href={brandHref} className="ds-nav__brand">
            {brand}
          </LinkComponent>

          <div className="ds-nav__menu">
            {items.map((item, i) =>
              item.children?.length ? (
                <DesktopGroup
                  key={item.href ?? i}
                  item={item}
                  activeHref={activeHref}
                  LinkComponent={LinkComponent}
                />
              ) : (
                <LinkComponent
                  key={item.href}
                  href={item.href}
                  className="ds-nav__link"
                  aria-current={activeHref === item.href ? "page" : undefined}
                >
                  {item.label}
                </LinkComponent>
              ),
            )}
          </div>

          <div className="ds-nav__actions">
            {actions}
            <button
              type="button"
              className="ds-nav__icon-btn ds-md:hidden"
              aria-label={open ? closeLabel : openLabel}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              <BurgerIcon open={open} />
            </button>
          </div>
        </div>

        {/* Mobile panel — production-proven markup (riondato): inside the
            nav, ds-flex-1 when open, inert when closed. */}
        <div
          className={cn(
            "ds-nav__mobile ds-md:hidden",
            open && "ds-nav__mobile--open ds-flex-1",
          )}
          inert={!open}
        >
          <div className="ds-nav__mobile-links">
            {items.map((item, i) =>
              item.children?.length ? (
                <div key={item.href ?? i} className="ds-nav__section">
                  <div className="ds-nav__title">{item.label}</div>
                  {item.children.map((child) => (
                    <LinkComponent
                      key={child.href}
                      href={child.href}
                      className="ds-nav__link"
                      aria-current={
                        activeHref === child.href ? "page" : undefined
                      }
                      onClick={close}
                    >
                      {child.label}
                    </LinkComponent>
                  ))}
                </div>
              ) : (
                <LinkComponent
                  key={item.href}
                  href={item.href}
                  className="ds-nav__link"
                  aria-current={activeHref === item.href ? "page" : undefined}
                  onClick={close}
                >
                  {item.label}
                </LinkComponent>
              ),
            )}
            {mobileExtra}
          </div>
        </div>
      </nav>
    );
  },
);
