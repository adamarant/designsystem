import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import { cn } from "../utils/cn";
export const Center = forwardRef(function Center({ as: Tag = "div", className, ...rest }, ref) {
    return (_jsx(Tag, { ref: ref, className: cn("ds-center", className), ...rest }));
});
//# sourceMappingURL=Center.js.map