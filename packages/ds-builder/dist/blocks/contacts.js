import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { defineBlock } from '../registry/defineBlock.js';
import { ContactForm } from './ContactForm.js';
import { SOCIAL_NETWORKS, SocialIcon } from './socialIcons.js';
/**
 * Contacts — a contact page in one block: reachable details on the left, an
 * optional message form on the right, side by side from `lg` up and stacked
 * below it.
 *
 * The two halves live in one block on purpose. Blocks render in a single
 * vertical column, so two separate blocks could never sit next to each other:
 * the column layout only exists inside a block's own markup.
 */
export const ContactsBlock = defineBlock({
    type: 'contacts',
    version: 1,
    label: 'Contatti',
    category: 'Sezioni',
    fields: {
        title: { type: 'text', label: 'Titolo', localized: true, default: 'Contatti' },
        titleStyle: {
            type: 'select',
            label: 'Peso del titolo',
            help: 'Titolo di pagina quando il blocco è la pagina contatti; di sezione quando è una fascia dentro un’altra pagina.',
            options: [
                { label: 'Titolo di pagina', value: 'pagina' },
                { label: 'Titolo di sezione', value: 'sezione' },
            ],
            default: 'pagina',
        },
        recapiti: {
            type: 'list',
            label: 'Recapiti',
            of: {
                type: 'object',
                fields: {
                    etichetta: {
                        type: 'text',
                        label: 'Etichetta',
                        localized: true,
                        required: true,
                        default: '',
                    },
                    valore: { type: 'text', label: 'Valore', required: true, default: '' },
                    link: {
                        type: 'text',
                        label: 'Link',
                        help: 'mailto:…, tel:… o un URL. Vuoto per un recapito non cliccabile, come un indirizzo.',
                        default: '',
                    },
                },
            },
        },
        social: {
            type: 'list',
            label: 'Social',
            of: {
                type: 'object',
                fields: {
                    rete: {
                        type: 'select',
                        label: 'Rete',
                        options: SOCIAL_NETWORKS.map((n) => ({ label: n.label, value: n.value })),
                        default: 'facebook',
                    },
                    url: { type: 'text', label: 'URL', required: true, default: '' },
                },
            },
        },
        form: {
            type: 'object',
            label: 'Modulo',
            fields: {
                attivo: { type: 'boolean', label: 'Mostra il modulo', default: true },
                overline: { type: 'text', label: 'Etichetta', localized: true, default: 'Scrivimi' },
                endpoint: {
                    type: 'text',
                    label: 'Endpoint',
                    help: 'URL a cui il modulo invia i dati in POST. Vuoto: i campi si vedono ma l’invio non fa nulla.',
                    default: '',
                },
                labelNome: { type: 'text', label: 'Campo nome', localized: true, default: 'Nome' },
                labelCognome: {
                    type: 'text',
                    label: 'Campo cognome',
                    localized: true,
                    default: 'Cognome',
                },
                labelEmail: { type: 'text', label: 'Campo email', localized: true, default: 'Email' },
                labelMessaggio: {
                    type: 'text',
                    label: 'Campo messaggio',
                    localized: true,
                    default: 'Messaggio',
                },
                labelInvia: { type: 'text', label: 'Bottone', localized: true, default: 'Invia' },
                messaggioSuccesso: {
                    type: 'text',
                    label: 'Messaggio di conferma',
                    localized: true,
                    default: 'Messaggio inviato. Grazie.',
                },
                messaggioErrore: {
                    type: 'text',
                    label: 'Messaggio di errore',
                    localized: true,
                    default: 'Invio non riuscito. Riprova tra poco.',
                },
            },
        },
    },
    render: ({ data }) => {
        const Heading = data.titleStyle === 'sezione' ? 'h2' : 'h1';
        const headingClass = data.titleStyle === 'sezione' ? 'ds-heading-2' : 'ds-heading-1';
        const form = data.form;
        const recapiti = data.recapiti ?? [];
        const social = data.social ?? [];
        return (_jsx("section", { className: "ds-section", children: _jsxs("div", { className: "ds-container ds-flex ds-flex-col ds-gap-16", children: [data.title ? _jsx(Heading, { className: headingClass, children: data.title }) : null, _jsxs("div", { className: "ds-grid ds-grid-cols-1 ds-lg:grid-cols-2 ds-gap-12", children: [_jsxs("div", { className: "ds-flex ds-flex-col ds-gap-8", children: [recapiti.map((r, i) => (_jsxs("div", { className: "ds-flex ds-flex-col ds-gap-1", children: [_jsx("p", { className: "ds-overline", children: r.etichetta }), r.link ? (_jsx("a", { href: r.link, className: "ds-text-lg", children: r.valore })) : (_jsx("p", { className: "ds-text-lg", children: r.valore }))] }, i))), social.length ? (_jsx("div", { className: "ds-flex ds-flex-col ds-gap-2", children: _jsx("div", { className: "ds-flex ds-gap-3", children: social.map((s, i) => {
                                                const rete = s.rete;
                                                const label = SOCIAL_NETWORKS.find((n) => n.value === rete)?.label ?? rete;
                                                return (_jsx("a", { href: s.url, target: "_blank", rel: "noopener noreferrer", className: "ds-icon-btn ds-icon-btn--ghost", "aria-label": label, children: _jsx(SocialIcon, { network: rete }) }, i));
                                            }) }) })) : null] }), form?.attivo ? (_jsxs("div", { className: "ds-flex ds-flex-col ds-gap-6", children: [form.overline ? _jsx("p", { className: "ds-overline", children: form.overline }) : null, _jsx(ContactForm, { endpoint: form.endpoint ?? '', labels: {
                                            nome: form.labelNome,
                                            cognome: form.labelCognome,
                                            email: form.labelEmail,
                                            messaggio: form.labelMessaggio,
                                            submit: form.labelInvia,
                                            success: form.messaggioSuccesso,
                                            error: form.messaggioErrore,
                                        } })] })) : null] })] }) }));
    },
});
//# sourceMappingURL=contacts.js.map