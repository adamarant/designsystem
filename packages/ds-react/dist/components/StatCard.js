import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import { cn } from "../utils/cn";
const StatCardLabel = forwardRef(function StatCardLabel({ className, ...rest }, ref) {
    return _jsx("div", { ref: ref, className: cn("ds-stat-card__label", className), ...rest });
});
const StatCardValue = forwardRef(function StatCardValue({ className, ...rest }, ref) {
    return _jsx("div", { ref: ref, className: cn("ds-stat-card__value", className), ...rest });
});
const StatCardDetail = forwardRef(function StatCardDetail({ className, ...rest }, ref) {
    return _jsx("div", { ref: ref, className: cn("ds-stat-card__detail", className), ...rest });
});
const StatCardIcon = forwardRef(function StatCardIcon({ className, ...rest }, ref) {
    return _jsx("div", { ref: ref, className: cn("ds-stat-card__icon", className), ...rest });
});
const StatCardRoot = forwardRef(function StatCard({ className, ...rest }, ref) {
    return _jsx("div", { ref: ref, className: cn("ds-stat-card", className), ...rest });
});
export const StatCard = Object.assign(StatCardRoot, {
    Label: StatCardLabel,
    Value: StatCardValue,
    Detail: StatCardDetail,
    Icon: StatCardIcon,
});
//# sourceMappingURL=StatCard.js.map