import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import { cn } from "../utils/cn";
export const TruncatedText = forwardRef(function TruncatedText({ lines, className, ...rest }, ref) {
    return _jsx("div", { ref: ref, className: cn("ds-truncate", /* truncated-text.css has --middle, no line-clamp: `lines` is inert */ lines && "", className), ...rest });
});
//# sourceMappingURL=TruncatedText.js.map