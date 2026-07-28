/**
 * The colour token table, read from src/tokens/colors.css.
 *
 * The utility half of /foundations/colors became generated on 28 Jul 2026; this
 * is the other half. It was hand-written and, checked the same day, complete —
 * 71 of 71 — but complete by luck: nothing kept it so, and the utility half had
 * already drifted to 7 of 62 the same way.
 *
 * Values, groups and deprecations come from the stylesheet. The usage notes stay
 * here, because "Card, panel, input" is knowledge no parser can derive; a token
 * that arrives without one renders as unannotated rather than silently missing,
 * so the gap is visible instead of invisible.
 */

import { readFileSync } from 'fs'
import { join } from 'path'

const TOKENS_FILE = join(process.cwd(), '..', 'src', 'tokens', 'colors.css')

export interface ColorToken {
  name: string
  /** the group heading it sits under in the source */
  group: string
  light: string
  dark?: string
  /** comment written next to the declaration in the source */
  sourceNote?: string
  /** what it is for — see USAGE below */
  usage?: string
  deprecated?: boolean
}

/**
 * What each token is for. Kept by hand on purpose: this is the half of the page
 * that actually answers "which one do I pick", and no stylesheet knows it.
 * A token missing from here still appears on the page, flagged as unannotated.
 */
const USAGE: Record<string, string> = {
  '--ds-color-bg': 'The page, and only the page. Everything on top of it is a surface.',
  '--ds-color-surface': 'Rung 1 — a card, panel or input sitting on the page.',
  '--ds-color-surface-muted': 'Rung 2 — an element on a card. Badge, chip, kbd, toggle off.',
  '--ds-color-surface-elevated': 'Rung 3 — an element on a muted one.',
  '--ds-color-surface-active': 'A state, not a rung: selected sidebar item, current tab.',
  '--ds-color-text': 'Default text colour. Body, labels, values — when in doubt, this one.',
  '--ds-color-text-secondary':
    'Only the lesser half of a pair: a description under a title. Never a whole surface.',
  '--ds-color-text-tertiary': 'Decorative only — timestamps, counts. Below 4.5:1.',
  '--ds-color-text-disabled': 'Disabled controls. Exempt from contrast per WCAG 1.4.3.',
  '--ds-color-inverted': 'Dark block on a light page: primary buttons, inverted sections.',
  '--ds-color-on-inverted': 'Text on an inverted block. Always pair the two.',
  '--ds-color-border': 'Default border. The card outline, the divider.',
  '--ds-color-border-subtle': 'A border that should be felt more than seen.',
  '--ds-color-interactive': 'Links and interactive text.',
  '--ds-color-brand': 'The brand accent. A project retints this and nothing else moves.',
  '--ds-color-overlay': 'The scrim behind a modal.',
  '--ds-color-static-white': 'Stays white in both themes — on a photo, in a badge over an image.',
  '--ds-color-static-black': 'Stays black in both themes.',
  '--ds-color-selection-bg': 'Text selection highlight.',
  '--ds-color-selection-text': 'Text inside a selection.',
  '--ds-color-on-brand': 'Text on a brand-filled surface. Always pair with --ds-color-brand.',

  // Status and accent come as triplets: the base is the text and icon colour,
  // -subtle is the background fill behind it, -border the outline. Use all three
  // together or the state reads as decoration.
  '--ds-color-success': 'Something worked. Base is text and icon; -subtle fills behind it, -border outlines.',
  '--ds-color-warning': 'Something needs attention but nothing is broken. Same triplet.',
  '--ds-color-error': 'Something failed or is invalid. Same triplet.',
  '--ds-color-info': 'Neutral information, no urgency. Same triplet.',

  // Accents categorise; they never mean state. A blue badge says "this kind of
  // thing", never "this is fine" — that is what status is for.
  '--ds-color-accent-blue': 'Decorative category, not a state. Badge, tag, chart series.',
  '--ds-color-accent-green': 'Decorative category, not a state. Do not use it to mean success.',
  '--ds-color-accent-orange': 'Decorative category, not a state. Do not use it to mean warning.',
  '--ds-color-accent-purple': 'Decorative category, not a state.',
}

