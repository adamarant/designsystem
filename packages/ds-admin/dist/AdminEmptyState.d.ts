import type { AdminEmptyStateProps } from './types.js';
/**
 * "Nothing here yet" state over the DS .ds-empty-state component. Every admin
 * surface needs one — a list with no rows, a filtered result set, an empty
 * panel — so it lives here instead of being rebuilt per project out of
 * utility classes.
 *
 * Pass it to AdminTable's `empty` prop, or render it standalone for non-table
 * surfaces (card grids, panels).
 */
export declare function AdminEmptyState({ title, description, icon, actions, variant, align, className, }: AdminEmptyStateProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=AdminEmptyState.d.ts.map