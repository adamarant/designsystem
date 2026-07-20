'use client'

import Link from 'next/link'
import { useSidebar } from './SidebarContext.js'
import type { AdminSidebarLinkProps } from './types.js'

/**
 * A row in the sidebar footer: "Go to site", "Sign out".
 *
 * The shape was a slot before, and three panels had ended up with the same
 * twenty-five-line component copied verbatim while four had no footer at all.
 * What differs per project is the *action* — a callback, a fetch, a server
 * action — not the row, so the row lives here and the action arrives as a prop.
 *
 * Closes the mobile drawer on activation: a footer row either navigates away
 * or ends the session, and in both cases leaving the drawer open is wrong.
 */
export function AdminSidebarLink({
  icon,
  children,
  href,
  external,
  onClick,
  type = 'button',
  className,
}: AdminSidebarLinkProps) {
  const { closeMobile } = useSidebar()

  const classes = className
    ? `ds-admin__footer-link ${className}`
    : 'ds-admin__footer-link'

  const label = (
    <>
      <span className="ds-shrink-0">{icon}</span>
      <span className="ds-text-sm ds-font-medium">{children}</span>
    </>
  )

  if (href && external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={closeMobile}
        className={classes}
      >
        {label}
      </a>
    )
  }

  if (href) {
    return (
      <Link href={href} onClick={closeMobile} className={classes}>
        {label}
      </Link>
    )
  }

  return (
    <button
      type={type}
      onClick={() => {
        onClick?.()
        closeMobile()
      }}
      className={classes}
    >
      {label}
    </button>
  )
}
