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
  <button class="ds-pagination__prev" aria-label="Previous page"><svg data-icon="chevron-left" width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true"><g transform="rotate(90 12 12)"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.29289 8.29289C3.68342 7.90237 4.31658 7.90237 4.70711 8.29289L11.2929 14.8787C11.6834 15.2692 12.3166 15.2692 12.7071 14.8787L19.2929 8.29289C19.6834 7.90237 20.3166 7.90237 20.7071 8.29289C21.0976 8.68342 21.0976 9.31658 20.7071 9.70711L14.1213 16.2929C12.9498 17.4645 11.0503 17.4645 9.8787 16.2929L3.29289 9.70711C2.90237 9.31658 2.90237 8.68342 3.29289 8.29289Z" fill="currentColor" /></g></svg></button>
  <button class="ds-pagination__item">1</button>
  <button class="ds-pagination__item ds-pagination__item--active" aria-current="page">2</button>
  <button class="ds-pagination__item">3</button>
  <span class="ds-pagination__ellipsis"><svg data-icon="ellipsis" width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true"><g transform="rotate(90 12 12)"><circle cx="12" cy="12" r="2" fill="currentColor" /><circle cx="12" cy="19" r="2" fill="currentColor" /><circle cx="12" cy="5" r="2" fill="currentColor" /></g></svg></span>
  <button class="ds-pagination__item">10</button>
  <button class="ds-pagination__next" aria-label="Next page"><svg data-icon="chevron-right" width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true"><g transform="rotate(-90 12 12)"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.29289 8.29289C3.68342 7.90237 4.31658 7.90237 4.70711 8.29289L11.2929 14.8787C11.6834 15.2692 12.3166 15.2692 12.7071 14.8787L19.2929 8.29289C19.6834 7.90237 20.3166 7.90237 20.7071 8.29289C21.0976 8.68342 21.0976 9.31658 20.7071 9.70711L14.1213 16.2929C12.9498 17.4645 11.0503 17.4645 9.8787 16.2929L3.29289 9.70711C2.90237 9.31658 2.90237 8.68342 3.29289 8.29289Z" fill="currentColor" /></g></svg></button>
</nav>` }} />
        <details className="demo-code">
          <summary>View Code</summary>
          <pre><code dangerouslySetInnerHTML={{ __html: `&lt;nav class=&quot;ds-pagination&quot; aria-label=&quot;Pagination&quot;&gt;
  &lt;button class=&quot;ds-pagination__prev&quot; aria-label=&quot;Previous page&quot;&gt;&lt;svg data-icon=&quot;chevron-left&quot; width=&quot;20&quot; height=&quot;20&quot; viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; aria-hidden=&quot;true&quot;&gt;&lt;g transform=&quot;rotate(90 12 12)&quot;&gt;&lt;path fill-rule=&quot;evenodd&quot; clip-rule=&quot;evenodd&quot; d=&quot;M3.29289 8.29289C3.68342 7.90237 4.31658 7.90237 4.70711 8.29289L11.2929 14.8787C11.6834 15.2692 12.3166 15.2692 12.7071 14.8787L19.2929 8.29289C19.6834 7.90237 20.3166 7.90237 20.7071 8.29289C21.0976 8.68342 21.0976 9.31658 20.7071 9.70711L14.1213 16.2929C12.9498 17.4645 11.0503 17.4645 9.8787 16.2929L3.29289 9.70711C2.90237 9.31658 2.90237 8.68342 3.29289 8.29289Z&quot; fill=&quot;currentColor&quot; /&gt;&lt;/g&gt;&lt;/svg&gt;&lt;/button&gt;
  &lt;button class=&quot;ds-pagination__item&quot;&gt;1&lt;/button&gt;
  &lt;button class=&quot;ds-pagination__item ds-pagination__item--active&quot; aria-current=&quot;page&quot;&gt;2&lt;/button&gt;
  &lt;button class=&quot;ds-pagination__item&quot;&gt;3&lt;/button&gt;
  &lt;span class=&quot;ds-pagination__ellipsis&quot;&gt;&lt;svg data-icon=&quot;ellipsis&quot; width=&quot;20&quot; height=&quot;20&quot; viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; aria-hidden=&quot;true&quot;&gt;&lt;g transform=&quot;rotate(90 12 12)&quot;&gt;&lt;circle cx=&quot;12&quot; cy=&quot;12&quot; r=&quot;2&quot; fill=&quot;currentColor&quot; /&gt;&lt;circle cx=&quot;12&quot; cy=&quot;19&quot; r=&quot;2&quot; fill=&quot;currentColor&quot; /&gt;&lt;circle cx=&quot;12&quot; cy=&quot;5&quot; r=&quot;2&quot; fill=&quot;currentColor&quot; /&gt;&lt;/g&gt;&lt;/svg&gt;&lt;/span&gt;
  &lt;button class=&quot;ds-pagination__item&quot;&gt;10&lt;/button&gt;
  &lt;button class=&quot;ds-pagination__next&quot; aria-label=&quot;Next page&quot;&gt;&lt;svg data-icon=&quot;chevron-right&quot; width=&quot;20&quot; height=&quot;20&quot; viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; aria-hidden=&quot;true&quot;&gt;&lt;g transform=&quot;rotate(-90 12 12)&quot;&gt;&lt;path fill-rule=&quot;evenodd&quot; clip-rule=&quot;evenodd&quot; d=&quot;M3.29289 8.29289C3.68342 7.90237 4.31658 7.90237 4.70711 8.29289L11.2929 14.8787C11.6834 15.2692 12.3166 15.2692 12.7071 14.8787L19.2929 8.29289C19.6834 7.90237 20.3166 7.90237 20.7071 8.29289C21.0976 8.68342 21.0976 9.31658 20.7071 9.70711L14.1213 16.2929C12.9498 17.4645 11.0503 17.4645 9.8787 16.2929L3.29289 9.70711C2.90237 9.31658 2.90237 8.68342 3.29289 8.29289Z&quot; fill=&quot;currentColor&quot; /&gt;&lt;/g&gt;&lt;/svg&gt;&lt;/button&gt;
