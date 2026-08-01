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

export interface BurgerIconProps {
  /** Renders the close (X) form instead of the bars. */
  open?: boolean;
  /** Rendered box in px. Pair it with the control's tier: 16 / 20 / 24 / 28
      for a 24 / 32 / 40 / 48px control (--ds-icon-1..4 in tokens/spacing). */
  size?: number;
}

/* The menu glyph, on the same grid as every other icon in this package.

   It used to be the one exception: an 18-unit viewBox at stroke-width 1.5,
   where the other six icons here are all viewBox="0 0 24 24" at stroke-width
   2 with round caps. Two consequences, both visible. Its ink measured 12
   units wide inside a 36px .ds-nav__icon-btn, so it read as noticeably
   lighter than anything beside it — the theme toggle's 20px glyph on a 34px
   thumb, for instance. And because it was private to this file, anyone
   needing a burger elsewhere hand-rolled one, inheriting nothing and
   drifting further. The docs did exactly that.

   Now on the 24 grid with ink from 3 to 21, which is what every icon in
   ds-react (and Lucide, which that grid comes from) uses. The two-bar form
   is kept: that is this system's menu mark, not an accident of the old grid.
   The bars sit at 8 and 16 — the thirds — which is the proportion they held
   at 6 and 12 on the old 18 grid. Placing them at 9 and 15 instead reads as
   an equals sign floating in the middle of an empty box. */
export function BurgerIcon({ open = false, size = 24 }: BurgerIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {open ? (
        <>
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </>
      ) : (
        <>
          <line x1="3" y1="8" x2="21" y2="8" />
          <line x1="3" y1="16" x2="21" y2="16" />
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

          {/* The desktop half of the pair. The burger and the panel below
              both carry ds-md:hidden, but this row carried nothing, so on a
              phone you got the panel AND the full desktop link row running
              off the side of the screen. .ds-nav__menu itself stays a plain
              flex row — a static nav may legitimately want it at every width
              — so the breakpoint lives here, where the desktop/mobile pairing
              is actually decided, and it is the DS's own utility doing it.
              Utilities out-layer components, so ds-hidden wins over the
              component's display: flex without a specificity fight. */}
          <div className="ds-nav__menu ds-hidden ds-md:flex">
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
                  className={cn(
                    "ds-nav__link",
                    activeHref === item.href && "ds-nav__link--active",
                  )}
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
                      className={cn(
                        "ds-nav__link",
                        activeHref === child.href && "ds-nav__link--active",
                      )}
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
                  className={cn(
                    "ds-nav__link",
                    activeHref === item.href && "ds-nav__link--active",
                  )}
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
