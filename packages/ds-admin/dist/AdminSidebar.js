'use client';
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useSidebar } from './SidebarContext.js';
function defaultIsActive(href, pathname) {
    if (href === pathname)
        return true;
    const segments = href.split('/').filter(Boolean);
    if (segments.length <= 1)
        return pathname === href;
    return pathname.startsWith(href);
}
function NavItems({ items, isActiveFn, showLabels, expandSubnav, onNavigate, pathname, }) {
    return (_jsx(_Fragment, { children: items.map((item) => {
            const active = isActiveFn(item.href, pathname);
            return (_jsxs("div", { children: [item.disabled ? (_jsxs("span", { className: "ds-admin__nav-item", style: { opacity: 0.5, cursor: 'not-allowed' }, title: !showLabels ? item.label : undefined, children: [_jsx("span", { className: "ds-admin__nav-icon", children: item.icon }), showLabels && (_jsx("span", { className: "ds-admin__nav-label", children: item.label })), showLabels && item.badge] })) : (_jsxs(Link, { href: item.href, onClick: onNavigate, className: `ds-admin__nav-item${active ? ' ds-admin__nav-item--active' : ''}`, title: !showLabels ? item.label : undefined, children: [_jsx("span", { className: "ds-admin__nav-icon", children: item.icon }), showLabels && (_jsx("span", { className: "ds-admin__nav-label", children: item.label })), showLabels && item.badge] })), showLabels && item.children && (expandSubnav || active) && (_jsx("div", { className: "ds-admin__subnav", children: item.children.map((child) => {
                            const childActive = isActiveFn(child.href, pathname);
                            return (_jsx(Link, { href: child.href, onClick: onNavigate, className: `ds-admin__subnav-item${childActive ? ' ds-admin__subnav-item--active' : ''}`, children: child.label }, child.id));
                        }) }))] }, item.id));
        }) }));
}
export function AdminSidebar({ items, header, footer, collapsedHeader, afterNav, mobileHeader, isActive = defaultIsActive, }) {
    const pathname = usePathname();
    const { isCollapsed, isMobileOpen, closeMobile } = useSidebar();
    const showLabels = !isCollapsed;
    return (_jsxs(_Fragment, { children: [_jsxs("aside", { className: "ds-admin__sidebar", children: [_jsx("div", { className: "ds-admin__sidebar-header", children: isCollapsed && collapsedHeader ? collapsedHeader : header }), _jsxs("nav", { className: "ds-admin__nav", children: [_jsx(NavItems, { items: items, isActiveFn: isActive, showLabels: showLabels, expandSubnav: false, pathname: pathname }), afterNav] }), footer && (_jsx("div", { className: "ds-admin__sidebar-footer", children: footer }))] }), isMobileOpen && (_jsx("div", { className: "ds-admin__overlay", onClick: closeMobile })), _jsx("div", { className: `ds-drawer ds-drawer--right ds-admin__mobile-menu${isMobileOpen ? ' ds-drawer--open' : ''}`, onClick: closeMobile, children: _jsxs("div", { className: "ds-drawer__content", onClick: (e) => e.stopPropagation(), children: [mobileHeader !== undefined ? (mobileHeader) : (_jsx("div", { className: "ds-flex ds-items-center ds-justify-end ds-px-4 ds-py-3", children: _jsx("button", { className: "ds-nav__icon-btn", onClick: closeMobile, "aria-label": "Close menu", children: _jsxs("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [_jsx("line", { x1: "18", y1: "6", x2: "6", y2: "18" }), _jsx("line", { x1: "6", y1: "6", x2: "18", y2: "18" })] }) }) })), _jsxs("div", { className: "ds-drawer__body ds-p-0", children: [_jsxs("nav", { className: "ds-admin__nav", children: [_jsx(NavItems, { items: items, isActiveFn: isActive, showLabels: true, expandSubnav: true, onNavigate: closeMobile, pathname: pathname }), afterNav] }), footer && (_jsx("div", { className: "ds-admin__sidebar-footer", children: footer }))] })] }) })] }));
}
//# sourceMappingURL=AdminSidebar.js.map