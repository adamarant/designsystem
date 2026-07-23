/* ==========================================================================
   @adamarant/designsystem/eslint — enforcement nel toolchain
   (ECOSYSTEM_ROADMAP, Fase 4: "lint dentro, hook fuori").

   Tre regole, stessa legge di DS_HEALTH ma deterministica e per-editor:
   - ds/no-unknown-ds-class   una classe ds-* che non esiste nel CSS
                              buildato del pacchetto è un phantom
   - ds/no-raw-form-controls  input/select/textarea/button nudi nei
                              consumer: esiste il wrapper ds-react
   - ds/utility-budget        soup 3/1/2/0 (layout/spacing/text/styling),
                              4+ utility totali = componente mancante

   La verità delle classi è il dist del pacchetto installato: zero
   manifest da tenere in sync. Fail-open: se il CSS non è leggibile, la
   regola phantom non riporta nulla.
   ========================================================================== */

import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const HERE = dirname(fileURLToPath(import.meta.url))
const CSS_BUNDLE = join(HERE, '..', 'dist', 'designsystem.css')

let knownCache = null
function knownClasses() {
  if (knownCache) return knownCache
  const set = new Set()
  try {
    const css = readFileSync(CSS_BUNDLE, 'utf8')
    for (const m of css.matchAll(/\.(ds-[a-zA-Z0-9_-]+(?:\\:[a-zA-Z0-9_-]+)*)/g)) {
      set.add(m[1].replace(/\\:/g, ':'))
    }
  } catch {
    /* fail-open: nessun CSS, nessun report */
  }
  knownCache = set
  return set
}

/* ---------- estrazione token dai className ---------- */

function* literalTokens(node) {
  if (!node) return
  switch (node.type) {
    case 'Literal':
      if (typeof node.value === 'string') {
        for (const token of node.value.split(/\s+/)) {
          if (token) yield { token, node }
        }
      }
      break
    case 'TemplateLiteral': {
      for (let i = 0; i < node.quasis.length; i++) {
        const raw = node.quasis[i].value.cooked ?? ''
        const parts = raw.split(/\s+/)
        for (let j = 0; j < parts.length; j++) {
          const token = parts[j]
          if (!token) continue
          /* Un token adiacente a un'interpolazione è potenzialmente
             parziale (`ds-btn--${variant}`): non giudicarlo. */
          const touchesLeftExpr = j === 0 && i > 0 && !/^\s/.test(raw)
          const touchesRightExpr =
            j === parts.length - 1 && i < node.expressions.length && !/\s$/.test(raw)
          if (touchesLeftExpr || touchesRightExpr) continue
          yield { token, node: node.quasis[i] }
        }
      }
      for (const expr of node.expressions) yield* literalTokens(expr)
      break
    }
    case 'ConditionalExpression':
      yield* literalTokens(node.consequent)
      yield* literalTokens(node.alternate)
      break
    case 'LogicalExpression':
      yield* literalTokens(node.right)
      break
    case 'BinaryExpression':
      if (node.operator === '+') {
        yield* literalTokens(node.left)
        yield* literalTokens(node.right)
      }
      break
    case 'CallExpression':
      for (const arg of node.arguments) yield* literalTokens(arg)
      break
    case 'ArrayExpression':
      for (const el of node.elements) yield* literalTokens(el)
      break
    case 'ObjectExpression':
      for (const prop of node.properties) {
        if (prop.type === 'Property' && !prop.computed) {
          if (prop.key.type === 'Literal') yield* literalTokens(prop.key)
        }
      }
      break
    default:
      break
  }
}

function* classNameTokens(attr) {
  if (!attr.value) return
  if (attr.value.type === 'Literal') yield* literalTokens(attr.value)
  else if (attr.value.type === 'JSXExpressionContainer') {
    yield* literalTokens(attr.value.expression)
  }
}

function isClassNameAttr(node) {
  return (
    node.type === 'JSXAttribute' &&
    node.name.type === 'JSXIdentifier' &&
    node.name.name === 'className'
  )
}

