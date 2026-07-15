export { HeroBlock } from './hero.js';
export { ProseBlock } from './prose.js';
export { CtaBlock } from './cta.js';
export { ImageBlock } from './image.js';
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
    readonly content: {
        readonly type: "richtext";
        readonly label: "Contenuto";
        readonly localized: true;
        readonly default: "";
    };
}>)[];
//# sourceMappingURL=index.d.ts.map