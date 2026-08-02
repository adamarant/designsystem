"use client";

import { useState } from "react";
import { Button } from "@adamarant/ds-react";
import { DemoSection } from "@/components/DemoSection";

export default function OverlayPage() {
  const [open, setOpen] = useState<null | "plain" | "blur">(null);

  return (
    <>
      <div className="demo-page-header">
        <h1>Overlay</h1>
        <p>
          The dimmed layer that covers the page while something modal is open. Modal, Drawer and
          Command read it; use it directly for anything else that has to dim the page.
        </p>
      </div>

      <DemoSection
        title="On its own"
        description="Click to dim the page, click again to bring it back. Modal, Drawer and Command carry this exact rule — they used to carry six drifted copies of it between them, differing in layer, duration and whether the page blurred."
        code={`<div class="ds-overlay ds-overlay--open" aria-hidden="true" />`}
      >
        <Button onClick={() => setOpen("plain")}>Dim the page</Button>
        <Button variant="secondary" onClick={() => setOpen("blur")}>
          Dim and blur
        </Button>
        {open ? (
          <div
            className={`ds-overlay ds-overlay--open${open === "blur" ? " ds-overlay--blur" : ""}`}
            aria-hidden="true"
            onClick={() => setOpen(null)}
          />
        ) : null}
      </DemoSection>

      <DemoSection
        title="Modifiers"
        description="--blur is the one genuinely per-component choice: a modal blurs what is behind it, a command palette deliberately does not, because you are searching the page you can still see. --static is for a scrim with no open state, only in the DOM while the thing it dims is mounted."
        code={`ds-overlay--open    the visible state\nds-overlay--blur    blurs what is behind\nds-overlay--static  always on, no transition`}
      >
        <p className="ds-body">
          The layer is <code className="ex-code">--ds-z-overlay</code>, which leaves{" "}
          <code className="ex-code">--ds-z-modal</code> to the panels that must sit above a scrim —
          a select opened inside a modal, a gallery.
        </p>
      </DemoSection>

      <DemoSection
        title="Who reads it"
        description="Modal, Drawer and Command. Dropdown and Popover never had a scrim and still do not: they are anchored to a trigger and leave the page live. Two always-on scrims keep their own copies on purpose — the admin sidebar's and the mobile select's — because both have their own state machine."
        code={`.ds-overlay, .ds-modal, .ds-drawer, .ds-command { … }`}
      >
        <p className="ds-body">
          A consumer sees no markup change: the shared rule names those classes alongside
          <code className="ex-code">.ds-overlay</code>.
        </p>
      </DemoSection>
    </>
  );
}
