import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import { cn } from "../utils/cn";
export const Toolbar = forwardRef(function Toolbar({ className, ...rest }, ref) {
    return _jsx("div", { ref: ref, role: "toolbar", className: cn("ds-toolbar", className), ...rest });
});
//# sourceMappingURL=Toolbar.js.map