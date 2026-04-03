"use client";

import { useState } from "react";
import { Alert } from "@digiko-npm/ds-react";
import { DemoSection } from "@/components/DemoSection";

export default function AlertPage() {
  const [visible, setVisible] = useState(true);

  return (
    <>
      <div className="demo-page-header">
        <h1>Alert</h1>
        <p>Contextual feedback banners with semantic variants and dismissibility.</p>
      </div>

      <DemoSection title="Variants" code={`<Alert variant="info">
  <Alert.Content><Alert.Title>Info</Alert.Title></Alert.Content>
</Alert>`}>
        <div className="ds-w-full ds-space-y-3">
          <Alert>
            <Alert.Content><Alert.Title>Default alert</Alert.Title></Alert.Content>
          </Alert>
          <Alert variant="info">
            <Alert.Content><Alert.Title>Info — something to know</Alert.Title></Alert.Content>
          </Alert>
          <Alert variant="success">
            <Alert.Content><Alert.Title>Success — operation completed</Alert.Title></Alert.Content>
          </Alert>
          <Alert variant="warning">
            <Alert.Content><Alert.Title>Warning — be careful</Alert.Title></Alert.Content>
          </Alert>
          <Alert variant="error">
            <Alert.Content><Alert.Title>Error — something went wrong</Alert.Title></Alert.Content>
          </Alert>
        </div>
      </DemoSection>

      <DemoSection title="With description and close" code={`<Alert variant="info">
  <Alert.Content>
    <Alert.Title>Update available</Alert.Title>
    <Alert.Description>A new version is ready to install.</Alert.Description>
  </Alert.Content>
  <Alert.Close onClick={dismiss} />
</Alert>`}>
        <div className="ds-w-full">
          {visible ? (
            <Alert variant="info">
              <Alert.Content>
                <Alert.Title>Update available</Alert.Title>
                <Alert.Description>A new version is ready to install.</Alert.Description>
              </Alert.Content>
              <Alert.Close onClick={() => setVisible(false)} />
            </Alert>
          ) : (
            <button className="ds-btn ds-btn--ghost ds-btn--sm" onClick={() => setVisible(true)}>Show again</button>
          )}
        </div>
      </DemoSection>
    </>
  );
}
