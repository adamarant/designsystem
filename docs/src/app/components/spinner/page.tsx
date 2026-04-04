"use client";

import { Spinner } from "@digiko-npm/ds-react";
import { DemoSection } from "@/components/DemoSection";

export default function SpinnerPage() {
  return (
    <>
      <div className="demo-page-header">
        <h1>Spinner</h1>
        <p>CSS-only loading spinner using border animation.</p>
      </div>

      <DemoSection title="Sizes" code={`<Spinner size="sm" />\n<Spinner size="md" />\n<Spinner />\n<Spinner size="lg" />`}>
        <Spinner size="sm" />
        <Spinner size="md" />
        <Spinner />
        <Spinner size="lg" />
      </DemoSection>

      <DemoSection title="Variants" code={`<Spinner />\n<Spinner variant="muted" />\n<Spinner variant="light" />`}>
        <Spinner />
        <Spinner variant="muted" />
        <Spinner variant="light" />
      </DemoSection>
    </>
  );
}
