export default function TimelinePage() {
  return (
    <>
      <div className="demo-page-header">
        <h1>Timeline</h1>
        <p>Vertical timeline for roadmaps, activity feeds, and step-based flows.</p>
      </div>

      <section className="demo-section">
        <h2 className="demo-section__title">Activity Timeline</h2>
        <div className="demo-preview" dangerouslySetInnerHTML={{ __html: `<div class="ds-timeline">
  <div class="ds-timeline__item ds-timeline__item--completed">
    <div class="ds-timeline__dot"></div>
    <div class="ds-timeline__content">
      <div class="ds-timeline__title">Project Created</div>
      <div class="ds-timeline__description">Initial repository setup and configuration.</div>
      <div class="ds-timeline__time">3 days ago</div>
    </div>
  </div>
  <div class="ds-timeline__item ds-timeline__item--completed">
    <div class="ds-timeline__dot"></div>
    <div class="ds-timeline__content">
      <div class="ds-timeline__title">Design Review</div>
      <div class="ds-timeline__description">UI mockups approved by the team.</div>
      <div class="ds-timeline__time">2 days ago</div>
    </div>
  </div>
  <div class="ds-timeline__item ds-timeline__item--current">
    <div class="ds-timeline__dot"></div>
    <div class="ds-timeline__content">
      <div class="ds-timeline__title">Development</div>
      <div class="ds-timeline__description">Building core components and layout.</div>
      <div class="ds-timeline__time">In progress</div>
    </div>
  </div>
  <div class="ds-timeline__item">
    <div class="ds-timeline__dot"></div>
    <div class="ds-timeline__content">
      <div class="ds-timeline__title">Testing</div>
      <div class="ds-timeline__description">QA and cross-browser testing.</div>
    </div>
  </div>
</div>` }} />
        <details className="demo-code">
          <summary>View Code</summary>
          <pre><code dangerouslySetInnerHTML={{ __html: `&lt;div class=&quot;ds-timeline&quot;&gt;
  &lt;div class=&quot;ds-timeline__item ds-timeline__item--completed&quot;&gt;
    &lt;div class=&quot;ds-timeline__dot&quot;&gt;&lt;/div&gt;
    &lt;div class=&quot;ds-timeline__content&quot;&gt;
      &lt;div class=&quot;ds-timeline__title&quot;&gt;Project Created&lt;/div&gt;
      &lt;div class=&quot;ds-timeline__description&quot;&gt;Initial repository setup and configuration.&lt;/div&gt;
      &lt;div class=&quot;ds-timeline__time&quot;&gt;3 days ago&lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class=&quot;ds-timeline__item ds-timeline__item--completed&quot;&gt;
    &lt;div class=&quot;ds-timeline__dot&quot;&gt;&lt;/div&gt;
    &lt;div class=&quot;ds-timeline__content&quot;&gt;
      &lt;div class=&quot;ds-timeline__title&quot;&gt;Design Review&lt;/div&gt;
      &lt;div class=&quot;ds-timeline__description&quot;&gt;UI mockups approved by the team.&lt;/div&gt;
      &lt;div class=&quot;ds-timeline__time&quot;&gt;2 days ago&lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class=&quot;ds-timeline__item ds-timeline__item--current&quot;&gt;
    &lt;div class=&quot;ds-timeline__dot&quot;&gt;&lt;/div&gt;
    &lt;div class=&quot;ds-timeline__content&quot;&gt;
      &lt;div class=&quot;ds-timeline__title&quot;&gt;Development&lt;/div&gt;
      &lt;div class=&quot;ds-timeline__description&quot;&gt;Building core components and layout.&lt;/div&gt;
      &lt;div class=&quot;ds-timeline__time&quot;&gt;In progress&lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class=&quot;ds-timeline__item&quot;&gt;
    &lt;div class=&quot;ds-timeline__dot&quot;&gt;&lt;/div&gt;
    &lt;div class=&quot;ds-timeline__content&quot;&gt;
      &lt;div class=&quot;ds-timeline__title&quot;&gt;Testing&lt;/div&gt;
      &lt;div class=&quot;ds-timeline__description&quot;&gt;QA and cross-browser testing.&lt;/div&gt;
    &lt;/div&gt;
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
                <td><code>.ds-timeline</code></td>
                <td>Base</td>
              </tr>
              <tr>
                <td><code>__item</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>__dot</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>__content</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>__title</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>__description</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>__time</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>--compact</code></td>
                <td>Variant</td>
              </tr>
              <tr>
                <td><code>--completed</code></td>
                <td>Modifier</td>
              </tr>
              <tr>
                <td><code>--current</code></td>
                <td>Modifier</td>
              </tr>
              <tr>
                <td><code>--error</code></td>
                <td>Modifier</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
