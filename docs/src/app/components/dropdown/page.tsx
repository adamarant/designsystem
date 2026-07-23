"use client";

import { useState } from "react";
import { Dropdown } from "@adamarant/ds-react";
import { DemoSection } from "@/components/DemoSection";

function Caret() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M3.5 5.5 7 9l3.5-3.5" />
    </svg>
  );
}

export default function DropdownPage() {
  const [open, setOpen] = useState(false);
  const [openRight, setOpenRight] = useState(false);

  return (
    <>
      <div className="demo-page-header">
        <h1>Dropdown</h1>
        <p>
          Menu di AZIONI (New, Save, Delete…) ancorato a un trigger — non è
          un controllo di selezione: per scegliere un valore in un form usa
          Select, per l&apos;autocomplete usa Combobox. Il trigger non ha
          chrome proprio: vestilo con le classi di Button e aggiungi il
          caret, come qui.
        </p>
      </div>

      <DemoSection
        title="Basic"
        code={`const [open, setOpen] = useState(false);\n\n<Dropdown open={open} onOpenChange={setOpen}>\n  <Dropdown.Trigger className="ds-btn ds-btn--secondary">\n    Actions <Caret />\n  </Dropdown.Trigger>\n  <Dropdown.Menu>\n    <Dropdown.Header>File</Dropdown.Header>\n    <Dropdown.Item>New</Dropdown.Item>\n    <Dropdown.Item>Open</Dropdown.Item>\n    <Dropdown.Divider />\n    <Dropdown.Item danger>Delete</Dropdown.Item>\n  </Dropdown.Menu>\n</Dropdown>`}
      >
        <Dropdown open={open} onOpenChange={setOpen}>
          <Dropdown.Trigger className="ds-btn ds-btn--secondary">
            Actions <Caret />
          </Dropdown.Trigger>
          <Dropdown.Menu>
            <Dropdown.Header>File</Dropdown.Header>
            <Dropdown.Item>New</Dropdown.Item>
            <Dropdown.Item>Open</Dropdown.Item>
            <Dropdown.Item>Save</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item danger>Delete</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Dropdown open={openRight} onOpenChange={setOpenRight}>
          <Dropdown.Trigger className="ds-btn ds-btn--ghost">
            Right-aligned <Caret />
          </Dropdown.Trigger>
          <Dropdown.Menu align="right">
            <Dropdown.Item active>Selected</Dropdown.Item>
            <Dropdown.Item>Other</Dropdown.Item>
            <Dropdown.Item disabled>Disabled</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </DemoSection>
    </>
  );
}
