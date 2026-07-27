/**
 * The page switcher, wide-viewport form: a rail of links down the left of the
 * editor body. Below the editor's breakpoint the rail is hidden by CSS and the
 * same list rides in the toolbar as a select, so the switcher is never the
 * thing that makes a narrow editor unusable.
 *
 * Links, not callbacks: each page is its own admin route, so a plain anchor
 * keeps routing (and prefetching, if the host wraps it) out of the builder.
 *
 * Reordering is native HTML5 drag, no dependency — the same reason block
 * reorder ships without dnd-kit. Native drag is mouse-only, so the grip is a
 * real button that moves its row with the arrow keys: the order is reachable
 * without a pointer, which drag alone never is.
 */
export declare function PageRail(): import("react/jsx-runtime").JSX.Element | null;
//# sourceMappingURL=PageRail.d.ts.map