import type { ReactElement } from 'react'
import type { Registry } from '../registry/createRegistry.js'
import type { BlockInstance } from '../types/page.js'
import { resolveData } from '../schema/resolve.js'

export interface RenderBlockProps {
  instance: BlockInstance
  registry: Registry
  locale: string
  defaultLocale: string
  editing?: boolean
}

/**
 * Render one block instance: migrate old data if needed, resolve defaults +
 * locale, then hand clean single-locale data to the block's component.
 * Returns null for unknown types — callers handle that with a fallback.
 */
export function RenderBlock({
  instance,
  registry,
  locale,
  defaultLocale,
  editing,
}: RenderBlockProps): ReactElement | null {
  const def = registry.get(instance.type)
  if (!def) return null

  let data = instance.data
  if (def.migrate && instance.version < def.version) {
    data = def.migrate(data, instance.version)
  }

  const resolved = resolveData(def.fields, data, locale, defaultLocale)
  const Block = def.render

  // resolved is Record<string, unknown>; the block's typed data shape is
  // enforced at authoring time via defineBlock, so this cast is safe here.
  return <Block data={resolved as never} id={instance.id} locale={locale} editing={editing} />
}
