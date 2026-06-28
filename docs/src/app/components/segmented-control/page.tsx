export default function SegmentedControlPage() {
  return (
    <>
      <div className="demo-page-header">
        <h1>Segmented Control</h1>
        <p>Toggle between 2-5 mutually exclusive options. Compact alternative to tabs.</p>
      </div>

      <section className="demo-section">
        <h2 className="demo-section__title">Default</h2>
        <div className="demo-preview" dangerouslySetInnerHTML={{ __html: `<div class="ds-segmented">
  <button class="ds-segmented__item ds-segmented__item--active">Grid</button>
  <button class="ds-segmented__item">List</button>
  <button class="ds-segmented__item">Board</button>
</div>` }} />
        <details className="demo-code">
          <summary>View Code</summary>
          <pre><code dangerouslySetInnerHTML={{ __html: `&lt;div class=&quot;ds-segmented&quot;&gt;
  &lt;button class=&quot;ds-segmented__item ds-segmented__item--active&quot;&gt;Grid&lt;/button&gt;
  &lt;button class=&quot;ds-segmented__item&quot;&gt;List&lt;/button&gt;
  &lt;button class=&quot;ds-segmented__item&quot;&gt;Board&lt;/button&gt;
&lt;/div&gt;` }} /></pre>
        </details>
      </section>

      <section className="demo-section">
        <h2 className="demo-section__title">Full Width + Small</h2>
        <div className="demo-preview" dangerouslySetInnerHTML={{ __html: `<div class="ds-segmented ds-segmented--full ds-segmented--sm">
  <button class="ds-segmented__item ds-segmented__item--active">Day</button>
  <button class="ds-segmented__item">Week</button>
  <button class="ds-segmented__item">Month</button>
  <button class="ds-segmented__item">Year</button>
</div>` }} />
        <details className="demo-code">
          <summary>View Code</summary>
          <pre><code dangerouslySetInnerHTML={{ __html: `&lt;div class=&quot;ds-segmented ds-segmented--full ds-segmented--sm&quot;&gt;
  &lt;button class=&quot;ds-segmented__item ds-segmented__item--active&quot;&gt;Day&lt;/button&gt;
  &lt;button class=&quot;ds-segmented__item&quot;&gt;Week&lt;/button&gt;
  &lt;button class=&quot;ds-segmented__item&quot;&gt;Month&lt;/button&gt;
  &lt;button class=&quot;ds-segmented__item&quot;&gt;Year&lt;/button&gt;
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
                <td><code>.ds-segmented</code></td>
                <td>Base</td>
              </tr>
              <tr>
                <td><code>__item</code></td>
                <td>Element</td>
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
                <td><code>--full</code></td>
                <td>Modifier</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
