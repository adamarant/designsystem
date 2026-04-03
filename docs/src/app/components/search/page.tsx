export default function SearchPage() {
  return (
    <>
      <div className="demo-page-header">
        <h1>Search</h1>
        <p>Inline search bar with dropdown results, keyboard navigation, and mobile expansion.</p>
      </div>

      <section className="demo-section">
        <h2 className="demo-section__title">Basic Search</h2>
        <div className="demo-preview" dangerouslySetInnerHTML={{ __html: `<div class="ds-search">
  <svg class="ds-search__icon" width="16" height="16"><use href="#icon-search"/></svg>
  <input class="ds-search__input" placeholder="Search..." />
  <kbd class="ds-search__shortcut">⌘K</kbd>
</div>` }} />
        <details className="demo-code">
          <summary>View Code</summary>
          <pre><code dangerouslySetInnerHTML={{ __html: `&lt;div class=&quot;ds-search&quot;&gt;
  &lt;svg class=&quot;ds-search__icon&quot; width=&quot;16&quot; height=&quot;16&quot;&gt;&lt;use href=&quot;#icon-search&quot;/&gt;&lt;/svg&gt;
  &lt;input class=&quot;ds-search__input&quot; placeholder=&quot;Search...&quot; /&gt;
  &lt;kbd class=&quot;ds-search__shortcut&quot;&gt;⌘K&lt;/kbd&gt;
&lt;/div&gt;` }} /></pre>
        </details>
      </section>

      <section className="demo-section">
        <h2 className="demo-section__title">With Dropdown Results</h2>
        <div className="demo-preview" dangerouslySetInnerHTML={{ __html: `<div style="position:relative">
  <div class="ds-search">
    <svg class="ds-search__icon" width="16" height="16"><use href="#icon-search"/></svg>
    <input class="ds-search__input" placeholder="Search..." value="project" />
    <button class="ds-search__clear">&times;</button>
  </div>
  <div class="ds-search__dropdown" style="position:relative;top:0.5rem">
    <div class="ds-search__group">
      <span class="ds-search__group-label">Pages</span>
      <button class="ds-search__result ds-search__result--active">
        <span class="ds-search__result-content">
          <span class="ds-search__result-title">Project Alpha</span>
          <span class="ds-search__result-meta">Database • 3 records</span>
        </span>
      </button>
      <button class="ds-search__result">
        <span class="ds-search__result-content">
          <span class="ds-search__result-title">Project Beta</span>
          <span class="ds-search__result-meta">Database • 7 records</span>
        </span>
      </button>
    </div>
    <div class="ds-search__empty" style="display:none">No results found.</div>
  </div>
</div>` }} />
        <details className="demo-code">
          <summary>View Code</summary>
          <pre><code dangerouslySetInnerHTML={{ __html: `&lt;div style=&quot;position:relative&quot;&gt;
  &lt;div class=&quot;ds-search&quot;&gt;
    &lt;svg class=&quot;ds-search__icon&quot; width=&quot;16&quot; height=&quot;16&quot;&gt;&lt;use href=&quot;#icon-search&quot;/&gt;&lt;/svg&gt;
    &lt;input class=&quot;ds-search__input&quot; placeholder=&quot;Search...&quot; value=&quot;project&quot; /&gt;
    &lt;button class=&quot;ds-search__clear&quot;&gt;&amp;times;&lt;/button&gt;
  &lt;/div&gt;
  &lt;div class=&quot;ds-search__dropdown&quot; style=&quot;position:relative;top:0.5rem&quot;&gt;
    &lt;div class=&quot;ds-search__group&quot;&gt;
      &lt;span class=&quot;ds-search__group-label&quot;&gt;Pages&lt;/span&gt;
      &lt;button class=&quot;ds-search__result ds-search__result--active&quot;&gt;
        &lt;span class=&quot;ds-search__result-content&quot;&gt;
          &lt;span class=&quot;ds-search__result-title&quot;&gt;Project Alpha&lt;/span&gt;
          &lt;span class=&quot;ds-search__result-meta&quot;&gt;Database • 3 records&lt;/span&gt;
        &lt;/span&gt;
      &lt;/button&gt;
      &lt;button class=&quot;ds-search__result&quot;&gt;
        &lt;span class=&quot;ds-search__result-content&quot;&gt;
          &lt;span class=&quot;ds-search__result-title&quot;&gt;Project Beta&lt;/span&gt;
          &lt;span class=&quot;ds-search__result-meta&quot;&gt;Database • 7 records&lt;/span&gt;
        &lt;/span&gt;
      &lt;/button&gt;
    &lt;/div&gt;
    &lt;div class=&quot;ds-search__empty&quot; style=&quot;display:none&quot;&gt;No results found.&lt;/div&gt;
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
                <td><code>.ds-search</code></td>
                <td>Base</td>
              </tr>
              <tr>
                <td><code>__icon</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>__input</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>__shortcut</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>__clear</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>__dropdown</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>__group</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>__group-label</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>__result</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>__result-icon</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>__result-db-icon</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>__result-content</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>__result-title</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>__result-meta</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>__empty</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>__close</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>--mobile-expanded</code></td>
                <td>Modifier</td>
              </tr>
              <tr>
                <td><code>__dropdown--mobile</code></td>
                <td>Modifier</td>
              </tr>
              <tr>
                <td><code>__result--active</code></td>
                <td>Modifier</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
