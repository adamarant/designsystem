import { jsx as _jsx } from "react/jsx-runtime";
import { defineBlock } from '../registry/defineBlock.js';
/**
 * Prose — a long-form text section. Content is stored as plain text; blank
 * lines split paragraphs. Rendered inside the design-system prose wrapper.
 */
export const ProseBlock = defineBlock({
    type: 'prose',
    version: 1,
    label: 'Testo',
    category: 'Sezioni',
    fields: {
        content: { type: 'richtext', label: 'Contenuto', localized: true, default: '' },
    },
    render: ({ data }) => {
        const paragraphs = String(data.content ?? '')
            .split(/\n{2,}/)
            .map((p) => p.trim())
            .filter(Boolean);
        return (_jsx("section", { className: "ds-section", children: _jsx("div", { className: "ds-container ds-max-w-3xl ds-mx-auto", children: _jsx("div", { className: "ds-prose", children: paragraphs.map((p, i) => (_jsx("p", { children: p }, i))) }) }) }));
    },
});
//# sourceMappingURL=prose.js.map