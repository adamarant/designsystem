import type { BlockInstance, PageDocument } from '../types/page.js'

export type SaveStatus = 'idle' | 'saving' | 'saved' | 'error'

/** Keep memory bounded: undo reaches back at most this many document states. */
export const MAX_HISTORY = 50

export interface EditorState {
  document: PageDocument
  /** id of the block being edited, or null */
  selectedId: string | null
  /** the locale currently being edited */
  locale: string
  /** unsaved changes since the last successful save */
  dirty: boolean
  status: SaveStatus
  /** past document states, oldest first (undo pops the tail) */
  past: PageDocument[]
  /** undone document states, for redo (redo pops the tail) */
  future: PageDocument[]
  /**
   * Coalescing key for the in-progress edit run. Consecutive field edits to the
   * same block+field share one history frame, so undo jumps past the whole run
   * of typing rather than one keystroke at a time. Any structural change,
   * selection or locale switch clears it, starting a fresh frame.
   */
  coalesce: string | null
}

export type EditorAction =
  | { type: 'select'; id: string | null }
  | { type: 'setLocale'; locale: string }
  | { type: 'updateField'; blockId: string; key: string; value: unknown; localized: boolean }
  | { type: 'addBlock'; block: BlockInstance; index?: number }
  | { type: 'removeBlock'; id: string }
  | { type: 'moveBlock'; id: string; toIndex: number }
  | { type: 'undo' }
  | { type: 'redo' }
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
    past: [],
    future: [],
    coalesce: null,
  }
}

function isRecord(v: unknown): v is Record<string, unknown> {
  return typeof v === 'object' && v !== null && !Array.isArray(v)
}

/** Push a document onto the past stack, capping length at MAX_HISTORY. */
function pushPast(past: PageDocument[], doc: PageDocument): PageDocument[] {
  const next = [...past, doc]
  return next.length > MAX_HISTORY ? next.slice(next.length - MAX_HISTORY) : next
}

/**
 * Commit a document mutation: snapshot the current document onto the past stack
 * (unless coalescing into the same edit run), clear the redo stack, and mark
 * the state dirty so autosave fires.
 */
function commit(
  state: EditorState,
  nextDoc: PageDocument,
  coalesce: string | null,
  extra?: Partial<EditorState>,
): EditorState {
  const coalescing = coalesce !== null && coalesce === state.coalesce
  return {
    ...state,
    document: nextDoc,
    past: coalescing ? state.past : pushPast(state.past, state.document),
    future: [],
    dirty: true,
    status: 'idle',
    coalesce,
    ...extra,
  }
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

/** Clamp an index into [0, length]. */
function clampIndex(index: number, length: number): number {
  if (index < 0) return 0
  if (index > length) return length
  return index
}

export function editorReducer(state: EditorState, action: EditorAction): EditorState {
  switch (action.type) {
    case 'select':
      return { ...state, selectedId: action.id, coalesce: null }
    case 'setLocale':
      return { ...state, locale: action.locale, coalesce: null }
    case 'updateField':
      return commit(
        state,
        updateBlockData(
          state.document,
          action.blockId,
          action.key,
          action.value,
          state.locale,
          action.localized,
        ),
        `${action.blockId}:${action.key}`,
      )
    case 'addBlock': {
      const at = clampIndex(action.index ?? state.document.blocks.length, state.document.blocks.length)
      const blocks = [...state.document.blocks]
      blocks.splice(at, 0, action.block)
      return commit(state, { ...state.document, blocks }, null, { selectedId: action.block.id })
    }
    case 'removeBlock': {
      if (!state.document.blocks.some((b) => b.id === action.id)) return state
      const blocks = state.document.blocks.filter((b) => b.id !== action.id)
      return commit(state, { ...state.document, blocks }, null, {
        selectedId: state.selectedId === action.id ? null : state.selectedId,
      })
    }
    case 'moveBlock': {
      const from = state.document.blocks.findIndex((b) => b.id === action.id)
      if (from === -1) return state
      const to = clampIndex(action.toIndex, state.document.blocks.length - 1)
      if (from === to) return state
      const blocks = [...state.document.blocks]
      const [moved] = blocks.splice(from, 1)
      blocks.splice(to, 0, moved)
      return commit(state, { ...state.document, blocks }, null)
    }
    case 'undo': {
      if (state.past.length === 0) return state
      const previous = state.past[state.past.length - 1]
      return {
        ...state,
        document: previous,
        past: state.past.slice(0, -1),
        future: [...state.future, state.document],
        dirty: true,
        status: 'idle',
        coalesce: null,
        selectedId: previous.blocks.some((b) => b.id === state.selectedId) ? state.selectedId : null,
      }
    }
    case 'redo': {
      if (state.future.length === 0) return state
      const next = state.future[state.future.length - 1]
      return {
        ...state,
        document: next,
        past: pushPast(state.past, state.document),
        future: state.future.slice(0, -1),
        dirty: true,
        status: 'idle',
        coalesce: null,
        selectedId: next.blocks.some((b) => b.id === state.selectedId) ? state.selectedId : null,
      }
    }
    case 'setStatus':
      return { ...state, status: action.status }
    case 'markSaved':
      return { ...state, dirty: false, status: 'saved' }
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
      }
    default:
      return state
  }
}
