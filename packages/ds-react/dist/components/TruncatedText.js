import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import { cn } from "../utils/cn";
export const TruncatedText = forwardRef(function TruncatedText({ lines, className, ...rest }, ref) {
    return _jsx("div", { ref: ref, className: cn("ds-truncated-text", lines && "ds-truncated-text--clamp", className), ...rest });
});
//# sourceMappingURL=TruncatedText.js.map