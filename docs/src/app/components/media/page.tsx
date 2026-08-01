export default function MediaPage() {
  return (
    <>
      <div className="demo-page-header">
        <h1>Media</h1>
        <p>Standalone image/video frame: full width, cropped, rounded. For media that is not inside a clipping card.</p>
      </div>

      <section className="demo-section">
        <h2 className="demo-section__title">Cover image, 16:9</h2>
        <div className="demo-preview" dangerouslySetInnerHTML={{ __html: `<img class="ds-media ds-media--video" src="/cover.jpg" alt="">` }} />
        <details className="demo-code">
          <summary>View Code</summary>
          <pre><code dangerouslySetInnerHTML={{ __html: `&lt;img class=&quot;ds-media ds-media--video&quot; src=&quot;/cover.jpg&quot; alt=&quot;&quot;&gt;` }} /></pre>
        </details>
      </section>

      <section className="demo-section">
        <h2 className="demo-section__title">Showcase image, intrinsic height</h2>
        <div className="demo-preview" dangerouslySetInnerHTML={{ __html: `<img class="ds-media ds-media--auto ds-media--2xl" src="/shot.png" alt="">` }} />
        <details className="demo-code">
          <summary>View Code</summary>
          <pre><code dangerouslySetInnerHTML={{ __html: `&lt;img class=&quot;ds-media ds-media--auto ds-media--2xl&quot; src=&quot;/shot.png&quot; alt=&quot;&quot;&gt;` }} /></pre>
        </details>
      </section>

      <section className="demo-section">
        <h2 className="demo-section__title">Frame that clips its children</h2>
        <div className="demo-preview" dangerouslySetInnerHTML={{ __html: `<div class="ds-media-frame ds-media-frame--xl">
  <video src="/clip.mp4" autoplay loop muted></video>
</div>` }} />
        <details className="demo-code">
          <summary>View Code</summary>
          <pre><code dangerouslySetInnerHTML={{ __html: `&lt;div class=&quot;ds-media-frame ds-media-frame--xl&quot;&gt;
  &lt;video src=&quot;/clip.mp4&quot; autoplay loop muted&gt;&lt;/video&gt;
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
                <td><code>.ds-media</code></td>
                <td>Base</td>
              </tr>
              <tr>
                <td><code>.ds-media-frame</code></td>
                <td>Base</td>
              </tr>
              <tr>
                <td><code>--video</code></td>
                <td>Variant</td>
              </tr>
              <tr>
                <td><code>--square</code></td>
                <td>Variant</td>
              </tr>
              <tr>
                <td><code>--wide</code></td>
                <td>Variant</td>
              </tr>
              <tr>
                <td><code>--auto</code></td>
                <td>Variant</td>
              </tr>
              <tr>
                <td><code>--xl</code></td>
                <td>Variant</td>
              </tr>
              <tr>
                <td><code>--2xl</code></td>
                <td>Variant</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
