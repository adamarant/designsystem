// Phase-0..2 de-risk: prove the model JSON -> HTML through the real streaming
// SSR path (i18n, unknown-block + crash isolation), schema validation, publish
// logic, and the editor reducer. Self-contained: the demo block is defined here
// (plain createElement, no JSX) so the published package ships no demo code.
// Run after `npm run build`: `node smoke.mjs`.
import { createElement as h } from 'react'
import { renderToReadableStream } from 'react-dom/server'
import { createRegistry, defineBlock, validateDocument } from './dist/index.js'
import { PageRenderer } from './dist/render/index.js'
import { buildPublish } from './dist/server/index.js'
import { editorReducer, initEditorState } from './dist/editor/reducer.js'

let failures = 0
function check(label, cond) {
  console.log(`${cond ? '✓' : '✗'} ${label}`)
  if (!cond) failures++
}

/** Render an element through streaming SSR to a full HTML string. */
async function render(el, { onError } = {}) {
  const stream = await renderToReadableStream(el, { onError: onError ?? (() => {}) })
  await stream.allReady
  return new Response(stream).text()
}

// --- demo block (kept out of the published package) ---
const HeroBlock = defineBlock({
  type: 'hero',
  version: 1,
  label: 'Hero',
  category: 'Header',
  fields: {
    overline: { type: 'text', label: 'Overline', localized: true, default: '' },
    title: { type: 'text', label: 'Title', localized: true, required: true, default: '' },
    subtitle: { type: 'text', label: 'Subtitle', multiline: true, localized: true, default: '' },
    image: { type: 'image', label: 'Background image' },
    cta: { type: 'link', label: 'Call to action' },
    align: {
      type: 'select',
      label: 'Alignment',
      options: [
        { label: 'Left', value: 'left' },
        { label: 'Center', value: 'center' },
      ],
      default: 'left',
    },
  },
  render: ({ data }) =>
    h('section', { className: 'ds-section', 'data-align': data.align },
      h('div', { className: 'ds-container' },
        h('div', { className: 'ds-stack ds-stack--lg' }, [
          data.overline ? h('p', { key: 'o', className: 'ds-overline' }, data.overline) : null,
          h('h1', { key: 't', className: 'ds-hero-title' }, data.title),
          data.subtitle ? h('p', { key: 's', className: 'ds-prose' }, data.subtitle) : null,
          data.cta ? h('a', { key: 'c', className: 'ds-btn', href: data.cta.href }, data.cta.label ?? 'Learn more') : null,
        ]),
      ),
    ),
})

const samplePage = {
  schemaVersion: 1,
  defaultLocale: 'en',
  locales: ['en', 'ja'],
  blocks: [
    {
      id: 'b1',
      type: 'hero',
      version: 1,
      data: {
        overline: { en: 'Welcome', ja: 'ようこそ' },
        title: { en: 'Build pages, safely', ja: '安全にページを構築' },
        subtitle: {
          en: 'Edit text and images from the admin — no code.',
          ja: '管理画面からテキストと画像を編集。',
        },
        image: { url: 'https://example.com/bg.jpg', alt: 'Background' },
        cta: { href: '/contact', label: 'Get in touch' },
        align: 'center',
      },
    },
  ],
}

const registry = createRegistry([HeroBlock])

// 1. Localized render — same document, two locales.
const en = await render(h(PageRenderer, { document: samplePage, registry, locale: 'en' }))
const ja = await render(h(PageRenderer, { document: samplePage, registry, locale: 'ja' }))
check('en renders English title', en.includes('Build pages, safely'))
check('ja renders Japanese title', ja.includes('安全にページを構築'))
check('locale is isolated (no ja text in en)', !en.includes('ようこそ'))

// 2. Missing-locale fallback — a locale with no content falls back to defaultLocale.
const de = await render(h(PageRenderer, { document: samplePage, registry, locale: 'de' }))
check('unknown locale falls back to default (en)', de.includes('Build pages, safely'))

