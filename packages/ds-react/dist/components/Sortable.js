import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import { cn } from "../utils/cn";
export const Sortable = forwardRef(function Sortable({ className, ...rest }, ref) {
    return _jsx("div", { ref: ref, className: cn("ds-LSortable", className), ...rest });
});
//# sourceMappingURL=Sortable.js.map