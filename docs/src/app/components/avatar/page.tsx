export default function AvatarPage() {
  return (
    <>
      <div className="demo-page-header">
        <h1>Avatar</h1>
        <p>User photos, token images, initials. Stackable in groups.</p>
      </div>

      <section className="demo-section">
        <h2 className="demo-section__title">Sizes</h2>
        <div className="demo-preview" dangerouslySetInnerHTML={{ __html: `<span class="ds-avatar ds-avatar--xs">XS</span>
<span class="ds-avatar ds-avatar--sm">SM</span>
<span class="ds-avatar">MD</span>
<span class="ds-avatar ds-avatar--lg">LG</span>
<span class="ds-avatar ds-avatar--xl">XL</span>` }} />
        <details className="demo-code">
          <summary>View React Code</summary>
          <pre><code dangerouslySetInnerHTML={{ __html: `&lt;Avatar size=&quot;xs&quot;&gt;XS&lt;/Avatar&gt;
&lt;Avatar size=&quot;sm&quot;&gt;SM&lt;/Avatar&gt;
&lt;Avatar&gt;MD&lt;/Avatar&gt;
&lt;Avatar size=&quot;lg&quot;&gt;LG&lt;/Avatar&gt;
&lt;Avatar size=&quot;xl&quot;&gt;XL&lt;/Avatar&gt;` }} /></pre>
        </details>
      </section>

      <section className="demo-section">
        <h2 className="demo-section__title">With Status</h2>
        <div className="demo-preview" dangerouslySetInnerHTML={{ __html: `<div class="ds-avatar-group">
  <span class="ds-avatar ds-avatar--bordered">AB</span>
  <span class="ds-avatar ds-avatar--bordered">CD</span>
  <span class="ds-avatar ds-avatar--bordered">EF</span>
  <span class="ds-avatar ds-avatar--bordered">+3</span>
</div>` }} />
        <details className="demo-code">
          <summary>View React Code</summary>
          <pre><code dangerouslySetInnerHTML={{ __html: `&lt;Avatar&gt;
  RM
  &lt;Avatar.Status variant=&quot;online&quot; /&gt;
&lt;/Avatar&gt;
&lt;Avatar&gt;AB&lt;Avatar.Status variant=&quot;busy&quot; /&gt;&lt;/Avatar&gt;` }} /></pre>
        </details>
      </section>

      <section className="demo-section">
        <h2 className="demo-section__title">Avatar Group</h2>
        <div className="demo-preview" dangerouslySetInnerHTML={{ __html: `<span class="ds-avatar">
  JD
  <span class="ds-avatar__status ds-avatar__status--online"></span>
</span>
<span class="ds-avatar">
  AK
  <span class="ds-avatar__status ds-avatar__status--busy"></span>
</span>
<span class="ds-avatar">
  MR
  <span class="ds-avatar__status ds-avatar__status--offline"></span>
</span>` }} />
        <details className="demo-code">
          <summary>View React Code</summary>
          <pre><code dangerouslySetInnerHTML={{ __html: `&lt;AvatarGroup&gt;
  &lt;Avatar size=&quot;sm&quot; bordered&gt;A&lt;/Avatar&gt;
  &lt;Avatar size=&quot;sm&quot; bordered&gt;B&lt;/Avatar&gt;
  &lt;Avatar size=&quot;sm&quot; bordered&gt;+3&lt;/Avatar&gt;
&lt;/AvatarGroup&gt;` }} /></pre>
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
                <td><code>.ds-avatar</code></td>
                <td>Base</td>
              </tr>
              <tr>
                <td><code>.ds-avatar-group</code></td>
                <td>Base</td>
              </tr>
              <tr>
                <td><code>__status</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>--square</code></td>
                <td>Variant</td>
              </tr>
              <tr>
                <td><code>--bordered</code></td>
                <td>Variant</td>
              </tr>
              <tr>
                <td><code>--xs</code></td>
                <td>Size</td>
              </tr>
              <tr>
                <td><code>--sm</code></td>
                <td>Size</td>
              </tr>
              <tr>
                <td><code>--md</code></td>
                <td>Size</td>
              </tr>
              <tr>
                <td><code>--lg</code></td>
                <td>Size</td>
              </tr>
              <tr>
                <td><code>--xl</code></td>
                <td>Size</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
