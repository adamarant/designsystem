"use client";

import { Radio } from "@adamarant/ds-react";
import { DemoSection, DemoSectionCol } from "@/components/DemoSection";

export default function RadioPage() {
  return (
    <>
      <div className="demo-page-header">
        <h1>Radio</h1>
        <p>Custom-drawn radio: a native input restyled inside a label wrapper. Group options by a shared name attribute for single-select semantics.</p>
      </div>

      <DemoSectionCol title="Basic" code={`<Radio><input type="radio" name="plan" defaultChecked /> Free plan</Radio>\n<Radio><input type="radio" name="plan" /> Pro plan</Radio>`}>
        <Radio><input type="radio" name="plan" defaultChecked /> Free plan</Radio>
        <Radio><input type="radio" name="plan" /> Pro plan</Radio>
      </DemoSectionCol>

      <DemoSectionCol title="With description" code={`<Radio>\n  <input type="radio" name="tier" defaultChecked />\n  <span className="ds-radio__content">\n    <span className="ds-radio__label">Starter</span>\n    <span className="ds-radio__description">For individuals getting started. Up to 3 projects.</span>\n  </span>\n</Radio>`}>
        <Radio>
          <input type="radio" name="tier" defaultChecked />
          <span className="ds-radio__content">
            <span className="ds-radio__label">Starter</span>
            <span className="ds-radio__description">For individuals getting started. Up to 3 projects.</span>
          </span>
        </Radio>
        <Radio>
          <input type="radio" name="tier" />
          <span className="ds-radio__content">
            <span className="ds-radio__label">Team</span>
            <span className="ds-radio__description">For growing teams. Unlimited projects and shared workspaces.</span>
          </span>
        </Radio>
      </DemoSectionCol>

      <DemoSectionCol title="States" code={`<Radio><input type="radio" name="state" /> Unselected</Radio>\n<Radio><input type="radio" name="state" defaultChecked /> Selected</Radio>\n<Radio><input type="radio" name="state2" disabled /> Disabled</Radio>\n<Radio><input type="radio" name="state2" defaultChecked disabled /> Selected disabled</Radio>`}>
        <Radio><input type="radio" name="state" /> Unselected</Radio>
        <Radio><input type="radio" name="state" defaultChecked /> Selected</Radio>
        <Radio><input type="radio" name="state2" disabled /> Disabled</Radio>
        <Radio><input type="radio" name="state2" defaultChecked disabled /> Selected disabled</Radio>
      </DemoSectionCol>

      <DemoSection title="Sizes" code={`<Radio className="ds-radio--sm"><input type="radio" name="sz1" defaultChecked /> Small</Radio>\n<Radio><input type="radio" name="sz2" defaultChecked /> Default</Radio>\n<Radio className="ds-radio--lg"><input type="radio" name="sz3" defaultChecked /> Large</Radio>`}>
        <Radio className="ds-radio--sm"><input type="radio" name="sz1" defaultChecked /> Small</Radio>
        <Radio><input type="radio" name="sz2" defaultChecked /> Default</Radio>
        <Radio className="ds-radio--lg"><input type="radio" name="sz3" defaultChecked /> Large</Radio>
      </DemoSection>
    </>
  );
}
