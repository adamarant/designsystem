"use client";

import { useState } from "react";
import { Dropdown, Button } from "@adamarant/ds-react";
import { DemoSection } from "@/components/DemoSection";

export default function DropdownPage() {
  const [open, setOpen] = useState(false);
  const [openRight, setOpenRight] = useState(false);

  return (
    <>
      <div className="demo-page-header">
        <h1>Dropdown</h1>
        <p>Floating menu with surface bg, scale transition, keyboard-friendly items.</p>
      </div>

      <DemoSection title="Basic" code={`const [open, setOpen] = useState(false);\n\n<Dropdown open={open} onOpenChange={setOpen}>\n  <Dropdown.Trigger>Actions</Dropdown.Trigger>\n  <Dropdown.Menu>\n    <Dropdown.Header>File</Dropdown.Header>\n    <Dropdown.Item>New</Dropdown.Item>\n    <Dropdown.Item>Open</Dropdown.Item>\n    <Dropdown.Divider />\n    <Dropdown.Item danger>Delete</Dropdown.Item>\n  </Dropdown.Menu>\n</Dropdown>`}>
        <Dropdown open={open} onOpenChange={setOpen}>
          <Dropdown.Trigger>Actions</Dropdown.Trigger>
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
          <Dropdown.Trigger>Right-aligned</Dropdown.Trigger>
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
