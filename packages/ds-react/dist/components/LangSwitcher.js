import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef, } from "react";
import { cn } from "../utils/cn";
export const LangSwitcher = forwardRef(function LangSwitcher({ items, current, LinkComponent = "a", className, ...rest }, ref) {
    return (_jsx("nav", { ref: ref, "aria-label": "Language", className: cn("ds-flex ds-items-center ds-gap-2", className), ...rest, children: items.map((item) => {
            const active = item.code === current;
            return (_jsx(LinkComponent, { href: item.href, hrefLang: item.code, "aria-current": active ? "true" : undefined, className: cn("ds-text-sm ds-uppercase", active ? "ds-text-primary" : "ds-text-secondary"), children: item.code }, item.code));
        }) }));
});
//# sourceMappingURL=LangSwitcher.js.map