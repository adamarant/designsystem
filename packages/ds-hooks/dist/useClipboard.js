import { useCallback, useRef, useState } from "react";
/**
 * Copy text to the clipboard with feedback state.
 *
 * @example
 * const { copy, copied } = useClipboard(2000);
 * <button onClick={() => copy(address)}>
 *   {copied ? "Copied!" : "Copy"}
 * </button>
 */
export function useClipboard(resetDelay = 2000) {
    const [copied, setCopied] = useState(false);
    const [error, setError] = useState(null);
    const timeoutRef = useRef(undefined);
    const copy = useCallback(async (text) => {
        try {
            await navigator.clipboard.writeText(text);
            setCopied(true);
            setError(null);
            if (timeoutRef.current)
                clearTimeout(timeoutRef.current);
            timeoutRef.current = setTimeout(() => setCopied(false), resetDelay);
        }
        catch (err) {
            setError(err instanceof Error ? err : new Error("Failed to copy to clipboard"));
            setCopied(false);
        }
    }, [resetDelay]);
    return { copy, copied, error };
}
//# sourceMappingURL=useClipboard.js.map