import type { PageDocument } from '../types/page.js'

export type SaveStatus = 'idle' | 'saving' | 'saved' | 'error'

export interface EditorState {
  document: PageDocument
  /** id of the block being edited, or null */
  selectedId: string | null
  /** the locale currently being edited */
  locale: string
  /** unsaved changes since the last successful save */
  dirty: boolean
  status: SaveStatus
}

export type EditorAction =
  | { type: 'select'; id: string | null }
  | { type: 'setLocale'; locale: string }
  | { type: 'updateField'; blockId: string; key: string; value: unknown; localized: boolean }
  | { type: 'setStatus'; status: SaveStatus }
  | { type: 'markSaved' }
  | { type: 'replace'; document: PageDocument }

export function initEditorState(document: PageDocument, locale?: string): EditorState {
  return {
    document,
    selectedId: null,
    locale: locale ?? document.defaultLocale,
    dirty: false,
    status: 'idle',
  }
}

function isRecord(v: unknown): v is Record<string, unknown> {
  return typeof v === 'object' && v !== null && !Array.isArray(v)
}

/** Immutably set one field on one block, honouring localized per-locale maps. */
function updateBlockData(
  doc: PageDocument,
  blockId: string,
  key: string,
  value: unknown,
  locale: string,
  localized: boolean,
): PageDocument {
  return {
    ...doc,
    blocks: doc.blocks.map((block) => {
      if (block.id !== blockId) return block
      const nextValue = localized
        ? { ...(isRecord(block.data[key]) ? block.data[key] : {}), [locale]: value }
        : value
      return { ...block, data: { ...block.data, [key]: nextValue } }
    }),
  }
}

export function editorReducer(state: EditorState, action: EditorAction): EditorState {
  switch (action.type) {
    case 'select':
      return { ...state, selectedId: action.id }
    case 'setLocale':
      return { ...state, locale: action.locale }
    case 'updateField':
      return {
        ...state,
        document: updateBlockData(
          state.document,
          action.blockId,
          action.key,
          action.value,
          state.locale,
          action.localized,
        ),
        dirty: true,
        status: 'idle',
      }
    case 'setStatus':
      return { ...state, status: action.status }
    case 'markSaved':
      return { ...state, dirty: false, status: 'saved' }
    case 'replace':
      return { ...state, document: action.document, dirty: false, status: 'idle' }
    default:
      return state
  }
}
