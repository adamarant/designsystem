/* Shell contract (0.12.0) — start here when mounting an admin panel.
   The light/dark switch is at '@adamarant/ds-admin/theme' (needs next-themes). */
export { AdminShell } from './AdminShell.js'

/* Shell parts — for a panel whose chrome AdminShell can't express */
export { SidebarProvider, useSidebar } from './SidebarContext.js'
export { AdminLayout } from './AdminLayout.js'
export { AdminSidebar } from './AdminSidebar.js'
export { AdminHeader } from './AdminHeader.js'

/* Page contract (0.10.0) — start here when building an admin page */
export { AdminPage } from './AdminPage.js'

/* Data & page primitives (0.2.0) */
export { AdminPageHeader } from './AdminPageHeader.js'
export { AdminToolbar } from './AdminToolbar.js'
export { AdminTable } from './AdminTable.js'
export { AdminStatusBadge } from './AdminStatusBadge.js'
export { AdminRowActions } from './AdminRowActions.js'
export { AdminPagination } from './AdminPagination.js'
export { AdminConfirmDialog } from './AdminConfirmDialog.js'

/* Empty state & spinner (0.7.0) */
export { AdminEmptyState } from './AdminEmptyState.js'
export { AdminSpinner } from './AdminSpinner.js'

/* Modal & read-only detail (0.8.0) */
export { AdminModal } from './AdminModal.js'
export { AdminDetailList } from './AdminDetailList.js'

/* Form primitives (0.4.0) */
export { AdminFormLayout } from './AdminFormLayout.js'
export { AdminCard } from './AdminCard.js'
export { AdminField } from './AdminField.js'
export { AdminLocaleSwitcher } from './AdminLocaleSwitcher.js'

export type {
  NavItem,
  SidebarState,
  SidebarProviderProps,
  AdminShellProps,
  AdminLayoutProps,
  AdminPageProps,
  AdminPageStatus,
  AdminSidebarProps,
  AdminHeaderProps,
  AdminPageHeaderProps,
  AdminToolbarProps,
  AdminToolbarSearch,
  AdminToolbarFilter,
  AdminToolbarFilterOption,
  AdminTableProps,
  AdminTableColumn,
  AdminTableAlign,
  AdminCellContext,
  AdminSortState,
  AdminSortDirection,
  AdminStatusBadgeProps,
  AdminBadgeTone,
  AdminRowActionsProps,
  AdminRowAction,
  AdminPaginationProps,
  AdminConfirmDialogProps,
  AdminFormLayoutProps,
  AdminCardProps,
  AdminFieldProps,
  AdminLocaleSwitcherProps,
  AdminLocaleOption,
  AdminEmptyStateProps,
  AdminSpinnerProps,
  AdminModalProps,
  AdminDetailListProps,
  AdminDetailItem,
} from './types.js'
