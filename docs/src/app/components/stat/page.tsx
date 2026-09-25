"use client";

import { Card, CardBody, Stat } from "@adamarant/ds-react";
import { DemoSection } from "@/components/DemoSection";

export default function StatPage() {
  return (
    <>
      <div className="demo-page-header">
        <h1>Stat</h1>
        <p>
          A metric: label, value, detail, optional icon. A content block, not a box — put it in a
          Card and it inherits every card modifier.
        </p>
      </div>

      <DemoSection
        title="In a card"
        description="The card owns the box, and Stat only arranges the metric inside it. That is the whole point of the split: the block inherits every card modifier, and the container query that restacks a card when it narrows."
        code={`<Card className="ds-w-full">\n  <CardBody>\n    <Stat label="Total revenue" value="$45,231" detail="+12.5% from last month" />\n  </CardBody>\n</Card>`}
      >
        <Card className="ds-w-full">
            <CardBody>
              <Stat label="Total revenue" value="$45,231" detail="+12.5% from last month" />
            </CardBody>
        </Card>
      </DemoSection>

      <DemoSection
        title="Inheriting the card"
        description="Modifiers a stat card never had: hover for a metric that links somewhere, elevated on a dashboard."
        code={`<Card variant="hover" className="ds-w-full"><CardBody>…</CardBody></Card>\n<Card variant="elevated" className="ds-w-full"><CardBody>…</CardBody></Card>`}
      >
        <Card variant="hover" className="ds-w-full">
            <CardBody>
              <Stat icon="★" label="Leads" value="42" detail="7 this week" />
            </CardBody>
        </Card>
        <Card variant="elevated" className="ds-w-full">
            <CardBody>
              <Stat label="Uptime" value="99.98%" detail="30 days" />
            </CardBody>
        </Card>
      </DemoSection>

      <DemoSection
        title="Without a card"
        description="It does not need one. The value class alone (ds-stat-number) has four times the adoption of the whole old component, because people take the number and arrange the rest themselves."
        code={`<Stat label="Active now" value="1,204" />`}
      >
        <Stat label="Active now" value="1,204" />
      </DemoSection>

      <DemoSection
        title="A row of them"
        description="The value follows the surface: display face on web, body face on product, where the weight steps up too. Flip the header's surface control to see it."
        code={`<Card className="ds-w-full"><CardBody><Stat … /></CardBody></Card> × 3`}
      >
        <Card className="ds-w-full">
            <CardBody>
              <Stat label="Properties" value="128" />
            </CardBody>
        </Card>
        <Card className="ds-w-full">
            <CardBody>
              <Stat label="Leads" value="42" />
            </CardBody>
        </Card>
        <Card className="ds-w-full">
            <CardBody>
              <Stat label="Closed" value="17" detail="this quarter" />
            </CardBody>
        </Card>
      </DemoSection>
    </>
  );
}
