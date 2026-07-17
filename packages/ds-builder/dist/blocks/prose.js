import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { defineBlock } from '../registry/defineBlock.js';
/**
 * Prose — a long-form text section, optionally introduced by an overline and a
 * title. Content is stored as plain text; blank lines split paragraphs.
 * Rendered inside the design-system prose wrapper.
 */
export const ProseBlock = defineBlock({
    type: 'prose',
    version: 1,
    label: 'Testo',
    category: 'Sezioni',
    fields: {
        overline: { type: 'text', label: 'Overline', localized: true, default: '' },
        title: { type: 'text', label: 'Titolo', localized: true, default: '' },
        content: { type: 'richtext', label: 'Contenuto', localized: true, default: '' },
    },
    render: ({ data }) => {
        const paragraphs = String(data.content ?? '')
            .split(/\n{2,}/)
            .map((p) => p.trim())
            .filter(Boolean);
        // Heading markup only exists when authored, so a block saved before the
        // overline/title fields were added renders exactly as it did before.
        const hasHeading = Boolean(data.overline || data.title);
        return (_jsx("section", { className: "ds-section", children: _jsxs("div", { className: "ds-container ds-max-w-3xl ds-mx-auto", children: [hasHeading ? (_jsxs("div", { className: "ds-flex ds-flex-col ds-gap-4 ds-mb-8", children: [data.overline ? _jsx("p", { className: "ds-overline", children: data.overline }) : null, data.title ? _jsx("h2", { className: "ds-section-title", children: data.title }) : null] })) : null, _jsx("div", { className: "ds-prose", children: paragraphs.map((p, i) => (_jsx("p", { children: p }, i))) })] }) }));
    },
});
//# sourceMappingURL=prose.js.map