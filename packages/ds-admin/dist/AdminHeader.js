'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useSidebar } from './SidebarContext.js';
import { IconClose, IconMenu } from '@adamarant/ds-react';
export function AdminHeader({ left, center, right }) {
    const { isMobileOpen, openMobile, closeMobile } = useSidebar();
    return (_jsx("header", { className: "ds-admin__header", children: _jsxs("div", { className: "ds-admin__header-inner", children: [left && _jsx("div", { className: "ds-flex ds-items-center ds-gap-3 ds-flex-1 ds-min-w-0", children: left }), center && _jsx("div", { className: "ds-flex ds-items-center ds-flex-1 ds-justify-center", children: center }), right && _jsx("div", { className: "ds-flex ds-items-center ds-gap-3 ds-ml-auto", children: right }), _jsx("button", { onClick: isMobileOpen ? closeMobile : openMobile, className: "ds-nav__icon-btn ds-admin__header-toggle", "aria-label": "Toggle menu", children: isMobileOpen ? (_jsx(IconClose, { width: 20, height: 20 })) : (_jsx(IconMenu, { width: 20, height: 20 })) })] }) }));
}
//# sourceMappingURL=AdminHeader.js.map