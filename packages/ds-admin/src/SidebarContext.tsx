'use client'

import { createContext, useContext, useState, useCallback, type ReactNode } from 'react'
import type { SidebarState, SidebarProviderProps } from './types.js'

const SidebarContext = createContext<SidebarState | null>(null)

const DEFAULT_STORAGE_KEY = 'admin_sidebar_collapsed'

export function SidebarProvider({
  children,
  storageKey = DEFAULT_STORAGE_KEY,
  defaultCollapsed = false,
}: SidebarProviderProps) {
  const [isCollapsed, setIsCollapsed] = useState(() => {
    if (typeof window === 'undefined') return defaultCollapsed
    const stored = localStorage.getItem(storageKey)
    return stored !== null ? stored === 'true' : defaultCollapsed
  })
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  const toggleCollapse = useCallback(() => {
    setIsCollapsed((prev) => {
      const next = !prev
      localStorage.setItem(storageKey, String(next))
      return next
    })
  }, [storageKey])

  const openMobile = useCallback(() => setIsMobileOpen(true), [])
  const closeMobile = useCallback(() => setIsMobileOpen(false), [])

  return (
    <SidebarContext.Provider
      value={{ isCollapsed, isMobileOpen, toggleCollapse, openMobile, closeMobile }}
    >
      {children}
    </SidebarContext.Provider>
  )
}

export function useSidebar(): SidebarState {
  const ctx = useContext(SidebarContext)
  if (!ctx) throw new Error('useSidebar must be used within SidebarProvider')
  return ctx
}
