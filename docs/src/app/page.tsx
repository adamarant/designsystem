"use client";

import { Badge } from "@adamarant/ds-react";

export default function Home() {
  return (
    <>
      <div className="demo-page-header">
        <h1>Design System</h1>
        {/* No counts in this line. The three it used to carry — 13 React
            components, 58 CSS components, 140+ tokens — were all stale:
            nothing updates a number written in prose, and the sidebar had
            been longer than 13 for months. Same reason the stale-list hook
            blocks counts in CLAUDE.md files. The sidebar is the inventory. */}
        <p>Interactive React components, built on top of the CSS components and design tokens.</p>
      </div>

      <section className="demo-section">
        <h2 className="demo-section__title">Quick Start</h2>
        <div className="demo-preview demo-preview--col">
          <code className="ds-font-mono ds-text-sm ds-text-secondary">
            npm install @adamarant/designsystem @adamarant/ds-react
          </code>
        </div>
      </section>

      <section className="demo-section">
        <h2 className="demo-section__title">Available Components</h2>
        <div className="demo-preview">
          <Badge>Button</Badge>
          <Badge>Badge</Badge>
          <Badge>Input</Badge>
          <Badge>Card</Badge>
          <Badge>Alert</Badge>
          <Badge>Tag</Badge>
          <Badge>Avatar</Badge>
          <Badge>Spinner</Badge>
          <Badge>Modal</Badge>
          <Badge>Tabs</Badge>
          <Badge>Dropdown</Badge>
          <Badge>Tooltip</Badge>
          <Badge>Toggle</Badge>
        </div>
      </section>
    </>
  );
}
