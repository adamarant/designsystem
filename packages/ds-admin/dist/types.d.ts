import type { ReactNode } from 'react';
export interface NavItem {
    id: string;
    label: string;
    href: string;
    icon: ReactNode;
    children?: {
        id: string;
        label: string;
        href: string;
    }[];
    disabled?: boolean;
    badge?: ReactNode;
}
export interface SidebarState {
    isCollapsed: boolean;
    isMobileOpen: boolean;
    toggleCollapse: () => void;
    openMobile: () => void;
    closeMobile: () => void;
}
export interface SidebarProviderProps {
    children: ReactNode;
    /** localStorage key for persisting collapsed state. Default: 'admin_sidebar_collapsed' */
    storageKey?: string;
    /** Initial collapsed state. Default: false */
    defaultCollapsed?: boolean;
}
export interface AdminLayoutProps {
    children: ReactNode;
    /** The sidebar element (use AdminSidebar or custom) */
    sidebar: ReactNode;
    /** The header element (use AdminHeader or custom) */
    header?: ReactNode;
    /** localStorage key for sidebar state. Default: 'admin_sidebar_collapsed' */
    storageKey?: string;
    /** Initial collapsed state. Default: false */
    defaultCollapsed?: boolean;
    /** Enable collapse/expand toggle. When false, sidebar is always expanded. Default: true */
    collapsible?: boolean;
    /** Slot rendered after the header (e.g. subheader bar) */
    afterHeader?: ReactNode;
    /** Slot rendered after main content area (e.g. mobile bottom nav) */
    afterMain?: ReactNode;
    /** Additional className on the root ds-admin element */
    className?: string;
}
export interface AdminSidebarProps {
    /** Navigation items to render */
    items: NavItem[];
    /** Content for the sidebar header area (logo, branding) */
    header: ReactNode;
    /** Content for the sidebar footer area (sign out, links) */
    footer?: ReactNode;
    /** Alternative header content when sidebar is collapsed */
    collapsedHeader?: ReactNode;
    /** Content rendered after nav items but before footer (e.g. favorites group) */
    afterNav?: ReactNode;
    /** Mobile drawer header content. Defaults to a close button. */
    mobileHeader?: ReactNode;
    /** Custom active-route detection. Default: startsWith match */
    isActive?: (href: string, pathname: string) => boolean;
}
export interface AdminHeaderProps {
    /** Left slot — page title, breadcrumbs */
    left?: ReactNode;
    /** Center slot — search bar */
    center?: ReactNode;
    /** Right slot — theme toggle, avatar, actions */
    right?: ReactNode;
}
export interface AdminPageHeaderProps {
    /** The page title. */
    title: ReactNode;
    /** When provided, a back arrow appears before the title and calls this. */
    onBack?: () => void;
    /** Accessible label for the back button. Default: 'Back' */
    backLabel?: string;
    /** Right-aligned actions slot — one button or several. */
    actions?: ReactNode;
    /** Class for the title element. Default: 'ds-admin-title' */
    titleClassName?: string;
    /** Additional class on the root .ds-page-header. */
    className?: string;
}
export interface AdminToolbarSearch {
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    /** Accessible label when no visible label exists. */
    'aria-label'?: string;
}
export interface AdminToolbarFilterOption {
    value: string;
    label: string;
}
export interface AdminToolbarFilter {
    value: string;
    onChange: (value: string) => void;
    options: AdminToolbarFilterOption[];
    /** Label for the implicit "all" option (value=''). Omit to remove it. */
    allLabel?: string;
    /** 'select' (default) renders a dropdown. 'segmented' renders a DS segmented
        control — right for a short fixed set like a status switch, where seeing
        every option at once beats hiding them in a menu. */
    variant?: 'select' | 'segmented';
    'aria-label'?: string;
}
export interface AdminToolbarProps {
    /** Search box on the left; grows to fill. Omit for no search. */
    search?: AdminToolbarSearch;
    /** Filter <select>s after the search. */
    filters?: AdminToolbarFilter[];
    /** Right-aligned actions slot — this is where consumer-specific controls
        (e.g. an AI button) live, without forking the toolbar. */
    actions?: ReactNode;
    className?: string;
}
export type AdminTableAlign = 'start' | 'end' | 'center';
/** Passed to a column's cell renderer so it can react to row state (e.g. show
    an input instead of text while the row is being edited inline). */
