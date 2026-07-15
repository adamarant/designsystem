import type { BlockInstance, PageDocument } from '../types/page.js';
export type SaveStatus = 'idle' | 'saving' | 'saved' | 'error';
/** Keep memory bounded: undo reaches back at most this many document states. */
export declare const MAX_HISTORY = 50;
export interface EditorState {
    document: PageDocument;
    /** id of the block being edited, or null */
    selectedId: string | null;
    /** the locale currently being edited */
    locale: string;
    /** unsaved changes since the last successful save */
    dirty: boolean;
    status: SaveStatus;
    /** past document states, oldest first (undo pops the tail) */
    past: PageDocument[];
    /** undone document states, for redo (redo pops the tail) */
    future: PageDocument[];
    /**
     * Coalescing key for the in-progress edit run. Consecutive field edits to the
     * same block+field share one history frame, so undo jumps past the whole run
     * of typing rather than one keystroke at a time. Any structural change,
     * selection or locale switch clears it, starting a fresh frame.
     */
    coalesce: string | null;
}
export type EditorAction = {
    type: 'select';
    id: string | null;
} | {
    type: 'setLocale';
    locale: string;
} | {
    type: 'updateField';
    blockId: string;
    key: string;
    value: unknown;
    localized: boolean;
} | {
    type: 'addBlock';
    block: BlockInstance;
    index?: number;
} | {
    type: 'removeBlock';
    id: string;
} | {
    type: 'moveBlock';
    id: string;
    toIndex: number;
} | {
    type: 'undo';
} | {
    type: 'redo';
} | {
    type: 'setStatus';
    status: SaveStatus;
} | {
    type: 'markSaved';
} | {
    type: 'replace';
    document: PageDocument;
};
export declare function initEditorState(document: PageDocument, locale?: string): EditorState;
export declare function editorReducer(state: EditorState, action: EditorAction): EditorState;
//# sourceMappingURL=reducer.d.ts.map