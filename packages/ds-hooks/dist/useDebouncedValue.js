import { useEffect, useState } from "react";
/**
 * Returns a debounced version of `value` that updates after `delay` ms of inactivity.
 *
 * @example
 * const [search, setSearch] = useState("");
 * const debouncedSearch = useDebouncedValue(search, 300);
 *
 * useEffect(() => {
 *   fetchResults(debouncedSearch);
 * }, [debouncedSearch]);
 */
export function useDebouncedValue(value, delay = 300) {
    const [debounced, setDebounced] = useState(value);
    useEffect(() => {
        const timer = setTimeout(() => setDebounced(value), delay);
        return () => clearTimeout(timer);
    }, [value, delay]);
    return debounced;
}
//# sourceMappingURL=useDebouncedValue.js.map