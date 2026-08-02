import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef, } from "react";
import { cn } from "../utils/cn";
const Label = forwardRef(function StatLabel({ className, ...rest }, ref) {
    return _jsx("p", { ref: ref, className: cn("ds-stat__label", className), ...rest });
});
const Value = forwardRef(function StatValue({ className, ...rest }, ref) {
    return _jsx("p", { ref: ref, className: cn("ds-stat__value", className), ...rest });
});
const Detail = forwardRef(function StatDetail({ className, ...rest }, ref) {
    return _jsx("p", { ref: ref, className: cn("ds-stat__detail", className), ...rest });
});
const Icon = forwardRef(function StatIcon({ className, ...rest }, ref) {
    return _jsx("div", { ref: ref, className: cn("ds-stat__icon", className), ...rest });
});
const StatRoot = forwardRef(function Stat({ label, value, detail, icon, children, className, ...rest }, ref) {
    return (_jsxs("div", { ref: ref, className: cn("ds-stat", className), ...rest, children: [icon ? _jsx(Icon, { children: icon }) : null, label ? _jsx(Label, { children: label }) : null, value ? _jsx(Value, { children: value }) : null, detail ? _jsx(Detail, { children: detail }) : null, children] }));
});
/* Flat exports — RSC-safe (dot access on client refs is undefined in RSC). */
export { Label as StatLabel, Value as StatValue, Detail as StatDetail, Icon as StatIcon };
export const Stat = Object.assign(StatRoot, { Label, Value, Detail, Icon });
//# sourceMappingURL=Stat.js.map