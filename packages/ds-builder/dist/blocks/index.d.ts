export { HeroBlock } from './hero.js';
export { ProseBlock } from './prose.js';
export { CtaBlock } from './cta.js';
export { ImageBlock } from './image.js';
export { ContactsBlock } from './contacts.js';
export { MarqueeBlock } from './marquee.js';
export { SOCIAL_NETWORKS, type SocialNetwork } from './socialIcons.js';
/**
 * All shared blocks, in a sensible palette order. Spread into createRegistry
 * alongside any consumer-specific blocks:
 *   createRegistry([...sharedBlocks, MyCustomBlock])
 */
export declare const sharedBlocks: (import("../index.js").BlockDefinition<{
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
}> | import("../index.js").BlockDefinition<{
    readonly title: {
        readonly type: "text";
        readonly label: "Titolo";
        readonly localized: true;
        readonly required: true;
        readonly default: "";
    };
    readonly text: {
        readonly type: "text";
        readonly label: "Testo";
        readonly multiline: true;
        readonly localized: true;
        readonly default: "";
    };
    readonly primary: {
        readonly type: "link";
        readonly label: "Bottone principale";
    };
    readonly secondary: {
        readonly type: "link";
        readonly label: "Bottone secondario";
    };
}> | import("../index.js").BlockDefinition<{
    readonly overline: {
        readonly type: "text";
        readonly label: "Overline";
        readonly localized: true;
        readonly default: "";
    };
    readonly title: {
        readonly type: "text";
        readonly label: "Titolo";
        readonly localized: true;
        readonly required: true;
        readonly default: "";
    };
    readonly lede: {
        readonly type: "text";
        readonly label: "Testo";
        readonly multiline: true;
        readonly localized: true;
        readonly default: "";
    };
    readonly cta: {
        readonly type: "link";
        readonly label: "Bottone (opzionale)";
    };
}> | import("../index.js").BlockDefinition<{
    readonly image: {
        readonly type: "image";
        readonly label: "Immagine";
    };
    readonly caption: {
        readonly type: "text";
        readonly label: "Didascalia";
        readonly localized: true;
        readonly default: "";
    };
}> | import("../index.js").BlockDefinition<{
    readonly overline: {
        readonly type: "text";
        readonly label: "Overline";
        readonly localized: true;
        readonly default: "";
    };
    readonly title: {
        readonly type: "text";
        readonly label: "Titolo";
        readonly localized: true;
        readonly default: "";
    };
    readonly content: {
        readonly type: "richtext";
        readonly label: "Contenuto";
        readonly localized: true;
        readonly default: "";
    };
}> | import("../index.js").BlockDefinition<{
    readonly voci: {
        readonly type: "list";
        readonly label: "Parole";
        readonly of: {
            readonly type: "text";
            readonly label: "Parola";
            readonly localized: true;
            readonly default: "";
        };
    };
    readonly separatore: {
        readonly type: "text";
        readonly label: "Separatore";
        readonly help: "Segno facoltativo fra una parola e l’altra. Vuoto: le parole si staccano con lo spazio.";
        readonly default: "";
    };
    readonly velocita: {
        readonly type: "select";
        readonly label: "Velocità";
        readonly options: readonly [{
            readonly label: "Lenta";
            readonly value: "lenta";
        }, {
            readonly label: "Media";
            readonly value: "media";
        }, {
            readonly label: "Veloce";
            readonly value: "veloce";
        }];
        readonly default: "media";
    };
    readonly direzione: {
        readonly type: "select";
        readonly label: "Direzione";
        readonly options: readonly [{
            readonly label: "Verso sinistra";
            readonly value: "sinistra";
        }, {
            readonly label: "Verso destra";
            readonly value: "destra";
        }];
        readonly default: "sinistra";
    };
}>)[];
//# sourceMappingURL=index.d.ts.map