/* The icon inventory.

   Every glyph below is copied verbatim from the ds-react source, because ten
   of the eleven are module-private and cannot be imported. That duplication is
   deliberate and temporary: this page exists to make the current state visible
   so it can be decided on, and the copy is the only way to render marks the
   package does not export. Geometry is byte-identical to the source — if you
   change an icon in ds-react, change it here too until the decision lands. */

type Glyph = {
  /** What the mark depicts, not what the function is called. */
  mark: string;
  /** Exported name in ds-react. */
  name: string;
  file: string;
  line: number;
  /** viewBox edge. Three different values are in use. */
  grid: 14 | 16 | 24;
  stroke: number;
  /** Rendered box in px, or "css" when a stylesheet sizes it. */
  rendered: number | "css";
  exported: boolean;
  d: React.ReactNode;
};

const GLYPHS: Glyph[] = [
  {
    mark: "Menu",
    name: "BurgerIcon",
    file: "SiteHeader.tsx",
    line: 89,
    grid: 24,
    stroke: 2,
    rendered: 24,
    exported: true,
    d: (
      <>
        <line x1="3" y1="8" x2="21" y2="8" />
        <line x1="3" y1="16" x2="21" y2="16" />
      </>
    ),
  },
  {
    mark: "Close",
    name: "BurgerIcon open",
    file: "SiteHeader.tsx",
    line: 89,
    grid: 24,
    stroke: 2,
    rendered: 24,
    exported: true,
    d: (
      <>
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
      </>
    ),
  },
  {
    mark: "Close",
    name: "CloseIcon",
    file: "Select.tsx",
    line: 135,
    grid: 24,
    stroke: 2,
    rendered: 18,
    exported: false,
    d: (
      <>
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
      </>
    ),
  },
  {
    mark: "Close",
    name: "CloseGlyph",
    file: "Combobox.tsx",
    line: 110,
    grid: 16,
    stroke: 2,
    rendered: 14,
    exported: false,
    d: <path d="m4 4 8 8M12 4l-8 8" />,
  },
  {
    mark: "Check",
    name: "CheckIcon",
    file: "Select.tsx",
    line: 144,
    grid: 24,
    stroke: 2,
    rendered: 16,
    exported: false,
    d: <polyline points="20 6 9 17 4 12" />,
  },
  {
    mark: "Check",
    name: "CheckGlyph",
    file: "Combobox.tsx",
    line: 93,
    grid: 16,
    stroke: 2,
    rendered: "css",
    exported: false,
    d: <path d="M13.5 4.5 6 12 2.5 8.5" />,
  },
  {
    mark: "Chevron down",
    name: "ChevronIcon",
    file: "Select.tsx",
    line: 118,
    grid: 24,
    stroke: 2,
    rendered: 16,
    exported: false,
    d: <polyline points="6 9 12 15 18 9" />,
  },
  {
    mark: "Chevron down",
    name: "Caret",
    file: "LangSwitcher.tsx",
    line: 83,
    grid: 14,
    stroke: 1.5,
    rendered: 14,
    exported: false,
    d: <path d="M3.5 5.5 7 9l3.5-3.5" />,
  },
  {
    mark: "Search",
    name: "SearchIcon",
    file: "Select.tsx",
    line: 126,
    grid: 24,
    stroke: 2,
    rendered: 16,
    exported: false,
    d: (
      <>
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </>
    ),
  },
  {
    mark: "Plus",
    name: "PlusGlyph",
    file: "Combobox.tsx",
    line: 127,
    grid: 16,
    stroke: 2,
    rendered: 14,
    exported: false,
    d: <path d="M8 3v10M3 8h10" />,
  },
  {
    mark: "Sun",
    name: "SunIcon",
    file: "ThemeToggle.tsx",
    line: 49,
    grid: 24,
    stroke: 2,
    rendered: "css",
    exported: false,
    d: (
      <>
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
      </>
    ),
  },
  {
    mark: "Moon",
    name: "MoonIcon",
    file: "ThemeToggle.tsx",
    line: 66,
    grid: 24,
    stroke: 2,
    rendered: "css",
    exported: false,
    d: <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />,
  },
];

/* The six components named *Icon that draw nothing. They are slots: a styled
   box you put a glyph inside. Listed because the shared suffix makes the
   inventory read as nineteen icons when it is eleven. */
