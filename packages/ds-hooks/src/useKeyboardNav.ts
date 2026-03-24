import { useCallback, useState } from "react";

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
export function useKeyboardNav({
  itemCount,
  onSelect,
  onEscape,
  enabled = true,
  loop = true,
  initialIndex = -1,
}: UseKeyboardNavOptions): UseKeyboardNavReturn {
  const [activeIndex, setActiveIndex] = useState(initialIndex);

  const reset = useCallback(() => {
    setActiveIndex(initialIndex);
  }, [initialIndex]);

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent) => {
      if (!enabled || itemCount === 0) return;

      switch (event.key) {
        case "ArrowDown": {
          event.preventDefault();
          setActiveIndex((prev) => {
            if (prev >= itemCount - 1) return loop ? 0 : prev;
            return prev + 1;
          });
          break;
        }
        case "ArrowUp": {
          event.preventDefault();
          setActiveIndex((prev) => {
            if (prev <= 0) return loop ? itemCount - 1 : 0;
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
    },
    [enabled, itemCount, activeIndex, onSelect, onEscape, loop],
  );

  return { activeIndex, setActiveIndex, handleKeyDown, reset };
}
