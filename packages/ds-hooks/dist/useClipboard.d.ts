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
export declare function useClipboard(resetDelay?: number): UseClipboardReturn;
export {};
//# sourceMappingURL=useClipboard.d.ts.map