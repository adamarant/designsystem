import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { defineBlock } from '../registry/defineBlock.js';
/** Image — a full-width image with an optional caption. */
export const ImageBlock = defineBlock({
    type: 'image',
    version: 1,
    label: 'Immagine',
    category: 'Media',
    fields: {
        image: { type: 'image', label: 'Immagine' },
        caption: { type: 'text', label: 'Didascalia', localized: true, default: '' },
    },
    render: ({ data }) => {
        if (!data.image?.url)
            return null;
        return (_jsx("section", { className: "ds-section", children: _jsxs("div", { className: "ds-container ds-flex ds-flex-col ds-gap-3 ds-max-w-4xl ds-mx-auto", children: [_jsx("img", { src: data.image.url, alt: data.image.alt ?? '', className: "ds-w-full ds-h-auto ds-rounded-lg" }), data.caption ? (_jsx("p", { className: "ds-text-tertiary ds-text-sm ds-text-center", children: data.caption })) : null] }) }));
    },
});
//# sourceMappingURL=image.js.map