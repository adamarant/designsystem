import type { AdminRowActionsProps } from './types.js';
/**
 * The trailing icon-button cluster of a table row (view / edit / delete).
 * Icons are passed by the consumer, so ds-admin stays icon-free; the component
 * gives every row the same button styling and spacing.
 *
 * Internal hrefs route through next/link, same as AdminSidebar. Until 0.11.1
 * this rendered a bare <a>, which turned every "edit this row" into a full
 * document navigation — the table, the shell and the whole client tree were
 * torn down and rebuilt on a click that should have been a soft nav.
 * `external` still gets a plain anchor: it is leaving the app anyway.
 */
export declare function AdminRowActions({ actions, className }: AdminRowActionsProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=AdminRowActions.d.ts.map