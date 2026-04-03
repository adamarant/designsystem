"use client";

import { Badge } from "@digiko-npm/ds-react";

export default function Home() {
  return (
    <>
      <div className="demo-page-header">
        <h1>Design System</h1>
        <p>Interactive React component documentation. 13 components, built on top of 58 CSS components and 140+ design tokens.</p>
      </div>

      <section className="demo-section">
        <h2 className="demo-section__title">Quick Start</h2>
        <div className="demo-preview demo-preview--col">
          <code className="ds-font-mono ds-text-sm ds-text-secondary">
            npm install @digiko-npm/designsystem @digiko-npm/ds-react
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
