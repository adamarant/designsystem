export default function BottomSheetPage() {
  return (
    <>
      <div className="demo-page-header">
        <h1>Bottom Sheet</h1>
        <p>Mobile overlay sliding up from the bottom.</p>
      </div>

      <section className="demo-section">
        <h2 className="demo-section__title">Basic</h2>
        <div className="demo-preview" dangerouslySetInnerHTML={{ __html: `<div class="ds-bottom-sheet" style="position:relative;display:block;height:16rem;border:1px solid var(--ds-color-border);border-radius:var(--ds-radius-xl);overflow:hidden">
  <div style="position:absolute;inset:0;inset-block-start:auto;background:var(--ds-color-surface);border-radius:var(--ds-radius-xl) var(--ds-radius-xl) 0 0;padding:0">
    <div class="ds-bottom-sheet__handle" style="margin-top:var(--ds-space-2)"></div>
    <div class="ds-bottom-sheet__header">
      <h3 class="ds-bottom-sheet__title">Select Option</h3>
    </div>
    <div style="padding:0 var(--ds-space-4) var(--ds-space-4)">
      <p style="color:var(--ds-color-text-secondary);font-size:var(--ds-text-sm)">Sheet content here</p>
    </div>
  </div>
</div>` }} />
        <details className="demo-code">
          <summary>View Code</summary>
          <pre><code dangerouslySetInnerHTML={{ __html: `&lt;div class=&quot;ds-bottom-sheet&quot; style=&quot;position:relative;display:block;height:16rem;border:1px solid var(--ds-color-border);border-radius:var(--ds-radius-xl);overflow:hidden&quot;&gt;
  &lt;div style=&quot;position:absolute;inset:0;inset-block-start:auto;background:var(--ds-color-surface);border-radius:var(--ds-radius-xl) var(--ds-radius-xl) 0 0;padding:0&quot;&gt;
    &lt;div class=&quot;ds-bottom-sheet__handle&quot; style=&quot;margin-top:var(--ds-space-2)&quot;&gt;&lt;/div&gt;
    &lt;div class=&quot;ds-bottom-sheet__header&quot;&gt;
      &lt;h3 class=&quot;ds-bottom-sheet__title&quot;&gt;Select Option&lt;/h3&gt;
    &lt;/div&gt;
    &lt;div style=&quot;padding:0 var(--ds-space-4) var(--ds-space-4)&quot;&gt;
      &lt;p style=&quot;color:var(--ds-color-text-secondary);font-size:var(--ds-text-sm)&quot;&gt;Sheet content here&lt;/p&gt;
    &lt;/div&gt;
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
                <td><code>.ds-bottom-sheet</code></td>
                <td>Base</td>
              </tr>
              <tr>
                <td><code>__backdrop</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>__panel</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>__handle</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>__header</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>__title</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>__close</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>__body</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>--open</code></td>
                <td>Modifier</td>
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
