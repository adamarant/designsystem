/** UI strings for the editor chrome. Default English; a consumer passes overrides. */
export interface EditorLabels {
  save: string
  saving: string
  saved: string
  saveError: string
  publish: string
  publishing: string
  language: string
  noSelection: string
  unknownBlock: string
  blockFailed: string
  empty: string
  chooseImage: string
  changeImage: string
  removeImage: string
  imageUrl: string
  linkHref: string
  linkLabel: string
  addItem: string
  remove: string
  addSection: string
  blockPalette: string
  moveUp: string
  moveDown: string
  deleteBlock: string
  undo: string
  redo: string
}

export const defaultLabels: EditorLabels = {
  save: 'Save',
  saving: 'Saving…',
  saved: 'Saved',
  saveError: 'Save failed',
  publish: 'Publish',
  publishing: 'Publishing…',
  language: 'Language',
  noSelection: 'Select a section to edit its content.',
  unknownBlock: 'Unknown block type',
  blockFailed: 'This section failed to render.',
  empty: 'No sections yet.',
  chooseImage: 'Choose image',
  changeImage: 'Change image',
  removeImage: 'Remove',
  imageUrl: 'Image URL',
  linkHref: 'URL',
  linkLabel: 'Label',
  addItem: 'Add item',
  remove: 'Remove',
  addSection: 'Add section',
  blockPalette: 'Add a section',
  moveUp: 'Move up',
  moveDown: 'Move down',
  deleteBlock: 'Delete section',
  undo: 'Undo',
  redo: 'Redo',
}
