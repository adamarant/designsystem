"use client";

import { Tag } from "@digiko-npm/ds-react";
import { DemoSection } from "@/components/DemoSection";

export default function TagPage() {
  return (
    <>
      <div className="demo-page-header">
        <h1>Tag</h1>
        <p>Interactive, optionally removable tag for categorisation and filtering.</p>
      </div>

      <DemoSection title="Variants" code={`<Tag>Default</Tag>\n<Tag variant="primary">Primary</Tag>\n<Tag variant="success">Success</Tag>`}>
        <Tag>Default</Tag>
        <Tag variant="primary">Primary</Tag>
        <Tag variant="success">Success</Tag>
        <Tag variant="warning">Warning</Tag>
        <Tag variant="error">Error</Tag>
        <Tag variant="info">Info</Tag>
        <Tag variant="purple">Purple</Tag>
        <Tag variant="outline">Outline</Tag>
      </DemoSection>

      <DemoSection title="Sizes" code={`<Tag size="sm">Small</Tag>\n<Tag>Medium</Tag>\n<Tag size="lg">Large</Tag>`}>
        <Tag size="sm">Small</Tag>
        <Tag>Medium</Tag>
        <Tag size="lg">Large</Tag>
      </DemoSection>

      <DemoSection title="Removable" code={`<Tag variant="primary" removable>\n  React\n  <Tag.Remove onClick={remove} />\n</Tag>`}>
        <Tag variant="primary" removable>React<Tag.Remove /></Tag>
        <Tag variant="success" removable>TypeScript<Tag.Remove /></Tag>
        <Tag variant="purple" removable>Design System<Tag.Remove /></Tag>
      </DemoSection>
    </>
  );
}
