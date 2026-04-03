import { Badge } from "@digiko-npm/ds-react";
import { DemoSection } from "@/components/DemoSection";

export default function BadgePage() {
  return (
    <>
      <div className="demo-page-header">
        <h1>Badge</h1>
        <p>Pill shape, border + subtle bg, clean and refined.</p>
      </div>

      <DemoSection title="Variants" code={`<Badge>Default</Badge>
<Badge variant="primary">Primary</Badge>
<Badge variant="success">Success</Badge>
<Badge variant="warning">Warning</Badge>
<Badge variant="error">Error</Badge>
<Badge variant="info">Info</Badge>
<Badge variant="purple">Purple</Badge>
<Badge variant="outline">Outline</Badge>`}>
        <Badge>Default</Badge>
        <Badge variant="primary">Primary</Badge>
        <Badge variant="success">Success</Badge>
        <Badge variant="warning">Warning</Badge>
        <Badge variant="error">Error</Badge>
        <Badge variant="info">Info</Badge>
        <Badge variant="purple">Purple</Badge>
        <Badge variant="outline">Outline</Badge>
      </DemoSection>

      <DemoSection title="Modifiers" code={`<Badge variant="success" dot>Online</Badge>
<Badge variant="error" dot>Offline</Badge>
<Badge variant="primary" upper>New</Badge>
<Badge variant="purple" upper>Beta</Badge>`}>
        <Badge variant="success" dot>Online</Badge>
        <Badge variant="error" dot>Offline</Badge>
        <Badge variant="primary" upper>New</Badge>
        <Badge variant="purple" upper>Beta</Badge>
      </DemoSection>
    </>
  );
}
