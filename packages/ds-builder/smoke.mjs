// Phase-0 de-risk: prove JSON -> HTML through the real render path, including
// i18n locale resolution, unknown-block fallback, and per-block crash isolation.
// Uses renderToReadableStream — the same streaming SSR path Next App Router uses,
// which (unlike legacy renderToStaticMarkup) honours error boundaries.
// Run after `npm run build`: `node smoke.mjs`.
import { createElement } from 'react'
import { renderToReadableStream } from 'react-dom/server'
import { createRegistry } from './dist/index.js'
import { PageRenderer } from './dist/render/index.js'
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

console.log(`\n${failures === 0 ? '✅ all checks passed' : `❌ ${failures} check(s) failed`}`)
process.exit(failures === 0 ? 0 : 1)
