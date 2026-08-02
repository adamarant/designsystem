"use client";

import { useState } from "react";
import { Alert, Button, IconInfo, IconSuccess, IconWarning, IconError } from "@adamarant/ds-react";
import { DemoSection, DemoSectionCol } from "@/components/DemoSection";

export default function AlertPage() {
  const [visible, setVisible] = useState(true);

  return (
    <>
      <div className="demo-page-header">
        <h1>Alert</h1>
        <p>
          A message that stays as long as it is true. The colour lives on the icon and in the fill;
          the actions it is asking for live inside it.
        </p>
      </div>

      <DemoSectionCol title="Variants" code={`<Alert variant="info">\n  <Alert.Content><Alert.Title>Info</Alert.Title></Alert.Content>\n</Alert>`}>
        <Alert><Alert.Content><Alert.Title>Default alert</Alert.Title></Alert.Content></Alert>
        <Alert variant="info"><Alert.Icon><IconInfo /></Alert.Icon><Alert.Content><Alert.Title>Info</Alert.Title></Alert.Content></Alert>
        <Alert variant="success"><Alert.Icon><IconSuccess /></Alert.Icon><Alert.Content><Alert.Title>Success</Alert.Title></Alert.Content></Alert>
        <Alert variant="warning"><Alert.Icon><IconWarning /></Alert.Icon><Alert.Content><Alert.Title>Warning</Alert.Title></Alert.Content></Alert>
        <Alert variant="error"><Alert.Icon><IconError /></Alert.Icon><Alert.Content><Alert.Title>Error</Alert.Title></Alert.Content></Alert>
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
      <DemoSectionCol
        title="Actions"
        description="An alert that asks for something can carry the button. Real Buttons go inside — the alert arranges them, it does not restyle them. Stacked is the default: it survives a long description on a narrow screen."
        code={`<Alert variant="warning">\n  <Alert.Icon><IconWarning /></Alert.Icon>\n  <Alert.Content>\n    <Alert.Title>Your session expires in 5 minutes</Alert.Title>\n    <Alert.Description>Renew it to avoid losing unsaved work.</Alert.Description>\n    <Alert.Actions>\n      <Button size="sm">Renew</Button>\n      <Button size="sm" variant="outline">Dismiss</Button>\n    </Alert.Actions>\n  </Alert.Content>\n</Alert>`}
      >
        <Alert variant="warning">
          <Alert.Icon><IconWarning /></Alert.Icon>
          <Alert.Content>
            <Alert.Title>Your session expires in 5 minutes</Alert.Title>
            <Alert.Description>Renew it to avoid losing unsaved work.</Alert.Description>
            <Alert.Actions>
              <Button size="sm">Renew</Button>
              <Button size="sm" variant="outline">Dismiss</Button>
            </Alert.Actions>
          </Alert.Content>
        </Alert>
      </DemoSectionCol>

      <DemoSectionCol
        title="Actions inline"
        description="For a short message with one action, the button sits on the trailing edge. Render Actions as a sibling of Content, not inside it. Below md it falls back to stacked — a button beside two lines of text on a phone leaves neither of them room."
        code={`<Alert variant="success" actionsInline>\n  <Alert.Icon><IconSuccess /></Alert.Icon>\n  <Alert.Content>…</Alert.Content>\n  <Alert.Actions>\n    <Button size="sm">View</Button>\n  </Alert.Actions>\n  <Alert.Close />\n</Alert>`}
      >
        <Alert variant="success" actionsInline>
          <Alert.Icon><IconSuccess /></Alert.Icon>
          <Alert.Content>
            <Alert.Title>Saved</Alert.Title>
            <Alert.Description>Your changes are live.</Alert.Description>
          </Alert.Content>
          <Alert.Actions>
            <Button size="sm">View</Button>
          </Alert.Actions>
          <Alert.Close />
        </Alert>
      </DemoSectionCol>
    </>
  );
}
