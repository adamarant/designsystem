'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { SearchIcon } from './icons.js';
/**
 * Filter bar above a data table: search box, filter selects, actions slot.
 * The actions slot is where consumer-specific controls live (an AI button, a
 * link to a sub-page) without forking the toolbar.
 */
export function AdminToolbar({ search, filters, actions, className }) {
    return (_jsxs("div", { className: className
            ? `ds-flex ds-flex-wrap ds-gap-3 ds-items-center ${className}`
            : 'ds-flex ds-flex-wrap ds-gap-3 ds-items-center', children: [search && (_jsxs("div", { className: "ds-input-group ds-flex-1", children: [_jsx("div", { className: "ds-input-group__icon", children: _jsx(SearchIcon, {}) }), _jsx("input", { type: "text", className: "ds-input ds-input--lg", placeholder: search.placeholder, "aria-label": search['aria-label'] ?? search.placeholder, value: search.value, onChange: (e) => search.onChange(e.target.value), autoComplete: "off" })] })), filters?.map((filter, i) => filter.variant === 'segmented' ? (_jsxs("div", { className: "ds-segmented", role: "radiogroup", "aria-label": filter['aria-label'], children: [filter.allLabel !== undefined && (_jsx("button", { type: "button", role: "radio", "aria-checked": filter.value === '', onClick: () => filter.onChange(''), className: filter.value === ''
                            ? 'ds-segmented__item ds-segmented__item--active'
                            : 'ds-segmented__item', children: filter.allLabel })), filter.options.map((o) => (_jsx("button", { type: "button", role: "radio", "aria-checked": filter.value === o.value, onClick: () => filter.onChange(o.value), className: filter.value === o.value
                            ? 'ds-segmented__item ds-segmented__item--active'
                            : 'ds-segmented__item', children: o.label }, o.value)))] }, i)) : (_jsxs("select", { className: "ds-select ds-input--lg", value: filter.value, onChange: (e) => filter.onChange(e.target.value), "aria-label": filter['aria-label'], children: [filter.allLabel !== undefined && _jsx("option", { value: "", children: filter.allLabel }), filter.options.map((o) => (_jsx("option", { value: o.value, children: o.label }, o.value)))] }, i))), actions] }));
}
//# sourceMappingURL=AdminToolbar.js.map