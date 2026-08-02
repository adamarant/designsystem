"use client";

import { Badge } from "@adamarant/ds-react";
import { DemoSection } from "@/components/DemoSection";

export default function BadgePage() {
  return (
    <>
      <div className="demo-page-header">
        <h1>Badge</h1>
        <p>
          The one small labelled pill. Static by default; interactive when it is a filter or a
          toggle. It absorbed Tag and Chip, both deprecated.
        </p>
      </div>

      <DemoSection title="Variants" code={`<Badge>Default</Badge>\n<Badge variant="primary">Primary</Badge>\n<Badge variant="success">Success</Badge>\n<Badge variant="warning">Warning</Badge>\n<Badge variant="error">Error</Badge>\n<Badge variant="info">Info</Badge>\n<Badge variant="purple">Purple</Badge>\n<Badge variant="outline">Outline</Badge>`}>
        <Badge>Default</Badge>
        <Badge variant="primary">Primary</Badge>
        <Badge variant="success">Success</Badge>
        <Badge variant="warning">Warning</Badge>
        <Badge variant="error">Error</Badge>
        <Badge variant="info">Info</Badge>
        <Badge variant="purple">Purple</Badge>
        <Badge variant="outline">Outline</Badge>
      </DemoSection>

      <DemoSection title="Modifiers" code={`<Badge variant="success" dot>Online</Badge>\n<Badge variant="error" dot>Offline</Badge>\n<Badge variant="primary" upper>New</Badge>\n<Badge variant="purple" upper>Beta</Badge>`}>
        <Badge variant="success" dot>Online</Badge>
        <Badge variant="error" dot>Offline</Badge>
        <Badge variant="primary" upper>New</Badge>
        <Badge variant="purple" upper>Beta</Badge>
      </DemoSection>

      <DemoSection
        title="Interactive"
        description="A badge that can be clicked is a control: it renders a real button and takes the 24px WCAG target, hover, focus ring and disabled. This replaces Chip."
        code={`<Badge interactive active aria-pressed>Design</Badge>\n<Badge interactive aria-pressed={false}>Engineering</Badge>\n<Badge interactive disabled>Archived</Badge>`}
      >
        <Badge interactive active aria-pressed>
          Design
        </Badge>
        <Badge interactive aria-pressed={false}>
          Engineering
        </Badge>
        <Badge interactive disabled>
          Archived
        </Badge>
      </DemoSection>

      <DemoSection
        title="Selected vs inverted"
        description="Distinct on purpose: active is the state (this one is on), inverted is a look. A brand may render its selected badge inverted, but the two are not the same thing."
        code={`<Badge active>Active</Badge>\n<Badge variant="inverted">Inverted</Badge>`}
      >
        <Badge active>Active</Badge>
        <Badge variant="inverted">Inverted</Badge>
      </DemoSection>

      <DemoSection
        title="Removable"
        description="Badge.Remove is its own button with its own label and focus ring. This replaces Tag."
        code={`<Badge removable>\n  Typography\n  <Badge.Remove aria-label="Remove Typography" />\n</Badge>`}
      >
        <Badge removable>
          Typography
          <Badge.Remove aria-label="Remove Typography" />
        </Badge>
        <Badge removable variant="primary">
          Layout
          <Badge.Remove aria-label="Remove Layout" />
        </Badge>
      </DemoSection>

      <DemoSection
        title="Sizes"
        code={`<Badge size="sm">Small</Badge>\n<Badge>Medium</Badge>\n<Badge size="lg">Large</Badge>`}
      >
        <Badge size="sm">Small</Badge>
        <Badge>Medium</Badge>
        <Badge size="lg">Large</Badge>
      </DemoSection>
    </>
  );
}
