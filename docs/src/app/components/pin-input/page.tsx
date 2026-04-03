export default function PinInputPage() {
  return (
    <>
      <div className="demo-page-header">
        <h1>Pin Input</h1>
        <p>One-character-per-field input for OTP codes, PINs, and verification.</p>
      </div>

      <section className="demo-section">
        <h2 className="demo-section__title">Default</h2>
        <div className="demo-preview" dangerouslySetInnerHTML={{ __html: `<div class="ds-pin-input">
  <input class="ds-pin-input__field" maxlength="1" />
  <input class="ds-pin-input__field" maxlength="1" />
  <input class="ds-pin-input__field" maxlength="1" />
  <span class="ds-pin-input__separator">&ndash;</span>
  <input class="ds-pin-input__field" maxlength="1" />
  <input class="ds-pin-input__field" maxlength="1" />
  <input class="ds-pin-input__field" maxlength="1" />
</div>` }} />
        <details className="demo-code">
          <summary>View Code</summary>
          <pre><code dangerouslySetInnerHTML={{ __html: `&lt;div class=&quot;ds-pin-input&quot;&gt;
  &lt;input class=&quot;ds-pin-input__field&quot; maxlength=&quot;1&quot; /&gt;
  &lt;input class=&quot;ds-pin-input__field&quot; maxlength=&quot;1&quot; /&gt;
  &lt;input class=&quot;ds-pin-input__field&quot; maxlength=&quot;1&quot; /&gt;
  &lt;span class=&quot;ds-pin-input__separator&quot;&gt;&amp;ndash;&lt;/span&gt;
  &lt;input class=&quot;ds-pin-input__field&quot; maxlength=&quot;1&quot; /&gt;
  &lt;input class=&quot;ds-pin-input__field&quot; maxlength=&quot;1&quot; /&gt;
  &lt;input class=&quot;ds-pin-input__field&quot; maxlength=&quot;1&quot; /&gt;
&lt;/div&gt;` }} /></pre>
        </details>
      </section>

      <section className="demo-section">
        <h2 className="demo-section__title">Error State</h2>
        <div className="demo-preview" dangerouslySetInnerHTML={{ __html: `<div class="ds-pin-input ds-pin-input--error">
  <input class="ds-pin-input__field" maxlength="1" value="1" />
  <input class="ds-pin-input__field" maxlength="1" value="2" />
  <input class="ds-pin-input__field" maxlength="1" value="3" />
  <input class="ds-pin-input__field" maxlength="1" value="4" />
</div>` }} />
        <details className="demo-code">
          <summary>View Code</summary>
          <pre><code dangerouslySetInnerHTML={{ __html: `&lt;div class=&quot;ds-pin-input ds-pin-input--error&quot;&gt;
  &lt;input class=&quot;ds-pin-input__field&quot; maxlength=&quot;1&quot; value=&quot;1&quot; /&gt;
  &lt;input class=&quot;ds-pin-input__field&quot; maxlength=&quot;1&quot; value=&quot;2&quot; /&gt;
  &lt;input class=&quot;ds-pin-input__field&quot; maxlength=&quot;1&quot; value=&quot;3&quot; /&gt;
  &lt;input class=&quot;ds-pin-input__field&quot; maxlength=&quot;1&quot; value=&quot;4&quot; /&gt;
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
                <td><code>.ds-pin-input</code></td>
                <td>Base</td>
              </tr>
              <tr>
                <td><code>__field</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>__separator</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>--error</code></td>
                <td>Variant</td>
              </tr>
              <tr>
                <td><code>--success</code></td>
                <td>Variant</td>
              </tr>
              <tr>
                <td><code>--sm</code></td>
                <td>Size</td>
              </tr>
              <tr>
                <td><code>--lg</code></td>
                <td>Size</td>
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
