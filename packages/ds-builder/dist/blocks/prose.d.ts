/**
 * Prose — a long-form text section, optionally introduced by an overline and a
 * title. Content is stored as plain text; blank lines split paragraphs.
 * Rendered inside the design-system prose wrapper.
 */
export declare const ProseBlock: import("../index.js").BlockDefinition<{
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
}>;
//# sourceMappingURL=prose.d.ts.map