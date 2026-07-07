import type { PageDocument } from '../types/page.js';
export type SaveStatus = 'idle' | 'saving' | 'saved' | 'error';
export interface EditorState {
    document: PageDocument;
    /** id of the block being edited, or null */
    selectedId: string | null;
    /** the locale currently being edited */
    locale: string;
    /** unsaved changes since the last successful save */
    dirty: boolean;
    status: SaveStatus;
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