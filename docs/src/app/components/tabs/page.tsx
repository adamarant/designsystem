export default function TabsPage() {
  return (
    <>
      <div className="demo-page-header">
        <h1>Tabs</h1>
        <p>Horizontal/vertical tab navigation with pill, small, and full-width variants.</p>
      </div>

      <section className="demo-section">
        <h2 className="demo-section__title">Default</h2>
        <div className="demo-preview" dangerouslySetInnerHTML={{ __html: `<div class="ds-tabs">
  <button class="ds-tab ds-tab--active">Overview</button>
  <button class="ds-tab">Analytics</button>
  <button class="ds-tab">Reports</button>
  <button class="ds-tab" disabled>Settings</button>
</div>` }} />
        <details className="demo-code">
          <summary>View React Code</summary>
          <pre><code dangerouslySetInnerHTML={{ __html: `const [tab, setTab] = useState(&quot;overview&quot;);

&lt;Tabs value={tab} onValueChange={setTab}&gt;
  &lt;Tabs.List aria-label=&quot;Sections&quot;&gt;
    &lt;Tabs.Tab value=&quot;overview&quot;&gt;Overview&lt;/Tabs.Tab&gt;
    &lt;Tabs.Tab value=&quot;tasks&quot;&gt;Tasks&lt;/Tabs.Tab&gt;
  &lt;/Tabs.List&gt;
  &lt;Tabs.Panel value=&quot;overview&quot;&gt;Overview content&lt;/Tabs.Panel&gt;
  &lt;Tabs.Panel value=&quot;tasks&quot;&gt;Tasks content&lt;/Tabs.Panel&gt;
&lt;/Tabs&gt;` }} /></pre>
        </details>
      </section>

      <section className="demo-section">
        <h2 className="demo-section__title">Pills</h2>
        <div className="demo-preview" dangerouslySetInnerHTML={{ __html: `<div class="ds-tabs ds-tabs--pills">
  <button class="ds-tab ds-tab--active">All</button>
  <button class="ds-tab">Active</button>
  <button class="ds-tab">Archived</button>
</div>` }} />
        <details className="demo-code">
          <summary>View React Code</summary>
          <pre><code dangerouslySetInnerHTML={{ __html: `&lt;Tabs.List variant=&quot;pills&quot;&gt;...&lt;/Tabs.List&gt;` }} /></pre>
        </details>
      </section>

      <section className="demo-section">
        <h2 className="demo-section__title">Vertical</h2>
        <div className="demo-preview" dangerouslySetInnerHTML={{ __html: `<div class="ds-tabs">
  <button class="ds-tab ds-tab--active">Issues <span class="ds-tab__count">24</span></button>
  <button class="ds-tab">Pull Requests <span class="ds-tab__count">8</span></button>
  <button class="ds-tab">Discussions <span class="ds-tab__count">3</span></button>
</div>` }} />
        <details className="demo-code">
          <summary>View React Code</summary>
          <pre><code dangerouslySetInnerHTML={{ __html: `&lt;Tabs.List variant=&quot;vertical&quot;&gt;...&lt;/Tabs.List&gt;` }} /></pre>
        </details>
      </section>

      <section className="demo-section">
        <h2 className="demo-section__title">Full Width</h2>
        <div className="demo-preview" dangerouslySetInnerHTML={{ __html: `<div class="ds-tabs ds-tabs--sm" style="margin-bottom:1rem;">
  <button class="ds-tab ds-tab--active">Small</button>
  <button class="ds-tab">Tabs</button>
</div>
<div class="ds-tabs">
  <button class="ds-tab ds-tab--active">Default</button>
  <button class="ds-tab">Tabs</button>
</div>` }} />
        <details className="demo-code">
          <summary>View React Code</summary>
          <pre><code dangerouslySetInnerHTML={{ __html: `&lt;Tabs.List full&gt;...&lt;/Tabs.List&gt;` }} /></pre>
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
                <td><code>.ds-tabs</code></td>
                <td>Base</td>
              </tr>
              <tr>
                <td><code>.ds-tab</code></td>
                <td>Base</td>
              </tr>
              <tr>
                <td><code>.ds-tab-panel</code></td>
                <td>Base</td>
              </tr>
              <tr>
                <td><code>__icon</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>__count</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>--pills</code></td>
                <td>Variant</td>
              </tr>
              <tr>
                <td><code>--vertical</code></td>
                <td>Variant</td>
              </tr>
              <tr>
                <td><code>--full</code></td>
                <td>Variant</td>
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
                <td><code>--active</code></td>
                <td>Modifier</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
