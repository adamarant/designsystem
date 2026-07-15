// Core authoring + model surface. The render surface lives at "@adamarant/ds-builder/render"
// so a public site never pulls in editor weight; the editor will live at "./editor".
export { defineBlock } from './registry/defineBlock.js';
export { createRegistry } from './registry/createRegistry.js';
export { resolveData } from './schema/resolve.js';
export { validateDocument } from './validate/validateDocument.js';
export { validateFields } from './validate/validateFields.js';
//# sourceMappingURL=index.js.map