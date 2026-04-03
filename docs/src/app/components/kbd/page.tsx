export default function KbdPage() {
  return (
    <>
      <div className="demo-page-header">
        <h1>Kbd</h1>
        <p>Keyboard shortcut display with a raised 3D key appearance.</p>
      </div>

      <section className="demo-section">
        <h2 className="demo-section__title">Single Keys</h2>
        <div className="demo-preview" dangerouslySetInnerHTML={{ __html: `<kbd class="ds-kbd">Esc</kbd>
<kbd class="ds-kbd">Enter</kbd>
<kbd class="ds-kbd">Tab</kbd>
<kbd class="ds-kbd ds-kbd--lg">Space</kbd>` }} />
        <details className="demo-code">
          <summary>View Code</summary>
          <pre><code dangerouslySetInnerHTML={{ __html: `&lt;kbd class=&quot;ds-kbd&quot;&gt;Esc&lt;/kbd&gt;
&lt;kbd class=&quot;ds-kbd&quot;&gt;Enter&lt;/kbd&gt;
&lt;kbd class=&quot;ds-kbd&quot;&gt;Tab&lt;/kbd&gt;
&lt;kbd class=&quot;ds-kbd ds-kbd--lg&quot;&gt;Space&lt;/kbd&gt;` }} /></pre>
        </details>
      </section>

      <section className="demo-section">
        <h2 className="demo-section__title">Key Combinations</h2>
        <div className="demo-preview" dangerouslySetInnerHTML={{ __html: `<span class="ds-kbd-group">
  <kbd class="ds-kbd">Cmd</kbd>
  <span class="ds-kbd-group__separator">+</span>
  <kbd class="ds-kbd">K</kbd>
</span>
<span class="ds-kbd-group" style="margin-left:1rem;">
  <kbd class="ds-kbd">Ctrl</kbd>
  <span class="ds-kbd-group__separator">+</span>
  <kbd class="ds-kbd">Shift</kbd>
  <span class="ds-kbd-group__separator">+</span>
  <kbd class="ds-kbd">P</kbd>
</span>` }} />
        <details className="demo-code">
          <summary>View Code</summary>
          <pre><code dangerouslySetInnerHTML={{ __html: `&lt;span class=&quot;ds-kbd-group&quot;&gt;
  &lt;kbd class=&quot;ds-kbd&quot;&gt;Cmd&lt;/kbd&gt;
  &lt;span class=&quot;ds-kbd-group__separator&quot;&gt;+&lt;/span&gt;
  &lt;kbd class=&quot;ds-kbd&quot;&gt;K&lt;/kbd&gt;
&lt;/span&gt;
&lt;span class=&quot;ds-kbd-group&quot; style=&quot;margin-left:1rem;&quot;&gt;
  &lt;kbd class=&quot;ds-kbd&quot;&gt;Ctrl&lt;/kbd&gt;
  &lt;span class=&quot;ds-kbd-group__separator&quot;&gt;+&lt;/span&gt;
  &lt;kbd class=&quot;ds-kbd&quot;&gt;Shift&lt;/kbd&gt;
  &lt;span class=&quot;ds-kbd-group__separator&quot;&gt;+&lt;/span&gt;
  &lt;kbd class=&quot;ds-kbd&quot;&gt;P&lt;/kbd&gt;
&lt;/span&gt;` }} /></pre>
        </details>
      </section>

      <section className="demo-section">
        <h2 className="demo-section__title">Sizes</h2>
        <div className="demo-preview" dangerouslySetInnerHTML={{ __html: `<kbd class="ds-kbd">Default</kbd>
<kbd class="ds-kbd ds-kbd--lg">Large</kbd>` }} />
        <details className="demo-code">
          <summary>View Code</summary>
          <pre><code dangerouslySetInnerHTML={{ __html: `&lt;kbd class=&quot;ds-kbd&quot;&gt;Default&lt;/kbd&gt;
&lt;kbd class=&quot;ds-kbd ds-kbd--lg&quot;&gt;Large&lt;/kbd&gt;` }} /></pre>
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
                <td><code>.ds-kbd</code></td>
                <td>Base</td>
              </tr>
              <tr>
                <td><code>.ds-kbd-group</code></td>
                <td>Base</td>
              </tr>
              <tr>
                <td><code>__separator</code></td>
                <td>Element</td>
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