export interface AdminCellContext {
    /** True when this row is the one in inline-edit mode (editingKey match). */
    editing: boolean;
}
export interface AdminTableColumn<Row> {
    key: string;
    header: ReactNode;
    /** Renders the cell for a row. Row field access lives here, so different
        data shapes (title_es vs title) fit the same table. The second arg lets
        the cell switch to an edit control when the row is being edited inline. */
    cell: (row: Row, ctx: AdminCellContext) => ReactNode;
    /** Column alignment. Default: 'start'. */
    align?: AdminTableAlign;
    /** Emphasis + truncation via .ds-table__cell--primary. */
    primary?: boolean;
    /** Makes the header a sort control. The value is the sort key reported to
        onSort and compared against the active sort. */
    sortKey?: string;
    /** Class applied to both <th> and <td> of this column. */
    className?: string;
}
export type AdminSortDirection = 'asc' | 'desc';
export interface AdminSortState {
    key: string;
    direction: AdminSortDirection;
}
export interface AdminTableProps<Row> {
    columns: AdminTableColumn<Row>[];
    rows: Row[];
    /** Unique key per row. Default: String((row as {id}).id). */
    rowKey?: (row: Row) => string;
    /** Loading → shimmer skeleton rows. */
    loading?: boolean;
    /** Skeleton row count while loading. Default: 5. */
    loadingRows?: number;
    /** Empty-state content when not loading and rows is empty. */
    empty?: ReactNode;
    /** Current sort. A column whose sortKey matches shows the asc/desc arrow. */
    sort?: AdminSortState;
    /** Called when a sortable header is clicked, with the next sort state for
        that column (toggles asc↔desc, defaults to asc on a new column). */
    onSortChange?: (sort: AdminSortState) => void;
    /** Footer content, rendered as .ds-table-footer inside the bordered wrapper
        (e.g. an info string + AdminPagination). One container, one border. */
    footer?: ReactNode;
    /** Enables drag-to-reorder. A grip handle column is prepended and rows become
        draggable (except the one being edited); on drop this is called with the
        full rows array in the new order. HTML5 DnD, no dependency. */
    onReorder?: (rows: Row[]) => void;
    /** rowKey of the row currently in inline-edit mode. Its cells receive
        ctx.editing = true so they can render inputs; it is not draggable. */
    editingKey?: string | null;
    /** Cells for a trailing row (e.g. an inline "add new" form). AdminTable wraps
        them in a <tr> after the data rows; provide one cell per column (a leading
        empty cell for the grip is added automatically when reorderable). */
    appendRow?: ReactNode;
    /** Extra class per data row (e.g. dim inactive rows). Merged with the drag
        state classes. */
    rowClassName?: (row: Row) => string | undefined;
    /** Makes the whole row a click target (e.g. open the record). Interactive
        controls inside a cell must stopPropagation so they don't also fire it.
        Not applied to a row being edited inline. The row's explicit action
        buttons stay the keyboard-accessible path. */
    onRowClick?: (row: Row) => void;
    className?: string;
}
export type AdminBadgeTone = 'neutral' | 'success' | 'warning' | 'info' | 'error';
export interface AdminStatusBadgeProps {
    label: ReactNode;
    /** Maps to a ds-badge variant. 'neutral' → outline. Default: 'neutral'. */
    tone?: AdminBadgeTone;
    className?: string;
}
export interface AdminRowAction {
    /** Icon element — passed by the consumer (keeps ds-admin icon-free). */
    icon: ReactNode;
    /** Accessible label / tooltip. */
    label: string;
    /** Renders an <a> when set; a <button> otherwise. */
    href?: string;
    onClick?: () => void;
    /** Open the href in a new tab (adds rel=noopener). */
    external?: boolean;
    /** Danger styling (e.g. delete). */
    danger?: boolean;
    disabled?: boolean;
}
export interface AdminRowActionsProps {
    actions: AdminRowAction[];
    className?: string;
}
export interface AdminPaginationProps {
    page: number;
    totalPages: number;
    onPageChange: (page: number) => void;
    /** Labels for the prev/next controls (a11y). */
    prevLabel?: string;
    nextLabel?: string;
    className?: string;
}
export interface AdminConfirmDialogProps {
    open: boolean;
    title: ReactNode;
    /** Body content — a message, or richer JSX. */
    children: ReactNode;
    onConfirm: () => void;
    onCancel: () => void;
    confirmLabel?: string;
    cancelLabel?: string;
    /** Danger styling on the confirm button. Default: true. */
    danger?: boolean;
    /** Disable buttons while the action runs. */
    busy?: boolean;
}
export interface AdminFormLayoutProps {
    /** Main column content (the fields/cards). */
    children: ReactNode;
    /** Sidebar content (publication, cover, metadata). Omit for a single column. */
    sidebar?: ReactNode;
    className?: string;
}
export interface AdminCardProps {
    /** Card title. Omit to render a headerless card (body only). */
    title?: ReactNode;
    /** Right-aligned slot in the header (e.g. a locale switcher). Needs a title. */
    actions?: ReactNode;
    children: ReactNode;
    className?: string;
}
export interface AdminFieldProps {
    /** Field label. */
    label: ReactNode;
    /** The control (input, textarea, select, editor, ...). */
    children: ReactNode;
    /** Associates the label with the control via htmlFor / id. */
    htmlFor?: string;
    /** Right-aligned slot on the label row (locale pills, AI buttons, ...) —
        this is where consumer-specific controls live without forking. */
    actions?: ReactNode;
    /** Helper text under the control. */
    hint?: ReactNode;
    /** Error text under the control (replaces hint when set). */
    error?: ReactNode;
    /** Marks the field required (visual asterisk). */
    required?: boolean;
    className?: string;
}
export interface AdminLocaleOption {
    /** Locale code stored/emitted (e.g. 'es'). */
    value: string;
    /** Short display label (e.g. 'ES'). */
    label: string;
}
export interface AdminLocaleSwitcherProps {
    options: AdminLocaleOption[];
    value: string;
    onChange: (value: string) => void;
    /** Size of the segmented control. */
    size?: 'sm' | 'md' | 'lg';
    'aria-label'?: string;
    className?: string;
}
//# sourceMappingURL=types.d.ts.map