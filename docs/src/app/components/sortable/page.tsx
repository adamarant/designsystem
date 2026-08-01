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
      <td><span class="ds-sortable__handle ds-sortable__handle--visible"><svg data-icon="grip" width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M10 5C10 5.55228 9.55228 6 9 6C8.44772 6 8 5.55228 8 5C8 4.44772 8.44772 4 9 4C9.55228 4 10 4.44772 10 5Z" stroke="currentColor" stroke-width="2" /><path d="M10 12C10 12.5523 9.55228 13 9 13C8.44772 13 8 12.5523 8 12C8 11.4477 8.44772 11 9 11C9.55228 11 10 11.4477 10 12Z" stroke="currentColor" stroke-width="2" /><path d="M10 19C10 19.5523 9.55228 20 9 20C8.44772 20 8 19.5523 8 19C8 18.4477 8.44772 18 9 18C9.55228 18 10 18.4477 10 19Z" stroke="currentColor" stroke-width="2" /><path d="M16 12C16 12.5523 15.5523 13 15 13C14.4477 13 14 12.5523 14 12C14 11.4477 14.4477 11 15 11C15.5523 11 16 11.4477 16 12Z" stroke="currentColor" stroke-width="2" /><path d="M16 19C16 19.5523 15.5523 20 15 20C14.4477 20 14 19.5523 14 19C14 18.4477 14.4477 18 15 18C15.5523 18 16 18.4477 16 19Z" stroke="currentColor" stroke-width="2" /><path d="M16 5C16 5.55228 15.5523 6 15 6C14.4477 6 14 5.55228 14 5C14 4.44772 14.4477 4 15 4C15.5523 4 16 4.44772 16 5Z" stroke="currentColor" stroke-width="2" /></svg></span></td>
      <td>First item</td>
    </tr>
    <tr>
      <td><span class="ds-sortable__handle ds-sortable__handle--visible"><svg data-icon="grip" width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M10 5C10 5.55228 9.55228 6 9 6C8.44772 6 8 5.55228 8 5C8 4.44772 8.44772 4 9 4C9.55228 4 10 4.44772 10 5Z" stroke="currentColor" stroke-width="2" /><path d="M10 12C10 12.5523 9.55228 13 9 13C8.44772 13 8 12.5523 8 12C8 11.4477 8.44772 11 9 11C9.55228 11 10 11.4477 10 12Z" stroke="currentColor" stroke-width="2" /><path d="M10 19C10 19.5523 9.55228 20 9 20C8.44772 20 8 19.5523 8 19C8 18.4477 8.44772 18 9 18C9.55228 18 10 18.4477 10 19Z" stroke="currentColor" stroke-width="2" /><path d="M16 12C16 12.5523 15.5523 13 15 13C14.4477 13 14 12.5523 14 12C14 11.4477 14.4477 11 15 11C15.5523 11 16 11.4477 16 12Z" stroke="currentColor" stroke-width="2" /><path d="M16 19C16 19.5523 15.5523 20 15 20C14.4477 20 14 19.5523 14 19C14 18.4477 14.4477 18 15 18C15.5523 18 16 18.4477 16 19Z" stroke="currentColor" stroke-width="2" /><path d="M16 5C16 5.55228 15.5523 6 15 6C14.4477 6 14 5.55228 14 5C14 4.44772 14.4477 4 15 4C15.5523 4 16 4.44772 16 5Z" stroke="currentColor" stroke-width="2" /></svg></span></td>
      <td>Second item</td>
    </tr>
    <tr class="ds-sortable--over">
      <td><span class="ds-sortable__handle ds-sortable__handle--visible"><svg data-icon="grip" width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M10 5C10 5.55228 9.55228 6 9 6C8.44772 6 8 5.55228 8 5C8 4.44772 8.44772 4 9 4C9.55228 4 10 4.44772 10 5Z" stroke="currentColor" stroke-width="2" /><path d="M10 12C10 12.5523 9.55228 13 9 13C8.44772 13 8 12.5523 8 12C8 11.4477 8.44772 11 9 11C9.55228 11 10 11.4477 10 12Z" stroke="currentColor" stroke-width="2" /><path d="M10 19C10 19.5523 9.55228 20 9 20C8.44772 20 8 19.5523 8 19C8 18.4477 8.44772 18 9 18C9.55228 18 10 18.4477 10 19Z" stroke="currentColor" stroke-width="2" /><path d="M16 12C16 12.5523 15.5523 13 15 13C14.4477 13 14 12.5523 14 12C14 11.4477 14.4477 11 15 11C15.5523 11 16 11.4477 16 12Z" stroke="currentColor" stroke-width="2" /><path d="M16 19C16 19.5523 15.5523 20 15 20C14.4477 20 14 19.5523 14 19C14 18.4477 14.4477 18 15 18C15.5523 18 16 18.4477 16 19Z" stroke="currentColor" stroke-width="2" /><path d="M16 5C16 5.55228 15.5523 6 15 6C14.4477 6 14 5.55228 14 5C14 4.44772 14.4477 4 15 4C15.5523 4 16 4.44772 16 5Z" stroke="currentColor" stroke-width="2" /></svg></span></td>
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
      &lt;td&gt;&lt;span class=&quot;ds-sortable__handle ds-sortable__handle--visible&quot;&gt;&lt;svg data-icon=&quot;grip&quot; width=&quot;16&quot; height=&quot;16&quot; viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; aria-hidden=&quot;true&quot;&gt;&lt;path d=&quot;M10 5C10 5.55228 9.55228 6 9 6C8.44772 6 8 5.55228 8 5C8 4.44772 8.44772 4 9 4C9.55228 4 10 4.44772 10 5Z&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2&quot; /&gt;&lt;path d=&quot;M10 12C10 12.5523 9.55228 13 9 13C8.44772 13 8 12.5523 8 12C8 11.4477 8.44772 11 9 11C9.55228 11 10 11.4477 10 12Z&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2&quot; /&gt;&lt;path d=&quot;M10 19C10 19.5523 9.55228 20 9 20C8.44772 20 8 19.5523 8 19C8 18.4477 8.44772 18 9 18C9.55228 18 10 18.4477 10 19Z&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2&quot; /&gt;&lt;path d=&quot;M16 12C16 12.5523 15.5523 13 15 13C14.4477 13 14 12.5523 14 12C14 11.4477 14.4477 11 15 11C15.5523 11 16 11.4477 16 12Z&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2&quot; /&gt;&lt;path d=&quot;M16 19C16 19.5523 15.5523 20 15 20C14.4477 20 14 19.5523 14 19C14 18.4477 14.4477 18 15 18C15.5523 18 16 18.4477 16 19Z&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2&quot; /&gt;&lt;path d=&quot;M16 5C16 5.55228 15.5523 6 15 6C14.4477 6 14 5.55228 14 5C14 4.44772 14.4477 4 15 4C15.5523 4 16 4.44772 16 5Z&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2&quot; /&gt;&lt;/svg&gt;&lt;/span&gt;&lt;/td&gt;
      &lt;td&gt;First item&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
      &lt;td&gt;&lt;span class=&quot;ds-sortable__handle ds-sortable__handle--visible&quot;&gt;&lt;svg data-icon=&quot;grip&quot; width=&quot;16&quot; height=&quot;16&quot; viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; aria-hidden=&quot;true&quot;&gt;&lt;path d=&quot;M10 5C10 5.55228 9.55228 6 9 6C8.44772 6 8 5.55228 8 5C8 4.44772 8.44772 4 9 4C9.55228 4 10 4.44772 10 5Z&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2&quot; /&gt;&lt;path d=&quot;M10 12C10 12.5523 9.55228 13 9 13C8.44772 13 8 12.5523 8 12C8 11.4477 8.44772 11 9 11C9.55228 11 10 11.4477 10 12Z&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2&quot; /&gt;&lt;path d=&quot;M10 19C10 19.5523 9.55228 20 9 20C8.44772 20 8 19.5523 8 19C8 18.4477 8.44772 18 9 18C9.55228 18 10 18.4477 10 19Z&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2&quot; /&gt;&lt;path d=&quot;M16 12C16 12.5523 15.5523 13 15 13C14.4477 13 14 12.5523 14 12C14 11.4477 14.4477 11 15 11C15.5523 11 16 11.4477 16 12Z&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2&quot; /&gt;&lt;path d=&quot;M16 19C16 19.5523 15.5523 20 15 20C14.4477 20 14 19.5523 14 19C14 18.4477 14.4477 18 15 18C15.5523 18 16 18.4477 16 19Z&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2&quot; /&gt;&lt;path d=&quot;M16 5C16 5.55228 15.5523 6 15 6C14.4477 6 14 5.55228 14 5C14 4.44772 14.4477 4 15 4C15.5523 4 16 4.44772 16 5Z&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2&quot; /&gt;&lt;/svg&gt;&lt;/span&gt;&lt;/td&gt;
      &lt;td&gt;Second item&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr class=&quot;ds-sortable--over&quot;&gt;
      &lt;td&gt;&lt;span class=&quot;ds-sortable__handle ds-sortable__handle--visible&quot;&gt;&lt;svg data-icon=&quot;grip&quot; width=&quot;16&quot; height=&quot;16&quot; viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; aria-hidden=&quot;true&quot;&gt;&lt;path d=&quot;M10 5C10 5.55228 9.55228 6 9 6C8.44772 6 8 5.55228 8 5C8 4.44772 8.44772 4 9 4C9.55228 4 10 4.44772 10 5Z&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2&quot; /&gt;&lt;path d=&quot;M10 12C10 12.5523 9.55228 13 9 13C8.44772 13 8 12.5523 8 12C8 11.4477 8.44772 11 9 11C9.55228 11 10 11.4477 10 12Z&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2&quot; /&gt;&lt;path d=&quot;M10 19C10 19.5523 9.55228 20 9 20C8.44772 20 8 19.5523 8 19C8 18.4477 8.44772 18 9 18C9.55228 18 10 18.4477 10 19Z&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2&quot; /&gt;&lt;path d=&quot;M16 12C16 12.5523 15.5523 13 15 13C14.4477 13 14 12.5523 14 12C14 11.4477 14.4477 11 15 11C15.5523 11 16 11.4477 16 12Z&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2&quot; /&gt;&lt;path d=&quot;M16 19C16 19.5523 15.5523 20 15 20C14.4477 20 14 19.5523 14 19C14 18.4477 14.4477 18 15 18C15.5523 18 16 18.4477 16 19Z&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2&quot; /&gt;&lt;path d=&quot;M16 5C16 5.55228 15.5523 6 15 6C14.4477 6 14 5.55228 14 5C14 4.44772 14.4477 4 15 4C15.5523 4 16 4.44772 16 5Z&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2&quot; /&gt;&lt;/svg&gt;&lt;/span&gt;&lt;/td&gt;
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
