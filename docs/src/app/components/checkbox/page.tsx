"use client";

import { Checkbox } from "@adamarant/ds-react";
import { DemoSection, DemoSectionCol } from "@/components/DemoSection";

export default function CheckboxPage() {
  return (
    <>
      <div className="demo-page-header">
        <h1>Checkbox</h1>
        <p>Custom-drawn checkbox: a native input restyled inside a label wrapper. Hover, focus ring, checked, and disabled states match the rest of the form controls.</p>
      </div>

      <DemoSectionCol title="Basic" code={`<Checkbox><input type="checkbox" /> Remember me</Checkbox>\n<Checkbox><input type="checkbox" defaultChecked /> Subscribe to updates</Checkbox>`}>
        <Checkbox><input type="checkbox" /> Remember me</Checkbox>
        <Checkbox><input type="checkbox" defaultChecked /> Subscribe to updates</Checkbox>
      </DemoSectionCol>

      <DemoSectionCol title="With description" code={`<Checkbox>\n  <input type="checkbox" defaultChecked />\n  <span className="ds-checkbox__content">\n    <span className="ds-checkbox__label">Email notifications</span>\n    <span className="ds-checkbox__description">Get notified when someone mentions you in a comment.</span>\n  </span>\n</Checkbox>`}>
        <Checkbox>
          <input type="checkbox" defaultChecked />
          <span className="ds-checkbox__content">
            <span className="ds-checkbox__label">Email notifications</span>
            <span className="ds-checkbox__description">Get notified when someone mentions you in a comment.</span>
          </span>
        </Checkbox>
        <Checkbox>
          <input type="checkbox" />
          <span className="ds-checkbox__content">
            <span className="ds-checkbox__label">Weekly digest</span>
            <span className="ds-checkbox__description">A summary of activity delivered every Monday.</span>
          </span>
        </Checkbox>
      </DemoSectionCol>

      <DemoSectionCol title="States" code={`<Checkbox><input type="checkbox" /> Unchecked</Checkbox>\n<Checkbox><input type="checkbox" defaultChecked /> Checked</Checkbox>\n<Checkbox><input type="checkbox" disabled /> Disabled</Checkbox>\n<Checkbox><input type="checkbox" defaultChecked disabled /> Checked disabled</Checkbox>`}>
        <Checkbox><input type="checkbox" /> Unchecked</Checkbox>
        <Checkbox><input type="checkbox" defaultChecked /> Checked</Checkbox>
        <Checkbox><input type="checkbox" disabled /> Disabled</Checkbox>
        <Checkbox><input type="checkbox" defaultChecked disabled /> Checked disabled</Checkbox>
      </DemoSectionCol>

      <DemoSection title="Sizes" code={`<Checkbox className="ds-checkbox--sm"><input type="checkbox" defaultChecked /> Small</Checkbox>\n<Checkbox><input type="checkbox" defaultChecked /> Default</Checkbox>\n<Checkbox className="ds-checkbox--lg"><input type="checkbox" defaultChecked /> Large</Checkbox>`}>
        <Checkbox className="ds-checkbox--sm"><input type="checkbox" defaultChecked /> Small</Checkbox>
        <Checkbox><input type="checkbox" defaultChecked /> Default</Checkbox>
        <Checkbox className="ds-checkbox--lg"><input type="checkbox" defaultChecked /> Large</Checkbox>
      </DemoSection>
    </>
  );
}
