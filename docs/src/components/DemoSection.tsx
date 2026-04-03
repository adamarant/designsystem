export function DemoSection({
  title,
  code,
  children,
}: {
  title: string;
  code: string;
  children: React.ReactNode;
}) {
  return (
    <section className="demo-section">
      <h2 className="demo-section__title">{title}</h2>
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
  children,
}: {
  title: string;
  code: string;
  children: React.ReactNode;
}) {
  return (
    <section className="demo-section">
      <h2 className="demo-section__title">{title}</h2>
      <div className="demo-preview demo-preview--col">{children}</div>
      <details className="demo-code">
        <summary>View Code</summary>
        <pre><code>{code}</code></pre>
      </details>
    </section>
  );
}
