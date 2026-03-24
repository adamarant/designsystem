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
export declare function useDebouncedValue<T>(value: T, delay?: number): T;
//# sourceMappingURL=useDebouncedValue.d.ts.map