// 3. Unknown block type — degrades to renderUnknown, page still renders.
const withUnknown = {
  ...samplePage,
  blocks: [...samplePage.blocks, { id: 'x', type: 'not-registered', version: 1, data: {} }],
}
const unknownHtml = await render(
  h(PageRenderer, {
    document: withUnknown,
    registry,
    locale: 'en',
    renderUnknown: (i) => h('div', { 'data-unknown': i.type }, `[unknown:${i.type}]`),
  }),
)
check('unknown block does not break the page', unknownHtml.includes('Build pages, safely'))
check('unknown block shows fallback', unknownHtml.includes('[unknown:not-registered]'))

// 4. Throwing block — isolated by BlockBoundary, rest of page survives (streaming SSR).
const BoomBlock = { type: 'boom', version: 1, label: 'Boom', fields: {}, render: () => { throw new Error('boom') } }
const boomRegistry = createRegistry([HeroBlock, BoomBlock])
const withBoom = {
  ...samplePage,
  blocks: [{ id: 'boom1', type: 'boom', version: 1, data: {} }, ...samplePage.blocks],
}
const boomHtml = await render(
  h(PageRenderer, {
    document: withBoom,
    registry: boomRegistry,
    locale: 'en',
    renderError: (i) => h('div', { 'data-error': i.type }, '[error]'),
  }),
)
check('throwing block is isolated, page survives', boomHtml.includes('Build pages, safely'))
check('throwing block shows error fallback', boomHtml.includes('[error]'))

// 5. Validation — a well-formed document passes.
const okValidation = validateDocument(registry, samplePage)
check('valid document passes validation', okValidation.valid && okValidation.issues.length === 0)

// 6. Validation — catches unknown block, wrong scalar type, bad select, missing required.
const badDoc = {
  ...samplePage,
  blocks: [
    { id: 'u', type: 'ghost', version: 1, data: {} },
    {
      id: 'bad',
      type: 'hero',
      version: 1,
      data: {
        align: 'diagonal',
        cta: { label: 'no href' },
        subtitle: { en: 42 },
      },
    },
  ],
}
const badValidation = validateDocument(registry, badDoc)
const msgs = badValidation.issues.map((i) => `${i.blockType}:${i.path}:${i.message}`)
check('invalid document fails validation', !badValidation.valid)
check('catches unknown block type', msgs.some((m) => m.includes('unknown block type')))
check('catches missing required (title)', msgs.some((m) => m.startsWith('hero:title:required')))
check('catches bad select value (align)', msgs.some((m) => m.includes('hero:align:expected one of')))
check('catches bad link (cta.href)', msgs.some((m) => m.includes('hero:cta:expected link')))
check('catches wrong scalar in locale map (subtitle.en)', msgs.some((m) => m.includes('hero:subtitle.en:expected string')))

// 7. Publish logic — bumps version and snapshots the current draft.
check('first publish is version 1', buildPublish({ draft_content: samplePage, current_version: 0 }).version === 1)
check('publish bumps from current version', buildPublish({ draft_content: samplePage, current_version: 4 }).version === 5)
check('publish snapshots the draft content', buildPublish({ draft_content: samplePage, current_version: 0 }).content === samplePage)

// 8. Editor reducer — the pure state logic behind the (headless-untestable) UI.
const s0 = initEditorState(samplePage)
check('init picks default locale', s0.locale === 'en' && s0.selectedId === null && !s0.dirty)
const sSel = editorReducer(s0, { type: 'select', id: 'b1' })
check('select sets selectedId', sSel.selectedId === 'b1')
const sAlign = editorReducer(sSel, { type: 'updateField', blockId: 'b1', key: 'align', value: 'left', localized: false })
check('non-localized update writes value + sets dirty', sAlign.document.blocks[0].data.align === 'left' && sAlign.dirty)
const sTitleEn = editorReducer(sAlign, { type: 'updateField', blockId: 'b1', key: 'title', value: 'New EN', localized: true })
check('localized update writes into active locale', sTitleEn.document.blocks[0].data.title.en === 'New EN')
check('localized update preserves other locales', sTitleEn.document.blocks[0].data.title.ja === '安全にページを構築')
const sJa = editorReducer(sTitleEn, { type: 'setLocale', locale: 'ja' })
const sTitleJa = editorReducer(sJa, { type: 'updateField', blockId: 'b1', key: 'title', value: 'New JA', localized: true })
check('locale switch retargets writes', sTitleJa.document.blocks[0].data.title.ja === 'New JA' && sTitleJa.document.blocks[0].data.title.en === 'New EN')
check('reducer does not mutate the original document', samplePage.blocks[0].data.align === 'center')
check('markSaved clears dirty flag', !editorReducer(sAlign, { type: 'markSaved' }).dirty)

