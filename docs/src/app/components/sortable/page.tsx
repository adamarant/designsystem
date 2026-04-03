export default function SortablePage() {
  return (
    <>
      <div className="demo-page-header">
        <h1>Sortable</h1>
        <p>Drag-to-reorder styles for table rows or list items. Provides grip handle, dragging states, and drop zone indicators.</p>
      </div>

      <section className="demo-section">
        <h2 className="demo-section__title">Sortable Table Rows</h2>
        <div className="demo-preview" dangerouslySetInnerHTML={{ __html: `<table class="ds-table" style="max-width:24rem;">
  <thead><tr><th style="width:2rem"></th><th>Name</th></tr></thead>
  <tbody>
    <tr>
      <td><span class="ds-sortable__handle ds-sortable__handle--visible">&#9776;</span></td>
      <td>First item</td>
    </tr>
    <tr>
      <td><span class="ds-sortable__handle ds-sortable__handle--visible">&#9776;</span></td>
      <td>Second item</td>
    </tr>
    <tr class="ds-sortable--over">
      <td><span class="ds-sortable__handle ds-sortable__handle--visible">&#9776;</span></td>
      <td>Drop target</td>
    </tr>
  </tbody>
</table>` }} />
        <details className="demo-code">
          <summary>View Code</summary>
          <pre><code dangerouslySetInnerHTML={{ __html: `&lt;table class=&quot;ds-table&quot; style=&quot;max-width:24rem;&quot;&gt;
  &lt;thead&gt;&lt;tr&gt;&lt;th style=&quot;width:2rem&quot;&gt;&lt;/th&gt;&lt;th&gt;Name&lt;/th&gt;&lt;/tr&gt;&lt;/thead&gt;
  &lt;tbody&gt;
    &lt;tr&gt;
      &lt;td&gt;&lt;span class=&quot;ds-sortable__handle ds-sortable__handle--visible&quot;&gt;&amp;#9776;&lt;/span&gt;&lt;/td&gt;
      &lt;td&gt;First item&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
      &lt;td&gt;&lt;span class=&quot;ds-sortable__handle ds-sortable__handle--visible&quot;&gt;&amp;#9776;&lt;/span&gt;&lt;/td&gt;
      &lt;td&gt;Second item&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr class=&quot;ds-sortable--over&quot;&gt;
      &lt;td&gt;&lt;span class=&quot;ds-sortable__handle ds-sortable__handle--visible&quot;&gt;&amp;#9776;&lt;/span&gt;&lt;/td&gt;
      &lt;td&gt;Drop target&lt;/td&gt;
    &lt;/tr&gt;
  &lt;/tbody&gt;
&lt;/table&gt;` }} /></pre>
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
                <td><code>.ds-sortable__handle</code></td>
                <td>Base</td>
              </tr>
              <tr>
                <td><code>.ds-sortable-row</code></td>
                <td>Base</td>
              </tr>
              <tr>
                <td><code>--visible</code></td>
                <td>Variant</td>
              </tr>
              <tr>
                <td><code>--dragging</code></td>
                <td>Modifier</td>
              </tr>
              <tr>
                <td><code>--over</code></td>
                <td>Modifier</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
