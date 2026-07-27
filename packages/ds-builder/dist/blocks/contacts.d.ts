/**
 * Contacts — a contact page in one block: reachable details on the left, an
 * optional message form on the right, side by side from `lg` up and stacked
 * below it.
 *
 * The two halves live in one block on purpose. Blocks render in a single
 * vertical column, so two separate blocks could never sit next to each other:
 * the column layout only exists inside a block's own markup.
 */
export declare const ContactsBlock: import("../index.js").BlockDefinition<{
    readonly title: {
        readonly type: "text";
        readonly label: "Titolo";
        readonly localized: true;
        readonly default: "Contatti";
    };
    readonly titleStyle: {
        readonly type: "select";
        readonly label: "Peso del titolo";
        readonly help: "Titolo di pagina quando il blocco è la pagina contatti; di sezione quando è una fascia dentro un’altra pagina.";
        readonly options: readonly [{
            readonly label: "Titolo di pagina";
            readonly value: "pagina";
        }, {
            readonly label: "Titolo di sezione";
            readonly value: "sezione";
        }];
        readonly default: "pagina";
    };
    readonly recapiti: {
        readonly type: "list";
        readonly label: "Recapiti";
        readonly of: {
            readonly type: "object";
            readonly fields: {
                readonly etichetta: {
                    readonly type: "text";
                    readonly label: "Etichetta";
                    readonly localized: true;
                    readonly required: true;
                    readonly default: "";
                };
                readonly valore: {
                    readonly type: "text";
                    readonly label: "Valore";
                    readonly required: true;
                    readonly default: "";
                };
                readonly link: {
                    readonly type: "text";
                    readonly label: "Link";
                    readonly help: "mailto:…, tel:… o un URL. Vuoto per un recapito non cliccabile, come un indirizzo.";
                    readonly default: "";
                };
            };
        };
    };
    readonly social: {
        readonly type: "list";
        readonly label: "Social";
        readonly of: {
            readonly type: "object";
            readonly fields: {
                readonly rete: {
                    readonly type: "select";
                    readonly label: "Rete";
                    readonly options: {
                        label: "Facebook" | "Instagram" | "YouTube" | "X" | "LinkedIn" | "TikTok";
                        value: "facebook" | "instagram" | "youtube" | "x" | "linkedin" | "tiktok";
                    }[];
                    readonly default: "facebook";
                };
                readonly url: {
                    readonly type: "text";
                    readonly label: "URL";
                    readonly required: true;
                    readonly default: "";
                };
            };
        };
    };
    readonly form: {
        readonly type: "object";
        readonly label: "Modulo";
        readonly fields: {
            readonly attivo: {
                readonly type: "boolean";
                readonly label: "Mostra il modulo";
                readonly default: true;
            };
            readonly overline: {
                readonly type: "text";
                readonly label: "Etichetta";
                readonly localized: true;
                readonly default: "Scrivimi";
            };
            readonly endpoint: {
                readonly type: "text";
                readonly label: "Endpoint";
                readonly help: "URL a cui il modulo invia i dati in POST. Vuoto: i campi si vedono ma l’invio non fa nulla.";
                readonly default: "";
            };
            readonly labelNome: {
                readonly type: "text";
                readonly label: "Campo nome";
                readonly localized: true;
                readonly default: "Nome";
            };
            readonly labelCognome: {
                readonly type: "text";
                readonly label: "Campo cognome";
                readonly localized: true;
                readonly default: "Cognome";
            };
            readonly labelEmail: {
                readonly type: "text";
                readonly label: "Campo email";
                readonly localized: true;
                readonly default: "Email";
            };
            readonly labelMessaggio: {
                readonly type: "text";
                readonly label: "Campo messaggio";
                readonly localized: true;
                readonly default: "Messaggio";
            };
            readonly labelInvia: {
                readonly type: "text";
                readonly label: "Bottone";
                readonly localized: true;
                readonly default: "Invia";
            };
            readonly messaggioSuccesso: {
                readonly type: "text";
                readonly label: "Messaggio di conferma";
                readonly localized: true;
                readonly default: "Messaggio inviato. Grazie.";
            };
            readonly messaggioErrore: {
                readonly type: "text";
                readonly label: "Messaggio di errore";
                readonly localized: true;
                readonly default: "Invio non riuscito. Riprova tra poco.";
            };
        };
    };
}>;
//# sourceMappingURL=contacts.d.ts.map