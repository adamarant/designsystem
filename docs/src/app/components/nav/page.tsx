export default function NavPage() {
  return (
    <>
      <div className="demo-page-header">
        <h1>Navigation</h1>
        <p>Fixed glass header, backdrop-blur, h-16. Clean links.</p>
      </div>

      <section className="demo-section">
        <h2 className="demo-section__title">Top Navigation</h2>
        <div className="demo-preview" dangerouslySetInnerHTML={{ __html: `<nav class="ds-nav ds-nav--static">
  <div class="ds-nav__inner">
    <a class="ds-nav__brand" href="#">Acme Inc</a>
    <div class="ds-nav__menu">
      <a class="ds-nav__link ds-nav__link--active" href="#">Dashboard</a>
      <a class="ds-nav__link" href="#">Projects</a>
      <a class="ds-nav__link" href="#">Settings</a>
    </div>
    <div class="ds-nav__actions">
      <button class="ds-nav__icon-btn" aria-label="Toggle theme"><svg data-icon="moon" width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M20.9638 12.7674C19.8361 13.5447 18.4693 13.9998 16.9961 13.9998C13.1301 13.9998 9.99609 10.8657 9.99609 6.99975C9.99609 5.52667 10.4511 4.15987 11.2283 3.03223C6.61911 3.42277 3 7.28768 3 11.9979C3 16.9674 7.0286 20.996 11.9981 20.996C16.7084 20.996 20.5734 17.3767 20.9638 12.7674Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></svg></button>
    </div>
  </div>
</nav>` }} />
        <details className="demo-code">
          <summary>View Code</summary>
          <pre><code dangerouslySetInnerHTML={{ __html: `&lt;nav class=&quot;ds-nav ds-nav--static&quot;&gt;
  &lt;div class=&quot;ds-nav__inner&quot;&gt;
    &lt;a class=&quot;ds-nav__brand&quot; href=&quot;#&quot;&gt;Acme Inc&lt;/a&gt;
    &lt;div class=&quot;ds-nav__menu&quot;&gt;
      &lt;a class=&quot;ds-nav__link ds-nav__link--active&quot; href=&quot;#&quot;&gt;Dashboard&lt;/a&gt;
      &lt;a class=&quot;ds-nav__link&quot; href=&quot;#&quot;&gt;Projects&lt;/a&gt;
      &lt;a class=&quot;ds-nav__link&quot; href=&quot;#&quot;&gt;Settings&lt;/a&gt;
    &lt;/div&gt;
    &lt;div class=&quot;ds-nav__actions&quot;&gt;
      &lt;button class=&quot;ds-nav__icon-btn&quot; aria-label=&quot;Toggle theme&quot;&gt;&lt;svg data-icon=&quot;moon&quot; width=&quot;16&quot; height=&quot;16&quot; viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; aria-hidden=&quot;true&quot;&gt;&lt;path d=&quot;M20.9638 12.7674C19.8361 13.5447 18.4693 13.9998 16.9961 13.9998C13.1301 13.9998 9.99609 10.8657 9.99609 6.99975C9.99609 5.52667 10.4511 4.15987 11.2283 3.03223C6.61911 3.42277 3 7.28768 3 11.9979C3 16.9674 7.0286 20.996 11.9981 20.996C16.7084 20.996 20.5734 17.3767 20.9638 12.7674Z&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; /&gt;&lt;/svg&gt;&lt;/button&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/nav&gt;` }} /></pre>
        </details>
      </section>

      <section className="demo-section">
        <h2 className="demo-section__title">Sidebar</h2>
        <div className="demo-preview" dangerouslySetInnerHTML={{ __html: `<aside class="ds-sidebar">
  <div class="ds-sidebar__section">
    <div class="ds-sidebar__title">Main</div>
    <a class="ds-sidebar__link ds-sidebar__link--active" href="#">Dashboard</a>
    <a class="ds-sidebar__link" href="#">Analytics</a>
    <a class="ds-sidebar__link" href="#">Reports</a>
  </div>
  <div class="ds-sidebar__section">
    <div class="ds-sidebar__title">Settings</div>
    <a class="ds-sidebar__link" href="#">Profile</a>
    <a class="ds-sidebar__link" href="#">Billing</a>
  </div>
</aside>` }} />
        <details className="demo-code">
          <summary>View Code</summary>
          <pre><code dangerouslySetInnerHTML={{ __html: `&lt;aside class=&quot;ds-sidebar&quot;&gt;
  &lt;div class=&quot;ds-sidebar__section&quot;&gt;
    &lt;div class=&quot;ds-sidebar__title&quot;&gt;Main&lt;/div&gt;
    &lt;a class=&quot;ds-sidebar__link ds-sidebar__link--active&quot; href=&quot;#&quot;&gt;Dashboard&lt;/a&gt;
    &lt;a class=&quot;ds-sidebar__link&quot; href=&quot;#&quot;&gt;Analytics&lt;/a&gt;
    &lt;a class=&quot;ds-sidebar__link&quot; href=&quot;#&quot;&gt;Reports&lt;/a&gt;
  &lt;/div&gt;
  &lt;div class=&quot;ds-sidebar__section&quot;&gt;
    &lt;div class=&quot;ds-sidebar__title&quot;&gt;Settings&lt;/div&gt;
    &lt;a class=&quot;ds-sidebar__link&quot; href=&quot;#&quot;&gt;Profile&lt;/a&gt;
    &lt;a class=&quot;ds-sidebar__link&quot; href=&quot;#&quot;&gt;Billing&lt;/a&gt;
  &lt;/div&gt;
&lt;/aside&gt;` }} /></pre>
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
                <td><code>.ds-nav</code></td>
                <td>Base</td>
              </tr>
              <tr>
                <td><code>.ds-sidebar</code></td>
                <td>Base</td>
              </tr>
              <tr>
                <td><code>__inner</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>__brand</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>__menu</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>__link</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>__actions</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>__icon-btn</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>__mobile</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>__mobile-links</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>__section</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>__title</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>--static</code></td>
                <td>Variant</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
