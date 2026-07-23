import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import { cn } from "../utils/cn";
const Sidebar = forwardRef(function S({ className, ...r }, ref) { return _jsx("aside", { ref: ref, className: cn("ds-admin-layout__sidebar", className), ...r }); });
const Main = forwardRef(function M({ className, ...r }, ref) { return _jsx("main", { ref: ref, className: cn("ds-admin-layout__main", className), ...r }); });
const Header = forwardRef(function H({ className, ...r }, ref) { return _jsx("header", { ref: ref, className: cn("ds-admin-layout__header", className), ...r }); });
const Root = forwardRef(function AdminLayout({ className, ...rest }, ref) { return _jsx("div", { ref: ref, className: cn("ds-admin-layout", className), ...rest }); });
/* Flat exports — RSC-safe (dot access on client refs is undefined in RSC). */
export { Sidebar as AdminLayoutSidebar, Main as AdminLayoutMain, Header as AdminLayoutHeader };
export const AdminLayout = Object.assign(Root, { Sidebar, Main, Header });
//# sourceMappingURL=AdminLayout.js.map