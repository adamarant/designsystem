"use client";

import Link from "next/link";
import { Badge } from "@digiko-npm/ds-react";

const COMPONENTS = [
  { name: "Button", href: "/components/button", cat: "Action" },
  { name: "Badge", href: "/components/badge", cat: "Data Display" },
  { name: "Input", href: "/components/input", cat: "Form" },
  { name: "Card", href: "/components/card", cat: "Layout" },
  { name: "Alert", href: "/components/alert", cat: "Feedback" },
  { name: "Tag", href: "/components/tag", cat: "Data Display" },
  { name: "Avatar", href: "/components/avatar", cat: "Data Display" },
  { name: "Spinner", href: "/components/spinner", cat: "Feedback" },
  { name: "Modal", href: "/components/modal", cat: "Overlay" },
  { name: "Tabs", href: "/components/tabs", cat: "Navigation" },
  { name: "Dropdown", href: "/components/dropdown", cat: "Overlay" },
  { name: "Tooltip", href: "/components/tooltip", cat: "Feedback" },
  { name: "Toggle", href: "/components/toggle", cat: "Form" },
];

export default function ComponentsIndex() {
  return (
    <>
      <div className="demo-page-header">
        <h1>Components</h1>
        <p>All available React components.</p>
      </div>
      <div className="demo-preview demo-preview--col">
        {COMPONENTS.map((c) => (
          <Link
            key={c.href}
            href={c.href}
            className="ds-flex ds-items-center ds-justify-between ds-py-2"
            style={{ textDecoration: "none" }}
          >
            <span className="ds-text-sm ds-text-primary ds-font-medium">{c.name}</span>
            <Badge variant="outline">{c.cat}</Badge>
          </Link>
        ))}
      </div>
    </>
  );
}
