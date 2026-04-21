export default function TablePage() {
  return (
    <>
      <div className="demo-page-header">
        <h1>Table</h1>
        <p>Data table with sorting, selection, sticky headers, striping, and responsive stacking.</p>
      </div>

      <section className="demo-section">
        <h2 className="demo-section__title">Basic Table</h2>
        <div className="demo-preview" dangerouslySetInnerHTML={{ __html: `<div class="ds-table-wrapper">
  <table class="ds-table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Role</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Alice Johnson</td>
        <td>Engineer</td>
        <td><span class="ds-badge ds-badge--success">Active</span></td>
      </tr>
      <tr>
        <td>Bob Smith</td>
        <td>Designer</td>
        <td><span class="ds-badge ds-badge--warning">Away</span></td>
      </tr>
      <tr>
        <td>Carol White</td>
        <td>Manager</td>
        <td><span class="ds-badge ds-badge--error">Offline</span></td>
      </tr>
    </tbody>
  </table>
</div>` }} />
        <details className="demo-code">
          <summary>View Code</summary>
          <pre><code dangerouslySetInnerHTML={{ __html: `&lt;div class=&quot;ds-table-wrapper&quot;&gt;
  &lt;table class=&quot;ds-table&quot;&gt;
    &lt;thead&gt;
      &lt;tr&gt;
        &lt;th&gt;Name&lt;/th&gt;
        &lt;th&gt;Role&lt;/th&gt;
        &lt;th&gt;Status&lt;/th&gt;
      &lt;/tr&gt;
    &lt;/thead&gt;
    &lt;tbody&gt;
      &lt;tr&gt;
        &lt;td&gt;Alice Johnson&lt;/td&gt;
        &lt;td&gt;Engineer&lt;/td&gt;
        &lt;td&gt;&lt;span class=&quot;ds-badge ds-badge--success&quot;&gt;Active&lt;/span&gt;&lt;/td&gt;
      &lt;/tr&gt;
      &lt;tr&gt;
        &lt;td&gt;Bob Smith&lt;/td&gt;
        &lt;td&gt;Designer&lt;/td&gt;
        &lt;td&gt;&lt;span class=&quot;ds-badge ds-badge--warning&quot;&gt;Away&lt;/span&gt;&lt;/td&gt;
      &lt;/tr&gt;
      &lt;tr&gt;
        &lt;td&gt;Carol White&lt;/td&gt;
        &lt;td&gt;Manager&lt;/td&gt;
        &lt;td&gt;&lt;span class=&quot;ds-badge ds-badge--error&quot;&gt;Offline&lt;/span&gt;&lt;/td&gt;
      &lt;/tr&gt;
    &lt;/tbody&gt;
  &lt;/table&gt;
&lt;/div&gt;` }} /></pre>
        </details>
      </section>

      <section className="demo-section">
        <h2 className="demo-section__title">Compact Table</h2>
        <div className="demo-preview" dangerouslySetInnerHTML={{ __html: `<div class="ds-table-wrapper">
  <table class="ds-table ds-table--compact">
    <thead>
      <tr><th>Endpoint</th><th>Method</th><th>Latency</th></tr>
    </thead>
    <tbody>
      <tr><td>/api/users</td><td>GET</td><td>42ms</td></tr>
      <tr><td>/api/posts</td><td>POST</td><td>128ms</td></tr>
      <tr><td>/api/auth</td><td>POST</td><td>95ms</td></tr>
    </tbody>
  </table>
</div>` }} />
        <details className="demo-code">
          <summary>View Code</summary>
          <pre><code dangerouslySetInnerHTML={{ __html: `&lt;div class=&quot;ds-table-wrapper&quot;&gt;
  &lt;table class=&quot;ds-table ds-table--compact&quot;&gt;
    &lt;thead&gt;
      &lt;tr&gt;&lt;th&gt;Endpoint&lt;/th&gt;&lt;th&gt;Method&lt;/th&gt;&lt;th&gt;Latency&lt;/th&gt;&lt;/tr&gt;
    &lt;/thead&gt;
    &lt;tbody&gt;
      &lt;tr&gt;&lt;td&gt;/api/users&lt;/td&gt;&lt;td&gt;GET&lt;/td&gt;&lt;td&gt;42ms&lt;/td&gt;&lt;/tr&gt;
      &lt;tr&gt;&lt;td&gt;/api/posts&lt;/td&gt;&lt;td&gt;POST&lt;/td&gt;&lt;td&gt;128ms&lt;/td&gt;&lt;/tr&gt;
      &lt;tr&gt;&lt;td&gt;/api/auth&lt;/td&gt;&lt;td&gt;POST&lt;/td&gt;&lt;td&gt;95ms&lt;/td&gt;&lt;/tr&gt;
    &lt;/tbody&gt;
  &lt;/table&gt;
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
                <td><code>.ds-table</code></td>
                <td>Base</td>
              </tr>
              <tr>
                <td><code>.ds-table-wrapper</code></td>
                <td>Base</td>
              </tr>
              <tr>
                <td><code>.ds-table-footer</code></td>
                <td>Base</td>
              </tr>
              <tr>
                <td><code>.ds-table__cell--shrink</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>.ds-table__cell--number</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>.ds-table__cell--checkbox</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>.ds-table__cell--truncate</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>.ds-table__row--selected</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>.ds-table__sort</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>.ds-table__sort--asc</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>.ds-table__sort--desc</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>.ds-table__empty</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>.ds-table__loading</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>--compact</code></td>
                <td>Variant</td>
              </tr>
              <tr>
                <td><code>--dense</code></td>
                <td>Variant</td>
              </tr>
              <tr>
                <td><code>--striped</code></td>
                <td>Variant</td>
              </tr>
              <tr>
                <td><code>--bordered</code></td>
                <td>Variant</td>
              </tr>
              <tr>
                <td><code>--sticky-header</code></td>
                <td>Variant</td>
              </tr>
              <tr>
                <td><code>--no-hover</code></td>
                <td>Variant</td>
              </tr>
              <tr>
                <td><code>--stack</code></td>
                <td>Variant</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
