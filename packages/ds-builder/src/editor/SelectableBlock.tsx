'use client'

import type { ReactNode } from 'react'
import { IconBtn } from '@adamarant/ds-react'
import { useEditor } from './EditorContext.js'
import { ChevronDownIcon, ChevronUpIcon, CloseIcon } from './icons.js'

interface SelectableBlockProps {
  selected: boolean
  label: string
  isFirst: boolean
  isLast: boolean
  onSelect: () => void
  onMoveUp: () => void
  onMoveDown: () => void
  onRemove: () => void
  children: ReactNode
}

/**
 * Wraps a rendered block on the canvas with a selection outline, a type tag, and
 * a control cluster (reorder + delete). Controls stop propagation so acting on
 * them never leaks into canvas/block selection.
 */
export function SelectableBlock({
  selected,
  label,
  isFirst,
  isLast,
  onSelect,
  onMoveUp,
  onMoveDown,
  onRemove,
  children,
}: SelectableBlockProps) {
  const { labels } = useEditor()

  function act(fn: () => void) {
    return (e: React.MouseEvent) => {
      e.stopPropagation()
      fn()
    }
  }

  return (
    <div
      className={selected ? 'dsb-selectable dsb-selectable--selected' : 'dsb-selectable'}
      onClick={(e) => {
        e.stopPropagation()
        onSelect()
      }}
    >
      <span className="dsb-selectable__tag">{label}</span>
      <div className="dsb-selectable__controls">
        <IconBtn
          type="button"
          size="xs"
          variant="ghost"
          aria-label={labels.moveUp}
          disabled={isFirst}
          onClick={act(onMoveUp)}
        >
          <ChevronUpIcon />
        </IconBtn>
        <IconBtn
          type="button"
          size="xs"
          variant="ghost"
          aria-label={labels.moveDown}
          disabled={isLast}
          onClick={act(onMoveDown)}
        >
          <ChevronDownIcon />
        </IconBtn>
        <IconBtn
          type="button"
          size="xs"
          variant="ghost"
          aria-label={labels.deleteBlock}
          onClick={act(onRemove)}
        >
          <CloseIcon />
        </IconBtn>
      </div>
      <div className="dsb-selectable__inner">{children}</div>
    </div>
  )
}
