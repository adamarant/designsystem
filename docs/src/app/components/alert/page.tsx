"use client";

import { useState } from "react";
import { Alert, Button } from "@adamarant/ds-react";
import { DemoSection, DemoSectionCol } from "@/components/DemoSection";

export default function AlertPage() {
  const [visible, setVisible] = useState(true);

  return (
    <>
      <div className="demo-page-header">
        <h1>Alert</h1>
        <p>Contextual feedback banners with semantic variants and dismissibility.</p>
      </div>

      <DemoSectionCol title="Variants" code={`<Alert variant="info">\n  <Alert.Content><Alert.Title>Info</Alert.Title></Alert.Content>\n</Alert>`}>
        <Alert><Alert.Content><Alert.Title>Default alert</Alert.Title></Alert.Content></Alert>
        <Alert variant="info"><Alert.Content><Alert.Title>Info</Alert.Title></Alert.Content></Alert>
        <Alert variant="success"><Alert.Content><Alert.Title>Success</Alert.Title></Alert.Content></Alert>
        <Alert variant="warning"><Alert.Content><Alert.Title>Warning</Alert.Title></Alert.Content></Alert>
        <Alert variant="error"><Alert.Content><Alert.Title>Error</Alert.Title></Alert.Content></Alert>
      </DemoSectionCol>

      <DemoSectionCol title="Dismissible" code={`<Alert variant="info">\n  <Alert.Content>\n    <Alert.Title>Update available</Alert.Title>\n    <Alert.Description>A new version is ready.</Alert.Description>\n  </Alert.Content>\n  <Alert.Close onClick={dismiss} />\n</Alert>`}>
        {visible ? (
          <Alert variant="info">
            <Alert.Content>
              <Alert.Title>Update available</Alert.Title>
              <Alert.Description>A new version is ready to install.</Alert.Description>
            </Alert.Content>
            <Alert.Close onClick={() => setVisible(false)}>✕</Alert.Close>
          </Alert>
        ) : (
          <Button variant="ghost" size="sm" onClick={() => setVisible(true)}>Show again</Button>
        )}
      </DemoSectionCol>
    </>
  );
}
