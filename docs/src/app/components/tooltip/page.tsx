export default function TooltipPage() {
  return (
    <>
      <div className="demo-page-header">
        <h1>Tooltip</h1>
        <p>Inverted bubble with arrow, positioned via modifier classes.</p>
      </div>

      <section className="demo-section">
        <h2 className="demo-section__title">Placements</h2>
        <div className="demo-preview" dangerouslySetInnerHTML={{ __html: `<span class="ds-tooltip ds-tooltip--top" style="margin:2rem;">
  <button class="ds-btn ds-btn--secondary">Hover me</button>
  <span class="ds-tooltip__content">Tooltip on top</span>
</span>
<span class="ds-tooltip ds-tooltip--bottom" style="margin:2rem;">
  <button class="ds-btn ds-btn--secondary">Bottom</button>
  <span class="ds-tooltip__content">Tooltip on bottom</span>
</span>` }} />
        <details className="demo-code">
          <summary>View React Code</summary>
          <pre><code dangerouslySetInnerHTML={{ __html: `&lt;Tooltip placement=&quot;top&quot;&gt;
  &lt;Button variant=&quot;outline&quot;&gt;Top&lt;/Button&gt;
  &lt;Tooltip.Content&gt;Tooltip on top&lt;/Tooltip.Content&gt;
&lt;/Tooltip&gt;

&lt;Tooltip placement=&quot;bottom&quot;&gt;
  &lt;Button variant=&quot;outline&quot;&gt;Bottom&lt;/Button&gt;
  &lt;Tooltip.Content&gt;Tooltip on bottom&lt;/Tooltip.Content&gt;
&lt;/Tooltip&gt;` }} /></pre>
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
                <td><code>.ds-tooltip</code></td>
                <td>Base</td>
              </tr>
              <tr>
                <td><code>__content</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>--top</code></td>
                <td>Variant</td>
              </tr>
              <tr>
                <td><code>--bottom</code></td>
                <td>Variant</td>
              </tr>
              <tr>
                <td><code>--left</code></td>
                <td>Variant</td>
              </tr>
              <tr>
                <td><code>--right</code></td>
                <td>Variant</td>
              </tr>
              <tr>
                <td><code>--delay</code></td>
                <td>Modifier</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
