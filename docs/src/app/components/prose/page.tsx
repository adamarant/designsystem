export default function ProsePage() {
  return (
    <>
      <div className="demo-page-header">
        <h1>Prose & Editorial</h1>
        <p>Long-form reading typography. ds-prose-block is a full markdown-rendered container (functional / docs / CMS output). ds-editorial-title, ds-editorial-lede and ds-editorial-body are the editorial long-form family for articles, blog posts and magazine layouts (promoted from esys blog 12 Apr 2026 — fills the gap between ds-hero-title which is too big and ds-prose-block whose h2 is too heavy for article rhythm).</p>
      </div>

      <section className="demo-section">
        <h2 className="demo-section__title">Rich Text (docs / CMS output)</h2>
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
        <h2 className="demo-section__title">Editorial Article (blog / magazine)</h2>
        <div className="demo-preview" dangerouslySetInnerHTML={{ __html: `<article>
  <header>
    <span class="ds-overline">Journal</span>
    <h1 class="ds-editorial-title">The title of the article, fluid from 40 to 72px</h1>
    <p class="ds-editorial-lede">The lead paragraph sits between the title and the body, larger than body text, guiding the reader in.</p>
  </header>
  <div class="ds-editorial-body">
    <p>Body text at 17px with generous line-height for comfortable long-form reading.</p>
    <h2>A section heading</h2>
    <p>More body text follows. The <strong>h2 is 24px</strong>, not 36px — reading rhythm preserved.</p>
    <h3>A subsection</h3>
    <p>h3 is 20px. Never use <code>ds-prose-block</code> for article bodies — its h2 is too heavy.</p>
  </div>
</article>` }} />
        <details className="demo-code">
          <summary>View Code</summary>
          <pre><code dangerouslySetInnerHTML={{ __html: `&lt;article&gt;
  &lt;header&gt;
    &lt;span class=&quot;ds-overline&quot;&gt;Journal&lt;/span&gt;
    &lt;h1 class=&quot;ds-editorial-title&quot;&gt;The title of the article, fluid from 40 to 72px&lt;/h1&gt;
    &lt;p class=&quot;ds-editorial-lede&quot;&gt;The lead paragraph sits between the title and the body, larger than body text, guiding the reader in.&lt;/p&gt;
  &lt;/header&gt;
  &lt;div class=&quot;ds-editorial-body&quot;&gt;
    &lt;p&gt;Body text at 17px with generous line-height for comfortable long-form reading.&lt;/p&gt;
    &lt;h2&gt;A section heading&lt;/h2&gt;
    &lt;p&gt;More body text follows. The &lt;strong&gt;h2 is 24px&lt;/strong&gt;, not 36px — reading rhythm preserved.&lt;/p&gt;
    &lt;h3&gt;A subsection&lt;/h3&gt;
    &lt;p&gt;h3 is 20px. Never use &lt;code&gt;ds-prose-block&lt;/code&gt; for article bodies — its h2 is too heavy.&lt;/p&gt;
  &lt;/div&gt;
&lt;/article&gt;` }} /></pre>
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
              <tr>
                <td><code>.ds-editorial-title</code></td>
                <td>Base</td>
              </tr>
              <tr>
                <td><code>.ds-editorial-lede</code></td>
                <td>Base</td>
              </tr>
              <tr>
                <td><code>.ds-editorial-body</code></td>
                <td>Base</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
