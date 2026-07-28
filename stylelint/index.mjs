/**
 * @adamarant/designsystem/stylelint — the DS rules for CSS.
 *
 * Its sibling `../eslint/index.mjs` governs JSX, but four of the DS guardrails
 * live in stylesheets, where ESLint cannot go: until 28 Jul 2026 those four
 * existed only as Claude Code PreToolUse hooks, so they held while an agent was
 * writing and let everything through in an editor, in CI, or under any other
 * tool. This closes that half.
 *
 * Like `no-unknown-ds-class`, the token rule derives its truth from the compiled
 * stylesheet rather than from a list written here. A rule that reads its ground
 * truth cannot go stale; a rule that describes it always does.
 */

import stylelint from 'stylelint'
import { readFileSync, readdirSync, existsSync } from 'fs'
import { dirname, join, sep } from 'path'
import { fileURLToPath } from 'url'

const { createPlugin, utils } = stylelint
const HERE = dirname(fileURLToPath(import.meta.url))
const CSS_BUNDLE = join(HERE, '..', 'dist', 'designsystem.css')

/** Every `--ds-*` custom property the shipped stylesheet actually defines. */
let knownTokensCache = null
function knownTokens() {
  if (knownTokensCache) return knownTokensCache
  const set = new Set()
  try {
    const css = readFileSync(CSS_BUNDLE, 'utf8')
    for (const m of css.matchAll(/(--ds-[a-zA-Z0-9-]+)\s*:/g)) set.add(m[1])
  } catch {
    // No bundle (source checkout mid-build): degrade to allowing everything
    // rather than failing every file with a false positive.
  }
  knownTokensCache = set
  return set
}

// ── ds/no-hardcoded-color ───────────────────────────────────────────────────
const colorRule = 'ds/no-hardcoded-color'
const colorMessages = utils.ruleMessages(colorRule, {
  rejected: (value) =>
    `Hardcoded colour "${value}". Use a token: var(--ds-color-…). ` +
    `Brand colours belong in the project's theme.css, which this rule skips.`,
})
const COLOR_LITERAL = /#[0-9a-fA-F]{3,8}\b|\brgba?\(|\bhsla?\(|\boklch\(/

const noHardcodedColor = createPlugin(colorRule, (primary) => (root, result) => {
  if (!utils.validateOptions(result, colorRule, { actual: primary, possible: [true] })) return
  root.walkDecls((decl) => {
    // `--ds-*` definitions are how a consumer themes: that is the sanctioned place.
    if (decl.prop.startsWith('--')) return
    const found = decl.value.match(COLOR_LITERAL)
    if (!found) return
    utils.report({
      result, ruleName: colorRule, node: decl, word: found[0],
      message: colorMessages.rejected(found[0]),
    })
  })
})

// ── ds/no-hardcoded-font-weight ─────────────────────────────────────────────
const weightRule = 'ds/no-hardcoded-font-weight'
const weightMessages = utils.ruleMessages(weightRule, {
  rejected: (value) =>
    `font-weight: ${value} is a literal. Use var(--ds-font-display-weight) or ` +
    `another weight token, so a change to the type scale reaches every heading at once.`,
})

const noHardcodedFontWeight = createPlugin(weightRule, (primary) => (root, result) => {
  if (!utils.validateOptions(result, weightRule, { actual: primary, possible: [true] })) return
  root.walkDecls(/^font-weight$/i, (decl) => {
    if (decl.value.includes('var(--ds-')) return
    if (decl.value.trim() === 'inherit') return
    utils.report({
      result, ruleName: weightRule, node: decl,
      message: weightMessages.rejected(decl.value.trim()),
    })
  })
})

// ── ds/opacity-disabled ─────────────────────────────────────────────────────
const opacityRule = 'ds/opacity-disabled'
const opacityMessages = utils.ruleMessages(opacityRule, {
  rejected: (value) =>
    `opacity: ${value} on a disabled state. Use var(--ds-opacity-disabled), ` +
    `so "disabled" looks the same everywhere.`,
})

const opacityDisabled = createPlugin(opacityRule, (primary) => (root, result) => {
  if (!utils.validateOptions(result, opacityRule, { actual: primary, possible: [true] })) return
  root.walkRules((rule) => {
    if (!/:disabled|\[disabled\]|\.is-disabled|--disabled/.test(rule.selector)) return
    rule.walkDecls(/^opacity$/i, (decl) => {
      if (decl.value.includes('var(--ds-')) return
      utils.report({
        result, ruleName: opacityRule, node: decl,
        message: opacityMessages.rejected(decl.value.trim()),
      })
    })
  })
})

