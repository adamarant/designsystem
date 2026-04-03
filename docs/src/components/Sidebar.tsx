"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV } from "./nav-data";

export function Sidebar() {
  const pathname = usePathname();
  const [query, setQuery] = useState("");

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
    <aside className="demo-sidebar">
      <Link href="/" className="demo-sidebar__brand">
        Design System
      </Link>
      <div className="demo-sidebar__search">
        <input
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
  );
}
