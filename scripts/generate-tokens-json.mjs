#!/usr/bin/env node

/**
 * generate-tokens-json.js — build src/tokens/tokens.json from the token CSS.
 *
 * tokens.json is hand-maintained and published to consumers as
 * `@adamarant/designsystem/tokens/json`. On 28 Jul 2026 it was four months
 * behind the stylesheet: 29 light colour tokens against 41 in the CSS, missing
 * the whole `brand-*` family — the one a consumer retints — and carrying two
 * (`scrollbar-thumb`, `scrollbar-thumb-hover`) that no longer exist. validate.js
 * had been reporting the drift as INFO the entire time.
 *
 * So it is generated now. `$description` values are knowledge, not data, so
 * existing ones are carried over by token name and anything left without one is
 * reported rather than silently emitted bare.
 *
 * Usage:
 *   node scripts/generate-tokens-json.js           # report the diff
 *   node scripts/generate-tokens-json.js --write   # rewrite tokens.json
 */

import { readFileSync, writeFileSync, existsSync } from 'fs'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'

const HERE = dirname(fileURLToPath(import.meta.url))
const TOKENS_DIR = join(HERE, '..', 'src', 'tokens')
const OUT = join(TOKENS_DIR, 'tokens.json')
const write = process.argv.includes('--write')

const DECLARATION = /^\s*--ds-([a-zA-Z0-9-]+)\s*:\s*([^;]+);\s*(?:\/\*\s*(.*?)\s*\*\/)?/
const BLOCK_OPEN = /^\s*([^{}/]+)\{\s*$/

/** DTCG `$type` by token family. */
const TYPE = [
  [/^color-/, 'color'],
  [/^(space|container)-/, 'dimension'],
  [/^size-/, 'dimension'],
  [/^radius-/, 'dimension'],
  [/^(font|text|type|leading|tracking|weight)-?/, 'typography'],
  [/^z-/, 'number'],
  [/^duration-/, 'duration'],
  [/^ease/, 'cubicBezier'],
  [/^blur-/, 'dimension'],
  [/^opacity-/, 'number'],
  [/^(ring|shadow)-/, 'shadow'],
]
const typeOf = (name) => TYPE.find(([re]) => re.test(name))?.[1] ?? 'other'

/** Which top-level group a token lands in, mirroring the file it came from. */
const GROUP = [
  [/^color-/, 'color'],
  [/^space-/, 'spacing'],
  [/^container-/, 'spacing'],
  [/^size-/, 'sizing'],
  [/^radius-/, 'borderRadius'],
  [/^(font|text|type|leading|tracking|weight)/, 'typography'],
  [/^z-/, 'zIndex'],
  [/^duration-/, 'duration'],
  [/^ease/, 'easing'],
  [/^blur-/, 'blur'],
  [/^opacity-/, 'opacity'],
  [/^ring-/, 'focusRing'],
  [/^shadow-/, 'shadow'],
  [/^breakpoint-/, 'breakpoint'],
]
const groupOf = (name) => GROUP.find(([re]) => re.test(name))?.[1] ?? 'other'

/** Existing descriptions, keyed by the bare token name, so they survive a rebuild. */
function existingDescriptions() {
  const map = new Map()
  if (!existsSync(OUT)) return map
  const walk = (node, trail) => {
    if (!node || typeof node !== 'object') return
    if (node.$value !== undefined) {
      if (node.$description) map.set(trail[trail.length - 1], node.$description)
      return
    }
    for (const [k, v] of Object.entries(node)) {
      if (k.startsWith('$')) continue
      walk(v, [...trail, k])
    }
  }
  try {
    walk(JSON.parse(readFileSync(OUT, 'utf8')), [])
  } catch {
    // unreadable file: start clean rather than refuse to run
  }
  return map
}

function parse() {
  const found = [] // { name, value, theme, note }
  for (const file of ['colors.css', 'spacing.css', 'typography.css', 'shadows.css']) {
    const path = join(TOKENS_DIR, file)
    if (!existsSync(path)) continue
    let theme = null
    let deprecated = false
    for (const line of readFileSync(path, 'utf8').split('\n')) {
      const open = line.match(BLOCK_OPEN)
      if (open) {
        theme = /dark/.test(open[1]) ? 'dark' : 'light'
        continue
      }
      if (/^\s*\}/.test(line)) {
        theme = null
        continue
      }
      // An `@deprecated` comment applies until the next group heading.
      if (line.includes('@deprecated')) deprecated = true
      if (/\/\*\s*-{2,}/.test(line) && !line.includes('@deprecated')) deprecated = false

      const m = line.match(DECLARATION)
      if (m) found.push({ name: m[1], value: m[2].trim(), theme, note: m[3], deprecated })
    }
  }
  return found
}

const descriptions = existingDescriptions()
const tokens = parse()

const out = { $schema: 'https://design-tokens.github.io/community-group/format/' }
const undocumented = []

for (const { name, value, theme, note, deprecated } of tokens) {
  const group = groupOf(name)
  const bare = name.replace(/^(color|space|container|size|radius|z|duration|blur|opacity|ring|shadow|breakpoint)-/, '')
  const description = note || descriptions.get(bare) || descriptions.get(name)
  if (!description) undocumented.push(name)

  // Colours are the only family that differs per theme.
  const bucket =
    group === 'color' && theme
      ? (out.color ??= {})[theme] ??= {}
      : (out[group] ??= {})

  bucket[bare] = {
    $value: value,
    $type: typeOf(name),
    ...(description ? { $description: description } : {}),
    // Non-standard but load-bearing: ds_find must not offer a name on its way out.
    ...(deprecated ? { $deprecated: true } : {}),
  }
}

const count = (n) =>
  n && typeof n === 'object'
    ? n.$value !== undefined
      ? 1
      : Object.entries(n).reduce((s, [k, v]) => (k.startsWith('$') ? s : s + count(v)), 0)
    : 0

console.log(`\ntokens.json — ${count(out) } tokens from ${tokens.length} declarations\n`)
for (const [group, node] of Object.entries(out)) {
  if (group.startsWith('$')) continue
  console.log(`  ${group.padEnd(14)} ${count(node)}`)
}

if (undocumented.length) {
  console.log(`\n  ${undocumented.length} without a $description:`)
  console.log('   ', undocumented.slice(0, 12).join(', ') + (undocumented.length > 12 ? ' …' : ''))
  console.log('    They ship bare. Add the sentence next to the declaration in the CSS')
  console.log('    (an inline /* comment */ is picked up) and it lands here on the next build.')
}

if (write) {
  writeFileSync(OUT, JSON.stringify(out, null, 2) + '\n', 'utf8')
  console.log(`\n  written: ${OUT.replace(process.env.HOME ?? '', '~')}\n`)
} else {
  console.log('\n  dry run — pass --write to update tokens.json\n')
}
