import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import { cn } from "../utils/cn";
const Term = forwardRef(function Term({ className, ...rest }, ref) { return _jsx("dt", { ref: ref, className: cn("ds-description-list__term", className), ...rest }); });
const Detail = forwardRef(function Detail({ className, ...rest }, ref) { return _jsx("dd", { ref: ref, className: cn("ds-description-list__detail", className), ...rest }); });
const Root = forwardRef(function DescriptionList({ className, ...rest }, ref) { return _jsx("dl", { ref: ref, className: cn("ds-description-list", className), ...rest }); });
/* Flat exports — RSC-safe (dot access on client refs is undefined in RSC). */
export { Term as DescriptionListTerm, Detail as DescriptionListDetail };
export const DescriptionList = Object.assign(Root, { Term, Detail });
//# sourceMappingURL=DescriptionList.js.map