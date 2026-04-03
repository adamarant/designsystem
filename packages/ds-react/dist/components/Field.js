import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import { cn } from "../utils/cn";
export const Field = forwardRef(function Field({ className, ...rest }, ref) {
    return _jsx("div", { ref: ref, className: cn("ds-LField", className), ...rest });
});
//# sourceMappingURL=Field.js.map