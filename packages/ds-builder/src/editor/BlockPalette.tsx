'use client'

import { useEffect } from 'react'
import type { BlockDefinition } from '../types/block.js'
import { useEditor } from './EditorContext.js'

interface BlockPaletteProps {
  onPick: (def: BlockDefinition) => void
  onClose: () => void
}

const UNGROUPED = '__ungrouped__'

/**
 * Popover listing every registered block, grouped by `category`. Picking one
 * adds it to the page. The consumer owns the block list, so this is whatever
 * they registered — nothing hard-coded here.
 */
export function BlockPalette({ onPick, onClose }: BlockPaletteProps) {
  const { registry, labels } = useEditor()

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  const blocks = registry.list()
  const groups = new Map<string, BlockDefinition[]>()
  for (const def of blocks) {
    const key = def.category ?? UNGROUPED
    const list = groups.get(key)
    if (list) list.push(def)
    else groups.set(key, [def])
  }

  return (
    <>
      <div className="dsb-palette__backdrop" onClick={onClose} />
      <div className="dsb-palette" role="menu" aria-label={labels.blockPalette}>
        <div className="dsb-palette__title">{labels.blockPalette}</div>
        {[...groups.entries()].map(([category, defs]) => (
          <div key={category} className="dsb-palette__group">
            {category !== UNGROUPED ? (
              <div className="dsb-palette__category">{category}</div>
            ) : null}
            {defs.map((def) => (
              <button
                key={def.type}
                type="button"
                role="menuitem"
                className="dsb-palette__item"
                onClick={() => onPick(def)}
              >
                {def.label}
              </button>
            ))}
          </div>
        ))}
      </div>
    </>
  )
}
