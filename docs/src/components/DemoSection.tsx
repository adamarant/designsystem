/* A demo section: label column, then the demo and its code in the content
   column. `description` is optional prose introducing the demo — it is set
   in `.ds-copy`, the reading role, because that is what it is. The chrome
   class beside it only places it (see demo.css). */

type DemoSectionProps = {
  title: string;
  code: string;
  description?: React.ReactNode;
  children: React.ReactNode;
};

function Description({ children }: { children?: React.ReactNode }) {
  if (!children) return null;
  return <p className="ds-copy demo-section__description">{children}</p>;
}

export function DemoSection({
  title,
  code,
  description,
  children,
}: DemoSectionProps) {
  return (
    <section className="demo-section">
      <h2 className="demo-section__title">{title}</h2>
      <Description>{description}</Description>
      <div className="demo-preview">{children}</div>
      <details className="demo-code">
        <summary>View Code</summary>
        <pre><code>{code}</code></pre>
      </details>
    </section>
  );
}

export function DemoSectionCol({
  title,
  code,
  description,
  children,
}: DemoSectionProps) {
  return (
    <section className="demo-section">
      <h2 className="demo-section__title">{title}</h2>
      <Description>{description}</Description>
      <div className="demo-preview demo-preview--col">{children}</div>
      <details className="demo-code">
        <summary>View Code</summary>
        <pre><code>{code}</code></pre>
      </details>
    </section>
  );
}
