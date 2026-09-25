export default function Home() {
  return (
    <>
      <div className="demo-page-header demo-intro-header">
        <h1>Design System</h1>
        {/* No counts and no component list here. Both went stale, and the
            list was the worse of the two: it kept naming components that had
            already been retired. The sidebar sits right beside this page and
            is generated from the real inventory. It is the list. */}
        <p>Interactive React components, built on top of the CSS components and design tokens.</p>
      </div>

      <div className="demo-intro">
        <section className="demo-section">
          <h2 className="demo-section__title">Quick Start</h2>
          <div className="demo-preview demo-preview--col">
            <code className="ds-font-mono ds-text-sm ds-text-secondary">
              npm install @adamarant/designsystem @adamarant/ds-react
            </code>
          </div>
        </section>
      </div>
    </>
  );
}
