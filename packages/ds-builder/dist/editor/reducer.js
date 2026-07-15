/** Keep memory bounded: undo reaches back at most this many document states. */
export const MAX_HISTORY = 50;
export function initEditorState(document, locale) {
    return {
        document,
        selectedId: null,
        locale: locale ?? document.defaultLocale,
        dirty: false,
        status: 'idle',
        past: [],
        future: [],
        coalesce: null,
    };
}
function isRecord(v) {
    return typeof v === 'object' && v !== null && !Array.isArray(v);
}
/** Push a document onto the past stack, capping length at MAX_HISTORY. */
function pushPast(past, doc) {
    const next = [...past, doc];
    return next.length > MAX_HISTORY ? next.slice(next.length - MAX_HISTORY) : next;
}
/**
 * Commit a document mutation: snapshot the current document onto the past stack
 * (unless coalescing into the same edit run), clear the redo stack, and mark
 * the state dirty so autosave fires.
 */
function commit(state, nextDoc, coalesce, extra) {
    const coalescing = coalesce !== null && coalesce === state.coalesce;
    return {
        ...state,
        document: nextDoc,
        past: coalescing ? state.past : pushPast(state.past, state.document),
        future: [],
        dirty: true,
        status: 'idle',
        coalesce,
        ...extra,
    };
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
/** Clamp an index into [0, length]. */
function clampIndex(index, length) {
    if (index < 0)
        return 0;
    if (index > length)
        return length;
    return index;
}
export function editorReducer(state, action) {
    switch (action.type) {
        case 'select':
            return { ...state, selectedId: action.id, coalesce: null };
        case 'setLocale':
            return { ...state, locale: action.locale, coalesce: null };
        case 'updateField':
            return commit(state, updateBlockData(state.document, action.blockId, action.key, action.value, state.locale, action.localized), `${action.blockId}:${action.key}`);
        case 'addBlock': {
            const at = clampIndex(action.index ?? state.document.blocks.length, state.document.blocks.length);
            const blocks = [...state.document.blocks];
            blocks.splice(at, 0, action.block);
            return commit(state, { ...state.document, blocks }, null, { selectedId: action.block.id });
        }
        case 'removeBlock': {
            if (!state.document.blocks.some((b) => b.id === action.id))
                return state;
            const blocks = state.document.blocks.filter((b) => b.id !== action.id);
            return commit(state, { ...state.document, blocks }, null, {
                selectedId: state.selectedId === action.id ? null : state.selectedId,
            });
        }
        case 'moveBlock': {
            const from = state.document.blocks.findIndex((b) => b.id === action.id);
            if (from === -1)
                return state;
            const to = clampIndex(action.toIndex, state.document.blocks.length - 1);
            if (from === to)
                return state;
            const blocks = [...state.document.blocks];
            const [moved] = blocks.splice(from, 1);
            blocks.splice(to, 0, moved);
            return commit(state, { ...state.document, blocks }, null);
        }
        case 'undo': {
            if (state.past.length === 0)
                return state;
            const previous = state.past[state.past.length - 1];
            return {
                ...state,
                document: previous,
                past: state.past.slice(0, -1),
                future: [...state.future, state.document],
                dirty: true,
                status: 'idle',
                coalesce: null,
                selectedId: previous.blocks.some((b) => b.id === state.selectedId) ? state.selectedId : null,
            };
        }
        case 'redo': {
            if (state.future.length === 0)
                return state;
            const next = state.future[state.future.length - 1];
            return {
                ...state,
                document: next,
                past: pushPast(state.past, state.document),
                future: state.future.slice(0, -1),
                dirty: true,
                status: 'idle',
                coalesce: null,
                selectedId: next.blocks.some((b) => b.id === state.selectedId) ? state.selectedId : null,
            };
        }
        case 'setStatus':
            return { ...state, status: action.status };
        case 'markSaved':
            return { ...state, dirty: false, status: 'saved' };
        case 'replace':
            return {
                ...state,
                document: action.document,
                dirty: false,
                status: 'idle',
                past: [],
                future: [],
                coalesce: null,
                selectedId: action.document.blocks.some((b) => b.id === state.selectedId)
                    ? state.selectedId
                    : null,
            };
        default:
            return state;
    }
}
//# sourceMappingURL=reducer.js.map