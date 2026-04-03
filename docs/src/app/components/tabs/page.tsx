"use client";

import { useState } from "react";
import { Tabs } from "@digiko-npm/ds-react";
import { DemoSection, DemoSectionCol } from "@/components/DemoSection";

export default function TabsPage() {
  const [tab1, setTab1] = useState("overview");
  const [tab2, setTab2] = useState("a");
  const [tab3, setTab3] = useState("a");

  return (
    <>
      <div className="demo-page-header">
        <h1>Tabs</h1>
        <p>Horizontal/vertical tab navigation with pill, small, and full-width variants.</p>
      </div>

      <DemoSectionCol title="Default (underline)" code={`<Tabs value={tab} onValueChange={setTab}>
  <Tabs.List aria-label="Sections">
    <Tabs.Tab value="overview">Overview</Tabs.Tab>
    <Tabs.Tab value="tasks">Tasks</Tabs.Tab>
    <Tabs.Tab value="settings">Settings</Tabs.Tab>
  </Tabs.List>
  <Tabs.Panel value="overview">Overview content</Tabs.Panel>
  <Tabs.Panel value="tasks">Tasks content</Tabs.Panel>
</Tabs>`}>
        <Tabs value={tab1} onValueChange={setTab1}>
          <Tabs.List aria-label="Project sections">
            <Tabs.Tab value="overview">Overview</Tabs.Tab>
            <Tabs.Tab value="tasks">Tasks</Tabs.Tab>
            <Tabs.Tab value="settings" disabled>Settings</Tabs.Tab>
          </Tabs.List>
          <Tabs.Panel value="overview">Overview content here.</Tabs.Panel>
          <Tabs.Panel value="tasks">Tasks content here.</Tabs.Panel>
        </Tabs>
      </DemoSectionCol>

      <DemoSectionCol title="Pills" code={`<Tabs.List variant="pills">...</Tabs.List>`}>
        <Tabs value={tab2} onValueChange={setTab2}>
          <Tabs.List variant="pills" aria-label="Options">
            <Tabs.Tab value="a">Alpha</Tabs.Tab>
            <Tabs.Tab value="b">Beta</Tabs.Tab>
            <Tabs.Tab value="c">Gamma</Tabs.Tab>
          </Tabs.List>
          <Tabs.Panel value="a">Alpha panel</Tabs.Panel>
          <Tabs.Panel value="b">Beta panel</Tabs.Panel>
          <Tabs.Panel value="c">Gamma panel</Tabs.Panel>
        </Tabs>
      </DemoSectionCol>

      <DemoSectionCol title="Full Width" code={`<Tabs.List full>...</Tabs.List>`}>
        <Tabs value={tab3} onValueChange={setTab3}>
          <Tabs.List full aria-label="Stretch">
            <Tabs.Tab value="a">Left</Tabs.Tab>
            <Tabs.Tab value="b">Center</Tabs.Tab>
            <Tabs.Tab value="c">Right</Tabs.Tab>
          </Tabs.List>
          <Tabs.Panel value="a">Left panel</Tabs.Panel>
          <Tabs.Panel value="b">Center panel</Tabs.Panel>
          <Tabs.Panel value="c">Right panel</Tabs.Panel>
        </Tabs>
      </DemoSectionCol>
    </>
  );
}
