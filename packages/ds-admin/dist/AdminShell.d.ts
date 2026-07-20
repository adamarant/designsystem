import type { AdminShellProps } from './types.js';
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
export declare function AdminShell({ children, nav, brand, brandName, brandBadge, brandHref, collapsedBrand, sidebarFooter, afterNav, mobileHeader, isActive, title, titles, fallbackTitle, headerCenter, headerActions, themeToggle, storageKey, defaultCollapsed, collapsible, afterHeader, afterMain, className, }: AdminShellProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=AdminShell.d.ts.map