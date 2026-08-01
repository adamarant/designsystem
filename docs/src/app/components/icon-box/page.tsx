export default function IconBoxPage() {
  return (
    <>
      <div className="demo-page-header">
        <h1>Icon Box</h1>
        <p>Square, centred container for an icon. Non-interactive counterpart of icon-btn.</p>
      </div>

      <section className="demo-section">
        <h2 className="demo-section__title">Default (40px)</h2>
        <div className="demo-preview" dangerouslySetInnerHTML={{ __html: `<div class="ds-icon-box"><svg width="20" height="20"></svg></div>` }} />
        <details className="demo-code">
          <summary>View Code</summary>
          <pre><code dangerouslySetInnerHTML={{ __html: `&lt;div class=&quot;ds-icon-box&quot;&gt;&lt;svg width=&quot;20&quot; height=&quot;20&quot;&gt;&lt;/svg&gt;&lt;/div&gt;` }} /></pre>
        </details>
      </section>

      <section className="demo-section">
        <h2 className="demo-section__title">Large, accent fill</h2>
        <div className="demo-preview" dangerouslySetInnerHTML={{ __html: `<div class="ds-icon-box ds-icon-box--lg ds-bg-accent-blue-subtle ds-text-accent-blue"><svg width="20" height="20"></svg></div>` }} />
        <details className="demo-code">
          <summary>View Code</summary>
          <pre><code dangerouslySetInnerHTML={{ __html: `&lt;div class=&quot;ds-icon-box ds-icon-box--lg ds-bg-accent-blue-subtle ds-text-accent-blue&quot;&gt;&lt;svg width=&quot;20&quot; height=&quot;20&quot;&gt;&lt;/svg&gt;&lt;/div&gt;` }} /></pre>
        </details>
      </section>

      <section className="demo-section">
        <h2 className="demo-section__title">Round</h2>
        <div className="demo-preview" dangerouslySetInnerHTML={{ __html: `<div class="ds-icon-box ds-icon-box--round"><svg width="20" height="20"></svg></div>` }} />
        <details className="demo-code">
          <summary>View Code</summary>
          <pre><code dangerouslySetInnerHTML={{ __html: `&lt;div class=&quot;ds-icon-box ds-icon-box--round&quot;&gt;&lt;svg width=&quot;20&quot; height=&quot;20&quot;&gt;&lt;/svg&gt;&lt;/div&gt;` }} /></pre>
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
                <td><code>.ds-icon-box</code></td>
                <td>Base</td>
              </tr>
              <tr>
                <td><code>--sm</code></td>
                <td>Variant</td>
              </tr>
              <tr>
                <td><code>--lg</code></td>
                <td>Variant</td>
              </tr>
              <tr>
                <td><code>--xl</code></td>
                <td>Variant</td>
              </tr>
              <tr>
                <td><code>--round</code></td>
                <td>Variant</td>
              </tr>
              <tr>
                <td><code>--plain</code></td>
                <td>Variant</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
