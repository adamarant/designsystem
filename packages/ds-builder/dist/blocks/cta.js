import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { defineBlock } from '../registry/defineBlock.js';
/** CTA band — a centered title, supporting text, and up to two link buttons. */
export const CtaBlock = defineBlock({
    type: 'cta',
    version: 1,
    label: 'CTA',
    category: 'Sezioni',
    fields: {
        title: { type: 'text', label: 'Titolo', localized: true, required: true, default: '' },
        text: { type: 'text', label: 'Testo', multiline: true, localized: true, default: '' },
        primary: { type: 'link', label: 'Bottone principale' },
        secondary: { type: 'link', label: 'Bottone secondario' },
    },
    render: ({ data }) => (_jsx("section", { className: "ds-section ds-border-t", children: _jsxs("div", { className: "ds-container ds-flex ds-flex-col ds-items-center ds-text-center ds-gap-6 ds-max-w-2xl ds-mx-auto", children: [_jsx("h2", { className: "ds-section-title", children: data.title }), data.text ? _jsx("p", { className: "ds-editorial-lede", children: data.text }) : null, data.primary?.href || data.secondary?.href ? (_jsxs("div", { className: "ds-flex ds-flex-wrap ds-justify-center ds-gap-3", children: [data.primary?.href ? (_jsx("a", { href: data.primary.href, className: "ds-btn ds-btn--pill ds-btn--lg", children: data.primary.label || 'Inizia' })) : null, data.secondary?.href ? (_jsx("a", { href: data.secondary.href, className: "ds-btn ds-btn--outline ds-btn--pill ds-btn--lg", children: data.secondary.label || 'Scopri' })) : null] })) : null] }) })),
});
//# sourceMappingURL=cta.js.map