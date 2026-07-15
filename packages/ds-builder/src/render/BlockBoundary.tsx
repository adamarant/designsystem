'use client'

import { Component, type ReactNode } from 'react'

interface Props {
  fallback: ReactNode
  children: ReactNode
}

interface State {
  hasError: boolean
}

/**
 * Isolates a single block's render error so one bad block never takes down the
 * whole page — the core "non si rompe" guarantee. `getDerivedStateFromError`
 * runs during SSR too, so a throwing block degrades to `fallback` server-side.
 */
export class BlockBoundary extends Component<Props, State> {
  state: State = { hasError: false }

  static getDerivedStateFromError(): State {
    return { hasError: true }
  }

  render(): ReactNode {
    return this.state.hasError ? this.props.fallback : this.props.children
  }
}
