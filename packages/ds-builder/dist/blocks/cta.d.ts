/** CTA band — a centered title, supporting text, and up to two link buttons. */
export declare const CtaBlock: import("../index.js").BlockDefinition<{
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
}>;
//# sourceMappingURL=cta.d.ts.map