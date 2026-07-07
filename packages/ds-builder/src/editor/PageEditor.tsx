'use client'

import { useEffect, useReducer, useRef, useState } from 'react'
import type { Registry } from '../registry/createRegistry.js'
import type { PageDocument } from '../types/page.js'
import { validateDocument, type BlockIssue } from '../validate/validateDocument.js'
import { EditorProvider, type ImagePickerRenderer } from './EditorContext.js'
import { EditorCanvas } from './EditorCanvas.js'
import { EditorToolbar } from './EditorToolbar.js'
import { PropertyPanel } from './PropertyPanel.js'
import { defaultLabels, type EditorLabels } from './labels.js'
import { editorReducer, initEditorState } from './reducer.js'

export interface PageEditorProps {
  /** the consumer's block registry */
  registry: Registry
  /** the page's current draft document */
  document: PageDocument
  /** persist the draft (wire to an API route that calls the page store) */
  onSaveDraft: (doc: PageDocument) => Promise<void>
  /** publish the page (wire to an API route that validates + publishes) */
  onPublish: (doc: PageDocument) => Promise<void>
  /** called when publish is blocked by validation errors */
  onInvalid?: (issues: BlockIssue[]) => void
  /** wire to the CMS MediaPicker (or any picker); falls back to a URL input */
  renderImagePicker?: ImagePickerRenderer
  /** admin UI label overrides (default English) */
  labels?: Partial<EditorLabels>
  /** debounce before autosaving a draft (ms). Default 1200 */
  autosaveMs?: number
  /** locale to edit first. Default: document.defaultLocale */
  initialLocale?: string
}

/**
 * The page editor: a live canvas plus a schema-driven property panel, with
 * debounced draft autosave and a validated publish. Persistence is injected
 * (`onSaveDraft` / `onPublish`) so this component stays free of transport + auth.
 */
export function PageEditor({
  registry,
  document,
  onSaveDraft,
  onPublish,
  onInvalid,
  renderImagePicker,
  labels,
  autosaveMs = 1200,
  initialLocale,
}: PageEditorProps) {
  const [state, dispatch] = useReducer(editorReducer, undefined, () =>
    initEditorState(document, initialLocale),
  )
  const mergedLabels = { ...defaultLabels, ...labels }
  const [publishing, setPublishing] = useState(false)

  // Keep the latest handlers/state in refs so effects don't re-subscribe on
  // every render or capture stale closures.
  const saveRef = useRef(onSaveDraft)
  saveRef.current = onSaveDraft
  const stateRef = useRef(state)
  stateRef.current = state

  // Debounced draft autosave.
  useEffect(() => {
    if (!state.dirty) return
    const timer = setTimeout(() => {
      dispatch({ type: 'setStatus', status: 'saving' })
      saveRef
        .current(stateRef.current.document)
        .then(() => dispatch({ type: 'markSaved' }))
        .catch(() => dispatch({ type: 'setStatus', status: 'error' }))
    }, autosaveMs)
    return () => clearTimeout(timer)
  }, [state.document, state.dirty, autosaveMs])

  async function handlePublish() {
    const doc = stateRef.current.document
    const result = validateDocument(registry, doc)
    if (!result.valid) {
      dispatch({ type: 'setStatus', status: 'error' })
      onInvalid?.(result.issues)
      return
    }
    setPublishing(true)
    try {
      await saveRef.current(doc)
      await onPublish(doc)
      dispatch({ type: 'markSaved' })
    } catch {
      dispatch({ type: 'setStatus', status: 'error' })
    } finally {
      setPublishing(false)
    }
  }

  return (
    <EditorProvider value={{ state, dispatch, registry, labels: mergedLabels, renderImagePicker }}>
      <div className="dsb-editor">
        <EditorToolbar onPublish={handlePublish} publishing={publishing} />
        <div className="dsb-editor__body">
          <EditorCanvas />
          <PropertyPanel />
        </div>
      </div>
    </EditorProvider>
  )
}
