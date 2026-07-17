import type { AdminTableProps } from './types.js';
/**
 * Data table over the DS .ds-table component. Columns are declarative and each
 * cell is a render function, so different row shapes fit the same table without
 * the table ever touching a row field. Uses the DS-native loading (shimmer
 * rows), empty state, sortable headers (.ds-table__sort), and a footer slot
 * that lives inside the one bordered wrapper — no outer card, no double border.
 */
export declare function AdminTable<Row>({ columns, rows, rowKey, loading, loadingRows, empty, sort, onSortChange, footer, className, }: AdminTableProps<Row>): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=AdminTable.d.ts.map