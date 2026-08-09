"use client";

/* The map of the page, on the right.
 *
 * Reads the section headings out of the DOM after mount rather than asking
 * every page to declare them: 55 pages already emit .demo-section__title, and
 * a list they had to maintain by hand is the same defect the home page had
 * with its hardcoded component list.
 *
 * Follows the reading position with IntersectionObserver — no scroll handler,
 * so nothing runs between sections. */

import { useEffect, useState } from "react";

interface Entry {
  id: string;
  label: string;
}

/* Stable, readable ids so a copied link means something. Two sections with
   the same title on one page would collide, so the index breaks the tie. */
function slug(text: string, i: number) {
  const base = text
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
  return base ? `${base}-${i}` : `section-${i}`;
}

export function PageMap() {
  const [entries, setEntries] = useState<Entry[]>([]);
  const [active, setActive] = useState<string | null>(null);

  /* The sticky bar's height, measured rather than recomputed from its parts.
     Written as a custom property on the layout so both the map's sticky
     offset and the headings' scroll-margin read one number. A calc of
     padding + control + border was 14px out, because the control it guessed
     at is not the one the bar actually holds. */
  useEffect(() => {
    const layout = document.querySelector<HTMLElement>(".demo-layout");
    const bar = document.querySelector<HTMLElement>(".demo-bar");
    if (!layout || !bar) return;

    const publish = () =>
      layout.style.setProperty("--demo-bar-h", `${bar.offsetHeight}px`);
    publish();

    const ro = new ResizeObserver(publish);
    ro.observe(bar);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    const titles = Array.from(
      document.querySelectorAll<HTMLElement>(".demo-section__title"),
    );

    /* One section is not a map. */
    if (titles.length < 2) {
      setEntries([]);
      return;
    }

    const found = titles.map((el, i) => {
      const id = el.id || slug(el.textContent ?? "", i);
      if (!el.id) el.id = id;
      return { id, label: (el.textContent ?? "").trim() };
    });
    setEntries(found);
    setActive(found[0]?.id ?? null);

    /* The band is the top third of the viewport: a heading is "current" from
       the moment it reaches reading position until the next one does. */
    const observer = new IntersectionObserver(
      (records) => {
        const visible = records
          .filter((r) => r.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]?.target.id) setActive(visible[0].target.id);
      },
      { rootMargin: "0px 0px -66% 0px", threshold: 0 },
    );

    titles.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  if (entries.length === 0) return null;

  return (
    <nav className="demo-map" aria-label="On this page">
      <p className="demo-map__title">On this page</p>
      <ul className="demo-map__list">
        {entries.map((e) => (
          <li key={e.id}>
            <a
              href={`#${e.id}`}
              className="demo-map__link"
              aria-current={active === e.id ? "true" : undefined}
            >
              {e.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
