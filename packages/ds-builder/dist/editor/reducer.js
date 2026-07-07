export function initEditorState(document, locale) {
    return {
        document,
        selectedId: null,
        locale: locale ?? document.defaultLocale,
        dirty: false,
        status: 'idle',
    };
}
function isRecord(v) {
    return typeof v === 'object' && v !== null && !Array.isArray(v);
}
/** Immutably set one field on one block, honouring localized per-locale maps. */
function updateBlockData(doc, blockId, key, value, locale, localized) {
    return {
        ...doc,
        blocks: doc.blocks.map((block) => {
            if (block.id !== blockId)
                return block;
            const nextValue = localized
                ? { ...(isRecord(block.data[key]) ? block.data[key] : {}), [locale]: value }
                : value;
            return { ...block, data: { ...block.data, [key]: nextValue } };
        }),
    };
}
export function editorReducer(state, action) {
    switch (action.type) {
        case 'select':
            return { ...state, selectedId: action.id };
        case 'setLocale':
            return { ...state, locale: action.locale };
        case 'updateField':
            return {
                ...state,
                document: updateBlockData(state.document, action.blockId, action.key, action.value, state.locale, action.localized),
                dirty: true,
                status: 'idle',
            };
        case 'setStatus':
            return { ...state, status: action.status };
        case 'markSaved':
            return { ...state, dirty: false, status: 'saved' };
        case 'replace':
            return { ...state, document: action.document, dirty: false, status: 'idle' };
        default:
            return state;
    }
}
//# sourceMappingURL=reducer.js.map