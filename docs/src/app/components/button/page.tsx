export default function ButtonPage() {
  return (
    <>
      <div className="demo-page-header">
        <h1>Button</h1>
        <p>Inverted primary, rounded-full CTAs, refined sizing.</p>
      </div>

      <section className="demo-section">
        <h2 className="demo-section__title">Variants</h2>
        <div className="demo-preview" dangerouslySetInnerHTML={{ __html: `<button class="ds-btn">Primary</button>
<button class="ds-btn ds-btn--secondary">Secondary</button>
<button class="ds-btn ds-btn--outline">Outline</button>
<button class="ds-btn ds-btn--ghost">Ghost</button>
<button class="ds-btn ds-btn--danger">Delete</button>
<button class="ds-btn ds-btn--success">Approve</button>` }} />
        <details className="demo-code">
          <summary>View React Code</summary>
          <pre><code dangerouslySetInnerHTML={{ __html: `&lt;Button&gt;Primary&lt;/Button&gt;
&lt;Button variant=&quot;secondary&quot;&gt;Secondary&lt;/Button&gt;
&lt;Button variant=&quot;outline&quot;&gt;Outline&lt;/Button&gt;
&lt;Button variant=&quot;ghost&quot;&gt;Ghost&lt;/Button&gt;
&lt;Button variant=&quot;danger&quot;&gt;Danger&lt;/Button&gt;
&lt;Button variant=&quot;success&quot;&gt;Success&lt;/Button&gt;
&lt;Button variant=&quot;success-solid&quot;&gt;Success Solid&lt;/Button&gt;` }} /></pre>
        </details>
      </section>

      <section className="demo-section">
        <h2 className="demo-section__title">Sizes</h2>
        <div className="demo-preview" dangerouslySetInnerHTML={{ __html: `<button class="ds-btn ds-btn--xs">Extra Small</button>
<button class="ds-btn ds-btn--sm">Small</button>
<button class="ds-btn">Default</button>
<button class="ds-btn ds-btn--lg">Large</button>` }} />
        <details className="demo-code">
          <summary>View React Code</summary>
          <pre><code dangerouslySetInnerHTML={{ __html: `&lt;Button size=&quot;xs&quot;&gt;XS&lt;/Button&gt;
&lt;Button size=&quot;sm&quot;&gt;Small&lt;/Button&gt;
&lt;Button&gt;Medium&lt;/Button&gt;
&lt;Button size=&quot;lg&quot;&gt;Large&lt;/Button&gt;
&lt;Button size=&quot;xl&quot;&gt;XL&lt;/Button&gt;
&lt;Button size=&quot;2xl&quot;&gt;2XL&lt;/Button&gt;` }} /></pre>
        </details>
      </section>

      <section className="demo-section">
        <h2 className="demo-section__title">Modifiers</h2>
        <div className="demo-preview" dangerouslySetInnerHTML={{ __html: `<button class="ds-btn ds-btn--pill">Get Started</button>
<button class="ds-btn ds-btn--full">Full Width</button>
<button class="ds-btn ds-btn--icon" aria-label="Settings">&#9881;</button>
<button class="ds-btn ds-btn--loading">Saving</button>` }} />
        <details className="demo-code">
          <summary>View React Code</summary>
          <pre><code dangerouslySetInnerHTML={{ __html: `&lt;Button pill&gt;Pill&lt;/Button&gt;
&lt;Button icon aria-label=&quot;Settings&quot;&gt;⚙&lt;/Button&gt;
&lt;Button loading&gt;Loading&lt;/Button&gt;
&lt;Button full&gt;Full Width&lt;/Button&gt;` }} /></pre>
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
                <td><code>.ds-btn</code></td>
                <td>Base</td>
              </tr>
              <tr>
                <td><code>.ds-btn-group</code></td>
                <td>Base</td>
              </tr>
              <tr>
                <td><code>--secondary</code></td>
                <td>Variant</td>
              </tr>
              <tr>
                <td><code>--outline</code></td>
                <td>Variant</td>
              </tr>
              <tr>
                <td><code>--ghost</code></td>
                <td>Variant</td>
              </tr>
              <tr>
                <td><code>--danger</code></td>
                <td>Variant</td>
              </tr>
              <tr>
                <td><code>--success</code></td>
                <td>Variant</td>
              </tr>
              <tr>
                <td><code>--success-solid</code></td>
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
              <tr>
                <td><code>--xl</code></td>
                <td>Size</td>
              </tr>
              <tr>
                <td><code>--2xl</code></td>
                <td>Size</td>
              </tr>
              <tr>
                <td><code>--pill</code></td>
                <td>Modifier</td>
              </tr>
              <tr>
                <td><code>--full</code></td>
                <td>Modifier</td>
              </tr>
              <tr>
                <td><code>--icon</code></td>
                <td>Modifier</td>
              </tr>
              <tr>
                <td><code>--loading</code></td>
                <td>Modifier</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
