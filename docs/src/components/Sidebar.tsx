"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV } from "./nav-data";

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="demo-sidebar">
      <Link href="/" className="demo-sidebar__brand">
        Design System
      </Link>
      {NAV.map((group) => (
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
    </aside>
  );
}
