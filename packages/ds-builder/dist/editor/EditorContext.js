'use client';
import { createContext, useContext } from 'react';
const EditorContext = createContext(null);
export function useEditor() {
    const value = useContext(EditorContext);
    if (!value) {
        throw new Error('[builder] useEditor must be used inside <PageEditor>');
    }
    return value;
}
export const EditorProvider = EditorContext.Provider;
//# sourceMappingURL=EditorContext.js.map