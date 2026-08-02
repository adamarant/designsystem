"use client";

import { Card, Stat, Badge } from "@adamarant/ds-react";
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
        description="The card owns the box. That is the whole point of the split: ds-stat-card used to re-declare the surface, the border and the radius itself, so it could never inherit a card modifier or the container query that restacks a card when it narrows."
        code={`<Card compact>\n  <Stat label="Total revenue" value="$45,231" detail="+12.5% from last month" />\n</Card>`}
      >
        <Card compact>
          <Stat label="Total revenue" value="$45,231" detail="+12.5% from last month" />
        </Card>
      </DemoSection>

      <DemoSection
        title="Inheriting the card"
        description="Modifiers a stat card never had: hover for a metric that links somewhere, elevated on a dashboard."
        code={`<Card compact hover>…</Card>\n<Card compact elevated>…</Card>`}
      >
        <Card compact hover>
          <Stat icon="★" label="Leads" value="42" detail="7 this week" />
        </Card>
        <Card compact elevated>
          <Stat label="Uptime" value="99.98%" detail="30 days" />
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
        code={`<Card compact><Stat … /></Card> × 3`}
      >
        <Card compact>
          <Stat label="Properties" value="128" />
        </Card>
        <Card compact>
          <Stat label="Leads" value="42" />
        </Card>
        <Card compact>
          <Stat label="Closed" value="17" detail="this quarter" />
        </Card>
      </DemoSection>

      <DemoSection
        title="The old component"
        description="ds-stat-card is deprecated and frozen: it still renders, unchanged, including the two typography faults Stat fixed — the display face on a data screen and a hardcoded size with no lever. Migration map in stat-card.css."
        code={`<div class="ds-stat-card">…</div>  /* deprecated */`}
      >
        <Badge variant="warning">deprecated</Badge>
      </DemoSection>
    </>
  );
}
