import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef, } from "react";
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
const checkSizeMap = {
    sm: "--sm",
    md: "",
    lg: "--lg",
};
function renderCheckControl(block, type, props, ref) {
    const { size = "md", label, description, checked, defaultChecked, onCheckedChange, disabled, name, value, inputProps, className, children, ...rest } = props;
    const enriched = label !== undefined ||
        description !== undefined ||
        checked !== undefined ||
        defaultChecked !== undefined ||
        onCheckedChange !== undefined ||
        inputProps !== undefined ||
        name !== undefined ||
        value !== undefined ||
        disabled !== undefined;
    /* Only attach a handler when the consumer gave one — keeps the
       component usable from Server Components in uncontrolled mode. */
    const handleChange = onCheckedChange || inputProps?.onChange
        ? (e) => {
            inputProps?.onChange?.(e);
            onCheckedChange?.(e.target.checked);
        }
        : undefined;
    const sizeClass = checkSizeMap[size] && `${block}${checkSizeMap[size]}`;
    return (_jsxs("label", { ref: ref, className: cn(block, sizeClass, className), ...rest, children: [enriched && (_jsx("input", { type: type, checked: checked, defaultChecked: defaultChecked, disabled: disabled, name: name, value: value, ...inputProps, onChange: handleChange })), enriched && (label !== undefined || description !== undefined) && (_jsxs("span", { className: `${block}__content`, children: [label !== undefined && (_jsx("span", { className: `${block}__label`, children: label })), description !== undefined && (_jsx("span", { className: `${block}__description`, children: description }))] })), children] }));
}
export const Checkbox = forwardRef(function Checkbox(props, ref) {
    return renderCheckControl("ds-checkbox", "checkbox", props, ref);
});
export const Radio = forwardRef(function Radio(props, ref) {
    return renderCheckControl("ds-radio", "radio", props, ref);
});
//# sourceMappingURL=Input.js.map