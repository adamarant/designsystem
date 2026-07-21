'use client'

import { useEffect, useRef, useState } from 'react'
import type { AdminUserMenuProps } from './types.js'

/**
 * Who is signed in, and the things you do to yourself: profile, password,
 * sign out.
 *
 * Built entirely from classes the design system already has — `.ds-avatar--sm`
 * for the trigger and `.ds-dropdown` for the panel. The avatar's `--sm` is
 * `--ds-size-2`, the same 32px as the icon buttons and the theme toggle beside
 * it, so the header row is one height without this component owning any
 * geometry of its own.
 */

/** Initials from a name, falling back to the email's first letter. */
function initials(name: string | null | undefined, email: string): string {
  const source = name?.trim()
  if (!source) return email.slice(0, 1).toUpperCase()

  const parts = source.split(/\s+/).filter(Boolean)
  const first = parts[0]?.slice(0, 1) ?? ''
  const last = parts.length > 1 ? (parts[parts.length - 1]?.slice(0, 1) ?? '') : ''
  return (first + last).toUpperCase()
}

export function AdminUserMenu({
  name,
  email,
  roleLabel,
  items,
  onSignOut,
  signOutLabel = 'Sign out',
  ariaLabel = 'Account',
}: AdminUserMenuProps) {
  const [open, setOpen] = useState(false)
  const root = useRef<HTMLDivElement>(null)

  // Close on outside click and on Escape. Without the first the menu survives
  // a click on the page behind it; without the second a keyboard user is stuck
  // inside it.
  useEffect(() => {
    if (!open) return

    function onPointerDown(event: MouseEvent) {
      if (!root.current?.contains(event.target as Node)) setOpen(false)
    }
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') setOpen(false)
    }

    document.addEventListener('mousedown', onPointerDown)
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('mousedown', onPointerDown)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  return (
    <div ref={root} className={open ? 'ds-dropdown ds-dropdown--open' : 'ds-dropdown'}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="ds-dropdown__trigger ds-avatar ds-avatar--sm"
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label={ariaLabel}
      >
        {initials(name, email)}
      </button>

      <div className="ds-dropdown__menu ds-dropdown__menu--right" role="menu">
        <div className="ds-dropdown__header">{name || email}</div>
        {name && <div className="ds-dropdown__item ds-dropdown__item--disabled">{email}</div>}
        {roleLabel && <div className="ds-dropdown__header">{roleLabel}</div>}
        <hr className="ds-dropdown__divider" />

        {items?.map((item) => (
          <button
            key={item.label}
            type="button"
            role="menuitem"
            className="ds-dropdown__item"
            onClick={() => {
              setOpen(false)
              item.onSelect()
            }}
          >
            {item.label}
          </button>
        ))}

        <button
          type="button"
          role="menuitem"
          className="ds-dropdown__item ds-dropdown__item--danger"
          onClick={() => {
            setOpen(false)
            onSignOut()
          }}
        >
          {signOutLabel}
        </button>
      </div>
    </div>
  )
}
