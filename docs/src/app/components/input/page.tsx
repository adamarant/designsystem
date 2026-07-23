"use client";

import { Input, Textarea, Select, InputGroup, InputGroupIcon, Help, Label } from "@adamarant/ds-react";
import { DemoSection, DemoSectionCol } from "@/components/DemoSection";

export default function InputPage() {
  return (
    <>
      <div className="demo-page-header">
        <h1>Input</h1>
        <p>Surface bg, clean borders, focus ring. Includes Input and Textarea. Il Select ha la sua pagina — il pannello è il default anche a children; qui sotto la resa nativa esplicita.</p>
      </div>

      <DemoSectionCol title="Input" code={`<Label htmlFor="name">Name</Label>\n<Input id="name" placeholder="Enter your name" />\n\n<Label htmlFor="email">Email</Label>\n<Input id="email" state="error" placeholder="Invalid" />\n<Help variant="error">Please enter a valid email</Help>`}>
        <div>
          <Label htmlFor="name">Name</Label>
          <Input id="name" placeholder="Enter your name" />
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" state="error" placeholder="Invalid email" />
          <Help variant="error">Please enter a valid email</Help>
        </div>
        <div>
          <Label htmlFor="ok">Confirmed</Label>
          <Input id="ok" state="success" defaultValue="All good" />
        </div>
      </DemoSectionCol>

      <DemoSection title="Sizes" code={`<Input size="xs" placeholder="XS" />\n<Input size="sm" placeholder="SM" />\n<Input placeholder="MD" />\n<Input size="lg" placeholder="LG" />`}>
        <Input size="xs" placeholder="XS" />
        <Input size="sm" placeholder="SM" />
        <Input placeholder="MD (default)" />
        <Input size="lg" placeholder="LG" />
      </DemoSection>

      <DemoSectionCol title="Textarea" code={`<Textarea placeholder="Write something..." />\n<Textarea state="error" placeholder="Error state" />`}>
        <Textarea placeholder="Write something..." />
        <Textarea state="error" placeholder="Error state" />
      </DemoSectionCol>

      <DemoSection title="Select (native opt-in)" code={`<Select native>\n  <option>Choose...</option>\n  <option>Option A</option>\n</Select>`}>
        <Select native>
          <option>Choose...</option>
          <option>Option A</option>
          <option>Option B</option>
        </Select>
        <Select native size="sm">
          <option>Small</option>
        </Select>
      </DemoSection>
    </>
  );
}
