import { Card, Button } from "@digiko-npm/ds-react";
import { DemoSection } from "@/components/DemoSection";

export default function CardPage() {
  return (
    <>
      <div className="demo-page-header">
        <h1>Card</h1>
        <p>Surface + border, hover with shadow lift, rounded-xl. Compound component with dot notation.</p>
      </div>

      <DemoSection title="Basic" code={`<Card>
  <Card.Header>
    <Card.Title>Project Alpha</Card.Title>
    <Card.Description>A short description</Card.Description>
  </Card.Header>
  <Card.Body>Card content goes here.</Card.Body>
  <Card.Footer>
    <Button variant="ghost" size="sm">Cancel</Button>
    <Button size="sm">Save</Button>
  </Card.Footer>
</Card>`}>
        <Card className="ds-w-full">
          <Card.Header>
            <Card.Title>Project Alpha</Card.Title>
            <Card.Description>A short description</Card.Description>
          </Card.Header>
          <Card.Body>Card content goes here.</Card.Body>
          <Card.Footer>
            <Button variant="ghost" size="sm">Cancel</Button>
            <Button size="sm">Save</Button>
          </Card.Footer>
        </Card>
      </DemoSection>

      <DemoSection title="Variants" code={`<Card variant="interactive">...</Card>
<Card variant="elevated">...</Card>
<Card variant="hover">...</Card>`}>
        <Card variant="interactive">
          <Card.Body>Interactive (hover lift)</Card.Body>
        </Card>
        <Card variant="elevated">
          <Card.Body>Elevated (shadow)</Card.Body>
        </Card>
        <Card variant="hover">
          <Card.Body>Hover (border highlight)</Card.Body>
        </Card>
      </DemoSection>

      <DemoSection title="Compact & Flush" code={`<Card compact>...</Card>
<Card flush>...</Card>`}>
        <Card compact>
          <Card.Header><Card.Title>Compact</Card.Title></Card.Header>
          <Card.Body>Reduced padding</Card.Body>
        </Card>
        <Card flush>
          <Card.Header><Card.Title>Flush</Card.Title></Card.Header>
          <Card.Body>No internal dividers</Card.Body>
          <Card.Footer><Button size="sm">Action</Button></Card.Footer>
        </Card>
      </DemoSection>
    </>
  );
}
