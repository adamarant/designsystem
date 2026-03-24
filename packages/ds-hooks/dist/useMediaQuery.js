import { useEffect, useState } from "react";
/**
 * Reactively tracks a CSS media query match state.
 *
 * @example
 * const isMobile = useMediaQuery("(max-width: 767px)");
 * const prefersDark = useMediaQuery("(prefers-color-scheme: dark)");
 */
export function useMediaQuery(query) {
    const [matches, setMatches] = useState(() => {
        if (typeof window === "undefined")
            return false;
        return window.matchMedia(query).matches;
    });
    useEffect(() => {
        const mql = window.matchMedia(query);
        setMatches(mql.matches);
        function handler(event) {
            setMatches(event.matches);
        }
        mql.addEventListener("change", handler);
        return () => mql.removeEventListener("change", handler);
    }, [query]);
    return matches;
}
//# sourceMappingURL=useMediaQuery.js.map