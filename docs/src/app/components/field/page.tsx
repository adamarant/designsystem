export default function FieldPage() {
  return (
    <>
      <div className="demo-page-header">
        <h1>Field</h1>
        <p>Unified wrapper for form fields — label + input slot + hint + error.</p>
      </div>

      <section className="demo-section">
        <h2 className="demo-section__title">Default Field</h2>
        <div className="demo-preview" dangerouslySetInnerHTML={{ __html: `<div class="ds-field">
  <label class="ds-field__label">Email</label>
  <input class="ds-input" type="email" placeholder="you@example.com" />
  <span class="ds-field__hint">We'll never share your email.</span>
</div>` }} />
        <details className="demo-code">
          <summary>View Code</summary>
          <pre><code dangerouslySetInnerHTML={{ __html: `&lt;div class=&quot;ds-field&quot;&gt;
  &lt;label class=&quot;ds-field__label&quot;&gt;Email&lt;/label&gt;
  &lt;input class=&quot;ds-input&quot; type=&quot;email&quot; placeholder=&quot;you@example.com&quot; /&gt;
  &lt;span class=&quot;ds-field__hint&quot;&gt;We'll never share your email.&lt;/span&gt;
&lt;/div&gt;` }} /></pre>
        </details>
      </section>

      <section className="demo-section">
        <h2 className="demo-section__title">Required with Error</h2>
        <div className="demo-preview" dangerouslySetInnerHTML={{ __html: `<div class="ds-field ds-field--required">
  <label class="ds-field__label">Password</label>
  <input class="ds-input ds-input--error" type="password" />
  <span class="ds-field__error">Password must be at least 8 characters.</span>
</div>` }} />
        <details className="demo-code">
          <summary>View Code</summary>
          <pre><code dangerouslySetInnerHTML={{ __html: `&lt;div class=&quot;ds-field ds-field--required&quot;&gt;
  &lt;label class=&quot;ds-field__label&quot;&gt;Password&lt;/label&gt;
  &lt;input class=&quot;ds-input ds-input--error&quot; type=&quot;password&quot; /&gt;
  &lt;span class=&quot;ds-field__error&quot;&gt;Password must be at least 8 characters.&lt;/span&gt;
&lt;/div&gt;` }} /></pre>
        </details>
      </section>

      <section className="demo-section">
        <h2 className="demo-section__title">Horizontal Layout</h2>
        <div className="demo-preview" dangerouslySetInnerHTML={{ __html: `<div class="ds-field ds-field--horizontal">
  <label class="ds-field__label">Username</label>
  <input class="ds-input" type="text" />
</div>` }} />
        <details className="demo-code">
          <summary>View Code</summary>
          <pre><code dangerouslySetInnerHTML={{ __html: `&lt;div class=&quot;ds-field ds-field--horizontal&quot;&gt;
  &lt;label class=&quot;ds-field__label&quot;&gt;Username&lt;/label&gt;
  &lt;input class=&quot;ds-input&quot; type=&quot;text&quot; /&gt;
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
                <td><code>.ds-field</code></td>
                <td>Base</td>
              </tr>
              <tr>
                <td><code>__label</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>__hint</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>__error</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>--required</code></td>
                <td>Modifier</td>
              </tr>
              <tr>
                <td><code>--horizontal</code></td>
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
