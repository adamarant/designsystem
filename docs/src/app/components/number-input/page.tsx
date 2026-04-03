export default function NumberInputPage() {
  return (
    <>
      <div className="demo-page-header">
        <h1>Number Input</h1>
        <p>Numeric input with increment/decrement stepper buttons.</p>
      </div>

      <section className="demo-section">
        <h2 className="demo-section__title">Default</h2>
        <div className="demo-preview" dangerouslySetInnerHTML={{ __html: `<div class="ds-number-input">
  <button class="ds-number-input__decrement">&minus;</button>
  <input class="ds-number-input__field" type="number" value="1" />
  <button class="ds-number-input__increment">+</button>
</div>` }} />
        <details className="demo-code">
          <summary>View Code</summary>
          <pre><code dangerouslySetInnerHTML={{ __html: `&lt;div class=&quot;ds-number-input&quot;&gt;
  &lt;button class=&quot;ds-number-input__decrement&quot;&gt;&amp;minus;&lt;/button&gt;
  &lt;input class=&quot;ds-number-input__field&quot; type=&quot;number&quot; value=&quot;1&quot; /&gt;
  &lt;button class=&quot;ds-number-input__increment&quot;&gt;+&lt;/button&gt;
&lt;/div&gt;` }} /></pre>
        </details>
      </section>

      <section className="demo-section">
        <h2 className="demo-section__title">Sizes</h2>
        <div className="demo-preview" dangerouslySetInnerHTML={{ __html: `<div class="ds-number-input ds-number-input--sm">
  <button class="ds-number-input__decrement">&minus;</button>
  <input class="ds-number-input__field" type="number" value="5" />
  <button class="ds-number-input__increment">+</button>
</div>
<div class="ds-number-input ds-number-input--lg">
  <button class="ds-number-input__decrement">&minus;</button>
  <input class="ds-number-input__field" type="number" value="10" />
  <button class="ds-number-input__increment">+</button>
</div>` }} />
        <details className="demo-code">
          <summary>View Code</summary>
          <pre><code dangerouslySetInnerHTML={{ __html: `&lt;div class=&quot;ds-number-input ds-number-input--sm&quot;&gt;
  &lt;button class=&quot;ds-number-input__decrement&quot;&gt;&amp;minus;&lt;/button&gt;
  &lt;input class=&quot;ds-number-input__field&quot; type=&quot;number&quot; value=&quot;5&quot; /&gt;
  &lt;button class=&quot;ds-number-input__increment&quot;&gt;+&lt;/button&gt;
&lt;/div&gt;
&lt;div class=&quot;ds-number-input ds-number-input--lg&quot;&gt;
  &lt;button class=&quot;ds-number-input__decrement&quot;&gt;&amp;minus;&lt;/button&gt;
  &lt;input class=&quot;ds-number-input__field&quot; type=&quot;number&quot; value=&quot;10&quot; /&gt;
  &lt;button class=&quot;ds-number-input__increment&quot;&gt;+&lt;/button&gt;
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
                <td><code>.ds-number-input</code></td>
                <td>Base</td>
              </tr>
              <tr>
                <td><code>__field</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>__decrement</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>__increment</code></td>
                <td>Element</td>
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
