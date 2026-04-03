export default function ProsePage() {
  return (
    <>
      <div className="demo-page-header">
        <h1>Prose Block</h1>
        <p>Full markdown-rendered content styling for CMS output, blog posts, and documentation.</p>
      </div>

      <section className="demo-section">
        <h2 className="demo-section__title">Rich Text</h2>
        <div className="demo-preview" dangerouslySetInnerHTML={{ __html: `<div class="ds-prose-block">
  <h2>Heading</h2>
  <p>Paragraph with <a href="#">link</a> and <code>inline code</code>.</p>
  <pre><code>const x = 42;</code></pre>
  <blockquote>A blockquote</blockquote>
  <ul><li>List item one</li><li>List item two</li></ul>
</div>` }} />
        <details className="demo-code">
          <summary>View Code</summary>
          <pre><code dangerouslySetInnerHTML={{ __html: `&lt;div class=&quot;ds-prose-block&quot;&gt;
  &lt;h2&gt;Heading&lt;/h2&gt;
  &lt;p&gt;Paragraph with &lt;a href=&quot;#&quot;&gt;link&lt;/a&gt; and &lt;code&gt;inline code&lt;/code&gt;.&lt;/p&gt;
  &lt;pre&gt;&lt;code&gt;const x = 42;&lt;/code&gt;&lt;/pre&gt;
  &lt;blockquote&gt;A blockquote&lt;/blockquote&gt;
  &lt;ul&gt;&lt;li&gt;List item one&lt;/li&gt;&lt;li&gt;List item two&lt;/li&gt;&lt;/ul&gt;
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
                <td><code>.ds-prose-block</code></td>
                <td>Base</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