// 9. Composition — add / remove / move blocks (Phase 3).
const b2 = { id: 'b2', type: 'hero', version: 1, data: {} }
const b3 = { id: 'b3', type: 'hero', version: 1, data: {} }
const sAdd = editorReducer(s0, { type: 'addBlock', block: b2 })
check('addBlock appends by default', sAdd.document.blocks.map((b) => b.id).join(',') === 'b1,b2')
check('addBlock selects the new block + sets dirty', sAdd.selectedId === 'b2' && sAdd.dirty)
const sAddAt = editorReducer(sAdd, { type: 'addBlock', block: b3, index: 0 })
check('addBlock honours index', sAddAt.document.blocks.map((b) => b.id).join(',') === 'b3,b1,b2')
const sRemove = editorReducer(sAddAt, { type: 'removeBlock', id: 'b1' })
check('removeBlock drops the block', sRemove.document.blocks.map((b) => b.id).join(',') === 'b3,b2')
const sRemoveSel = editorReducer(editorReducer(sAdd, { type: 'select', id: 'b2' }), { type: 'removeBlock', id: 'b2' })
check('removeBlock clears selection when it was selected', sRemoveSel.selectedId === null)
check('removeBlock of unknown id is a no-op', editorReducer(sAdd, { type: 'removeBlock', id: 'nope' }) === sAdd)
const sMove = editorReducer(sAddAt, { type: 'moveBlock', id: 'b3', toIndex: 2 })
check('moveBlock reorders to target index', sMove.document.blocks.map((b) => b.id).join(',') === 'b1,b2,b3')
check('moveBlock clamps out-of-range index', editorReducer(sAddAt, { type: 'moveBlock', id: 'b1', toIndex: 99 }).document.blocks.at(-1).id === 'b1')
check('moveBlock to same index is a no-op', editorReducer(sAddAt, { type: 'moveBlock', id: 'b3', toIndex: 0 }) === sAddAt)
check('composition never mutates the original document', samplePage.blocks.length === 1)

// 10. Undo / redo — history stack with coalesced field edits.
const u1 = editorReducer(s0, { type: 'addBlock', block: b2 })
const u2 = editorReducer(u1, { type: 'addBlock', block: b3 })
check('history grows with structural edits', u2.past.length === 2 && u2.document.blocks.length === 3)
const undo1 = editorReducer(u2, { type: 'undo' })
check('undo reverts the last edit', undo1.document.blocks.map((b) => b.id).join(',') === 'b1,b2')
check('undo populates the redo stack', undo1.future.length === 1)
const redo1 = editorReducer(undo1, { type: 'redo' })
check('redo re-applies the undone edit', redo1.document.blocks.map((b) => b.id).join(',') === 'b1,b2,b3')
check('undo on empty history is a no-op', editorReducer(s0, { type: 'undo' }) === s0)
check('redo on empty future is a no-op', editorReducer(u2, { type: 'redo' }) === u2)
const e1 = editorReducer(s0, { type: 'updateField', blockId: 'b1', key: 'title', value: 'A', localized: true })
const e2 = editorReducer(e1, { type: 'updateField', blockId: 'b1', key: 'title', value: 'AB', localized: true })
check('consecutive edits to same field coalesce into one frame', e2.past.length === 1)
const e3 = editorReducer(editorReducer(e2, { type: 'select', id: 'b1' }), { type: 'updateField', blockId: 'b1', key: 'title', value: 'ABC', localized: true })
check('selection breaks the coalesce run', e3.past.length === 2)
check('undo after coalesced edits jumps past the whole run', editorReducer(e2, { type: 'undo' }).document.blocks[0].data.title.en === 'Build pages, safely')
const branched = editorReducer(editorReducer(u2, { type: 'undo' }), { type: 'addBlock', block: { id: 'b4', type: 'hero', version: 1, data: {} } })
check('a new edit after undo clears the redo stack', branched.future.length === 0)

console.log(`\n${failures === 0 ? '✅ all checks passed' : `❌ ${failures} check(s) failed`}`)
process.exit(failures === 0 ? 0 : 1)
