import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef } from "react";
import { cn } from "../utils/cn";
import { IconCheck, IconCopy } from "../icons";
export const CopyButton = forwardRef(function CopyButton({ className, children, ...rest }, ref) {
    return (_jsx("button", { ref: ref, className: cn("ds-copy-btn", className), ...rest, children: children ?? (_jsxs(_Fragment, { children: [_jsx(IconCopy, { className: "ds-copy-btn__icon" }), _jsx(IconCheck, { className: "ds-copy-btn__icon-check" })] })) }));
});
//# sourceMappingURL=CopyButton.js.map