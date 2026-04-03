export default function CollapsiblePage() {
  return (
    <>
      <div className="demo-page-header">
        <h1>Collapsible</h1>
        <p>Single collapsible section — a standalone, simplified accordion item.</p>
      </div>

      <section className="demo-section">
        <h2 className="demo-section__title">Default Collapsible</h2>
        <div className="demo-preview" dangerouslySetInnerHTML={{ __html: `<div class="ds-collapsible">
  <button class="ds-collapsible__trigger">
    More details
    <span class="ds-collapsible__icon"></span>
  </button>
  <div class="ds-collapsible__content">
    <div class="ds-collapsible__body">Hidden content revealed on toggle.</div>
  </div>
</div>` }} />
        <details className="demo-code">
          <summary>View Code</summary>
          <pre><code dangerouslySetInnerHTML={{ __html: `&lt;div class=&quot;ds-collapsible&quot;&gt;
  &lt;button class=&quot;ds-collapsible__trigger&quot;&gt;
    More details
    &lt;span class=&quot;ds-collapsible__icon&quot;&gt;&lt;/span&gt;
  &lt;/button&gt;
  &lt;div class=&quot;ds-collapsible__content&quot;&gt;
    &lt;div class=&quot;ds-collapsible__body&quot;&gt;Hidden content revealed on toggle.&lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;` }} /></pre>
        </details>
      </section>

      <section className="demo-section">
        <h2 className="demo-section__title">Open State</h2>
        <div className="demo-preview" dangerouslySetInnerHTML={{ __html: `<div class="ds-collapsible ds-collapsible--open">
  <button class="ds-collapsible__trigger">
    Show less
    <span class="ds-collapsible__icon"></span>
  </button>
  <div class="ds-collapsible__content">
    <div class="ds-collapsible__body">This content is visible because the collapsible is open.</div>
  </div>
</div>` }} />
        <details className="demo-code">
          <summary>View Code</summary>
          <pre><code dangerouslySetInnerHTML={{ __html: `&lt;div class=&quot;ds-collapsible ds-collapsible--open&quot;&gt;
  &lt;button class=&quot;ds-collapsible__trigger&quot;&gt;
    Show less
    &lt;span class=&quot;ds-collapsible__icon&quot;&gt;&lt;/span&gt;
  &lt;/button&gt;
  &lt;div class=&quot;ds-collapsible__content&quot;&gt;
    &lt;div class=&quot;ds-collapsible__body&quot;&gt;This content is visible because the collapsible is open.&lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;` }} /></pre>
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
                <td><code>.ds-collapsible</code></td>
                <td>Base</td>
              </tr>
              <tr>
                <td><code>__trigger</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>__icon</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>__content</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>__body</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>--flush</code></td>
                <td>Variant</td>
              </tr>
              <tr>
                <td><code>--ghost</code></td>
                <td>Variant</td>
              </tr>
              <tr>
                <td><code>--open</code></td>
                <td>Modifier</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
