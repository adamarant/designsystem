'use client';
import { jsx as _jsx } from "react/jsx-runtime";
const SIZE_CLASS = {
    sm: 'ds-spinner--sm',
    md: '',
    lg: 'ds-spinner--lg',
};
/**
 * Loading spinner over the DS .ds-spinner. By default it centres itself in a
 * padded block, which is what a panel waiting on a fetch needs; set
 * block={false} to drop it inline next to something.
 *
 * Tables don't need this — AdminTable renders skeleton rows via `loading`.
 * Use it for the surfaces that aren't tables (card grids, editors, panels).
 */
export function AdminSpinner({ size = 'md', muted = false, block = true, label = 'Loading', className, }) {
    const spinner = (_jsx("span", { className: ['ds-spinner', SIZE_CLASS[size], muted ? 'ds-spinner--muted' : '', block ? '' : className]
            .filter(Boolean)
            .join(' '), role: "status", "aria-label": label }));
    if (!block)
        return spinner;
    return (_jsx("div", { className: ['ds-flex', 'ds-items-center', 'ds-justify-center', 'ds-py-20', className]
            .filter(Boolean)
            .join(' '), children: spinner }));
}
//# sourceMappingURL=AdminSpinner.js.map