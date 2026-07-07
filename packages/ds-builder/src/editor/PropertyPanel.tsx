'use client'

import { Stack } from '@adamarant/ds-react'
import { useEditor } from './EditorContext.js'
import { FieldControl } from './controls/FieldControl.js'

/** Right-hand panel: auto-generates a form from the selected block's schema. */
export function PropertyPanel() {
  const { state, registry, labels } = useEditor()
  const block = state.document.blocks.find((b) => b.id === state.selectedId)

  if (!block) {
    return <div className="dsb-panel dsb-panel--empty">{labels.noSelection}</div>
  }

  const def = registry.get(block.type)
  if (!def) {
    return (
      <div className="dsb-panel dsb-panel--empty">
        {labels.unknownBlock}: {block.type}
      </div>
    )
  }

  return (
    <div className="dsb-panel">
      <div className="dsb-panel__header">{def.label}</div>
      <Stack gap="md" className="dsb-panel__fields">
        {Object.entries(def.fields).map(([key, field]) => (
          <FieldControl key={key} blockId={block.id} fieldKey={key} field={field} />
        ))}
      </Stack>
    </div>
  )
}