// ── ds/no-outline-override ──────────────────────────────────────────────────
const outlineRule = 'ds/no-outline-override'
const outlineMessages = utils.ruleMessages(outlineRule, {
  rejected: (selector) =>
    `outline set on "${selector}", a DS element. The DS draws its focus ring with ` +
    `box-shadow; overriding outline here either doubles the ring or removes the ` +
    `only keyboard affordance on the control.`,
})

const noOutlineOverride = createPlugin(outlineRule, (primary) => (root, result) => {
  if (!utils.validateOptions(result, outlineRule, { actual: primary, possible: [true] })) return
  root.walkRules((rule) => {
    if (!/\.ds-[a-zA-Z0-9_-]+/.test(rule.selector)) return
    rule.walkDecls(/^outline(-.+)?$/i, (decl) => {
      utils.report({
        result, ruleName: outlineRule, node: decl,
        message: outlineMessages.rejected(rule.selector.replace(/\s+/g, ' ').trim()),
      })
    })
  })
})

/**
 * Tokens the consuming project defines for itself, from anywhere under its own
 * `src/`. A project legitimately declares `--ds-color-doc-highlight` in
 * theme.css and uses it in components.css; scoping the check to one file made
 * that read as a phantom, which is a false positive that would teach people to
 * ignore the rule.
 */
const projectTokenCache = new Map()
function projectTokens(filePath) {
  if (!filePath) return new Set()
  const marker = `${sep}src${sep}`
  const cut = filePath.lastIndexOf(marker)
  if (cut === -1) return new Set()
  const srcRoot = filePath.slice(0, cut + marker.length - 1)
  if (projectTokenCache.has(srcRoot)) return projectTokenCache.get(srcRoot)

  const found = new Set()
  const walk = (dir) => {
    let entries
    try {
      entries = readdirSync(dir, { withFileTypes: true })
    } catch {
      return
    }
    for (const e of entries) {
      if (e.name === 'node_modules' || e.name === '.next') continue
      const p = join(dir, e.name)
      if (e.isDirectory()) walk(p)
      else if (e.name.endsWith('.css')) {
        try {
          for (const m of readFileSync(p, 'utf8').matchAll(/^\s*(--ds-[a-zA-Z0-9-]+)\s*:/gm)) {
            found.add(m[1])
          }
        } catch {
          // unreadable file: skip rather than fail the lint
        }
      }
    }
  }
  if (existsSync(srcRoot)) walk(srcRoot)
  projectTokenCache.set(srcRoot, found)
  return found
}

// ── ds/no-unknown-token ─────────────────────────────────────────────────────
// The one that needs no hook equivalent because no hook ever caught it: a
// var(--ds-…) pointing at a token the DS does not define resolves to nothing.
// `--ds-color-background` is the recorded scar — it does not exist, and a page
// using it gets a transparent background with no error anywhere.
const tokenRule = 'ds/no-unknown-token'
const tokenMessages = utils.ruleMessages(tokenRule, {
  rejected: (token) =>
    `var(${token}) is not defined by the design system and has no fallback: ` +
    `it resolves to nothing. Check the name against the shipped stylesheet ` +
    `(--ds-color-bg is the page background; --ds-color-background does not exist).`,
})

const noUnknownToken = createPlugin(tokenRule, (primary) => (root, result) => {
  if (!utils.validateOptions(result, tokenRule, { actual: primary, possible: [true] })) return
  const known = knownTokens()
  if (known.size === 0) return

  // Tokens the project defines for itself are legitimate: that is how theming
  // works, and theme.css is usually not the file being linted.
  const local = projectTokens(root.source?.input?.file)
  root.walkDecls((decl) => { if (decl.prop.startsWith('--ds-')) local.add(decl.prop) })

  root.walkDecls((decl) => {
    for (const m of decl.value.matchAll(/var\(\s*(--ds-[a-zA-Z0-9-]+)\s*([,)])/g)) {
      const [, token, next] = m
      if (next === ',') continue          // has a fallback, degrades visibly
      if (known.has(token) || local.has(token)) continue
      utils.report({
        result, ruleName: tokenRule, node: decl, word: token,
        message: tokenMessages.rejected(token),
      })
    }
  })
})

export const plugins = [
  noHardcodedColor,
  noHardcodedFontWeight,
  opacityDisabled,
  noOutlineOverride,
  noUnknownToken,
]

/**
 * Shared config for consumers. theme.css is deliberately exempt: it is the one
 * file where a project declares its brand, so raw colour values are the point.
 */
export const configs = {
  recommended: {
    plugins,
    rules: {
      [colorRule]: true,
      [weightRule]: true,
      [opacityRule]: true,
      [outlineRule]: true,
      [tokenRule]: true,
    },
    overrides: [
      {
        files: ['**/theme.css', '**/tokens.css'],
        rules: { [colorRule]: null },
      },
    ],
  },
}

export default plugins
