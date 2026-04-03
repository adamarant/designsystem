export default function SpinnerPage() {
  return (
    <>
      <div className="demo-page-header">
        <h1>Spinner</h1>
        <p>CSS-only loading spinner with size and color variants.</p>
      </div>

      <section className="demo-section">
        <h2 className="demo-section__title">Sizes</h2>
        <div className="demo-preview" dangerouslySetInnerHTML={{ __html: `<div class="ds-flex ds-items-center ds-gap-4">
  <span class="ds-spinner ds-spinner--sm"></span>
  <span class="ds-spinner ds-spinner--md"></span>
  <span class="ds-spinner"></span>
  <span class="ds-spinner ds-spinner--lg"></span>
</div>` }} />
        <details className="demo-code">
          <summary>View React Code</summary>
          <pre><code dangerouslySetInnerHTML={{ __html: `&lt;Spinner size=&quot;sm&quot; /&gt;
&lt;Spinner size=&quot;md&quot; /&gt;
&lt;Spinner /&gt;
&lt;Spinner size=&quot;lg&quot; /&gt;` }} /></pre>
        </details>
      </section>

      <section className="demo-section">
        <h2 className="demo-section__title">Variants</h2>
        <div className="demo-preview" dangerouslySetInnerHTML={{ __html: `<div class="ds-flex ds-items-center ds-gap-4">
  <span class="ds-spinner"></span>
  <span style="background:var(--ds-color-inverted);padding:1rem;border-radius:var(--ds-radius-lg)">
    <span class="ds-spinner ds-spinner--muted"></span>
  </span>
  <span style="background:var(--ds-color-interactive);padding:1rem;border-radius:var(--ds-radius-lg)">
    <span class="ds-spinner ds-spinner--light"></span>
  </span>
</div>` }} />
        <details className="demo-code">
          <summary>View React Code</summary>
          <pre><code dangerouslySetInnerHTML={{ __html: `&lt;Spinner /&gt;
&lt;Spinner variant=&quot;muted&quot; /&gt;
&lt;Spinner variant=&quot;light&quot; /&gt;` }} /></pre>
        </details>
      </section>

      <section className="demo-section">
        <h2 className="demo-section__title">API Reference</h2>
        <div className="ds-table-wrapper">
          <table className="ds-table ds-table--compact">
            <thead>
              <tr>
                <th>Class</th>
                <th>Type</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>.ds-spinner</code></td>
                <td>Base</td>
              </tr>
              <tr>
                <td><code>--muted</code></td>
                <td>Variant</td>
              </tr>
              <tr>
                <td><code>--light</code></td>
                <td>Variant</td>
              </tr>
              <tr>
                <td><code>--sm</code></td>
                <td>Size</td>
              </tr>
              <tr>
                <td><code>--md</code></td>
                <td>Size</td>
              </tr>
              <tr>
                <td><code>--lg</code></td>
                <td>Size</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