/* ---------- classificazione utility (legge soup DS_HEALTH) ---------- */

const LAYOUT_EXACT = new Set([
  'ds-flex', 'ds-inline-flex', 'ds-grid', 'ds-inline-grid', 'ds-hidden',
  'ds-block', 'ds-inline-block', 'ds-inline', 'ds-contents', 'ds-relative',
  'ds-absolute', 'ds-fixed', 'ds-sticky', 'ds-grow', 'ds-shrink',
  'ds-flex-1', 'ds-flex-auto', 'ds-flex-none', 'ds-flex-wrap',
  'ds-flex-nowrap', 'ds-flex-col', 'ds-flex-row', 'ds-flex-col-reverse',
  'ds-flex-row-reverse',
])
const LAYOUT_PREFIX = [
  'ds-items-', 'ds-justify-', 'ds-content-', 'ds-self-', 'ds-place-',
  'ds-gap-', 'ds-col-', 'ds-row-', 'ds-grid-cols-', 'ds-grid-rows-',
  'ds-order-', 'ds-basis-', 'ds-inset-', 'ds-top-', 'ds-bottom-',
  'ds-start-', 'ds-end-', 'ds-z-', 'ds-w-', 'ds-h-', 'ds-min-w-',
  'ds-min-h-', 'ds-max-w-', 'ds-max-h-', 'ds-size-', 'ds-overflow-',
  'ds-shrink-', 'ds-grow-',
]
const SPACING_PREFIX = [
  'ds-m-', 'ds-mx-', 'ds-my-', 'ds-mt-', 'ds-mb-', 'ds-ml-', 'ds-mr-',
  'ds-ms-', 'ds-me-', 'ds-p-', 'ds-px-', 'ds-py-', 'ds-pt-', 'ds-pb-',
  'ds-pl-', 'ds-pr-', 'ds-ps-', 'ds-pe-', 'ds-space-x-', 'ds-space-y-',
]
const TEXT_EXACT = new Set([
  'ds-truncate', 'ds-uppercase', 'ds-lowercase', 'ds-capitalize',
  'ds-italic', 'ds-underline', 'ds-antialiased',
])
const TEXT_PREFIX = [
  'ds-text-', 'ds-font-', 'ds-leading-', 'ds-tracking-', 'ds-whitespace-',
  'ds-break-', 'ds-line-clamp-',
]
const STYLING_PREFIX = [
  'ds-bg-', 'ds-border', 'ds-rounded', 'ds-shadow', 'ds-opacity-',
  'ds-ring', 'ds-outline', 'ds-animate-', 'ds-transition', 'ds-duration-',
  'ds-ease-', 'ds-blur', 'ds-backdrop-', 'ds-fill-', 'ds-stroke-',
]

function classifyUtility(rawToken) {
  /* ds-sm:ds-flex → classifica il suffisso dopo il prefisso responsive */
  const token = rawToken.includes(':')
    ? rawToken.slice(rawToken.lastIndexOf(':') + 1)
    : rawToken
  if (!token.startsWith('ds-')) return null
  if (LAYOUT_EXACT.has(token)) return 'layout'
  if (TEXT_EXACT.has(token)) return 'text'
  for (const p of SPACING_PREFIX) if (token.startsWith(p)) return 'spacing'
  for (const p of TEXT_PREFIX) if (token.startsWith(p)) return 'text'
  for (const p of STYLING_PREFIX) if (token.startsWith(p)) return 'styling'
  for (const p of LAYOUT_PREFIX) if (token.startsWith(p)) return 'layout'
  return null /* classe componente o sconosciuta: fuori budget */
}

/* ---------- regole ---------- */

const noUnknownDsClass = {
  meta: {
    type: 'problem',
    docs: {
      description:
        'una classe ds-* deve esistere nel CSS del design system installato (anti-phantom)',
    },
    schema: [],
    messages: {
      unknown:
        "'{{token}}' non esiste nel design system installato. Verifica con ds_find o nel CSS del pacchetto.",
    },
  },
  create(context) {
    const known = knownClasses()
    if (known.size === 0) return {}
    return {
      JSXAttribute(node) {
        if (!isClassNameAttr(node)) return
        for (const { token, node: at } of classNameTokens(node)) {
          if (!token.startsWith('ds-') && !token.includes(':ds-')) continue
          if (!known.has(token)) {
            context.report({ node: at, messageId: 'unknown', data: { token } })
          }
        }
      },
    }
  },
}

