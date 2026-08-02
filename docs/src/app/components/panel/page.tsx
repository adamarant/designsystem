"use client";

import { DemoSection } from "@/components/DemoSection";

export default function PanelPage() {
  return (
    <>
      <div className="demo-page-header">
        <h1>Panel</h1>
        <p>
          The floating surface anchored components open: a menu, a listbox, a date grid, a
          popover&rsquo;s body. Seven of them used to draw it themselves.
        </p>
      </div>

      <DemoSection
        title="The surface"
        description="Four declarations — the muted surface, a hairline border, the radius and the shadow — that were identical in seven files. Dropdown, Select, Popover, Combobox, Context Menu, Datepicker and Command all read this now, so a change to the box is made once."
        code={`<div class="ds-panel">…</div>`}
      >
        <div className="ds-panel" style={{ padding: "var(--ds-space-4)", maxWidth: "18rem" }}>
          <p className="ds-body">Anything that floats over the page and is not a scrim.</p>
        </div>
      </DemoSection>

      <DemoSection
        title="What it deliberately does not own"
        description="Position, inset, z-index, width, animation. Where a panel opens, how wide it is and how it enters are the parts that genuinely differ between a dropdown and a date picker — those stay in each component's own file, which is why this rule is four lines long."
        code={`/* in dropdown.css */\n.ds-dropdown__menu {\n  position: absolute;\n  inset-block-start: calc(100% + var(--ds-space-1));\n  z-index: var(--ds-z-dropdown);\n  min-width: 12rem;\n}`}
      >
        <p className="ds-body">
          A component still overrides what is its own: the Select&rsquo;s mobile panel becomes a
          sheet and keeps its top-only radius, because component files are imported after this one.
        </p>
      </DemoSection>

      <DemoSection
        title="Panel is not Overlay"
        description="Overlay is the dimmed layer that covers the page while something modal is open; Panel is the lit surface that floats above it. The modal-class components use the first, the anchored ones use the second, and Command — a palette over a scrim — uses both."
        code={`<div class="ds-overlay ds-overlay--open">   <!-- dims the page -->\n  <div class="ds-panel">…</div>            <!-- floats above it -->\n</div>`}
      >
        <div className="ds-panel" style={{ padding: "var(--ds-space-4)", maxWidth: "18rem" }}>
          <p className="ds-meta">This is the panel.</p>
        </div>
      </DemoSection>
    </>
  );
}
