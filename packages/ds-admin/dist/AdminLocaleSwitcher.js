'use client';
import { jsx as _jsx } from "react/jsx-runtime";
const SIZE_CLASS = {
    sm: 'ds-segmented--sm',
    md: '',
    lg: 'ds-segmented--lg',
};
/**
 * Locale toggle for a multilingual admin form, over the DS segmented control.
 * Replaces per-project LocalePills. The switcher knows nothing about which
 * locales exist — the consumer passes its own option list.
 */
export function AdminLocaleSwitcher({ options, value, onChange, size = 'sm', className, ...rest }) {
    const classes = ['ds-segmented', SIZE_CLASS[size], className].filter(Boolean).join(' ');
    return (_jsx("div", { className: classes, role: "radiogroup", "aria-label": rest['aria-label'], children: options.map((opt) => {
            const active = opt.value === value;
            return (_jsx("button", { type: "button", role: "radio", "aria-checked": active, onClick: () => onChange(opt.value), className: active ? 'ds-segmented__item ds-segmented__item--active' : 'ds-segmented__item', children: opt.label }, opt.value));
        }) }));
}
//# sourceMappingURL=AdminLocaleSwitcher.js.map