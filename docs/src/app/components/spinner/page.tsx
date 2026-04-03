import { Spinner } from "@digiko-npm/ds-react";
import { DemoSection } from "@/components/DemoSection";

export default function SpinnerPage() {
  return (
    <>
      <div className="demo-page-header">
        <h1>Spinner</h1>
        <p>CSS-only loading spinner using border animation.</p>
      </div>

      <DemoSection title="Sizes" code={`<Spinner size="sm" />
<Spinner size="md" />
<Spinner />
<Spinner size="lg" />`}>
        <Spinner size="sm" />
        <Spinner size="md" />
        <Spinner />
        <Spinner size="lg" />
      </DemoSection>

      <DemoSection title="Variants" code={`<Spinner />
<Spinner variant="muted" />
<Spinner variant="light" />`}>
        <Spinner />
        <div style={{ background: "var(--ds-color-inverted)", padding: "var(--ds-space-3)", borderRadius: "var(--ds-radius-md)" }}>
          <Spinner variant="muted" />
        </div>
        <div style={{ background: "var(--ds-color-interactive)", padding: "var(--ds-space-3)", borderRadius: "var(--ds-radius-md)" }}>
          <Spinner variant="light" />
        </div>
      </DemoSection>
    </>
  );
}
