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
  <span class="ds-search__icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M11 18C14.866 18 18 14.866 18 11C18 7.13401 14.866 4 11 4C7.13401 4 4 7.13401 4 11C4 14.866 7.13401 18 11 18Z" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M20 20L16.05 16.05" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg></span>
  <input class="ds-search__input" placeholder="Search..." />
  <kbd class="ds-search__shortcut">⌘K</kbd>
</div>` }} />
        <details className="demo-code">
          <summary>View Code</summary>
          <pre><code dangerouslySetInnerHTML={{ __html: `&lt;div class=&quot;ds-search&quot;&gt;
  &lt;span class=&quot;ds-search__icon&quot;&gt;&lt;svg width=&quot;16&quot; height=&quot;16&quot; viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; aria-hidden=&quot;true&quot;&gt;&lt;path d=&quot;M11 18C14.866 18 18 14.866 18 11C18 7.13401 14.866 4 11 4C7.13401 4 4 7.13401 4 11C4 14.866 7.13401 18 11 18Z&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2&quot; stroke-linecap=&quot;round&quot;/&gt;&lt;path d=&quot;M20 20L16.05 16.05&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2&quot; stroke-linecap=&quot;round&quot;/&gt;&lt;/svg&gt;&lt;/span&gt;
  &lt;input class=&quot;ds-search__input&quot; placeholder=&quot;Search...&quot; /&gt;
  &lt;kbd class=&quot;ds-search__shortcut&quot;&gt;⌘K&lt;/kbd&gt;
&lt;/div&gt;` }} /></pre>
        </details>
      </section>

      <section className="demo-section">
        <h2 className="demo-section__title">With Dropdown Results</h2>
        <div className="demo-preview" dangerouslySetInnerHTML={{ __html: `<div style="position:relative">
  <div class="ds-search">
    <span class="ds-search__icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M11 18C14.866 18 18 14.866 18 11C18 7.13401 14.866 4 11 4C7.13401 4 4 7.13401 4 11C4 14.866 7.13401 18 11 18Z" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M20 20L16.05 16.05" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg></span>
    <input class="ds-search__input" placeholder="Search..." value="project" />
    <button class="ds-search__clear" aria-label="Clear search"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.18934 4.18934C4.77513 3.60355 5.72487 3.60355 6.31066 4.18934L12 9.87868L17.6893 4.18934C18.2751 3.60355 19.2249 3.60355 19.8107 4.18934C20.3964 4.77513 20.3964 5.72487 19.8107 6.31066L14.1213 12L19.8107 17.6893C20.3964 18.2751 20.3964 19.2249 19.8107 19.8107C19.2249 20.3964 18.2751 20.3964 17.6893 19.8107L12 14.1213L6.31066 19.8107C5.72487 20.3964 4.77513 20.3964 4.18934 19.8107C3.60355 19.2249 3.60355 18.2751 4.18934 17.6893L9.87868 12L4.18934 6.31066C3.60355 5.72487 3.60355 4.77513 4.18934 4.18934Z" fill="currentColor"/></svg></button>
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
    &lt;span class=&quot;ds-search__icon&quot;&gt;&lt;svg width=&quot;16&quot; height=&quot;16&quot; viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; aria-hidden=&quot;true&quot;&gt;&lt;path d=&quot;M11 18C14.866 18 18 14.866 18 11C18 7.13401 14.866 4 11 4C7.13401 4 4 7.13401 4 11C4 14.866 7.13401 18 11 18Z&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2&quot; stroke-linecap=&quot;round&quot;/&gt;&lt;path d=&quot;M20 20L16.05 16.05&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2&quot; stroke-linecap=&quot;round&quot;/&gt;&lt;/svg&gt;&lt;/span&gt;
    &lt;input class=&quot;ds-search__input&quot; placeholder=&quot;Search...&quot; value=&quot;project&quot; /&gt;
    &lt;button class=&quot;ds-search__clear&quot; aria-label=&quot;Clear search&quot;&gt;&lt;svg width=&quot;16&quot; height=&quot;16&quot; viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; aria-hidden=&quot;true&quot;&gt;&lt;path fill-rule=&quot;evenodd&quot; clip-rule=&quot;evenodd&quot; d=&quot;M4.18934 4.18934C4.77513 3.60355 5.72487 3.60355 6.31066 4.18934L12 9.87868L17.6893 4.18934C18.2751 3.60355 19.2249 3.60355 19.8107 4.18934C20.3964 4.77513 20.3964 5.72487 19.8107 6.31066L14.1213 12L19.8107 17.6893C20.3964 18.2751 20.3964 19.2249 19.8107 19.8107C19.2249 20.3964 18.2751 20.3964 17.6893 19.8107L12 14.1213L6.31066 19.8107C5.72487 20.3964 4.77513 20.3964 4.18934 19.8107C3.60355 19.2249 3.60355 18.2751 4.18934 17.6893L9.87868 12L4.18934 6.31066C3.60355 5.72487 3.60355 4.77513 4.18934 4.18934Z&quot; fill=&quot;currentColor&quot;/&gt;&lt;/svg&gt;&lt;/button&gt;
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
                <td><code>--sm</code></td>
                <td>Size</td>
              </tr>
              <tr>
                <td><code>--lg</code></td>
                <td>Size</td>
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
