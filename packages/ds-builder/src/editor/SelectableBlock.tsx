'use client'

import type { ReactNode } from 'react'

interface SelectableBlockProps {
  selected: boolean
  label: string
  onSelect: () => void
  children: ReactNode
}

/** Wraps a rendered block on the canvas with a selection outline + type tag. */
export function SelectableBlock({ selected, label, onSelect, children }: SelectableBlockProps) {
  return (
    <div
      className={selected ? 'dsb-selectable dsb-selectable--selected' : 'dsb-selectable'}
      onClick={(e) => {
        e.stopPropagation()
        onSelect()
      }}
    >
      <span className="dsb-selectable__tag">{label}</span>
      <div className="dsb-selectable__inner">{children}</div>
    </div>
  )
}
