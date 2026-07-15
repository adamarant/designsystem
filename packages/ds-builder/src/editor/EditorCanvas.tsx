'use client'

import { BlockBoundary } from '../render/BlockBoundary.js'
import { RenderBlock } from '../render/RenderBlock.js'
import { useEditor } from './EditorContext.js'
import { SelectableBlock } from './SelectableBlock.js'

/** Live preview of the page. Blocks render via the shared renderer with
 *  `editing`; clicking one selects it, and its control cluster reorders or
 *  deletes it. */
export function EditorCanvas() {
  const { state, registry, dispatch, labels } = useEditor()
  const { document, locale, selectedId } = state
  const blocks = document.blocks

  return (
    <div className="dsb-canvas" onClick={() => dispatch({ type: 'select', id: null })}>
      {blocks.length === 0 ? (
        <div className="dsb-canvas__empty">{labels.empty}</div>
      ) : (
        blocks.map((instance, index) => (
          <SelectableBlock
            key={instance.id}
            selected={instance.id === selectedId}
            label={registry.get(instance.type)?.label ?? instance.type}
            isFirst={index === 0}
            isLast={index === blocks.length - 1}
            onSelect={() => dispatch({ type: 'select', id: instance.id })}
            onMoveUp={() => dispatch({ type: 'moveBlock', id: instance.id, toIndex: index - 1 })}
            onMoveDown={() => dispatch({ type: 'moveBlock', id: instance.id, toIndex: index + 1 })}
            onRemove={() => dispatch({ type: 'removeBlock', id: instance.id })}
          >
            <BlockBoundary fallback={<div className="dsb-block-error">{labels.blockFailed}</div>}>
              <RenderBlock
                instance={instance}
                registry={registry}
                locale={locale}
                defaultLocale={document.defaultLocale}
                editing
              />
            </BlockBoundary>
          </SelectableBlock>
        ))
      )}
    </div>
  )
}
