'use client';
import { Component } from 'react';
/**
 * Isolates a single block's render error so one bad block never takes down the
 * whole page — the core "non si rompe" guarantee. `getDerivedStateFromError`
 * runs during SSR too, so a throwing block degrades to `fallback` server-side.
 */
export class BlockBoundary extends Component {
    constructor() {
        super(...arguments);
        this.state = { hasError: false };
    }
    static getDerivedStateFromError() {
        return { hasError: true };
    }
    render() {
        return this.state.hasError ? this.props.fallback : this.props.children;
    }
}
//# sourceMappingURL=BlockBoundary.js.map