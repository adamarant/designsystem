import { Fragment, Suspense, type ReactElement, type ReactNode } from 'react'
import type { Registry } from '../registry/createRegistry.js'
import type { PageDocument } from '../types/page.js'
import { RenderBlock } from './RenderBlock.js'
import { BlockBoundary } from './BlockBoundary.js'

export interface PageRendererProps {
  document: PageDocument
  registry: Registry
  /** active locale; defaults to `document.defaultLocale` */
  locale?: string
  /** true inside the builder canvas */
  editing?: boolean
  /** rendered when a block type is missing from the registry (default: skip) */
  renderUnknown?: (instance: { type: string; id: string }) => ReactNode
  /** rendered when a block throws (default: skip) */
  renderError?: (instance: { type: string; id: string }) => ReactNode
}

/**
 * Renders a page document to React. Server-safe and lightweight — this is the
 * only piece a public site ships; the editor lives behind a separate export.
 *
 * Resilience by construction: unknown block types degrade to `renderUnknown`
 * and throwing blocks are caught per-block by `BlockBoundary`, so no single
 * block can break the page.
 */
export function PageRenderer({
  document,
  registry,
  locale,
  editing,
  renderUnknown,
  renderError,
}: PageRendererProps): ReactElement {
  const activeLocale = locale ?? document.defaultLocale

  return (
    <>
      {document.blocks.map((instance) => {
        if (!registry.has(instance.type)) {
          return renderUnknown ? (
            <Fragment key={instance.id}>{renderUnknown(instance)}</Fragment>
          ) : null
        }
        const fallback = renderError ? renderError(instance) : null
        // Each block sits in its own Suspense so a throw is contained to this
        // segment during streaming SSR (an unwrapped throw errors the whole
        // shell); the BlockBoundary then renders the fallback in its place.
        return (
          <Suspense key={instance.id} fallback={fallback}>
            <BlockBoundary fallback={fallback}>
              <RenderBlock
                instance={instance}
                registry={registry}
                locale={activeLocale}
                defaultLocale={document.defaultLocale}
                editing={editing}
              />
            </BlockBoundary>
          </Suspense>
        )
      })}
    </>
  )
}
