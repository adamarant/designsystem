'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useReducer, useRef, useState } from 'react';
import { validateDocument } from '../validate/validateDocument.js';
import { EditorProvider } from './EditorContext.js';
import { EditorCanvas } from './EditorCanvas.js';
import { EditorToolbar } from './EditorToolbar.js';
import { PropertyPanel } from './PropertyPanel.js';
import { defaultLabels } from './labels.js';
import { editorReducer, initEditorState } from './reducer.js';
/**
 * The page editor: a live canvas plus a schema-driven property panel, with
 * debounced draft autosave and a validated publish. Persistence is injected
 * (`onSaveDraft` / `onPublish`) so this component stays free of transport + auth.
 */
export function PageEditor({ registry, document, onSaveDraft, onPublish, onInvalid, renderImagePicker, labels, autosaveMs = 1200, initialLocale, }) {
    const [state, dispatch] = useReducer(editorReducer, undefined, () => initEditorState(document, initialLocale));
    const mergedLabels = { ...defaultLabels, ...labels };
    const [publishing, setPublishing] = useState(false);
    // Keep the latest handlers/state in refs so effects don't re-subscribe on
    // every render or capture stale closures.
    const saveRef = useRef(onSaveDraft);
    saveRef.current = onSaveDraft;
    const stateRef = useRef(state);
    stateRef.current = state;
    // Debounced draft autosave.
    useEffect(() => {
        if (!state.dirty)
            return;
        const timer = setTimeout(() => {
            dispatch({ type: 'setStatus', status: 'saving' });
            saveRef
                .current(stateRef.current.document)
                .then(() => dispatch({ type: 'markSaved' }))
                .catch(() => dispatch({ type: 'setStatus', status: 'error' }));
        }, autosaveMs);
        return () => clearTimeout(timer);
    }, [state.document, state.dirty, autosaveMs]);
    async function handlePublish() {
        const doc = stateRef.current.document;
        const result = validateDocument(registry, doc);
        if (!result.valid) {
            dispatch({ type: 'setStatus', status: 'error' });
            onInvalid?.(result.issues);
            return;
        }
        setPublishing(true);
        try {
            await saveRef.current(doc);
            await onPublish(doc);
            dispatch({ type: 'markSaved' });
        }
        catch {
            dispatch({ type: 'setStatus', status: 'error' });
        }
        finally {
            setPublishing(false);
        }
    }
    return (_jsx(EditorProvider, { value: { state, dispatch, registry, labels: mergedLabels, renderImagePicker }, children: _jsxs("div", { className: "dsb-editor", children: [_jsx(EditorToolbar, { onPublish: handlePublish, publishing: publishing }), _jsxs("div", { className: "dsb-editor__body", children: [_jsx(EditorCanvas, {}), _jsx(PropertyPanel, {})] })] }) }));
}
//# sourceMappingURL=PageEditor.js.map