'use client';
import { jsx as _jsx } from "react/jsx-runtime";
const TONE_CLASS = {
    neutral: 'ds-badge--outline',
    success: 'ds-badge--success',
    warning: 'ds-badge--warning',
    info: 'ds-badge--info',
    error: 'ds-badge--error',
};
/** Status pill over the DS .ds-badge. Consumer maps its status → tone. */
export function AdminStatusBadge({ label, tone = 'neutral', className }) {
    return (_jsx("span", { className: `ds-badge ${TONE_CLASS[tone]}${className ? ` ${className}` : ''}`, children: label }));
}
//# sourceMappingURL=AdminStatusBadge.js.map