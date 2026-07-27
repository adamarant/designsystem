'use client'

import { useState } from 'react'
import { useEditor } from './EditorContext.js'
import { GripIcon } from './icons.js'

/**
 * The page switcher, wide-viewport form: a rail of links down the left of the
 * editor body. Below the editor's breakpoint the rail is hidden by CSS and the
 * same list rides in the toolbar as a select, so the switcher is never the
 * thing that makes a narrow editor unusable.
 *
 * Links, not callbacks: each page is its own admin route, so a plain anchor
 * keeps routing (and prefetching, if the host wraps it) out of the builder.
 *
 * Reordering is native HTML5 drag, no dependency — the same reason block
 * reorder ships without dnd-kit. Native drag is mouse-only, so the grip is a
 * real button that moves its row with the arrow keys: the order is reachable
 * without a pointer, which drag alone never is.
 */
export function PageRail() {
  const { pages, currentSlug, labels, reorderPages } = useEditor()
  const [draggingSlug, setDraggingSlug] = useState<string | null>(null)
  const [overSlug, setOverSlug] = useState<string | null>(null)

  if (!pages?.length) return null
  const canReorder = Boolean(reorderPages) && pages.length > 1

  function move(from: number, to: number) {
    if (!pages || !reorderPages) return
    if (to < 0 || to >= pages.length || from === to) return
    const next = [...pages]
    const [moved] = next.splice(from, 1)
    next.splice(to, 0, moved)
    reorderPages(next)
  }

  function handleDrop(targetSlug: string) {
    if (!pages || !draggingSlug) return
    move(
      pages.findIndex((p) => p.slug === draggingSlug),
      pages.findIndex((p) => p.slug === targetSlug),
    )
    setDraggingSlug(null)
    setOverSlug(null)
  }

  return (
    <nav className="dsb-pages" aria-label={labels.pages}>
      <p className="dsb-pages__header">{labels.pages}</p>
      <ul className="dsb-pages__list">
        {pages.map((page, index) => {
          const current = page.slug === currentSlug
          return (
            <li
              key={page.slug}
              className="dsb-pages__item"
              draggable={canReorder}
              data-dragging={draggingSlug === page.slug || undefined}
              data-over={overSlug === page.slug && draggingSlug !== page.slug ? '' : undefined}
              onDragStart={() => setDraggingSlug(page.slug)}
              onDragEnd={() => {
                setDraggingSlug(null)
                setOverSlug(null)
              }}
              onDragOver={(e) => {
                if (!canReorder) return
                e.preventDefault()
                setOverSlug(page.slug)
              }}
              onDrop={(e) => {
                e.preventDefault()
                handleDrop(page.slug)
              }}
            >
              {canReorder ? (
                <button
                  type="button"
                  className="dsb-pages__grip"
                  aria-label={`${labels.reorderPage}: ${page.label || page.slug}`}
                  onKeyDown={(e) => {
                    if (e.key === 'ArrowUp') {
                      e.preventDefault()
                      move(index, index - 1)
                    } else if (e.key === 'ArrowDown') {
                      e.preventDefault()
                      move(index, index + 1)
                    }
                  }}
                >
                  <GripIcon />
                </button>
              ) : null}
              <a
                href={page.href}
                className="dsb-pages__link"
                aria-current={current ? 'page' : undefined}
                draggable={false}
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
