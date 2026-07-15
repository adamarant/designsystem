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
export interface EditorContextValue {
    state: EditorState;
    dispatch: Dispatch<EditorAction>;
    registry: Registry;
    labels: EditorLabels;
    renderImagePicker?: ImagePickerRenderer;
}
export declare function useEditor(): EditorContextValue;
export declare const EditorProvider: import("react").Provider<EditorContextValue | null>;
//# sourceMappingURL=EditorContext.d.ts.map