const SLOTS = [
  { name: "Alert.Icon", file: "Alert.tsx", renders: ".ds-alert__icon" },
  { name: "Dropdown.ItemIcon", file: "Dropdown.tsx", renders: ".ds-dropdown__item-icon" },
  { name: "EmptyState.Icon", file: "EmptyState.tsx", renders: ".ds-empty-state__icon" },
  { name: "InputGroup.Icon", file: "Input.tsx", renders: ".ds-input-group__icon" },
  { name: "StatCard.Icon", file: "StatCard.tsx", renders: ".ds-stat-card__icon" },
  { name: "Tabs.Icon", file: "Tabs.tsx", renders: ".ds-tabs__icon" },
];

function Mark({ g, size }: { g: Glyph; size: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${g.grid} ${g.grid}`}
      fill="none"
      stroke="currentColor"
      strokeWidth={g.stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {g.d}
    </svg>
  );
}

export default function IconsPage() {
  const marks = [...new Set(GLYPHS.map((g) => g.mark))];
  const grids = [...new Set(GLYPHS.map((g) => g.grid))].sort((a, b) => a - b);
  /* Rows and components are not the same number: BurgerIcon draws two marks,
     so it occupies two rows. Every count on the page says which it means. */
  const components = [...new Set(GLYPHS.map((g) => `${g.file}:${g.line}`))].length;
  const dupes = marks
    .map((m) => ({ mark: m, impls: GLYPHS.filter((g) => g.mark === m) }))
    .filter((x) => x.impls.length > 1);

  return (
    <>
      <div className="demo-page-header">
        <h1>Icons</h1>
        <p>
          The design system does not ship an icon set. It ships {components}{" "}
          icon components, drawn inside whichever component needed them, on{" "}
          {grids.length} different grids. This page is the inventory.
        </p>
      </div>

      <section className="demo-section">
        <h2 className="demo-section__title">The inventory</h2>
        <p className="demo-section__description">
          Every mark in <code>@adamarant/ds-react</code>, shown at a common 24px
          so the drawings can be compared, then again at the size the component
          actually renders it. {GLYPHS.length} rows for {components} components:
          BurgerIcon draws two marks, so it appears twice. One component of the{" "}
          {components} is exported.
        </p>
        <div className="demo-preview demo-preview--col">
          <div className="icon-list">
            {GLYPHS.map((g) => (
              <div className="icon-row" key={g.name + g.mark}>
                <div className="icon-row__specs">
                  <span className="icon-row__spec">
                    <Mark g={g} size={24} />
                  </span>
                  <span className="icon-row__spec">
                    <Mark g={g} size={g.rendered === "css" ? 20 : g.rendered} />
                  </span>
                </div>
                <div className="icon-row__meta">
                  <span className="icon-row__mark">
                    {g.mark}
                    {g.exported ? (
                      <span className="ds-badge ds-badge--sm">exported</span>
                    ) : null}
                  </span>
                  <span className="icon-row__name">{g.name}</span>
                  <span className="icon-row__facts">
                    grid {g.grid} &middot; stroke {g.stroke} &middot;{" "}
                    {g.rendered === "css" ? "css-sized" : `${g.rendered}px`}
                    &nbsp;&middot;&nbsp;{g.file}:{g.line}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <p className="demo-section__description">
          Left specimen is 24px for comparison; right is the size the component
          actually asks for. Three are sized by CSS rather than by an attribute
          and are shown at 20, which is what the theme toggle resolves to at its
          large tier.
        </p>
      </section>

      <section className="demo-section">
        <h2 className="demo-section__title">{grids.length} grids</h2>
        <p className="demo-section__description">
          A glyph grid is the coordinate space a mark is drawn in. Two marks on
          different grids cannot share a stroke weight, because the same{" "}
          <code>stroke-width</code> renders thicker on a smaller viewBox scaled
          up to the same box. That is why these do not look like one set.
        </p>
        <div className="demo-preview demo-preview--col">
          {grids.map((grid) => {
            const inGrid = GLYPHS.filter((g) => g.grid === grid);
            return (
              <div className="icon-grid-row" key={grid}>
                <div className="demo-token-label">
                  viewBox {grid}
                  <span className="demo-token-label__size">
                    {inGrid.length} {inGrid.length === 1 ? "glyph" : "glyphs"} ·
                    stroke {[...new Set(inGrid.map((g) => g.stroke))].join(", ")}
                  </span>
                </div>
                <div className="icon-grid-row__marks">
                  {inGrid.map((g) => (
                    <Mark g={g} size={24} key={g.name + g.mark} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
        <p className="demo-section__description">
          All three rows are rendered at the same 24px box. The 14-grid caret is
          visibly heavier than the 24-grid chevron beside it in the next section,
          and it is the same mark.
        </p>
      </section>

      <section className="demo-section">
        <h2 className="demo-section__title">
          {marks.length} marks, {GLYPHS.length} drawings
        </h2>
        <p className="demo-section__description">
          Three marks are drawn more than once, each time by whoever needed it,
          each time slightly differently. Shown at 32px so the divergence is
          legible.
        </p>
        <div className="demo-preview demo-preview--col">
          {dupes.map(({ mark, impls }) => (
            <div className="icon-dupe" key={mark}>
              <div className="demo-token-label">
                {mark}
                <span className="demo-token-label__size">
                  {impls.length} implementations
                </span>
              </div>
              <div className="icon-dupe__set">
                {impls.map((g) => (
                  <div className="icon-dupe__one" key={g.name + g.mark}>
                    <Mark g={g} size={32} />
                    <span className="ds-text-xs ds-text-tertiary">{g.name}</span>
                    <span className="ds-text-xs ds-text-tertiary">
                      grid {g.grid}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <p className="demo-section__description">
          <strong>Close</strong> is drawn three times: twice identically on the
          24 grid, in two different files, and once more on the 16 grid with its
          own geometry. <strong>Check</strong> and{" "}
          <strong>chevron</strong> are drawn twice each, on different grids.
        </p>
      </section>

      <section className="demo-section">
        <h2 className="demo-section__title">Sizing</h2>
        <p className="demo-section__description">
          The rendered sizes are 14, 16, 18, 20 and 24. Only 16, 20 and 24 are on
          the token scale &mdash; <code>--ds-icon-1</code>,{" "}
          <code>--ds-icon-2</code>, <code>--ds-icon-3</code> &mdash; and the
          tokens landed after every one of these was written, so nothing was
          checked against them. See{" "}
          <a href="/foundations/spacing">Spacing</a> for the scale and the
          control tier each size pairs with.
        </p>
        <div className="demo-preview">
          {[14, 16, 18, 20, 24].map((s) => {
            const onScale = [16, 20, 24].includes(s);
            return (
              <div className="icon-size" key={s}>
                <Mark g={GLYPHS[0]} size={s} />
                <span className="ds-text-xs">{s}px</span>
                <span className="ds-text-xs ds-text-tertiary">
                  {onScale ? "on scale" : "off scale"}
                </span>
              </div>
            );
          })}
        </div>
      </section>

      <section className="demo-section">
        <h2 className="demo-section__title">Not icons</h2>
        <p className="demo-section__description">
          Six more components carry the <code>Icon</code> suffix and draw
          nothing. They are slots &mdash; a styled box you put a glyph inside.
          Counting by name gives {components + SLOTS.length}; the number of
          things that actually draw a mark is {components}. Listed so the suffix
          stops being ambiguous.
        </p>
        <div className="demo-preview demo-preview--col">
          <div className="icon-slots">
            {SLOTS.map((s) => (
              <div className="icon-slots__row" key={s.name}>
                <span className="icon-table__mono">{s.name}</span>
                <span className="icon-table__mono icon-table__src">
                  {s.renders}
                </span>
              </div>
            ))}
          </div>
        </div>
        <p className="demo-section__description">
          <code>.ds-icon-box</code> is the CSS counterpart &mdash; a square,
          centred, non-interactive container for a glyph. The interactive one is{" "}
          <code>.ds-icon-btn</code>. Neither supplies a mark.
        </p>
      </section>

      <section className="demo-section">
        <h2 className="demo-section__title">Open</h2>
        <p className="demo-section__description">
          <strong>Where glyphs come from is not decided yet.</strong> The system
          owns the container (<code>.ds-icon-box</code>,{" "}
          <code>.ds-icon-btn</code>) and, since the spacing tokens landed, the
          sizing. It does not own the marks, and the {components} above were each
          drawn to unblock the component in front of them rather than as a set.
        </p>
        <p className="demo-section__description">
          Until that is settled this page is a specimen, not an API:{" "}
          {components - 1} of the {components} are module-private, so the
          geometry here is copied from the ds-react source rather than imported.
          Change one there and it must be changed here too.
        </p>
      </section>
    </>
  );
}
