'use client'

import { useEditor } from './EditorContext.js'

/**
 * The page switcher, wide-viewport form: a rail of links down the left of the
 * editor body. Below the editor's breakpoint the rail is hidden by CSS and the
 * same list rides in the toolbar as a select, so the switcher is never the
 * thing that makes a narrow editor unusable.
 *
 * Links, not callbacks: each page is its own admin route, so a plain anchor
 * keeps routing (and prefetching, if the host wraps it) out of the builder.
 */
export function PageRail() {
  const { pages, currentSlug, labels } = useEditor()
  if (!pages?.length) return null

  return (
    <nav className="dsb-pages" aria-label={labels.pages}>
      <p className="dsb-pages__header">{labels.pages}</p>
      <ul className="dsb-pages__list">
        {pages.map((page) => {
          const current = page.slug === currentSlug
          return (
            <li key={page.slug}>
              <a
                href={page.href}
                className="dsb-pages__link"
                aria-current={current ? 'page' : undefined}
              >
                {page.label || page.slug}
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