&lt;/nav&gt;` }} /></pre>
        </details>
      </section>

      <section className="demo-section">
        <h2 className="demo-section__title">Compact Pagination</h2>
        <div className="demo-preview" dangerouslySetInnerHTML={{ __html: `<nav class="ds-pagination ds-pagination--compact" aria-label="Pagination">
  <button class="ds-pagination__prev" disabled><svg data-icon="chevron-left" width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true"><g transform="rotate(90 12 12)"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.29289 8.29289C3.68342 7.90237 4.31658 7.90237 4.70711 8.29289L11.2929 14.8787C11.6834 15.2692 12.3166 15.2692 12.7071 14.8787L19.2929 8.29289C19.6834 7.90237 20.3166 7.90237 20.7071 8.29289C21.0976 8.68342 21.0976 9.31658 20.7071 9.70711L14.1213 16.2929C12.9498 17.4645 11.0503 17.4645 9.8787 16.2929L3.29289 9.70711C2.90237 9.31658 2.90237 8.68342 3.29289 8.29289Z" fill="currentColor" /></g></svg></button>
  <button class="ds-pagination__item ds-pagination__item--active">1</button>
  <button class="ds-pagination__item">2</button>
  <button class="ds-pagination__item">3</button>
  <button class="ds-pagination__next"><svg data-icon="chevron-right" width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true"><g transform="rotate(-90 12 12)"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.29289 8.29289C3.68342 7.90237 4.31658 7.90237 4.70711 8.29289L11.2929 14.8787C11.6834 15.2692 12.3166 15.2692 12.7071 14.8787L19.2929 8.29289C19.6834 7.90237 20.3166 7.90237 20.7071 8.29289C21.0976 8.68342 21.0976 9.31658 20.7071 9.70711L14.1213 16.2929C12.9498 17.4645 11.0503 17.4645 9.8787 16.2929L3.29289 9.70711C2.90237 9.31658 2.90237 8.68342 3.29289 8.29289Z" fill="currentColor" /></g></svg></button>
  <span class="ds-pagination__info">Page 1 of 3</span>
</nav>` }} />
        <details className="demo-code">
          <summary>View Code</summary>
          <pre><code dangerouslySetInnerHTML={{ __html: `&lt;nav class=&quot;ds-pagination ds-pagination--compact&quot; aria-label=&quot;Pagination&quot;&gt;
  &lt;button class=&quot;ds-pagination__prev&quot; disabled&gt;&lt;svg data-icon=&quot;chevron-left&quot; width=&quot;20&quot; height=&quot;20&quot; viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; aria-hidden=&quot;true&quot;&gt;&lt;g transform=&quot;rotate(90 12 12)&quot;&gt;&lt;path fill-rule=&quot;evenodd&quot; clip-rule=&quot;evenodd&quot; d=&quot;M3.29289 8.29289C3.68342 7.90237 4.31658 7.90237 4.70711 8.29289L11.2929 14.8787C11.6834 15.2692 12.3166 15.2692 12.7071 14.8787L19.2929 8.29289C19.6834 7.90237 20.3166 7.90237 20.7071 8.29289C21.0976 8.68342 21.0976 9.31658 20.7071 9.70711L14.1213 16.2929C12.9498 17.4645 11.0503 17.4645 9.8787 16.2929L3.29289 9.70711C2.90237 9.31658 2.90237 8.68342 3.29289 8.29289Z&quot; fill=&quot;currentColor&quot; /&gt;&lt;/g&gt;&lt;/svg&gt;&lt;/button&gt;
  &lt;button class=&quot;ds-pagination__item ds-pagination__item--active&quot;&gt;1&lt;/button&gt;
  &lt;button class=&quot;ds-pagination__item&quot;&gt;2&lt;/button&gt;
  &lt;button class=&quot;ds-pagination__item&quot;&gt;3&lt;/button&gt;
  &lt;button class=&quot;ds-pagination__next&quot;&gt;&lt;svg data-icon=&quot;chevron-right&quot; width=&quot;20&quot; height=&quot;20&quot; viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; aria-hidden=&quot;true&quot;&gt;&lt;g transform=&quot;rotate(-90 12 12)&quot;&gt;&lt;path fill-rule=&quot;evenodd&quot; clip-rule=&quot;evenodd&quot; d=&quot;M3.29289 8.29289C3.68342 7.90237 4.31658 7.90237 4.70711 8.29289L11.2929 14.8787C11.6834 15.2692 12.3166 15.2692 12.7071 14.8787L19.2929 8.29289C19.6834 7.90237 20.3166 7.90237 20.7071 8.29289C21.0976 8.68342 21.0976 9.31658 20.7071 9.70711L14.1213 16.2929C12.9498 17.4645 11.0503 17.4645 9.8787 16.2929L3.29289 9.70711C2.90237 9.31658 2.90237 8.68342 3.29289 8.29289Z&quot; fill=&quot;currentColor&quot; /&gt;&lt;/g&gt;&lt;/svg&gt;&lt;/button&gt;
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
