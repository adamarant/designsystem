export default function PopoverPage() {
  return (
    <>
      <div className="demo-page-header">
        <h1>Popover</h1>
        <p>Flexible popover for displaying complex content anchored to a trigger element.</p>
      </div>

      <section className="demo-section">
        <h2 className="demo-section__title">Basic Popover</h2>
        <div className="demo-preview" dangerouslySetInnerHTML={{ __html: `<div class="ds-popover ds-popover--open" style="display:inline-flex;">
  <button class="ds-btn ds-btn--secondary">User Info</button>
  <div class="ds-popover__content" style="position:relative;top:auto;left:auto;transform:none;opacity:1;visibility:visible;margin-top:0.5rem;">
    <div style="display:flex;align-items:center;gap:0.75rem;margin-bottom:0.75rem;">
      <span class="ds-avatar">JD</span>
      <div>
        <strong>Jane Doe</strong><br/>
        <span style="font-size:var(--ds-text-sm);color:var(--ds-color-text-secondary);">Senior Engineer</span>
      </div>
    </div>
    <button class="ds-btn ds-btn--sm ds-btn--full">View Profile</button>
  </div>
</div>` }} />
        <details className="demo-code">
          <summary>View Code</summary>
          <pre><code dangerouslySetInnerHTML={{ __html: `&lt;div class=&quot;ds-popover ds-popover--open&quot; style=&quot;display:inline-flex;&quot;&gt;
  &lt;button class=&quot;ds-btn ds-btn--secondary&quot;&gt;User Info&lt;/button&gt;
  &lt;div class=&quot;ds-popover__content&quot; style=&quot;position:relative;top:auto;left:auto;transform:none;opacity:1;visibility:visible;margin-top:0.5rem;&quot;&gt;
    &lt;div style=&quot;display:flex;align-items:center;gap:0.75rem;margin-bottom:0.75rem;&quot;&gt;
      &lt;span class=&quot;ds-avatar&quot;&gt;JD&lt;/span&gt;
      &lt;div&gt;
        &lt;strong&gt;Jane Doe&lt;/strong&gt;&lt;br/&gt;
        &lt;span style=&quot;font-size:var(--ds-text-sm);color:var(--ds-color-text-secondary);&quot;&gt;Senior Engineer&lt;/span&gt;
      &lt;/div&gt;
    &lt;/div&gt;
    &lt;button class=&quot;ds-btn ds-btn--sm ds-btn--full&quot;&gt;View Profile&lt;/button&gt;
  &lt;/div&gt;
&lt;/div&gt;` }} /></pre>
        </details>
      </section>

      <section className="demo-section">
        <h2 className="demo-section__title">Sizes</h2>
        <div className="demo-preview" dangerouslySetInnerHTML={{ __html: `<p style="font-size:var(--ds-text-sm);color:var(--ds-color-text-secondary);"><code>.ds-popover--sm</code> (16rem) &middot; default (20rem) &middot; <code>.ds-popover--lg</code> (28rem)</p>` }} />
        <details className="demo-code">
          <summary>View Code</summary>
          <pre><code dangerouslySetInnerHTML={{ __html: `&lt;p style=&quot;font-size:var(--ds-text-sm);color:var(--ds-color-text-secondary);&quot;&gt;&lt;code&gt;.ds-popover--sm&lt;/code&gt; (16rem) &amp;middot; default (20rem) &amp;middot; &lt;code&gt;.ds-popover--lg&lt;/code&gt; (28rem)&lt;/p&gt;` }} /></pre>
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
                <td><code>.ds-popover</code></td>
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
                <td><code>--sm</code></td>
                <td>Size</td>
              </tr>
              <tr>
                <td><code>--lg</code></td>
                <td>Size</td>
              </tr>
              <tr>
                <td><code>--open</code></td>
                <td>Modifier</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
