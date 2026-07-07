export declare const HeroBlock: import("../index.js").BlockDefinition<{
    readonly overline: {
        readonly type: "text";
        readonly label: "Overline";
        readonly localized: true;
        readonly default: "";
    };
    readonly title: {
        readonly type: "text";
        readonly label: "Title";
        readonly localized: true;
        readonly required: true;
        readonly default: "";
    };
    readonly subtitle: {
        readonly type: "text";
        readonly label: "Subtitle";
        readonly multiline: true;
        readonly localized: true;
        readonly default: "";
    };
    readonly image: {
        readonly type: "image";
        readonly label: "Background image";
    };
    readonly cta: {
        readonly type: "link";
        readonly label: "Call to action";
    };
    readonly align: {
        readonly type: "select";
        readonly label: "Alignment";
        readonly options: readonly [{
            readonly label: "Left";
            readonly value: "left";
        }, {
            readonly label: "Center";
            readonly value: "center";
        }];
        readonly default: "left";
    };
}>;
//# sourceMappingURL=HeroBlock.d.ts.map