const RAW_CONTROL_HINTS = {
  input: 'Input (o Checkbox/Radio) da @adamarant/ds-react',
  textarea: 'Textarea da @adamarant/ds-react',
  select: 'Select da @adamarant/ds-react',
  button: 'Button o IconBtn da @adamarant/ds-react',
}

const noRawFormControls = {
  meta: {
    type: 'suggestion',
    docs: {
      description:
        'niente controlli nativi nudi nei consumer: esiste il wrapper ds-react',
    },
    schema: [],
    messages: {
      raw: "<{{tag}}> nativo: usa {{hint}}. Escape hatch: eslint-disable con motivo.",
    },
  },
  create(context) {
    return {
      JSXOpeningElement(node) {
        if (node.name.type !== 'JSXIdentifier') return
        const tag = node.name.name
        if (!(tag in RAW_CONTROL_HINTS)) return
        if (tag === 'input') {
          const type = node.attributes.find(
            (a) =>
              a.type === 'JSXAttribute' &&
              a.name.name === 'type' &&
              a.value?.type === 'Literal',
          )
          if (type && ['hidden', 'file'].includes(type.value.value)) return
        }
        context.report({
          node,
          messageId: 'raw',
          data: { tag, hint: RAW_CONTROL_HINTS[tag] },
        })
      },
    }
  },
}

const BUDGETS = { layout: 3, spacing: 1, text: 2, styling: 0 }
const TOTAL_BUDGET = 4

const utilityBudget = {
  meta: {
    type: 'suggestion',
    docs: {
      description:
        'budget utility per elemento (layout 3, spacing 1, text 2, styling 0; 4+ totali = soup)',
    },
    schema: [],
    messages: {
      over: "{{count}} utility '{{category}}' su un elemento (max {{max}}): probabilmente manca un componente o un modifier DS.",
      soup: '{{count}} utility DS su un elemento: è soup, serve un componente (ds_find aiuta).',
    },
  },
  create(context) {
    return {
      JSXAttribute(node) {
        if (!isClassNameAttr(node)) return
        const counts = { layout: 0, spacing: 0, text: 0, styling: 0 }
        let total = 0
        for (const { token } of classNameTokens(node)) {
          const cat = classifyUtility(token)
          if (!cat) continue
          counts[cat]++
          total++
        }
        for (const [category, max] of Object.entries(BUDGETS)) {
          if (counts[category] > max) {
            context.report({
              node,
              messageId: 'over',
              data: { count: counts[category], category, max },
            })
          }
        }
        if (total >= TOTAL_BUDGET && Object.entries(BUDGETS).every(([c, m]) => counts[c] <= m)) {
          context.report({ node, messageId: 'soup', data: { count: total } })
        }
      },
    }
  },
}

/* ---------- plugin + config ---------- */

const plugin = {
  meta: { name: '@adamarant/designsystem-eslint', version: '1.0.0' },
  rules: {
    'no-unknown-ds-class': noUnknownDsClass,
    'no-raw-form-controls': noRawFormControls,
    'utility-budget': utilityBudget,
  },
}

export default plugin

/** Flat config pronta: error sui phantom e sui controlli nudi, warn sul
    budget (migrazione per attrito). Escludi le isole artistiche dei
    progetti tier 2 aggiungendo `{ ignores: ['src/art/**'] }` a valle. */
export const configs = {
  recommended: [
    {
      files: ['src/**/*.{tsx,jsx}'],
      plugins: { ds: plugin },
      rules: {
        'ds/no-unknown-ds-class': 'error',
        'ds/no-raw-form-controls': 'error',
        'ds/utility-budget': 'warn',
      },
    },
  ],
}
