export default function ToolbarPage() {
  return (
    <>
      <div className="demo-page-header">
        <h1>Toolbar</h1>
        <p>Horizontal bar with action buttons, segmented controls, and scrollable groups.</p>
      </div>

      <section className="demo-section">
        <h2 className="demo-section__title">Toolbar with Buttons</h2>
        <div className="demo-preview" dangerouslySetInnerHTML={{ __html: `<div class="ds-toolbar__row" style="border:1px solid var(--ds-color-border);border-radius:var(--ds-radius-lg)">
  <div class="ds-toolbar__group">
    <button class="ds-toolbar__btn ds-toolbar__btn--active">Filter <span class="ds-toolbar__badge">2</span></button>
    <button class="ds-toolbar__btn">Sort</button>
    <button class="ds-toolbar__btn">Style</button>
  </div>
  <div class="ds-toolbar__spacer"></div>
  <div class="ds-toolbar__segmented">
    <button class="ds-toolbar__segmented-btn ds-toolbar__segmented-btn--active">Past</button>
    <button class="ds-toolbar__segmented-btn">Future</button>
  </div>
</div>` }} />
        <details className="demo-code">
          <summary>View Code</summary>
          <pre><code dangerouslySetInnerHTML={{ __html: `&lt;div class=&quot;ds-toolbar__row&quot; style=&quot;border:1px solid var(--ds-color-border);border-radius:var(--ds-radius-lg)&quot;&gt;
  &lt;div class=&quot;ds-toolbar__group&quot;&gt;
    &lt;button class=&quot;ds-toolbar__btn ds-toolbar__btn--active&quot;&gt;Filter &lt;span class=&quot;ds-toolbar__badge&quot;&gt;2&lt;/span&gt;&lt;/button&gt;
    &lt;button class=&quot;ds-toolbar__btn&quot;&gt;Sort&lt;/button&gt;
    &lt;button class=&quot;ds-toolbar__btn&quot;&gt;Style&lt;/button&gt;
  &lt;/div&gt;
  &lt;div class=&quot;ds-toolbar__spacer&quot;&gt;&lt;/div&gt;
  &lt;div class=&quot;ds-toolbar__segmented&quot;&gt;
    &lt;button class=&quot;ds-toolbar__segmented-btn ds-toolbar__segmented-btn--active&quot;&gt;Past&lt;/button&gt;
    &lt;button class=&quot;ds-toolbar__segmented-btn&quot;&gt;Future&lt;/button&gt;
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
                <td><code>.ds-toolbar__row</code></td>
                <td>Base</td>
              </tr>
              <tr>
                <td><code>__group</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>__spacer</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>__btn</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>__badge</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>__eye</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>__segmented</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>__segmented-btn</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>__btn-label</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>__row--scroll</code></td>
                <td>Modifier</td>
              </tr>
              <tr>
                <td><code>__group--scroll</code></td>
                <td>Modifier</td>
              </tr>
              <tr>
                <td><code>__btn--active</code></td>
                <td>Modifier</td>
              </tr>
              <tr>
                <td><code>__segmented-btn--active</code></td>
                <td>Modifier</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
