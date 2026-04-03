export default function HeroPage() {
  return (
    <>
      <div className="demo-page-header">
        <h1>Hero</h1>
        <p>Full-width hero section with background image, gradient overlay, and optional frosted glass backdrop.</p>
      </div>

      <section className="demo-section">
        <h2 className="demo-section__title">Basic Hero</h2>
        <div className="demo-preview" dangerouslySetInnerHTML={{ __html: `<section class="ds-hero" style="background-image: url(https://picsum.photos/1200/600)">
  <div class="ds-hero__overlay"></div>
  <div class="ds-hero__content ds-container">
    <div class="ds-hero__backdrop">
      <h1 class="ds-hero__title ds-hero-title">Welcome</h1>
      <p class="ds-hero__subtitle">A beautiful hero section</p>
    </div>
  </div>
</section>` }} />
        <details className="demo-code">
          <summary>View Code</summary>
          <pre><code dangerouslySetInnerHTML={{ __html: `&lt;section class=&quot;ds-hero&quot; style=&quot;background-image: url(https://picsum.photos/1200/600)&quot;&gt;
  &lt;div class=&quot;ds-hero__overlay&quot;&gt;&lt;/div&gt;
  &lt;div class=&quot;ds-hero__content ds-container&quot;&gt;
    &lt;div class=&quot;ds-hero__backdrop&quot;&gt;
      &lt;h1 class=&quot;ds-hero__title ds-hero-title&quot;&gt;Welcome&lt;/h1&gt;
      &lt;p class=&quot;ds-hero__subtitle&quot;&gt;A beautiful hero section&lt;/p&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/section&gt;` }} /></pre>
        </details>
      </section>

      <section className="demo-section">
        <h2 className="demo-section__title">Full Variant</h2>
        <div className="demo-preview" dangerouslySetInnerHTML={{ __html: `<section class="ds-hero ds-hero--full" style="background-image: url(https://picsum.photos/1200/600)">
  <div class="ds-hero__overlay ds-hero__overlay--subtle"></div>
  <div class="ds-hero__content ds-container">
    <div class="ds-hero__backdrop">
      <h1 class="ds-hero__title ds-hero-title">Full Hero</h1>
      <p class="ds-hero__subtitle">With subtle overlay</p>
    </div>
  </div>
</section>` }} />
        <details className="demo-code">
          <summary>View Code</summary>
          <pre><code dangerouslySetInnerHTML={{ __html: `&lt;section class=&quot;ds-hero ds-hero--full&quot; style=&quot;background-image: url(https://picsum.photos/1200/600)&quot;&gt;
  &lt;div class=&quot;ds-hero__overlay ds-hero__overlay--subtle&quot;&gt;&lt;/div&gt;
  &lt;div class=&quot;ds-hero__content ds-container&quot;&gt;
    &lt;div class=&quot;ds-hero__backdrop&quot;&gt;
      &lt;h1 class=&quot;ds-hero__title ds-hero-title&quot;&gt;Full Hero&lt;/h1&gt;
      &lt;p class=&quot;ds-hero__subtitle&quot;&gt;With subtle overlay&lt;/p&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/section&gt;` }} /></pre>
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
                <td><code>.ds-hero</code></td>
                <td>Base</td>
              </tr>
              <tr>
                <td><code>__overlay</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>__content</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>__backdrop</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>__title</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>__subtitle</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>--full</code></td>
                <td>Variant</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
