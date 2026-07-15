'use client'

import { useState } from 'react'
import { Button, Flex, IconBtn, Select } from '@adamarant/ds-react'
import type { BlockDefinition } from '../types/block.js'
import { BlockPalette } from './BlockPalette.js'
import { createBlockInstance } from './blockInstance.js'
import { useEditor } from './EditorContext.js'
import { PlusIcon, RedoIcon, UndoIcon } from './icons.js'
import type { SaveStatus } from './reducer.js'

function statusText(status: SaveStatus, labels: ReturnType<typeof useEditor>['labels']): string {
  switch (status) {
    case 'saving':
      return labels.saving
    case 'saved':
      return labels.saved
    case 'error':
      return labels.saveError
    default:
      return ''
  }
}

interface EditorToolbarProps {
  onPublish: () => void
  publishing: boolean
}

/** Top bar: add section, undo/redo, locale switch, save status, publish. */
export function EditorToolbar({ onPublish, publishing }: EditorToolbarProps) {
  const { state, dispatch, labels } = useEditor()
  const { locales, blocks } = state.document
  const [paletteOpen, setPaletteOpen] = useState(false)

  const canUndo = state.past.length > 0
  const canRedo = state.future.length > 0

  function handlePick(def: BlockDefinition) {
    // Insert after the selected block, or append when nothing is selected.
    const selectedIndex = blocks.findIndex((b) => b.id === state.selectedId)
    const index = selectedIndex === -1 ? blocks.length : selectedIndex + 1
    dispatch({ type: 'addBlock', block: createBlockInstance(def), index })
    setPaletteOpen(false)
  }

  return (
    <Flex className="dsb-toolbar" align="center" justify="between" gap="4">
      <Flex align="center" gap="2">
        <div className="dsb-toolbar__add">
          <Button
            type="button"
            variant="secondary"
            size="sm"
            aria-haspopup="menu"
            aria-expanded={paletteOpen}
            onClick={() => setPaletteOpen((open) => !open)}
          >
            <PlusIcon />
            {labels.addSection}
          </Button>
          {paletteOpen ? (
            <BlockPalette onPick={handlePick} onClose={() => setPaletteOpen(false)} />
          ) : null}
        </div>

        <Flex align="center" gap="1">
          <IconBtn
            type="button"
            size="sm"
            variant="ghost"
            aria-label={labels.undo}
            disabled={!canUndo}
            onClick={() => dispatch({ type: 'undo' })}
          >
            <UndoIcon />
          </IconBtn>
          <IconBtn
            type="button"
            size="sm"
            variant="ghost"
            aria-label={labels.redo}
            disabled={!canRedo}
            onClick={() => dispatch({ type: 'redo' })}
          >
            <RedoIcon />
          </IconBtn>
        </Flex>

        {locales.length > 1 ? (
          <label className="dsb-toolbar__locale">
            <span className="dsb-toolbar__locale-label">{labels.language}</span>
            <Select
              value={state.locale}
              onChange={(e) => dispatch({ type: 'setLocale', locale: e.target.value })}
            >
              {locales.map((loc) => (
                <option key={loc} value={loc}>
                  {loc}
                </option>
              ))}
            </Select>
          </label>
        ) : null}
      </Flex>

      <Flex align="center" gap="3">
        <span className="dsb-toolbar__status" data-status={state.status}>
          {statusText(state.status, labels)}
        </span>
        <Button type="button" variant="primary" loading={publishing} onClick={onPublish}>
          {publishing ? labels.publishing : labels.publish}
        </Button>
      </Flex>
    </Flex>
  )
}
