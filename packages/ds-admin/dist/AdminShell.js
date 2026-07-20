'use client';
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { usePathname } from 'next/navigation';
import { AdminLayout } from './AdminLayout.js';
import { AdminSidebar } from './AdminSidebar.js';
import { AdminHeader } from './AdminHeader.js';
import { useSidebar } from './SidebarContext.js';
/* ==========================================================================
   Chrome — inline SVG, like the rest of the package. ds-admin stays
   icon-library-free; consumer icons arrive as NavItem.icon.
   ========================================================================== */
function ChevronIcon({ direction }) {
    return (_jsx("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true", children: _jsx("polyline", { points: direction === 'start' ? '15 18 9 12 15 6' : '9 18 15 12 9 6' }) }));
}
function CollapseControl() {
    const { isCollapsed, toggleCollapse } = useSidebar();
    return (_jsx("button", { type: "button", onClick: toggleCollapse, className: isCollapsed ? 'ds-icon-btn' : 'ds-icon-btn ds-ml-auto', "aria-label": isCollapsed ? 'Expand sidebar' : 'Collapse sidebar', children: _jsx(ChevronIcon, { direction: isCollapsed ? 'end' : 'start' }) }));
}
/* ==========================================================================
   Title resolution
   ========================================================================== */
/** Walks path segments from the last to the first and returns the first one
    present in the map, so `/admin/projects/abc123` resolves to the "projects"
    title instead of falling through to the generic label. */
function resolveTitle(pathname, titles, fallback) {
    const segments = pathname.split('/').filter(Boolean);
    for (let i = segments.length - 1; i >= 0; i -= 1) {
        const segment = segments[i];
        if (segment && titles[segment])
            return titles[segment];
    }
    return fallback;
}
/* ==========================================================================
   Shell parts — separate components because they read useSidebar/usePathname,
   which only resolve inside the provider AdminLayout mounts.
   ========================================================================== */
function ShellSidebarHeader({ brand, collapsedBrand, collapsible, }) {
    const { isCollapsed } = useSidebar();
    return (_jsxs(_Fragment, { children: [isCollapsed ? collapsedBrand : brand, collapsible && _jsx(CollapseControl, {})] }));
}
function ShellHeader({ title, titles, fallbackTitle, headerCenter, headerActions, themeToggle, }) {
    const pathname = usePathname();
    const resolved = title ?? resolveTitle(pathname, titles ?? {}, fallbackTitle ?? 'Admin');
    const right = themeToggle || headerActions ? (_jsxs(_Fragment, { children: [themeToggle, headerActions] })) : undefined;
    return (_jsx(AdminHeader
    /* A span, not a heading: AdminPageHeader owns the page's h1. Two h1s per
       page is what the hand-written headers were producing. */
    , { 
        /* A span, not a heading: AdminPageHeader owns the page's h1. Two h1s per
           page is what the hand-written headers were producing. */
        left: _jsx("span", { className: "ds-heading-ui ds-text-lg", children: resolved }), center: headerCenter, right: right }));
}
/* ==========================================================================
   AdminShell
   ========================================================================== */
/**
 * The admin frame: sidebar, header, and the content well.
 *
 * `AdminPage` owns the rhythm inside a page; this owns the chrome around every
 * page. It exists for the same reason: the composition of
 * `AdminLayout` + `AdminSidebar` + `AdminHeader` was left to the consumer, so
 * each project invented it — two shell shapes across seven projects, four
 * different title treatments, and the collapse control hand-rolled wherever it
 * appeared.
 *
 * What stays a slot is what is genuinely per-project: the brand mark, the
 * sidebar footer (sign-out differs per auth model), and extra header controls.
 * Everything structural — element, classes, placement, the collapse toggle —
 * belongs to the shell and has no prop to override it.
 */
export function AdminShell({ children, nav, brand, collapsedBrand, sidebarFooter, afterNav, mobileHeader, isActive, title, titles, fallbackTitle, headerCenter, headerActions, themeToggle, storageKey, defaultCollapsed, collapsible = true, afterHeader, afterMain, className, }) {
    return (_jsx(AdminLayout, { collapsible: collapsible, storageKey: storageKey, defaultCollapsed: defaultCollapsed, afterHeader: afterHeader, afterMain: afterMain, className: className, sidebar: _jsx(AdminSidebar, { items: nav, isActive: isActive, afterNav: afterNav, mobileHeader: mobileHeader, footer: sidebarFooter, header: _jsx(ShellSidebarHeader, { brand: brand, collapsedBrand: collapsedBrand, collapsible: collapsible }) }), header: _jsx(ShellHeader, { title: title, titles: titles, fallbackTitle: fallbackTitle, headerCenter: headerCenter, headerActions: headerActions, themeToggle: themeToggle }), children: children }));
}
//# sourceMappingURL=AdminShell.js.map