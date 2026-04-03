"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV = [
  {
    label: "Components",
    items: [
      { name: "Button", href: "/components/button" },
      { name: "Badge", href: "/components/badge" },
      { name: "Input", href: "/components/input" },
      { name: "Card", href: "/components/card" },
      { name: "Alert", href: "/components/alert" },
      { name: "Tag", href: "/components/tag" },
      { name: "Avatar", href: "/components/avatar" },
      { name: "Spinner", href: "/components/spinner" },
      { name: "Toggle", href: "/components/toggle" },
    ],
  },
  {
    label: "Overlay",
    items: [
      { name: "Modal", href: "/components/modal" },
      { name: "Dropdown", href: "/components/dropdown" },
      { name: "Tooltip", href: "/components/tooltip" },
    ],
  },
  {
    label: "Navigation",
    items: [
      { name: "Tabs", href: "/components/tabs" },
    ],
  },
];

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
