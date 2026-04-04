"use client";

import { Tooltip, Button } from "@digiko-npm/ds-react";
import { DemoSection } from "@/components/DemoSection";

export default function TooltipPage() {
  return (
    <>
      <div className="demo-page-header">
        <h1>Tooltip</h1>
        <p>Inverted bubble with arrow. Shows on hover + focus.</p>
      </div>

      <DemoSection title="Placements" code={`<Tooltip placement="top">\n  <Button variant="outline">Top</Button>\n  <Tooltip.Content>Tooltip text</Tooltip.Content>\n</Tooltip>`}>
        <Tooltip placement="top">
          <Button variant="outline" size="sm">Top</Button>
          <Tooltip.Content>Tooltip on top</Tooltip.Content>
        </Tooltip>
        <Tooltip placement="bottom">
          <Button variant="outline" size="sm">Bottom</Button>
          <Tooltip.Content>Tooltip on bottom</Tooltip.Content>
        </Tooltip>
        <Tooltip placement="left">
          <Button variant="outline" size="sm">Left</Button>
          <Tooltip.Content>Tooltip on left</Tooltip.Content>
        </Tooltip>
        <Tooltip placement="right">
          <Button variant="outline" size="sm">Right</Button>
          <Tooltip.Content>Tooltip on right</Tooltip.Content>
        </Tooltip>
      </DemoSection>

      <DemoSection title="With Delay" code={`<Tooltip delay>\n  <Button>Hover me</Button>\n  <Tooltip.Content>Delayed</Tooltip.Content>\n</Tooltip>`}>
        <Tooltip delay>
          <Button variant="secondary">Hover me (200ms delay)</Button>
          <Tooltip.Content>This tooltip has a delay</Tooltip.Content>
        </Tooltip>
      </DemoSection>
    </>
  );
}
