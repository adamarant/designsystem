'use client';
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import Link from 'next/link';
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
function flattenNav(nav) {
    const flat = [];
    for (const item of nav) {
        flat.push({ href: item.href, label: item.label });
        for (const child of item.children ?? []) {
            flat.push({ href: child.href, label: child.label });
        }
    }
    return flat;
}
/** The longest nav href the pathname sits under.
 *
 *  A nav entry owns its whole subtree, so `/admin/blog/abc/edit` resolves to
 *  "Blog" — matching by *segment* instead would break as soon as two sections
 *  share a leaf. A real case: a "Pages" entry pointing at
 *  `/admin/pages/home/edit` would claim the segment `edit` and then every
 *  blog edit route would be titled "Pages". Longest match wins, so a root
 *  entry at `/admin` never shadows a deeper one. */
function navTitle(pathname, nav) {
    let best;
    for (const item of flattenNav(nav)) {
        const matches = pathname === item.href || pathname.startsWith(`${item.href}/`);
        if (matches && (!best || item.href.length > best.href.length))
            best = item;
    }
    return best?.label;
}
/** The nav already carries a label for every section it links to, so the header
    and the sidebar cannot disagree — a hand-written map is a copy of that list
    that goes stale the first time a label is renamed. `titles` covers the
    routes with no nav entry, and wins where both apply. It is matched by path
    segment, last segment first, so a detail route keeps its section's title. */
function resolveTitle(pathname, nav, titles, fallback) {
    const segments = pathname.split('/').filter(Boolean);
    for (let i = segments.length - 1; i >= 0; i -= 1) {
        const segment = segments[i];
        if (segment && titles[segment])
            return titles[segment];
    }
    return navTitle(pathname, nav) ?? fallback;
}
/* ==========================================================================
   Brand
   ========================================================================== */
/** The wordmark: the panel's name, and a badge saying which panel it is.
 *
 *  A shape rather than a slot, because a slot is what let seven panels answer
 *  the same question seven ways — two shipped an SVG logo, five wrote text, in
 *  three different type treatments. Pass `brand` instead when a panel genuinely
 *  needs its own mark. */
function ShellBrand({ brandName, brandBadge, brandHref, }) {
    const mark = (_jsxs(_Fragment, { children: [_jsx("span", { className: "ds-heading-ui", children: brandName }), brandBadge && _jsx("span", { className: "ds-admin__sidebar-badge", children: brandBadge })] }));
    if (!brandHref)
        return mark;
    return (_jsx(Link, { href: brandHref, className: "ds-flex ds-items-center ds-gap-2 ds-text-primary", children: mark }));
}
/* ==========================================================================
   Shell parts — separate components because they read useSidebar/usePathname,
   which only resolve inside the provider AdminLayout mounts.
   ========================================================================== */
function ShellSidebarHeader({ brand, brandName, brandBadge, brandHref, collapsedBrand, collapsible, }) {
    const { isCollapsed } = useSidebar();
    // Collapsed, the rail is 4rem: a wordmark can't fit, so only the control
    // shows unless the consumer supplied a mark sized for it.
    const expanded = brand ?? (_jsx(ShellBrand, { brandName: brandName, brandBadge: brandBadge, brandHref: brandHref }));
    return (_jsxs(_Fragment, { children: [isCollapsed ? collapsedBrand : expanded, collapsible && _jsx(CollapseControl, {})] }));
}
function ShellHeader({ nav, title, titles, fallbackTitle, headerCenter, headerActions, themeToggle, userMenu, }) {
    const pathname = usePathname();
    const resolved = title ?? resolveTitle(pathname, nav, titles ?? {}, fallbackTitle ?? 'Admin');
    const right = themeToggle || headerActions || userMenu ? (_jsxs(_Fragment, { children: [themeToggle, headerActions, userMenu] })) : undefined;
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
/** The nav this user may see. An item with children keeps only the children
    they may reach, and disappears when none survive. */
function filterNav(nav, allowed) {
    if (!allowed)
        return nav;
    const permitted = new Set(allowed);
    return nav.flatMap((item) => {
        const children = item.children?.filter((child) => permitted.has(child.id));
        if (permitted.has(item.id)) {
            return [item.children ? { ...item, children } : item];
        }
        // The parent isn't allowed but a child is: keep the branch reachable.
        return children?.length ? [{ ...item, children }] : [];
    });
}
export function AdminShell({ children, nav, brand, brandName, brandBadge, brandHref, collapsedBrand, sidebarFooter, afterNav, mobileHeader, isActive, title, titles, fallbackTitle, headerCenter, headerActions, themeToggle, userMenu, allowedSections, storageKey, defaultCollapsed, collapsible = true, afterHeader, afterMain, className, }) {
    const visibleNav = filterNav(nav, allowedSections);
    return (_jsx(AdminLayout, { collapsible: collapsible, storageKey: storageKey, defaultCollapsed: defaultCollapsed, afterHeader: afterHeader, afterMain: afterMain, className: className, sidebar: _jsx(AdminSidebar, { items: visibleNav, isActive: isActive, afterNav: afterNav, mobileHeader: mobileHeader, footer: sidebarFooter, header: _jsx(ShellSidebarHeader, { brand: brand, brandName: brandName, brandBadge: brandBadge, brandHref: brandHref, collapsedBrand: collapsedBrand, collapsible: collapsible }) }), header: _jsx(ShellHeader
        /* The full nav, not the filtered one: a title must still resolve on
           a route the sidebar is hiding, or the header goes blank there. */
        , { 
            /* The full nav, not the filtered one: a title must still resolve on
               a route the sidebar is hiding, or the header goes blank there. */
            nav: nav, title: title, titles: titles, fallbackTitle: fallbackTitle, headerCenter: headerCenter, headerActions: headerActions, themeToggle: themeToggle, userMenu: userMenu }), children: children }));
}
//# sourceMappingURL=AdminShell.js.map