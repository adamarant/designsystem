export default function DrawerPage() {
  return (
    <>
      <div className="demo-page-header">
        <h1>Drawer</h1>
        <p>A sliding overlay panel anchored to the edge of the viewport.</p>
      </div>

      <section className="demo-section">
        <h2 className="demo-section__title">Right Drawer</h2>
        <div className="demo-preview" dangerouslySetInnerHTML={{ __html: `<div class="ds-drawer ds-drawer--open" style="position:relative;background:transparent;">
  <div class="ds-drawer__content" style="position:relative;transform:none;width:24rem;border:1px solid var(--ds-color-border);border-radius:var(--ds-radius-xl);">
    <div class="ds-drawer__header">
      <h3>Filter Options</h3>
      <button class="ds-drawer__close" aria-label="Close"><svg data-icon="close" width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.18934 4.18934C4.77513 3.60355 5.72487 3.60355 6.31066 4.18934L12 9.87868L17.6893 4.18934C18.2751 3.60355 19.2249 3.60355 19.8107 4.18934C20.3964 4.77513 20.3964 5.72487 19.8107 6.31066L14.1213 12L19.8107 17.6893C20.3964 18.2751 20.3964 19.2249 19.8107 19.8107C19.2249 20.3964 18.2751 20.3964 17.6893 19.8107L12 14.1213L6.31066 19.8107C5.72487 20.3964 4.77513 20.3964 4.18934 19.8107C3.60355 19.2249 3.60355 18.2751 4.18934 17.6893L9.87868 12L4.18934 6.31066C3.60355 5.72487 3.60355 4.77513 4.18934 4.18934Z" fill="currentColor" /></svg></button>
    </div>
    <div class="ds-drawer__body">
      <div class="ds-form-group">
        <label class="ds-label">Category</label>
        <select class="ds-select">
          <option>All Categories</option>
          <option>Design</option>
          <option>Engineering</option>
        </select>
      </div>
    </div>
    <div class="ds-drawer__footer">
      <button class="ds-btn ds-btn--secondary">Reset</button>
      <button class="ds-btn">Apply Filters</button>
    </div>
  </div>
</div>` }} />
        <details className="demo-code">
          <summary>View Code</summary>
          <pre><code dangerouslySetInnerHTML={{ __html: `&lt;div class=&quot;ds-drawer ds-drawer--open&quot; style=&quot;position:relative;background:transparent;&quot;&gt;
  &lt;div class=&quot;ds-drawer__content&quot; style=&quot;position:relative;transform:none;width:24rem;border:1px solid var(--ds-color-border);border-radius:var(--ds-radius-xl);&quot;&gt;
    &lt;div class=&quot;ds-drawer__header&quot;&gt;
      &lt;h3&gt;Filter Options&lt;/h3&gt;
      &lt;button class=&quot;ds-drawer__close&quot; aria-label=&quot;Close&quot;&gt;&lt;svg data-icon=&quot;close&quot; width=&quot;20&quot; height=&quot;20&quot; viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; aria-hidden=&quot;true&quot;&gt;&lt;path fill-rule=&quot;evenodd&quot; clip-rule=&quot;evenodd&quot; d=&quot;M4.18934 4.18934C4.77513 3.60355 5.72487 3.60355 6.31066 4.18934L12 9.87868L17.6893 4.18934C18.2751 3.60355 19.2249 3.60355 19.8107 4.18934C20.3964 4.77513 20.3964 5.72487 19.8107 6.31066L14.1213 12L19.8107 17.6893C20.3964 18.2751 20.3964 19.2249 19.8107 19.8107C19.2249 20.3964 18.2751 20.3964 17.6893 19.8107L12 14.1213L6.31066 19.8107C5.72487 20.3964 4.77513 20.3964 4.18934 19.8107C3.60355 19.2249 3.60355 18.2751 4.18934 17.6893L9.87868 12L4.18934 6.31066C3.60355 5.72487 3.60355 4.77513 4.18934 4.18934Z&quot; fill=&quot;currentColor&quot; /&gt;&lt;/svg&gt;&lt;/button&gt;
    &lt;/div&gt;
    &lt;div class=&quot;ds-drawer__body&quot;&gt;
      &lt;div class=&quot;ds-form-group&quot;&gt;
        &lt;label class=&quot;ds-label&quot;&gt;Category&lt;/label&gt;
        &lt;select class=&quot;ds-select&quot;&gt;
          &lt;option&gt;All Categories&lt;/option&gt;
          &lt;option&gt;Design&lt;/option&gt;
          &lt;option&gt;Engineering&lt;/option&gt;
        &lt;/select&gt;
      &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class=&quot;ds-drawer__footer&quot;&gt;
      &lt;button class=&quot;ds-btn ds-btn--secondary&quot;&gt;Reset&lt;/button&gt;
      &lt;button class=&quot;ds-btn&quot;&gt;Apply Filters&lt;/button&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;` }} /></pre>
        </details>
      </section>

      <section className="demo-section">
        <h2 className="demo-section__title">Sizes</h2>
        <div className="demo-preview" dangerouslySetInnerHTML={{ __html: `<p style="font-size:var(--ds-text-sm);color:var(--ds-color-text-secondary);"><code>.ds-drawer--sm</code> (20rem) &middot; default (28rem) &middot; <code>.ds-drawer--lg</code> (36rem)</p>` }} />
        <details className="demo-code">
          <summary>View Code</summary>
          <pre><code dangerouslySetInnerHTML={{ __html: `&lt;p style=&quot;font-size:var(--ds-text-sm);color:var(--ds-color-text-secondary);&quot;&gt;&lt;code&gt;.ds-drawer--sm&lt;/code&gt; (20rem) &amp;middot; default (28rem) &amp;middot; &lt;code&gt;.ds-drawer--lg&lt;/code&gt; (36rem)&lt;/p&gt;` }} /></pre>
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
                <td><code>.ds-drawer</code></td>
                <td>Base</td>
              </tr>
              <tr>
                <td><code>__content</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>__header</code></td>
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
                <td><code>__footer</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>--right</code></td>
                <td>Variant</td>
              </tr>
              <tr>
                <td><code>--left</code></td>
                <td>Variant</td>
              </tr>
              <tr>
                <td><code>--bottom</code></td>
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
