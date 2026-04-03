export default function PaginationPage() {
  return (
    <>
      <div className="demo-page-header">
        <h1>Pagination</h1>
        <p>A row of page-number controls for navigating multi-page content.</p>
      </div>

      <section className="demo-section">
        <h2 className="demo-section__title">Basic Pagination</h2>
        <div className="demo-preview" dangerouslySetInnerHTML={{ __html: `<nav class="ds-pagination" aria-label="Pagination">
  <button class="ds-pagination__prev" aria-label="Previous page">&lsaquo;</button>
  <button class="ds-pagination__item">1</button>
  <button class="ds-pagination__item ds-pagination__item--active" aria-current="page">2</button>
  <button class="ds-pagination__item">3</button>
  <span class="ds-pagination__ellipsis">&hellip;</span>
  <button class="ds-pagination__item">10</button>
  <button class="ds-pagination__next" aria-label="Next page">&rsaquo;</button>
</nav>` }} />
        <details className="demo-code">
          <summary>View Code</summary>
          <pre><code dangerouslySetInnerHTML={{ __html: `&lt;nav class=&quot;ds-pagination&quot; aria-label=&quot;Pagination&quot;&gt;
  &lt;button class=&quot;ds-pagination__prev&quot; aria-label=&quot;Previous page&quot;&gt;&amp;lsaquo;&lt;/button&gt;
  &lt;button class=&quot;ds-pagination__item&quot;&gt;1&lt;/button&gt;
  &lt;button class=&quot;ds-pagination__item ds-pagination__item--active&quot; aria-current=&quot;page&quot;&gt;2&lt;/button&gt;
  &lt;button class=&quot;ds-pagination__item&quot;&gt;3&lt;/button&gt;
  &lt;span class=&quot;ds-pagination__ellipsis&quot;&gt;&amp;hellip;&lt;/span&gt;
  &lt;button class=&quot;ds-pagination__item&quot;&gt;10&lt;/button&gt;
  &lt;button class=&quot;ds-pagination__next&quot; aria-label=&quot;Next page&quot;&gt;&amp;rsaquo;&lt;/button&gt;
&lt;/nav&gt;` }} /></pre>
        </details>
      </section>

      <section className="demo-section">
        <h2 className="demo-section__title">Compact Pagination</h2>
        <div className="demo-preview" dangerouslySetInnerHTML={{ __html: `<nav class="ds-pagination ds-pagination--compact" aria-label="Pagination">
  <button class="ds-pagination__prev" disabled>&lsaquo;</button>
  <button class="ds-pagination__item ds-pagination__item--active">1</button>
  <button class="ds-pagination__item">2</button>
  <button class="ds-pagination__item">3</button>
  <button class="ds-pagination__next">&rsaquo;</button>
  <span class="ds-pagination__info">Page 1 of 3</span>
</nav>` }} />
        <details className="demo-code">
          <summary>View Code</summary>
          <pre><code dangerouslySetInnerHTML={{ __html: `&lt;nav class=&quot;ds-pagination ds-pagination--compact&quot; aria-label=&quot;Pagination&quot;&gt;
  &lt;button class=&quot;ds-pagination__prev&quot; disabled&gt;&amp;lsaquo;&lt;/button&gt;
  &lt;button class=&quot;ds-pagination__item ds-pagination__item--active&quot;&gt;1&lt;/button&gt;
  &lt;button class=&quot;ds-pagination__item&quot;&gt;2&lt;/button&gt;
  &lt;button class=&quot;ds-pagination__item&quot;&gt;3&lt;/button&gt;
  &lt;button class=&quot;ds-pagination__next&quot;&gt;&amp;rsaquo;&lt;/button&gt;
  &lt;span class=&quot;ds-pagination__info&quot;&gt;Page 1 of 3&lt;/span&gt;
&lt;/nav&gt;` }} /></pre>
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
                <td><code>.ds-pagination</code></td>
                <td>Base</td>
              </tr>
              <tr>
                <td><code>__item</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>__prev</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>__next</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>__ellipsis</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>__info</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>--compact</code></td>
                <td>Variant</td>
              </tr>
              <tr>
                <td><code>--active</code></td>
                <td>Modifier</td>
              </tr>
              <tr>
                <td><code>--disabled</code></td>
                <td>Modifier</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
