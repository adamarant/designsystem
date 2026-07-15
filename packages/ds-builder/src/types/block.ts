import type { ComponentType } from 'react'
import type { Fields, InferFields } from '../schema/fields.js'

/**
 * Props every block render component receives. The SAME component renders in the
 * editor canvas and on the public site — `editing` is the only difference, so
 * preview and production can never diverge.
 */
export interface BlockRenderProps<D> {
  /** resolved, single-locale, defaults-applied data */
  data: D
  /** stable instance id (used for selection/dnd in the editor) */
  id: string
  /** active locale */
  locale: string
  /** true inside the builder canvas; falsy on the public site */
  editing?: boolean
}

/**
 * A block type: its schema, its render component, and metadata. Authored via
 * `defineBlock` so `render`'s `data` prop is inferred from `fields`.
 */
export interface BlockDefinition<F extends Fields = Fields> {
  /** unique, stable identifier stored in page JSON (e.g. "hero") */
  type: string
  /** bump when the field shape changes; drives `migrate` */
  version: number
  /** human label shown in the block palette */
  label: string
  /** optional grouping in the palette */
  category?: string
  /** the typed schema */
  fields: F
  /** render component, shared by editor and public site */
  render: ComponentType<BlockRenderProps<InferFields<F>>>
  /**
   * Migrate stored data from an older block version to the current shape.
   * Called by the renderer when `instance.version < definition.version`.
   */
  migrate?: (data: Record<string, unknown>, fromVersion: number) => Record<string, unknown>
}
