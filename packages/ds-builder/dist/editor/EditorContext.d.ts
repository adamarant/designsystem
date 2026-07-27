import { type Dispatch, type ReactNode } from 'react';
import type { Registry } from '../registry/createRegistry.js';
import type { ImageValue } from '../schema/fields.js';
import type { EditorAction, EditorState } from './reducer.js';
import type { EditorLabels } from './labels.js';
/**
 * How the editor asks the host to pick an image. The consumer wires this to the
 * CMS MediaPicker (or any picker) — the builder stays free of a hard CMS dep.
 */
export type ImagePickerRenderer = (props: {
    value: ImageValue | null;
    onSelect: (image: ImageValue) => void;
    onClose: () => void;
}) => ReactNode;
/** One entry in the page switcher. `href` keeps routing with the host app. */
export interface EditorPageLink {
    slug: string;
    /** Shown in the switcher. Falls back to the slug. */
    label?: string;
    href: string;
}
export interface EditorContextValue {
    state: EditorState;
    dispatch: Dispatch<EditorAction>;
    registry: Registry;
    labels: EditorLabels;
    renderImagePicker?: ImagePickerRenderer;
    /** Every editable page, for the switcher. Omit or leave empty to hide it. */
    pages?: EditorPageLink[];
    /** Slug of the page being edited, marked as current in the switcher. */
    currentSlug?: string;
    /**
     * Apply a new page order. Present only when the host can persist it, which is
     * what makes the switcher draggable — no handle appears otherwise.
     */
    reorderPages?: (pages: EditorPageLink[]) => void;
}
export declare function useEditor(): EditorContextValue;
export declare const EditorProvider: import("react").Provider<EditorContextValue | null>;
//# sourceMappingURL=EditorContext.d.ts.map