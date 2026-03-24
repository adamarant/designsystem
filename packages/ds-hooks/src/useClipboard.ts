import { useCallback, useRef, useState } from "react";

interface UseClipboardReturn {
  /** Copy text to clipboard */
  copy: (text: string) => Promise<void>;
  /** Whether text was recently copied (resets after `resetDelay`) */
  copied: boolean;
  /** Any error from the clipboard API */
  error: Error | null;
}

/**
 * Copy text to the clipboard with feedback state.
 *
 * @example
 * const { copy, copied } = useClipboard(2000);
 * <button onClick={() => copy(address)}>
 *   {copied ? "Copied!" : "Copy"}
 * </button>
 */
export function useClipboard(resetDelay = 2000): UseClipboardReturn {
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(undefined);

  const copy = useCallback(
    async (text: string) => {
      try {
        await navigator.clipboard.writeText(text);
        setCopied(true);
        setError(null);

        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => setCopied(false), resetDelay);
      } catch (err) {
        setError(
          err instanceof Error ? err : new Error("Failed to copy to clipboard"),
        );
        setCopied(false);
      }
    },
    [resetDelay],
  );

  return { copy, copied, error };
}
