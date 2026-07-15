/**
 * Hero — overline, title, lede, and an optional call-to-action link.
 * Centered. Uses design-system classes; the consumer supplies the DS CSS.
 */
export declare const HeroBlock: import("../index.js").BlockDefinition<{
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
}>;
//# sourceMappingURL=hero.d.ts.map