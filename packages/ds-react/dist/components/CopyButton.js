import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import { cn } from "../utils/cn";
export const CopyButton = forwardRef(function CopyButton({ className, ...rest }, ref) {
    return _jsx("button", { ref: ref, className: cn("ds-copy-btn", className), ...rest });
});
//# sourceMappingURL=CopyButton.js.map