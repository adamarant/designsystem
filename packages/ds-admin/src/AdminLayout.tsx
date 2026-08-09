'use client'

import { type ReactNode } from 'react'
import { SidebarProvider, useSidebar } from './SidebarContext.js'
import type { AdminLayoutProps } from './types.js'

function AdminLayoutInner({
  children,
  sidebar,
  header,
  collapsible = true,
  afterHeader,
  afterMain,
  className,
}: Omit<AdminLayoutProps, 'storageKey' | 'defaultCollapsed'>) {
  const { isCollapsed } = useSidebar()

  const modifier = collapsible && isCollapsed
    ? 'ds-admin--collapsed'
    : 'ds-admin--expanded'

  const rootClass = className
    ? `ds-admin ${modifier} ${className}`
    : `ds-admin ${modifier}`

  /* The admin chrome IS the product surface, so it says so once, here, and
     every ladder class inside resolves at product sizes on the body face
     (owner call, 9 Aug 2026). Without it a consumer adopting .ds-heading-*
     in a panel gets page-hero type: h3 renders 48px instead of 20px.
     The alternative was the same attribute hand-written in 15 consumers,
     with every future clone inheriting the omission — DS_HEALTH 12a's
     lesson applied to a surface instead of a distance.

     It is an attribute, not a class, so a subtree that genuinely needs web
     sizes can still override it locally. */
  return (
    <div className={rootClass} data-surface="product">
      {sidebar}
      {header}
      {afterHeader}
      <main className="ds-admin__main">
        <div className="ds-admin__content">
          <div className="ds-admin__container">{children}</div>
        </div>
      </main>
      {afterMain}
    </div>
  )
}

export function AdminLayout({
  children,
  sidebar,
  header,
  storageKey,
  defaultCollapsed,
  collapsible = true,
  afterHeader,
  afterMain,
  className,
}: AdminLayoutProps) {
  return (
    <SidebarProvider storageKey={storageKey} defaultCollapsed={defaultCollapsed}>
      <AdminLayoutInner
        sidebar={sidebar}
        header={header}
        collapsible={collapsible}
        afterHeader={afterHeader}
        afterMain={afterMain}
        className={className}
      >
        {children}
      </AdminLayoutInner>
    </SidebarProvider>
  )
}
