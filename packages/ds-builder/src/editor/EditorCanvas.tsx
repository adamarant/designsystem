'use client'

import { BlockBoundary } from '../render/BlockBoundary.js'
import { RenderBlock } from '../render/RenderBlock.js'
import { useEditor } from './EditorContext.js'
import { SelectableBlock } from './SelectableBlock.js'

/** Live preview of the page. Blocks render via the shared renderer with
 *  `editing`; clicking one selects it for editing in the property panel. */
export function EditorCanvas() {
  const { state, registry, dispatch, labels } = useEditor()
  const { document, locale, selectedId } = state

  return (
    <div className="dsb-canvas" onClick={() => dispatch({ type: 'select', id: null })}>
      {document.blocks.length === 0 ? (
        <div className="dsb-canvas__empty">{labels.empty}</div>
      ) : (
        document.blocks.map((instance) => (
          <SelectableBlock
            key={instance.id}
            selected={instance.id === selectedId}
            label={registry.get(instance.type)?.label ?? instance.type}
            onSelect={() => dispatch({ type: 'select', id: instance.id })}
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
