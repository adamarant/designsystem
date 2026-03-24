interface UseKeyboardNavOptions {
    /** Total number of items in the list */
    itemCount: number;
    /** Called when Enter is pressed on the active item */
    onSelect: (index: number) => void;
    /** Called when Escape is pressed */
    onEscape?: () => void;
    /** Whether the list is currently open/active */
    enabled?: boolean;
    /** Whether navigation wraps around at boundaries */
    loop?: boolean;
    /** Initial active index (-1 = none) */
    initialIndex?: number;
}
interface UseKeyboardNavReturn {
    /** Currently highlighted index (-1 = none) */
    activeIndex: number;
    /** Set the active index manually (e.g., on mouse hover) */
    setActiveIndex: (index: number) => void;
    /** Attach this to the input/trigger's onKeyDown */
    handleKeyDown: (event: React.KeyboardEvent) => void;
    /** Reset active index to initial */
    reset: () => void;
}
/**
 * Keyboard navigation for lists: ArrowUp/Down to move, Enter to select, Escape to close.
 *
 * @example
 * const { activeIndex, handleKeyDown } = useKeyboardNav({
 *   itemCount: options.length,
 *   onSelect: (i) => selectOption(options[i]),
 *   onEscape: () => setOpen(false),
 * });
 */
export declare function useKeyboardNav({ itemCount, onSelect, onEscape, enabled, loop, initialIndex, }: UseKeyboardNavOptions): UseKeyboardNavReturn;
export {};
//# sourceMappingURL=useKeyboardNav.d.ts.map