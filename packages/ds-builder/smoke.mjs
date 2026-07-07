// Phase-0 de-risk: prove JSON -> HTML through the real render path, including
// i18n locale resolution, unknown-block fallback, and per-block crash isolation.
// Uses renderToReadableStream — the same streaming SSR path Next App Router uses,
// which (unlike legacy renderToStaticMarkup) honours error boundaries.
// Run after `npm run build`: `node smoke.mjs`.
import { createElement } from 'react'
import { renderToReadableStream } from 'react-dom/server'
import { createRegistry, validateDocument } from './dist/index.js'
import { PageRenderer } from './dist/render/index.js'
import { buildPublish } from './dist/server/index.js'
import { editorReducer, initEditorState } from './dist/editor/reducer.js'
import { HeroBlock } from './dist/demo/HeroBlock.js'
import { samplePage } from './dist/demo/sample-page.js'

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

const registry = createRegistry([HeroBlock])

// 1. Localized render — same document, two locales.
const en = await render(createElement(PageRenderer, { document: samplePage, registry, locale: 'en' }))
const ja = await render(createElement(PageRenderer, { document: samplePage, registry, locale: 'ja' }))
console.log('\n--- en ---\n' + en + '\n\n--- ja ---\n' + ja + '\n')
check('en renders English title', en.includes('Build pages, safely'))
check('ja renders Japanese title', ja.includes('安全にページを構築'))
check('locale is isolated (no ja text in en)', !en.includes('ようこそ'))

// 2. Missing-locale fallback — a locale with no content falls back to defaultLocale.
const de = await render(createElement(PageRenderer, { document: samplePage, registry, locale: 'de' }))
check('unknown locale falls back to default (en)', de.includes('Build pages, safely'))

// 3. Unknown block type — degrades to renderUnknown, page still renders.
const withUnknown = {
  ...samplePage,
  blocks: [...samplePage.blocks, { id: 'x', type: 'not-registered', version: 1, data: {} }],
}
const unknownHtml = await render(
  createElement(PageRenderer, {
    document: withUnknown,
    registry,
    locale: 'en',
    renderUnknown: (i) => createElement('div', { 'data-unknown': i.type }, `[unknown:${i.type}]`),
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
  createElement(PageRenderer, {
    document: withBoom,
    registry: boomRegistry,
    locale: 'en',
    renderError: (i) => createElement('div', { 'data-error': i.type }, '[error]'),
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
        // title (required, localized) missing
        align: 'diagonal', // not an allowed option
        cta: { label: 'no href' }, // link missing href
        subtitle: { en: 42 }, // localized text but number
      },
    },
  ],
}
const badValidation = validateDocument(registry, badDoc)
const msgs = badValidation.issues.map((i) => `${i.blockType}:${i.path}:${i.message}`)
console.log('\nvalidation issues:\n' + msgs.map((m) => '  - ' + m).join('\n') + '\n')
check('invalid document fails validation', !badValidation.valid)
check('catches unknown block type', msgs.some((m) => m.includes('unknown block type')))
check('catches missing required (title)', msgs.some((m) => m.startsWith('hero:title:required')))
check('catches bad select value (align)', msgs.some((m) => m.includes('hero:align:expected one of')))
check('catches bad link (cta.href)', msgs.some((m) => m.includes('hero:cta:expected link')))
check('catches wrong scalar in locale map (subtitle.en)', msgs.some((m) => m.includes('hero:subtitle.en:expected string')))

// 7. Publish logic — bumps version and snapshots the current draft.
const p1 = buildPublish({ draft_content: samplePage, current_version: 0 })
const p2 = buildPublish({ draft_content: samplePage, current_version: 4 })
check('first publish is version 1', p1.version === 1)
check('publish bumps from current version', p2.version === 5)
check('publish snapshots the draft content', p1.content === samplePage)

// 8. Editor reducer — the pure state logic behind the (headless-untestable) UI.
const s0 = initEditorState(samplePage)
check('init picks default locale', s0.locale === 'en' && s0.selectedId === null && !s0.dirty)

const sSel = editorReducer(s0, { type: 'select', id: 'b1' })
check('select sets selectedId', sSel.selectedId === 'b1')

// non-localized field write
const sAlign = editorReducer(sSel, { type: 'updateField', blockId: 'b1', key: 'align', value: 'left', localized: false })
check('non-localized update writes value + sets dirty', sAlign.document.blocks[0].data.align === 'left' && sAlign.dirty)

// localized field write goes into the active locale's map, preserving others
const sTitleEn = editorReducer(sAlign, { type: 'updateField', blockId: 'b1', key: 'title', value: 'New EN', localized: true })
check('localized update writes into active locale', sTitleEn.document.blocks[0].data.title.en === 'New EN')
check('localized update preserves other locales', sTitleEn.document.blocks[0].data.title.ja === '安全にページを構築')

// switching locale then writing targets the new locale
const sJa = editorReducer(sTitleEn, { type: 'setLocale', locale: 'ja' })
const sTitleJa = editorReducer(sJa, { type: 'updateField', blockId: 'b1', key: 'title', value: 'New JA', localized: true })
check('locale switch retargets writes', sTitleJa.document.blocks[0].data.title.ja === 'New JA' && sTitleJa.document.blocks[0].data.title.en === 'New EN')

// immutability — original document untouched
check('reducer does not mutate the original document', samplePage.blocks[0].data.align === 'center')

// markSaved clears dirty
check('markSaved clears dirty flag', !editorReducer(sAlign, { type: 'markSaved' }).dirty)

console.log(`\n${failures === 0 ? '✅ all checks passed' : `❌ ${failures} check(s) failed`}`)
process.exit(failures === 0 ? 0 : 1)
