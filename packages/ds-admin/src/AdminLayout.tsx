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

  return (
    <div className={rootClass}>
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
