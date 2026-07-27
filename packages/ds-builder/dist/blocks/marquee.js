import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { defineBlock } from '../registry/defineBlock.js';
const SPEED_CLASS = {
    lenta: ' dsb-marquee--lenta',
    media: '',
    veloce: ' dsb-marquee--veloce',
};
/**
 * Marquee — una fila di parole che scorre senza fine, separate da un glifo.
 *
 * Il binario è ripetuto due volte, identico: quando il primo esce di scena il
 * secondo è già esattamente al suo posto, e il ciclo non ha salti. La copia
 * è `aria-hidden`, così chi usa uno screen reader sente le parole una volta
 * sola invece che due.
 *
 * Richiede il foglio dei blocchi:
 *   `@import "@adamarant/ds-builder/styles/blocks";`
 * Senza, le parole restano una riga statica: leggibile, non rotta.
 */
export const MarqueeBlock = defineBlock({
    type: 'marquee',
    version: 1,
    label: 'Scorrimento',
    category: 'Sezioni',
    fields: {
        voci: {
            type: 'list',
            label: 'Parole',
            of: { type: 'text', label: 'Parola', localized: true, default: '' },
        },
        separatore: {
            type: 'text',
            label: 'Separatore',
            help: 'Segno facoltativo fra una parola e l’altra. Vuoto: le parole si staccano con lo spazio.',
            default: '',
        },
        velocita: {
            type: 'select',
            label: 'Velocità',
            options: [
                { label: 'Lenta', value: 'lenta' },
                { label: 'Media', value: 'media' },
                { label: 'Veloce', value: 'veloce' },
            ],
            default: 'media',
        },
        direzione: {
            type: 'select',
            label: 'Direzione',
            options: [
                { label: 'Verso sinistra', value: 'sinistra' },
                { label: 'Verso destra', value: 'destra' },
            ],
            default: 'sinistra',
        },
    },
    render: ({ data }) => {
        const voci = (data.voci ?? []).filter(Boolean);
        if (voci.length === 0)
            return null;
        const sep = data.separatore ?? '';
        const classe = 'dsb-marquee' +
            (SPEED_CLASS[data.velocita] ?? '') +
            (data.direzione === 'destra' ? ' dsb-marquee--inversa' : '');
        const track = (hidden) => (_jsx("div", { className: "dsb-marquee__track", "aria-hidden": hidden || undefined, children: voci.map((voce, i) => (_jsxs("span", { className: "dsb-marquee__item", children: [voce, sep ? _jsxs("span", { className: "dsb-marquee__sep", children: [" ", sep] }) : null] }, i))) }));
        return (_jsx("section", { className: "ds-section--bordered", children: _jsxs("div", { className: classe, children: [track(false), track(true)] }) }));
    },
});
//# sourceMappingURL=marquee.js.map