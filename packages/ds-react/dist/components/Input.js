import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import { cn } from "../utils/cn";
import { ignorePasswordManagers } from "../utils/passwordManager";
const inputStateMap = {
    default: "",
    error: "ds-input--error",
    success: "ds-input--success",
};
const inputSizeMap = {
    xs: "ds-input--xs",
    sm: "ds-input--sm",
    md: "",
    lg: "ds-input--lg",
};
export const Input = forwardRef(function Input({ state = "default", size = "md", flush, inline, allowPasswordManager, className, ...rest }, ref) {
    return (_jsx("input", { ref: ref, "aria-invalid": state === "error" || undefined, ...(allowPasswordManager ? {} : ignorePasswordManagers), className: cn("ds-input", inputStateMap[state], inputSizeMap[size], flush && "ds-input--flush", inline && "ds-input--inline", className), ...rest }));
});
const textareaStateMap = {
    default: "",
    error: "ds-textarea--error",
};
export const Textarea = forwardRef(function Textarea({ state = "default", allowPasswordManager, className, ...rest }, ref) {
    return (_jsx("textarea", { ref: ref, "aria-invalid": state === "error" || undefined, ...(allowPasswordManager ? {} : ignorePasswordManagers), className: cn("ds-textarea", textareaStateMap[state], className), ...rest }));
});
export const InputGroup = forwardRef(function InputGroup({ iconRight, className, ...rest }, ref) {
    return (_jsx("div", { ref: ref, className: cn("ds-input-group", iconRight && "ds-input-group--icon-right", className), ...rest }));
});
export const InputGroupIcon = forwardRef(function InputGroupIcon({ className, ...rest }, ref) {
    return (_jsx("div", { ref: ref, className: cn("ds-input-group__icon", className), ...rest }));
});
const helpVariantMap = {
    default: "",
    error: "ds-help--error",
};
export const Help = forwardRef(function Help({ variant = "default", className, ...rest }, ref) {
    return (_jsx("p", { ref: ref, className: cn("ds-help", helpVariantMap[variant], className), ...rest }));
});
export const Checkbox = forwardRef(function Checkbox({ className, ...rest }, ref) {
    return (_jsx("label", { ref: ref, className: cn("ds-checkbox", className), ...rest }));
});
export const Radio = forwardRef(function Radio({ className, ...rest }, ref) {
    return (_jsx("label", { ref: ref, className: cn("ds-radio", className), ...rest }));
});
//# sourceMappingURL=Input.js.map