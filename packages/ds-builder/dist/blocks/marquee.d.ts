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
        readonly help: "Il segno fra una parola e l’altra. Lascia vuoto per non averne.";
        readonly default: "§";
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