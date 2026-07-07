'use client'

import { createContext, useContext, type Dispatch, type ReactNode } from 'react'
import type { Registry } from '../registry/createRegistry.js'
import type { ImageValue } from '../schema/fields.js'
import type { EditorAction, EditorState } from './reducer.js'
import type { EditorLabels } from './labels.js'

/**
 * How the editor asks the host to pick an image. The consumer wires this to the
 * CMS MediaPicker (or any picker) — the builder stays free of a hard CMS dep.
 */
export type ImagePickerRenderer = (props: {
  value: ImageValue | null
  onSelect: (image: ImageValue) => void
  onClose: () => void
}) => ReactNode

export interface EditorContextValue {
  state: EditorState
  dispatch: Dispatch<EditorAction>
  registry: Registry
  labels: EditorLabels
  renderImagePicker?: ImagePickerRenderer
}

const EditorContext = createContext<EditorContextValue | null>(null)

export function useEditor(): EditorContextValue {
  const value = useContext(EditorContext)
  if (!value) {
    throw new Error('[builder] useEditor must be used inside <PageEditor>')
  }
  return value
}

export const EditorProvider = EditorContext.Provider
