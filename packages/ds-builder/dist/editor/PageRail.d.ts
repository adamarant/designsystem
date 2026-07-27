/**
 * The page switcher, wide-viewport form: a rail of links down the left of the
 * editor body. Below the editor's breakpoint the rail is hidden by CSS and the
 * same list rides in the toolbar as a select, so the switcher is never the
 * thing that makes a narrow editor unusable.
 *
 * Links, not callbacks: each page is its own admin route, so a plain anchor
 * keeps routing (and prefetching, if the host wraps it) out of the builder.
 */
export declare function PageRail(): import("react/jsx-runtime").JSX.Element | null;
//# sourceMappingURL=PageRail.d.ts.map