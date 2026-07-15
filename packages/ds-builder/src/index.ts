// Core authoring + model surface. The render surface lives at "@adamarant/ds-builder/render"
// so a public site never pulls in editor weight; the editor will live at "./editor".

export { defineBlock } from './registry/defineBlock.js'
export { createRegistry } from './registry/createRegistry.js'
export type { Registry } from './registry/createRegistry.js'

export { resolveData } from './schema/resolve.js'

export { validateDocument } from './validate/validateDocument.js'
export { validateFields } from './validate/validateFields.js'
export type { ValidationIssue } from './validate/validateFields.js'
export type { DocumentValidation, BlockIssue } from './validate/validateDocument.js'

export type { BlockDefinition, BlockRenderProps } from './types/block.js'
export type { PageDocument, BlockInstance } from './types/page.js'

export type {
  Field,
  Fields,
  InferField,
  InferFields,
  ImageValue,
  LinkValue,
  TextField,
  RichTextField,
  NumberField,
  BooleanField,
  SelectField,
  ImageField,
  LinkField,
  ColorTokenField,
  ListField,
} from './schema/fields.js'
