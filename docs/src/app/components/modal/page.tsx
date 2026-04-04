"use client";

import { useState } from "react";
import { Modal, Button } from "@digiko-npm/ds-react";
import { DemoSection } from "@/components/DemoSection";

export default function ModalPage() {
  const [open, setOpen] = useState(false);
  const [openLg, setOpenLg] = useState(false);

  return (
    <>
      <div className="demo-page-header">
        <h1>Modal</h1>
        <p>Backdrop blur, shadow, rounded-xl. Portal, escape key, scroll lock.</p>
      </div>

      <DemoSection title="Basic Modal" code={`const [open, setOpen] = useState(false);\n\n<Button onClick={() => setOpen(true)}>Open Modal</Button>\n<Modal open={open} onClose={() => setOpen(false)}>\n  <Modal.Content>\n    <Modal.Header>\n      <h3>Confirm</h3>\n      <Modal.Close onClick={() => setOpen(false)}>✕</Modal.Close>\n    </Modal.Header>\n    <Modal.Body>Are you sure?</Modal.Body>\n    <Modal.Footer>\n      <Button variant="ghost" onClick={() => setOpen(false)}>Cancel</Button>\n      <Button onClick={() => setOpen(false)}>Confirm</Button>\n    </Modal.Footer>\n  </Modal.Content>\n</Modal>`}>
        <Button onClick={() => setOpen(true)}>Open Modal</Button>
        <Button variant="outline" onClick={() => setOpenLg(true)}>Open Large</Button>

        <Modal open={open} onClose={() => setOpen(false)}>
          <Modal.Content>
            <Modal.Header>
              <h3>Confirm action</h3>
              <Modal.Close onClick={() => setOpen(false)}>✕</Modal.Close>
            </Modal.Header>
            <Modal.Body>Are you sure you want to proceed?</Modal.Body>
            <Modal.Footer>
              <Button variant="ghost" onClick={() => setOpen(false)}>Cancel</Button>
              <Button onClick={() => setOpen(false)}>Confirm</Button>
            </Modal.Footer>
          </Modal.Content>
        </Modal>

        <Modal open={openLg} onClose={() => setOpenLg(false)} size="lg">
          <Modal.Content>
            <Modal.Header>
              <h3>Large Modal</h3>
              <Modal.Close onClick={() => setOpenLg(false)}>✕</Modal.Close>
            </Modal.Header>
            <Modal.Body>This modal uses size=&quot;lg&quot; for wider content.</Modal.Body>
            <Modal.Footer>
              <Button onClick={() => setOpenLg(false)}>Close</Button>
            </Modal.Footer>
          </Modal.Content>
        </Modal>
      </DemoSection>
    </>
  );
}
