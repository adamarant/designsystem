import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/**
 * Phase-0 spike block. Proves the model end-to-end: a typed schema, a single
 * render component used by both editor and public site, localized fields.
 * TODO(phase-4): real DS-composed blocks live in the consumer, not here — this
 * demo will move to examples/ before first publish.
 */
import { defineBlock } from '../registry/defineBlock.js';
const heroFields = {
    overline: { type: 'text', label: 'Overline', localized: true, default: '' },
    title: { type: 'text', label: 'Title', localized: true, required: true, default: '' },
    subtitle: {
        type: 'text',
        label: 'Subtitle',
        multiline: true,
        localized: true,
        default: '',
    },
    image: { type: 'image', label: 'Background image' },
    cta: { type: 'link', label: 'Call to action' },
    align: {
        type: 'select',
        label: 'Alignment',
        options: [
            { label: 'Left', value: 'left' },
            { label: 'Center', value: 'center' },
        ],
        default: 'left',
    },
};
function HeroRender({ data }) {
    const align = data.align;
    return (_jsx("section", { className: "ds-section", "data-align": align, children: _jsx("div", { className: "ds-container", children: _jsxs("div", { className: "ds-stack ds-stack--lg", children: [data.overline ? _jsx("p", { className: "ds-overline", children: data.overline }) : null, _jsx("h1", { className: "ds-hero-title", children: data.title }), data.subtitle ? _jsx("p", { className: "ds-prose", children: data.subtitle }) : null, data.cta ? (_jsx("a", { className: "ds-btn", href: data.cta.href, children: data.cta.label ?? 'Learn more' })) : null] }) }) }));
}
export const HeroBlock = defineBlock({
    type: 'hero',
    version: 1,
    label: 'Hero',
    category: 'Header',
    fields: heroFields,
    render: HeroRender,
});
//# sourceMappingURL=HeroBlock.js.map