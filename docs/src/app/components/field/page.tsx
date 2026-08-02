"use client";

import {
  Field,
  Input,
  Textarea,
  Select,
  Label,
} from "@adamarant/ds-react";
import { DemoSection, DemoSectionCol } from "@/components/DemoSection";

/* One page for the whole form field: the wrapper and the control it holds.
   They used to be two entries — Field and Input — which read as duplicates
   and hid the fact that they compose. Merged 2 Aug 2026. */

export default function FieldPage() {
  return (
    <>
      <div className="demo-page-header">
        <h1>Field</h1>
        <p>
          Label, control, hint, error — one component. The control inside it is an Input, a
          Textarea or a Select.
        </p>
      </div>

      <DemoSectionCol
        title="The field"
        description="Field takes its parts as props and derives the wiring: the label points at the control, and the hint and error are announced through aria-describedby. That wiring is the half hand-assembled forms usually skip."
        code={`<Field label="Email" hint="We'll never share it.">\n  <Input type="email" placeholder="you@example.com" />\n</Field>`}
      >
        <Field label="Email" hint="We'll never share it.">
          <Input type="email" placeholder="you@example.com" />
        </Field>
      </DemoSectionCol>

      <DemoSectionCol
        title="Required, error, success"
        description="required marks the label only — the control keeps its own required prop, so validation and presentation cannot drift apart. An error replaces the hint and sets aria-invalid on the control."
        code={`<Field label="Password" required error="At least 8 characters.">\n  <Input type="password" state="error" />\n</Field>\n\n<Field label="Handle" success="Available">\n  <Input state="success" defaultValue="adamarant" />\n</Field>`}
      >
        <Field label="Password" required error="At least 8 characters.">
          <Input type="password" state="error" />
        </Field>
        <Field label="Handle" success="Available">
          <Input state="success" defaultValue="adamarant" />
        </Field>
      </DemoSectionCol>

      <DemoSectionCol
        title="Horizontal, disabled"
        code={`<Field label="Username" horizontal>\n  <Input />\n</Field>\n\n<Field label="Locked" disabled hint="Ask an admin.">\n  <Input disabled defaultValue="read-only" />\n</Field>`}
      >
        <Field label="Username" horizontal>
          <Input />
        </Field>
        <Field label="Locked" disabled hint="Ask an admin.">
          <Input disabled defaultValue="read-only" />
        </Field>
      </DemoSectionCol>

      <DemoSection
        title="Control sizes"
        description="The control is sized on its own; the field only arranges it. Size tiers match every other inline control, so an Input sm and a Button sm are the same height."
        code={`<Input size="xs" />\n<Input size="sm" />\n<Input />\n<Input size="lg" />`}
      >
        <Input size="xs" placeholder="XS" />
        <Input size="sm" placeholder="SM" />
        <Input placeholder="MD (default)" />
        <Input size="lg" placeholder="LG" />
      </DemoSection>

      <DemoSectionCol
        title="Textarea and Select"
        description="Any control goes inside a Field. Select has its own page: the panel is the default, and this is the explicit native rendering."
        code={`<Field label="Notes">\n  <Textarea placeholder="Write something..." />\n</Field>\n\n<Field label="Plan">\n  <Select native>…</Select>\n</Field>`}
      >
        <Field label="Notes">
          <Textarea placeholder="Write something..." />
        </Field>
        <Field label="Plan">
          <Select native>
            <option>Choose...</option>
            <option>Option A</option>
            <option>Option B</option>
          </Select>
        </Field>
      </DemoSectionCol>

      <DemoSectionCol
        title="Without a wrapper"
        description="Label is the standalone label, for controls that have no field around them — a checkbox row, a table filter. Never put it inside a Field: it carries its own bottom margin, while the field's label does not, because the field's gap owns that distance."
        code={`<Label htmlFor="q">Search</Label>\n<Input id="q" placeholder="Filter rows" />`}
      >
        <div>
          <Label htmlFor="q">Search</Label>
          <Input id="q" placeholder="Filter rows" />
        </div>
      </DemoSectionCol>
    </>
  );
}
