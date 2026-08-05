/**
 * Marquee — a row of words scrolling without end, separated by a glyph.
 *
 * The track is repeated twice, identical: by the time the first leaves the
 * stage the second is already exactly in its place, so the cycle never jumps.
 * The copy is `aria-hidden`, so screen reader users hear the words once
 * instead of twice.
 *
 * Requires the blocks stylesheet:
 *   `@import "@adamarant/ds-builder/styles/blocks";`
 * Without it the words stay a static row: readable, not broken.
 */
export declare const MarqueeBlock: import("../index.js").BlockDefinition<{
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
}>;
//# sourceMappingURL=marquee.d.ts.map