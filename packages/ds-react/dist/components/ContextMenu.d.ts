import { type MouseEvent, type ReactNode } from "react";
export interface ContextMenuAction {
    type?: "action";
    id: string;
    label: string;
    icon?: ReactNode;
    shortcut?: ReactNode;
    variant?: "default" | "danger";
    disabled?: boolean;
    onSelect: () => void;
}
export interface ContextMenuDivider {
    type: "divider";
}
export interface ContextMenuLabel {
    type: "label";
    label: string;
}
export type ContextMenuItem = ContextMenuAction | ContextMenuDivider | ContextMenuLabel;
export interface UseContextMenuOptions {
    onOpen?: () => void;
    onClose?: () => void;
}
export interface UseContextMenuReturn {
    open: (event: MouseEvent | globalThis.MouseEvent, items: ContextMenuItem[]) => void;
    close: () => void;
    isOpen: boolean;
    render: ReactNode;
}
export declare function useContextMenu(options?: UseContextMenuOptions): UseContextMenuReturn;
//# sourceMappingURL=ContextMenu.d.ts.map