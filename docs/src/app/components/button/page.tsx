"use client";

import { Button, ButtonGroup } from "@digiko-npm/ds-react";
import { DemoSection } from "@/components/DemoSection";

export default function ButtonPage() {
  return (
    <>
      <div className="demo-page-header">
        <h1>Button</h1>
        <p>Inverted primary, rounded-full CTAs, refined sizing.</p>
      </div>

      <DemoSection title="Variants" code={`<Button>Primary</Button>\n<Button variant="secondary">Secondary</Button>\n<Button variant="outline">Outline</Button>\n<Button variant="ghost">Ghost</Button>\n<Button variant="danger">Danger</Button>\n<Button variant="success">Success</Button>\n<Button variant="success-solid">Success Solid</Button>`}>
        <Button>Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="danger">Danger</Button>
        <Button variant="success">Success</Button>
        <Button variant="success-solid">Success Solid</Button>
      </DemoSection>

      <DemoSection title="Sizes" code={`<Button size="xs">XS</Button>\n<Button size="sm">Small</Button>\n<Button>Medium</Button>\n<Button size="lg">Large</Button>\n<Button size="xl">XL</Button>\n<Button size="2xl">2XL</Button>`}>
        <Button size="xs">XS</Button>
        <Button size="sm">Small</Button>
        <Button>Medium</Button>
        <Button size="lg">Large</Button>
        <Button size="xl">XL</Button>
        <Button size="2xl">2XL</Button>
      </DemoSection>

      <DemoSection title="Modifiers" code={`<Button pill>Pill</Button>\n<Button icon aria-label="Settings">⚙</Button>\n<Button loading>Loading</Button>\n<Button full>Full Width</Button>`}>
        <Button pill>Pill</Button>
        <Button icon aria-label="Settings">⚙</Button>
        <Button loading>Loading</Button>
      </DemoSection>

      <DemoSection title="Button Group" code={`<ButtonGroup aria-label="Actions">\n  <Button variant="outline">Left</Button>\n  <Button variant="outline">Center</Button>\n  <Button variant="outline">Right</Button>\n</ButtonGroup>`}>
        <ButtonGroup aria-label="Actions">
          <Button variant="outline">Left</Button>
          <Button variant="outline">Center</Button>
          <Button variant="outline">Right</Button>
        </ButtonGroup>
      </DemoSection>

      <DemoSection title="Disabled" code={`<Button disabled>Disabled</Button>\n<Button variant="secondary" disabled>Disabled</Button>`}>
        <Button disabled>Disabled</Button>
        <Button variant="secondary" disabled>Disabled</Button>
      </DemoSection>
    </>
  );
}