// Group headings open with `/* --- Name ---` and may run over several lines
// (the Text group carries its contrast table inside the same comment), so the
// closing `*/` is not required to recognise one.
const GROUP_HEADING = /\/\*\s*-{2,}\s*([^-\n][^\n]*?)\s*-{2,}/
const DECLARATION = /^\s*(--ds-color-[a-zA-Z0-9-]+)\s*:\s*([^;]+);\s*(?:\/\*\s*(.*?)\s*\*\/)?/
const BLOCK_OPEN = /^\s*([^{}/]+)\{\s*$/

/**
 * The file is four blocks, not two: 41 theme-dependent tokens in
 * `:root, [data-theme="light"]` with their dark twin, then 30 theme-independent
 * ones (static, status, accent) in a second `:root`, of which 24 get a dark
 * override. Splitting on the first `[data-theme="dark"]` loses half of them,
 * which a first pass did — 41 of 71.
 */
function parseBlocks(css: string): { dark: boolean; lines: string[] }[] {
  const blocks: { dark: boolean; lines: string[] }[] = []
  let current: { dark: boolean; lines: string[] } | null = null
  for (const line of css.split('\n')) {
    const open = line.match(BLOCK_OPEN)
    if (open) {
      current = { dark: /dark/.test(open[1]), lines: [] }
      blocks.push(current)
      continue
    }
    if (/^\s*\}/.test(line)) {
      current = null
      continue
    }
    current?.lines.push(line)
  }
  return blocks
}

export function colorTokens(): ColorToken[] {
  let css = ''
  try {
    css = readFileSync(TOKENS_FILE, 'utf8')
  } catch {
    return []
  }

  const blocks = parseBlocks(css)

  const dark = new Map<string, string>()
  for (const b of blocks.filter((x) => x.dark)) {
    for (const line of b.lines) {
      const m = line.match(DECLARATION)
      if (m) dark.set(m[1], m[2].trim())
    }
  }

  const out: ColorToken[] = []
  const seen = new Set<string>()

  for (const b of blocks.filter((x) => !x.dark)) {
    let group = 'Ungrouped'
    let deprecatedRun = false
    for (const line of b.lines) {
      const heading = line.match(GROUP_HEADING)
      if (heading) {
        group = heading[1].split('—')[0].trim()
        deprecatedRun = false
        continue
      }
      // A `@deprecated` comment applies until the next group heading.
      if (line.includes('@deprecated')) deprecatedRun = true

      const m = line.match(DECLARATION)
      if (!m || seen.has(m[1])) continue
      const [, name, value, note] = m
      seen.add(name)
      out.push({
        name,
        group,
        light: value.trim(),
        ...(dark.has(name) ? { dark: dark.get(name) } : {}),
        ...(note ? { sourceNote: note } : {}),
        ...(USAGE[name] ? { usage: USAGE[name] } : {}),
        ...(deprecatedRun ? { deprecated: true } : {}),
      })
    }
  }
  return out
}

/** Grouped in source order, which is the order someone reasoning about them wants. */
export function colorTokensByGroup(): [string, ColorToken[]][] {
  const groups = new Map<string, ColorToken[]>()
  for (const t of colorTokens()) {
    const list = groups.get(t.group) ?? []
    list.push(t)
    groups.set(t.group, list)
  }
  return [...groups.entries()]
}

/**
 * Variants that carry their meaning in the suffix: `--ds-color-brand-hover` is
 * the hover of brand and needs no separate sentence. Flagging them would bury
 * the tokens that genuinely lack guidance.
 */
const INHERITED_SUFFIX = /-(hover|active|subtle|border|solid|disabled)$/

/** Tokens with no usage note — rendered as a gap so it cannot stay invisible. */
export function unannotatedTokens(): string[] {
  const all = colorTokens()
  const annotated = new Set(all.filter((t) => t.usage || t.sourceNote).map((t) => t.name))
  return all
    .filter((t) => {
      if (t.usage || t.sourceNote || t.deprecated) return false
      // inherits from its base, e.g. --ds-color-brand-hover from --ds-color-brand
      const base = t.name.replace(INHERITED_SUFFIX, '')
      return !(base !== t.name && annotated.has(base))
    })
    .map((t) => t.name)
}
