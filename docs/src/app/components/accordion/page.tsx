export default function AccordionPage() {
  return (
    <>
      <div className="demo-page-header">
        <h1>Accordion</h1>
        <p>A vertically stacked set of collapsible sections. CSS-only open/close via modifier.</p>
      </div>

      <section className="demo-section">
        <h2 className="demo-section__title">Default Accordion</h2>
        <div className="demo-preview" dangerouslySetInnerHTML={{ __html: `<div class="ds-accordion">
  <div class="ds-accordion__item ds-accordion__item--open">
    <button class="ds-accordion__trigger">What is this design system?</button>
    <div class="ds-accordion__content">
      <div class="ds-accordion__body">A CSS-only design system with zero dependencies. Install anywhere, override tokens, nothing breaks.</div>
    </div>
  </div>
  <div class="ds-accordion__item">
    <button class="ds-accordion__trigger">How do I install it?</button>
    <div class="ds-accordion__content">
      <div class="ds-accordion__body">Install via npm and import the CSS bundle into your project.</div>
    </div>
  </div>
  <div class="ds-accordion__item">
    <button class="ds-accordion__trigger">Can I customize the theme?</button>
    <div class="ds-accordion__content">
      <div class="ds-accordion__body">Yes, override any CSS custom property to match your brand.</div>
    </div>
  </div>
</div>` }} />
        <details className="demo-code">
          <summary>View Code</summary>
          <pre><code dangerouslySetInnerHTML={{ __html: `&lt;div class=&quot;ds-accordion&quot;&gt;
  &lt;div class=&quot;ds-accordion__item ds-accordion__item--open&quot;&gt;
    &lt;button class=&quot;ds-accordion__trigger&quot;&gt;What is this design system?&lt;/button&gt;
    &lt;div class=&quot;ds-accordion__content&quot;&gt;
      &lt;div class=&quot;ds-accordion__body&quot;&gt;A CSS-only design system with zero dependencies. Install anywhere, override tokens, nothing breaks.&lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class=&quot;ds-accordion__item&quot;&gt;
    &lt;button class=&quot;ds-accordion__trigger&quot;&gt;How do I install it?&lt;/button&gt;
    &lt;div class=&quot;ds-accordion__content&quot;&gt;
      &lt;div class=&quot;ds-accordion__body&quot;&gt;Install via npm and import the CSS bundle into your project.&lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class=&quot;ds-accordion__item&quot;&gt;
    &lt;button class=&quot;ds-accordion__trigger&quot;&gt;Can I customize the theme?&lt;/button&gt;
    &lt;div class=&quot;ds-accordion__content&quot;&gt;
      &lt;div class=&quot;ds-accordion__body&quot;&gt;Yes, override any CSS custom property to match your brand.&lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;` }} /></pre>
        </details>
      </section>

      <section className="demo-section">
        <h2 className="demo-section__title">Separated Accordion</h2>
        <div className="demo-preview" dangerouslySetInnerHTML={{ __html: `<div class="ds-accordion ds-accordion--separated">
  <div class="ds-accordion__item ds-accordion__item--open">
    <button class="ds-accordion__trigger">Account Settings</button>
    <div class="ds-accordion__content">
      <div class="ds-accordion__body">Manage your account preferences and security settings.</div>
    </div>
  </div>
  <div class="ds-accordion__item">
    <button class="ds-accordion__trigger">Notifications</button>
    <div class="ds-accordion__content">
      <div class="ds-accordion__body">Configure how and when you receive notifications.</div>
    </div>
  </div>
</div>` }} />
        <details className="demo-code">
          <summary>View Code</summary>
          <pre><code dangerouslySetInnerHTML={{ __html: `&lt;div class=&quot;ds-accordion ds-accordion--separated&quot;&gt;
  &lt;div class=&quot;ds-accordion__item ds-accordion__item--open&quot;&gt;
    &lt;button class=&quot;ds-accordion__trigger&quot;&gt;Account Settings&lt;/button&gt;
    &lt;div class=&quot;ds-accordion__content&quot;&gt;
      &lt;div class=&quot;ds-accordion__body&quot;&gt;Manage your account preferences and security settings.&lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class=&quot;ds-accordion__item&quot;&gt;
    &lt;button class=&quot;ds-accordion__trigger&quot;&gt;Notifications&lt;/button&gt;
    &lt;div class=&quot;ds-accordion__content&quot;&gt;
      &lt;div class=&quot;ds-accordion__body&quot;&gt;Configure how and when you receive notifications.&lt;/div&gt;
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
                <td><code>.ds-accordion</code></td>
                <td>Base</td>
              </tr>
              <tr>
                <td><code>__item</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>__trigger</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>__content</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>__body</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>--flush</code></td>
                <td>Variant</td>
              </tr>
              <tr>
                <td><code>--separated</code></td>
                <td>Variant</td>
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
