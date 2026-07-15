import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { defineBlock } from '../registry/defineBlock.js';
/**
 * Hero — overline, title, lede, and an optional call-to-action link.
 * Centered. Uses design-system classes; the consumer supplies the DS CSS.
 */
export const HeroBlock = defineBlock({
    type: 'hero',
    version: 1,
    label: 'Hero',
    category: 'Header',
    fields: {
        overline: { type: 'text', label: 'Overline', localized: true, default: '' },
        title: { type: 'text', label: 'Titolo', localized: true, required: true, default: '' },
        lede: { type: 'text', label: 'Testo', multiline: true, localized: true, default: '' },
        cta: { type: 'link', label: 'Bottone (opzionale)' },
    },
    render: ({ data }) => (_jsx("section", { className: "ds-section ds-flex ds-items-center", children: _jsxs("div", { className: "ds-container ds-flex ds-flex-col ds-items-center ds-text-center ds-gap-6 ds-max-w-3xl ds-mx-auto", children: [data.overline ? _jsx("p", { className: "ds-overline", children: data.overline }) : null, _jsx("h1", { className: "ds-hero-title", children: data.title }), data.lede ? _jsx("p", { className: "ds-editorial-lede", children: data.lede }) : null, data.cta?.href ? (_jsx("a", { href: data.cta.href, className: "ds-btn ds-btn--pill ds-btn--xl", ...(data.cta.external ? { target: '_blank', rel: 'noopener noreferrer' } : {}), children: data.cta.label || 'Scopri' })) : null] }) })),
});
//# sourceMappingURL=hero.js.map