'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { SidebarProvider, useSidebar } from './SidebarContext.js';
function AdminLayoutInner({ children, sidebar, header, collapsible = true, afterHeader, afterMain, className, }) {
    const { isCollapsed } = useSidebar();
    const modifier = collapsible && isCollapsed
        ? 'ds-admin--collapsed'
        : 'ds-admin--expanded';
    const rootClass = className
        ? `ds-admin ${modifier} ${className}`
        : `ds-admin ${modifier}`;
    return (_jsxs("div", { className: rootClass, children: [sidebar, header, afterHeader, _jsx("main", { className: "ds-admin__main", children: _jsx("div", { className: "ds-admin__content", children: _jsx("div", { className: "ds-admin__container", children: children }) }) }), afterMain] }));
}
export function AdminLayout({ children, sidebar, header, storageKey, defaultCollapsed, collapsible = true, afterHeader, afterMain, className, }) {
    return (_jsx(SidebarProvider, { storageKey: storageKey, defaultCollapsed: defaultCollapsed, children: _jsx(AdminLayoutInner, { sidebar: sidebar, header: header, collapsible: collapsible, afterHeader: afterHeader, afterMain: afterMain, className: className, children: children }) }));
}
//# sourceMappingURL=AdminLayout.js.map