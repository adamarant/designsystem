export default function SliderPage() {
  return (
    <>
      <div className="demo-page-header">
        <h1>Slider</h1>
        <p>Range slider input with customizable thumb and track styling.</p>
      </div>

      <section className="demo-section">
        <h2 className="demo-section__title">Basic Slider</h2>
        <div className="demo-preview" dangerouslySetInnerHTML={{ __html: `<div class="ds-slider">
  <input type="range" min="0" max="100" value="50" />
  <div class="ds-slider__labels">
    <span>0</span>
    <span>100</span>
  </div>
</div>` }} />
        <details className="demo-code">
          <summary>View Code</summary>
          <pre><code dangerouslySetInnerHTML={{ __html: `&lt;div class=&quot;ds-slider&quot;&gt;
  &lt;input type=&quot;range&quot; min=&quot;0&quot; max=&quot;100&quot; value=&quot;50&quot; /&gt;
  &lt;div class=&quot;ds-slider__labels&quot;&gt;
    &lt;span&gt;0&lt;/span&gt;
    &lt;span&gt;100&lt;/span&gt;
  &lt;/div&gt;
&lt;/div&gt;` }} /></pre>
        </details>
      </section>

      <section className="demo-section">
        <h2 className="demo-section__title">Slider with Value</h2>
        <div className="demo-preview" dangerouslySetInnerHTML={{ __html: `<div style="display:flex;align-items:center;gap:1rem;">
  <div class="ds-slider" style="flex:1;">
    <input type="range" min="0" max="100" value="75" />
  </div>
  <span class="ds-slider__value">75%</span>
</div>` }} />
        <details className="demo-code">
          <summary>View Code</summary>
          <pre><code dangerouslySetInnerHTML={{ __html: `&lt;div style=&quot;display:flex;align-items:center;gap:1rem;&quot;&gt;
  &lt;div class=&quot;ds-slider&quot; style=&quot;flex:1;&quot;&gt;
    &lt;input type=&quot;range&quot; min=&quot;0&quot; max=&quot;100&quot; value=&quot;75&quot; /&gt;
  &lt;/div&gt;
  &lt;span class=&quot;ds-slider__value&quot;&gt;75%&lt;/span&gt;
&lt;/div&gt;` }} /></pre>
        </details>
      </section>

      <section className="demo-section">
        <h2 className="demo-section__title">Sizes</h2>
        <div className="demo-preview" dangerouslySetInnerHTML={{ __html: `<div class="ds-slider ds-slider--sm" style="margin-bottom:1rem;">
  <input type="range" min="0" max="100" value="40" />
</div>
<div class="ds-slider">
  <input type="range" min="0" max="100" value="60" />
</div>` }} />
        <details className="demo-code">
          <summary>View Code</summary>
          <pre><code dangerouslySetInnerHTML={{ __html: `&lt;div class=&quot;ds-slider ds-slider--sm&quot; style=&quot;margin-bottom:1rem;&quot;&gt;
  &lt;input type=&quot;range&quot; min=&quot;0&quot; max=&quot;100&quot; value=&quot;40&quot; /&gt;
&lt;/div&gt;
&lt;div class=&quot;ds-slider&quot;&gt;
  &lt;input type=&quot;range&quot; min=&quot;0&quot; max=&quot;100&quot; value=&quot;60&quot; /&gt;
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
                <td><code>.ds-slider</code></td>
                <td>Base</td>
              </tr>
              <tr>
                <td><code>__labels</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>__value</code></td>
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
