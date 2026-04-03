export default function StarRatingPage() {
  return (
    <>
      <div className="demo-page-header">
        <h1>Star Rating</h1>
        <p>Display or input star ratings with half-star support.</p>
      </div>

      <section className="demo-section">
        <h2 className="demo-section__title">Display</h2>
        <div className="demo-preview" dangerouslySetInnerHTML={{ __html: `<div class="ds-star-rating">
  <span class="ds-star-rating__star ds-star-rating__star--filled">&#9733;</span>
  <span class="ds-star-rating__star ds-star-rating__star--filled">&#9733;</span>
  <span class="ds-star-rating__star ds-star-rating__star--filled">&#9733;</span>
  <span class="ds-star-rating__star ds-star-rating__star--filled">&#9733;</span>
  <span class="ds-star-rating__star">&#9733;</span>
  <span class="ds-star-rating__value">4.0</span>
  <span class="ds-star-rating__count">(128)</span>
</div>` }} />
        <details className="demo-code">
          <summary>View Code</summary>
          <pre><code dangerouslySetInnerHTML={{ __html: `&lt;div class=&quot;ds-star-rating&quot;&gt;
  &lt;span class=&quot;ds-star-rating__star ds-star-rating__star--filled&quot;&gt;&amp;#9733;&lt;/span&gt;
  &lt;span class=&quot;ds-star-rating__star ds-star-rating__star--filled&quot;&gt;&amp;#9733;&lt;/span&gt;
  &lt;span class=&quot;ds-star-rating__star ds-star-rating__star--filled&quot;&gt;&amp;#9733;&lt;/span&gt;
  &lt;span class=&quot;ds-star-rating__star ds-star-rating__star--filled&quot;&gt;&amp;#9733;&lt;/span&gt;
  &lt;span class=&quot;ds-star-rating__star&quot;&gt;&amp;#9733;&lt;/span&gt;
  &lt;span class=&quot;ds-star-rating__value&quot;&gt;4.0&lt;/span&gt;
  &lt;span class=&quot;ds-star-rating__count&quot;&gt;(128)&lt;/span&gt;
&lt;/div&gt;` }} /></pre>
        </details>
      </section>

      <section className="demo-section">
        <h2 className="demo-section__title">Interactive</h2>
        <div className="demo-preview" dangerouslySetInnerHTML={{ __html: `<div class="ds-star-rating ds-star-rating--interactive">
  <button class="ds-star-rating__star ds-star-rating__star--filled">&#9733;</button>
  <button class="ds-star-rating__star ds-star-rating__star--filled">&#9733;</button>
  <button class="ds-star-rating__star ds-star-rating__star--filled">&#9733;</button>
  <button class="ds-star-rating__star">&#9733;</button>
  <button class="ds-star-rating__star">&#9733;</button>
</div>` }} />
        <details className="demo-code">
          <summary>View Code</summary>
          <pre><code dangerouslySetInnerHTML={{ __html: `&lt;div class=&quot;ds-star-rating ds-star-rating--interactive&quot;&gt;
  &lt;button class=&quot;ds-star-rating__star ds-star-rating__star--filled&quot;&gt;&amp;#9733;&lt;/button&gt;
  &lt;button class=&quot;ds-star-rating__star ds-star-rating__star--filled&quot;&gt;&amp;#9733;&lt;/button&gt;
  &lt;button class=&quot;ds-star-rating__star ds-star-rating__star--filled&quot;&gt;&amp;#9733;&lt;/button&gt;
  &lt;button class=&quot;ds-star-rating__star&quot;&gt;&amp;#9733;&lt;/button&gt;
  &lt;button class=&quot;ds-star-rating__star&quot;&gt;&amp;#9733;&lt;/button&gt;
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
                <td><code>.ds-star-rating</code></td>
                <td>Base</td>
              </tr>
              <tr>
                <td><code>__star</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>__value</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>__count</code></td>
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
                <td><code>--interactive</code></td>
                <td>Modifier</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
