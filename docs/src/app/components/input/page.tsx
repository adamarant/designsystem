"use client";

import { Input, Textarea, Select, InputGroup, InputGroupIcon, Help, Checkbox, Radio, Label } from "@digiko-npm/ds-react";
import { DemoSection, DemoSectionCol } from "@/components/DemoSection";

export default function InputPage() {
  return (
    <>
      <div className="demo-page-header">
        <h1>Input</h1>
        <p>Surface bg, clean borders, focus ring. Includes Input, Textarea, Select, Checkbox, Radio.</p>
      </div>

      <DemoSectionCol title="Input" code={`<Label htmlFor="name">Name</Label>
<Input id="name" placeholder="Enter your name" />

<Label htmlFor="email">Email</Label>
<Input id="email" state="error" placeholder="Invalid email" />
<Help variant="error">Please enter a valid email</Help>

<Label htmlFor="ok">Confirmed</Label>
<Input id="ok" state="success" defaultValue="All good" />`}>
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

      <DemoSection title="Sizes" code={`<Input size="xs" placeholder="XS" />
<Input size="sm" placeholder="SM" />
<Input placeholder="MD (default)" />
<Input size="lg" placeholder="LG" />`}>
        <Input size="xs" placeholder="XS" />
        <Input size="sm" placeholder="SM" />
        <Input placeholder="MD (default)" />
        <Input size="lg" placeholder="LG" />
      </DemoSection>

      <DemoSectionCol title="Textarea" code={`<Textarea placeholder="Write something..." />
<Textarea state="error" placeholder="Error state" />`}>
        <Textarea placeholder="Write something..." />
        <Textarea state="error" placeholder="Error state" />
      </DemoSectionCol>

      <DemoSection title="Select" code={`<Select>
  <option>Choose...</option>
  <option>Option A</option>
  <option>Option B</option>
</Select>`}>
        <Select>
          <option>Choose...</option>
          <option>Option A</option>
          <option>Option B</option>
        </Select>
        <Select size="sm">
          <option>Small</option>
        </Select>
      </DemoSection>

      <DemoSection title="Checkbox & Radio" code={`<Checkbox><input type="checkbox" /> Remember me</Checkbox>
<Radio><input type="radio" name="opt" /> Option A</Radio>
<Radio><input type="radio" name="opt" /> Option B</Radio>`}>
        <Checkbox><input type="checkbox" /> Remember me</Checkbox>
        <Radio><input type="radio" name="opt" defaultChecked /> Option A</Radio>
        <Radio><input type="radio" name="opt" /> Option B</Radio>
      </DemoSection>
    </>
  );
}
