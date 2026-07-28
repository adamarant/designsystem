/**
 * The colour utility table, read from the design system instead of listed by hand.
 *
 * The token half of /foundations/colors was hand-written and, checked on
 * 28 Jul 2026, complete: 71 of 71. The utility half listed 7 of 62. That gap is
 * not cosmetic — the utility name and the token name differ (`.ds-text-primary`
 * applies `--ds-color-text`), so a developer moving from JSX to CSS has to guess
 * the token from the class. Across the consumers that guess produced 38 uses of
 * `var(--ds-color-text-primary)`, which does not exist and silently resolves to
 * nothing.
 *
 * So this half is derived: the classes come from src/utilities/*.css and the
 * deprecations from the `@deprecated` block in the utilities source. Add a colour
 * and the page knows.
 */

import { readFileSync } from 'fs'
import { join } from 'path'

const DS_ROOT = join(process.cwd(), '..')
const UTILITIES_DIR = join(DS_ROOT, 'src', 'utilities')
/** Where the colour utilities are declared. `states.css` is excluded on purpose:
 *  it holds `group-hover:` variants of these same classes, not new colours. */
const UTILITY_FILES = ['text.css', 'interactive.css', 'layout.css']

export interface ColorUtility {
  /** class name without the leading dot */
  cls: string
  /** the CSS property that carries the colour */
  property: string
  /** the `--ds-color-*` token it applies */
  token: string
  /** true when the value is a color-mix() rather than the token straight */
  blended?: boolean
  /** other properties the same class sets, e.g. ds-bg-inverted also sets colour */
  alsoSets?: string[]
  /** set when the utilities source marks it @deprecated */
  replacedBy?: string
}

/** Any `.ds-…` rule and its body. Matched on the value, not the shape, so
 *  multi-declaration rules and color-mix() are not silently dropped. */
const RULE = /\.(ds-[a-zA-Z0-9_-]+)\s*\{([^}]*)\}/g
const DECL = /([a-z-]+)\s*:\s*([^;]+)/g
const COLOR_TOKEN = /var\((--ds-color-[a-zA-Z0-9-]+)\)/

/** Lines like `.ds-bg-muted → .ds-surface-muted` inside the @deprecated block. */
const DEPRECATION_LINE = /\.(ds-[a-zA-Z0-9-]+)\s*(?:→|->)\s*\.(ds-[a-zA-Z0-9-]+)/g

/** Size and alignment share the `ds-text-` prefix but are not colours. */
const NOT_A_COLOR = /^ds-text-(xs|sm|base|lg|xl|[2-7]xl|left|center|right|balance)$/

function deprecations(): Map<string, string> {
  const map = new Map<string, string>()
  let source = ''
  try {
    source = readFileSync(join(UTILITIES_DIR, 'text.css'), 'utf8')
  } catch {
    return map
  }
  // Only read inside an @deprecated comment: a stray arrow elsewhere is not a rename.
  for (const block of source.split('@deprecated').slice(1)) {
    for (const m of block.split('*/')[0].matchAll(DEPRECATION_LINE)) map.set(m[1], m[2])
  }
  return map
}

export function colorUtilities(): ColorUtility[] {
  let css = ''
  for (const file of UTILITY_FILES) {
    try {
      css += readFileSync(join(UTILITIES_DIR, file), 'utf8') + '\n'
    } catch {
      // a missing utilities file means an incomplete table, not a crashed page
    }
  }
  if (!css) return []

  const replaced = deprecations()
  const seen = new Set<string>()
  const out: ColorUtility[] = []

  for (const rule of css.matchAll(RULE)) {
    const [, cls, body] = rule
    if (seen.has(cls) || NOT_A_COLOR.test(cls)) continue

    let carrier: { property: string; token: string; blended: boolean } | null = null
    const others: string[] = []

    for (const d of body.matchAll(DECL)) {
      const [, property, rawValue] = d
      const token = rawValue.match(COLOR_TOKEN)?.[1]
      if (!token) continue
      if (!carrier) carrier = { property, token, blended: rawValue.includes('color-mix') }
      else others.push(property)
    }

    if (!carrier) continue // no colour token: not a colour utility
    seen.add(cls)
    out.push({
      cls,
      property: carrier.property,
      token: carrier.token,
      ...(carrier.blended ? { blended: true } : {}),
      ...(others.length ? { alsoSets: others } : {}),
      ...(replaced.has(cls) ? { replacedBy: replaced.get(cls) } : {}),
    })
  }

  // Current names first, deprecated aliases last, alphabetical within each.
  return out.sort((a, b) => {
    if (Boolean(a.replacedBy) !== Boolean(b.replacedBy)) return a.replacedBy ? 1 : -1
    return a.cls.localeCompare(b.cls)
  })
}

/** Grouped for rendering: one block per CSS property that carries the colour. */
export function colorUtilitiesByProperty(): [string, ColorUtility[]][] {
  const groups = new Map<string, ColorUtility[]>()
  for (const u of colorUtilities()) {
    const list = groups.get(u.property) ?? []
    list.push(u)
    groups.set(u.property, list)
  }
  const order = ['background-color', 'color', 'border-color']
  return [...groups.entries()].sort(
    (a, b) => (order.indexOf(a[0]) + 1 || 99) - (order.indexOf(b[0]) + 1 || 99),
  )
}
