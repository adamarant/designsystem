export default function IconBtnPage() {
  return (
    <>
      <div className="demo-page-header">
        <h1>Icon Button</h1>
        <p>Standalone icon button for actions, toolbars, and table rows.</p>
      </div>

      <section className="demo-section">
        <h2 className="demo-section__title">Sizes</h2>
        <div className="demo-preview" dangerouslySetInnerHTML={{ __html: `<div class="ds-flex ds-items-center ds-gap-2">
  <button class="ds-icon-btn ds-icon-btn--xs">✕</button>
  <button class="ds-icon-btn ds-icon-btn--sm">✕</button>
  <button class="ds-icon-btn">✕</button>
  <button class="ds-icon-btn ds-icon-btn--lg">✕</button>
</div>` }} />
        <details className="demo-code">
          <summary>View Code</summary>
          <pre><code dangerouslySetInnerHTML={{ __html: `&lt;div class=&quot;ds-flex ds-items-center ds-gap-2&quot;&gt;
  &lt;button class=&quot;ds-icon-btn ds-icon-btn--xs&quot;&gt;✕&lt;/button&gt;
  &lt;button class=&quot;ds-icon-btn ds-icon-btn--sm&quot;&gt;✕&lt;/button&gt;
  &lt;button class=&quot;ds-icon-btn&quot;&gt;✕&lt;/button&gt;
  &lt;button class=&quot;ds-icon-btn ds-icon-btn--lg&quot;&gt;✕&lt;/button&gt;
&lt;/div&gt;` }} /></pre>
        </details>
      </section>

      <section className="demo-section">
        <h2 className="demo-section__title">Variants</h2>
        <div className="demo-preview" dangerouslySetInnerHTML={{ __html: `<div class="ds-flex ds-items-center ds-gap-2">
  <button class="ds-icon-btn">Default</button>
  <button class="ds-icon-btn ds-icon-btn--danger">Danger</button>
  <button class="ds-icon-btn ds-icon-btn--ghost">Ghost</button>
</div>` }} />
        <details className="demo-code">
          <summary>View Code</summary>
          <pre><code dangerouslySetInnerHTML={{ __html: `&lt;div class=&quot;ds-flex ds-items-center ds-gap-2&quot;&gt;
  &lt;button class=&quot;ds-icon-btn&quot;&gt;Default&lt;/button&gt;
  &lt;button class=&quot;ds-icon-btn ds-icon-btn--danger&quot;&gt;Danger&lt;/button&gt;
  &lt;button class=&quot;ds-icon-btn ds-icon-btn--ghost&quot;&gt;Ghost&lt;/button&gt;
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
                <td><code>.ds-icon-btn</code></td>
                <td>Base</td>
              </tr>
              <tr>
                <td><code>--danger</code></td>
                <td>Variant</td>
              </tr>
              <tr>
                <td><code>--ghost</code></td>
                <td>Variant</td>
              </tr>
              <tr>
                <td><code>--xs</code></td>
                <td>Size</td>
              </tr>
              <tr>
                <td><code>--sm</code></td>
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
