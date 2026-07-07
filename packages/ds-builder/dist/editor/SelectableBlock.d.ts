import type { ReactNode } from 'react';
interface SelectableBlockProps {
    selected: boolean;
    label: string;
    onSelect: () => void;
    children: ReactNode;
}
/** Wraps a rendered block on the canvas with a selection outline + type tag. */
export declare function SelectableBlock({ selected, label, onSelect, children }: SelectableBlockProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=SelectableBlock.d.ts.map