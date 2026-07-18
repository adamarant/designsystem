import type { AdminSpinnerProps } from './types.js';
/**
 * Loading spinner over the DS .ds-spinner. By default it centres itself in a
 * padded block, which is what a panel waiting on a fetch needs; set
 * block={false} to drop it inline next to something.
 *
 * Tables don't need this — AdminTable renders skeleton rows via `loading`.
 * Use it for the surfaces that aren't tables (card grids, editors, panels).
 */
export declare function AdminSpinner({ size, muted, block, label, className, }: AdminSpinnerProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=AdminSpinner.d.ts.map