"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { IconBtn } from "@adamarant/ds-react";
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

export function Sidebar() {
  const pathname = usePathname();
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const burgerRef = useRef<HTMLButtonElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);

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
      <header className="demo-bar">
        <IconBtn
          ref={burgerRef}
          variant="ghost"
          size="sm"
          aria-label="Open navigation"
          aria-expanded={open}
          aria-controls="demo-nav"
          onClick={() => setOpen(true)}
        >
          <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
            <g
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              fill="none"
            >
              <path d="M2.5 5h13" />
              <path d="M2.5 9h13" />
              <path d="M2.5 13h13" />
            </g>
          </svg>
        </IconBtn>
        <Link href="/" className="demo-bar__brand">
          Design System
        </Link>
        <div className="demo-bar__end">
          <ThemeToggle />
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
            variant="ghost"
            size="sm"
            className="demo-sidebar__close"
            aria-label="Close navigation"
            onClick={() => {
              setOpen(false);
              burgerRef.current?.focus();
            }}
          >
            <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
              <g
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                fill="none"
              >
                <path d="M4.5 4.5 L13.5 13.5" />
                <path d="M13.5 4.5 L4.5 13.5" />
              </g>
            </svg>
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
        <div className="demo-sidebar__foot">
          <ThemeToggle />
        </div>
        {filteredNav.length === 0 && (
          <p className="ds-text-xs ds-text-tertiary demo-sidebar__empty">
            No results for &ldquo;{query}&rdquo;
          </p>
        )}
      </aside>
    </>
  );
}
