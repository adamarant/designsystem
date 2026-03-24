import { useCallback, useState } from "react";
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
export function useKeyboardNav({ itemCount, onSelect, onEscape, enabled = true, loop = true, initialIndex = -1, }) {
    const [activeIndex, setActiveIndex] = useState(initialIndex);
    const reset = useCallback(() => {
        setActiveIndex(initialIndex);
    }, [initialIndex]);
    const handleKeyDown = useCallback((event) => {
        if (!enabled || itemCount === 0)
            return;
        switch (event.key) {
            case "ArrowDown": {
                event.preventDefault();
                setActiveIndex((prev) => {
                    if (prev >= itemCount - 1)
                        return loop ? 0 : prev;
                    return prev + 1;
                });
                break;
            }
            case "ArrowUp": {
                event.preventDefault();
                setActiveIndex((prev) => {
                    if (prev <= 0)
                        return loop ? itemCount - 1 : 0;
                    return prev - 1;
                });
                break;
            }
            case "Enter": {
                if (activeIndex >= 0 && activeIndex < itemCount) {
                    event.preventDefault();
                    onSelect(activeIndex);
                }
                break;
            }
            case "Escape": {
                event.preventDefault();
                onEscape?.();
                break;
            }
            case "Home": {
                event.preventDefault();
                setActiveIndex(0);
                break;
            }
            case "End": {
                event.preventDefault();
                setActiveIndex(itemCount - 1);
                break;
            }
        }
    }, [enabled, itemCount, activeIndex, onSelect, onEscape, loop]);
    return { activeIndex, setActiveIndex, handleKeyDown, reset };
}
//# sourceMappingURL=useKeyboardNav.js.map