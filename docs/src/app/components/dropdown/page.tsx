"use client";

import { useState } from "react";
import { Dropdown, Button } from "@digiko-npm/ds-react";
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

      <DemoSection title="Basic" code={`<Dropdown open={open} onOpenChange={setOpen}>
  <Dropdown.Trigger>Actions</Dropdown.Trigger>
  <Dropdown.Menu>
    <Dropdown.Item onClick={edit}>Edit</Dropdown.Item>
    <Dropdown.Divider />
    <Dropdown.Item danger onClick={del}>Delete</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>`}>
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
