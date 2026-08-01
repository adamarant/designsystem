"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { BurgerIcon, IconBtn, SegmentedControl, SegmentedControlItem } from "@adamarant/ds-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { usePathname } from "next/navigation";
import { NAV } from "./nav-data";

/* The nav is one component with two forms, chosen by width alone.

   ≥ lg (1024px) the aside is a permanent column and nothing here applies:
   `open` stays false, the bar and the scrim are display:none, and the desktop
   docs look exactly as they did.

   < lg the same aside becomes an off-canvas drawer over the content, opened
   from a burger in a sticky top bar. Whether it is reachable is decided in
   CSS (visibility, not `inert`), so the desktop tab order never depends on
   React state — the one place these dual-form navs usually break. */

const DRAWER_MQ = "(min-width: 1024px)";

type Surface = "web" | "product";
type Viewport = "desktop" | "tablet" | "mobile";

export function Sidebar() {
  const pathname = usePathname();
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const burgerRef = useRef<HTMLButtonElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);

  /* The three docs modes. Surface and viewport land as data attributes on
     .demo-main — the content column, never the sidebar — where the DS (and
     the viewport pins in demo.css) resolve them. Theme stays next-themes'.
     Defaults carry no attribute, so the server render is already correct. */
  const [surface, setSurface] = useState<Surface>("web");
  const [viewport, setViewport] = useState<Viewport>("desktop");
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const theme = mounted && resolvedTheme === "light" ? "light" : "dark";

  useEffect(() => {
    const main = document.querySelector(".demo-main");
    if (!main) return;
    if (surface === "product") main.setAttribute("data-surface", "product");
    else main.removeAttribute("data-surface");
    if (surface === "web" && viewport !== "desktop") main.setAttribute("data-viewport", viewport);
    else main.removeAttribute("data-viewport");
  }, [surface, viewport]);

  /* Navigating is the implicit "close": the drawer covers the page it just
     took you to. */
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  /* Escape closes and hands focus back to the control that opened it, and the
     page behind must not scroll while the drawer is over it. Crossing into
     desktop closes too, otherwise a resize with the drawer open would leave
     the scroll lock on a layout that has no drawer to unlock it. */
  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        burgerRef.current?.focus();
      }
    };

    const mq = window.matchMedia(DRAWER_MQ);
    const onDesktop = () => mq.matches && setOpen(false);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKey);
    mq.addEventListener("change", onDesktop);

    /* The search field is the first thing in the drawer and the most useful
       landing spot in a 70-entry nav. */
    searchRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", onDesktop);
    };
  }, [open]);

  const q = query.toLowerCase().trim();

  const filteredNav = q
    ? NAV.map((group) => ({
        ...group,
        items: group.items.filter((item) =>
          item.name.toLowerCase().includes(q),
        ),
      })).filter((group) => group.items.length > 0)
    : NAV;

  return (
    <>
      {/* size="lg" and no `variant="ghost"`: --ghost sets width/height to auto
          (icon-btn.css), so it throws the size tier away and the button
          collapses onto its glyph. Default variant is transparent at rest
          anyway — the only thing it adds over ghost is the 40px box and a
          hover surface, which is exactly what a thumb needs.

          The glyph is the DS's own BurgerIcon at its default 24px, which is
          --ds-icon-3, the size that belongs in a 40px control. The version
          that lived here was hand-drawn and measured 13px of ink, which is
          why it read smaller than the theme toggle sitting next to it. */}
      <header className="demo-bar">
        <IconBtn
          ref={burgerRef}
          className="demo-bar__burger"
          size="lg"
          aria-label="Open navigation"
          aria-expanded={open}
          aria-controls="demo-nav"
          onClick={() => setOpen(true)}
        >
          <BurgerIcon />
        </IconBtn>
        <Link href="/" className="demo-bar__brand">
          Design System
        </Link>
        <div className="demo-bar__end">
          {/* Desktop: the three modes as segmented controls. Everything under
              the bar re-resolves; the sidebar is outside on purpose. */}
          <div className="demo-bar__modes">
            <SegmentedControl className="ds-segmented--sm" aria-label="Surface">
              <SegmentedControlItem active={surface === "web"} onClick={() => setSurface("web")}>
                Web
              </SegmentedControlItem>
              <SegmentedControlItem
                active={surface === "product"}
                onClick={() => setSurface("product")}
              >
                Product
              </SegmentedControlItem>
            </SegmentedControl>
            <SegmentedControl className="ds-segmented--sm" aria-label="Theme">
              <SegmentedControlItem active={theme === "light"} onClick={() => setTheme("light")}>
                Light
              </SegmentedControlItem>
              <SegmentedControlItem active={theme === "dark"} onClick={() => setTheme("dark")}>
                Dark
              </SegmentedControlItem>
            </SegmentedControl>
            <SegmentedControl className="ds-segmented--sm" aria-label="Viewport">
              {(["desktop", "tablet", "mobile"] as const).map((v) => (
                <SegmentedControlItem
                  key={v}
                  active={viewport === v}
                  disabled={surface === "product"}
                  title={surface === "product" ? "Product is fixed: density is not the viewport's" : undefined}
                  onClick={() => setViewport(v)}
                >
                  {v[0].toUpperCase() + v.slice(1)}
                </SegmentedControlItem>
              ))}
            </SegmentedControl>
          </div>
          {/* < lg: the thumb bar keeps the toggle; the modes hide in CSS. */}
          <span className="demo-bar__toggle">
            <ThemeToggle size="lg" />
          </span>
        </div>
      </header>

      <div
        className={`demo-scrim${open ? " demo-scrim--open" : ""}`}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      <aside
        id="demo-nav"
        className={`demo-sidebar${open ? " demo-sidebar--open" : ""}`}
      >
        <div className="demo-sidebar__head">
          <Link href="/" className="demo-sidebar__brand">
            Design System
          </Link>
          {/* The drawer covers the burger that opened it, so the way back out
              has to be inside the panel. Scrim tap and Escape work too, but
              neither is visible. */}
          <IconBtn
            size="lg"
            className="demo-sidebar__close"
            aria-label="Close navigation"
            onClick={() => {
              setOpen(false);
              burgerRef.current?.focus();
            }}
          >
            <BurgerIcon open />
          </IconBtn>
        </div>
        <div className="demo-sidebar__search">
          <input
            ref={searchRef}
            className="ds-input ds-input--sm"
            placeholder="Search components..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoComplete="off"
          />
        </div>
        {filteredNav.map((group) => (
          <div key={group.label} className="demo-sidebar__group">
            <div className="demo-sidebar__label">{group.label}</div>
            {group.items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`demo-sidebar__link${pathname === item.href ? " demo-sidebar__link--active" : ""}`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        ))}
        {filteredNav.length === 0 && (
          <p className="ds-text-xs ds-text-tertiary demo-sidebar__empty">
            No results for &ldquo;{query}&rdquo;
          </p>
        )}
      </aside>
    </>
  );
}
