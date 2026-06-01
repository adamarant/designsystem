"use client";

import { useState } from "react";
import { Toggle } from "@adamarant/ds-react";
import { DemoSection } from "@/components/DemoSection";

export default function TogglePage() {
  const [on1, setOn1] = useState(false);
  const [on2, setOn2] = useState(true);
  const [on3, setOn3] = useState(false);

  return (
    <>
      <div className="demo-page-header">
        <h1>Toggle</h1>
        <p>A toggle (switch) control for binary on/off states.</p>
      </div>

      <DemoSection title="Basic" code={`const [on, setOn] = useState(false);\n\n<Toggle checked={on} onCheckedChange={setOn} />`}>
        <Toggle checked={on1} onCheckedChange={setOn1} />
        <Toggle checked={on2} onCheckedChange={setOn2} />
      </DemoSection>

      <DemoSection title="Sizes" code={`<Toggle size="sm" .../>\n<Toggle .../>\n<Toggle size="lg" .../>`}>
        <Toggle size="sm" checked={on3} onCheckedChange={setOn3} />
        <Toggle checked={on1} onCheckedChange={setOn1} />
        <Toggle size="lg" checked={on2} onCheckedChange={setOn2} />
      </DemoSection>

      <DemoSection title="With Label" code={`<Toggle.Label>\n  <Toggle checked={on} onCheckedChange={setOn} />\n  <Toggle.LabelText>Dark mode</Toggle.LabelText>\n</Toggle.Label>`}>
        <Toggle.Label>
          <Toggle checked={on1} onCheckedChange={setOn1} />
          <Toggle.LabelText>Notifications</Toggle.LabelText>
        </Toggle.Label>
        <Toggle.Label>
          <Toggle checked={on2} onCheckedChange={setOn2} />
          <Toggle.LabelText>Dark mode</Toggle.LabelText>
        </Toggle.Label>
      </DemoSection>

      <DemoSection title="Disabled" code={`<Toggle checked={false} onCheckedChange={() => {}} disabled />`}>
        <Toggle checked={false} onCheckedChange={() => {}} disabled />
        <Toggle checked={true} onCheckedChange={() => {}} disabled />
      </DemoSection>
    </>
  );
}
