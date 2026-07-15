import type { ReactNode } from 'react';
interface SelectableBlockProps {
    selected: boolean;
    label: string;
    isFirst: boolean;
    isLast: boolean;
    onSelect: () => void;
    onMoveUp: () => void;
    onMoveDown: () => void;
    onRemove: () => void;
    children: ReactNode;
}
/**
 * Wraps a rendered block on the canvas with a selection outline, a type tag, and
 * a control cluster (reorder + delete). Controls stop propagation so acting on
 * them never leaks into canvas/block selection.
 */
export declare function SelectableBlock({ selected, label, isFirst, isLast, onSelect, onMoveUp, onMoveDown, onRemove, children, }: SelectableBlockProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=SelectableBlock.d.ts.map