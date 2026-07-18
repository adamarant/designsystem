'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/**
 * Read-only label/value pairs over the DS .ds-description-list — settings
 * summaries, metadata panels, the "details" half of a record. This is the
 * read-only counterpart to AdminField: AdminField wraps an editable control,
 * this one just states facts.
 */
export function AdminDetailList({ items, layout = 'stacked', bordered = false, emptyValue = '—', className, }) {
    const classes = [
        'ds-description-list',
        layout === 'horizontal' ? 'ds-description-list--horizontal' : '',
        bordered ? 'ds-description-list--bordered' : '',
        className,
    ]
        .filter(Boolean)
        .join(' ');
    return (_jsx("dl", { className: classes, children: items.map((item, i) => (_jsxs("div", { className: "ds-description-list__item", children: [_jsx("dt", { className: "ds-description-list__term", children: item.label }), _jsx("dd", { className: item.mono
                        ? 'ds-description-list__detail ds-font-mono'
                        : 'ds-description-list__detail', children: item.value || emptyValue })] }, i))) }));
}
//# sourceMappingURL=AdminDetailList.js.map