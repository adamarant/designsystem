import type { AdminTableProps } from './types.js';
/**
 * Data table over the DS .ds-table component. Columns are declarative and each
 * cell is a render function, so different row shapes fit the same table without
 * the table ever touching a row field. Uses the DS-native loading (shimmer
 * rows) and empty states, closing the hand-rolled __header-row / __header-cell
 * phantom classes that grew from copy-pasting tables.
 */
export declare function AdminTable<Row>({ columns, rows, rowKey, loading, loadingRows, empty, className, }: AdminTableProps<Row>): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=AdminTable.d.ts.map