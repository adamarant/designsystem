export default function TogglePage() {
  return (
    <>
      <div className="demo-page-header">
        <h1>Toggle</h1>
        <p>A toggle (switch) control for binary on/off states.</p>
      </div>

      <section className="demo-section">
        <h2 className="demo-section__title">Basic</h2>
        <div className="demo-preview" dangerouslySetInnerHTML={{ __html: `<button class="ds-toggle" role="switch" aria-checked="false"></button>
<button class="ds-toggle" role="switch" aria-checked="true"></button>
<button class="ds-toggle ds-toggle--sm" role="switch" aria-checked="true"></button>` }} />
        <details className="demo-code">
          <summary>View React Code</summary>
          <pre><code dangerouslySetInnerHTML={{ __html: `const [on, setOn] = useState(false);

&lt;Toggle checked={on} onCheckedChange={setOn} /&gt;` }} /></pre>
        </details>
      </section>

      <section className="demo-section">
        <h2 className="demo-section__title">Sizes</h2>
        <div className="demo-preview" dangerouslySetInnerHTML={{ __html: `<label class="ds-toggle-label">
  <button class="ds-toggle" role="switch" aria-checked="true"></button>
  <span class="ds-toggle-label__text">Dark mode</span>
</label>
<label class="ds-toggle-label">
  <button class="ds-toggle" role="switch" aria-checked="false"></button>
  <span class="ds-toggle-label__text">Notifications</span>
</label>` }} />
        <details className="demo-code">
          <summary>View React Code</summary>
          <pre><code dangerouslySetInnerHTML={{ __html: `&lt;Toggle size=&quot;sm&quot; checked={on} onCheckedChange={setOn} /&gt;
&lt;Toggle checked={on} onCheckedChange={setOn} /&gt;
&lt;Toggle size=&quot;lg&quot; checked={on} onCheckedChange={setOn} /&gt;` }} /></pre>
        </details>
      </section>

      <section className="demo-section">
        <h2 className="demo-section__title">With Label</h2>
        <div className="demo-preview" dangerouslySetInnerHTML={{ __html: `<button class="ds-toggle ds-toggle--sm" role="switch" aria-checked="true"></button>
<button class="ds-toggle" role="switch" aria-checked="true"></button>` }} />
        <details className="demo-code">
          <summary>View React Code</summary>
          <pre><code dangerouslySetInnerHTML={{ __html: `&lt;Toggle.Label&gt;
  &lt;Toggle checked={dark} onCheckedChange={setDark} /&gt;
  &lt;Toggle.LabelText&gt;Dark mode&lt;/Toggle.LabelText&gt;
&lt;/Toggle.Label&gt;` }} /></pre>
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
                <td><code>.ds-toggle</code></td>
                <td>Base</td>
              </tr>
              <tr>
                <td><code>.ds-toggle-label</code></td>
                <td>Base</td>
              </tr>
              <tr>
                <td><code>__text</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>--sm</code></td>
                <td>Size</td>
              </tr>
              <tr>
                <td><code>--checked</code></td>
                <td>Modifier</td>
              </tr>
              <tr>
                <td><code>--disabled</code></td>
                <td>Modifier</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
