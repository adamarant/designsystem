'use client';
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import Link from 'next/link';
import { useSidebar } from './SidebarContext.js';
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
export function AdminSidebarLink({ icon, children, href, external, onClick, type = 'button', className, }) {
    const { closeMobile } = useSidebar();
    const classes = className
        ? `ds-admin__footer-link ${className}`
        : 'ds-admin__footer-link';
    const label = (_jsxs(_Fragment, { children: [_jsx("span", { className: "ds-admin__nav-icon", children: icon }), _jsx("span", { className: "ds-text-sm ds-font-medium", children: children })] }));
    if (href && external) {
        return (_jsx("a", { href: href, target: "_blank", rel: "noopener noreferrer", onClick: closeMobile, className: classes, children: label }));
    }
    if (href) {
        return (_jsx(Link, { href: href, onClick: closeMobile, className: classes, children: label }));
    }
    return (_jsx("button", { type: type, onClick: () => {
            onClick?.();
            closeMobile();
        }, className: classes, children: label }));
}
//# sourceMappingURL=AdminSidebarLink.js.map