import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cloneElement, forwardRef, isValidElement, useId, } from "react";
import { cn } from "../utils/cn";
export const Field = forwardRef(function Field({ label, hint, error, success, required, horizontal, disabled, children, className, id, ...rest }, ref) {
    const reactId = useId();
    const controlId = id ?? `field-${reactId}`;
    const hintId = hint ? `${controlId}-hint` : undefined;
    const errorId = error ? `${controlId}-error` : undefined;
    const describedBy = [errorId, hintId].filter(Boolean).join(" ") || undefined;
    /* Attach the id and the description wiring to the control, never
       overwriting what the page set on purpose. */
    const control = isValidElement(children)
        ? cloneElement(children, {
            id: children.props.id ?? controlId,
            "aria-describedby": children.props["aria-describedby"] ?? describedBy,
            "aria-invalid": children.props["aria-invalid"] ??
                (error ? true : undefined),
        })
        : children;
    return (_jsxs("div", { ref: ref, className: cn("ds-field", required && "ds-field--required", horizontal && "ds-field--horizontal", disabled && "ds-field--disabled", className), ...rest, children: [label ? (_jsx("label", { className: "ds-field__label", htmlFor: controlId, children: label })) : null, control, error ? (_jsx("span", { className: "ds-field__error", id: errorId, role: "alert", children: error })) : null, success && !error ? (_jsx("span", { className: "ds-field__success", children: success })) : null, hint && !error ? (_jsx("span", { className: "ds-field__hint", id: hintId, children: hint })) : null] }));
});
//# sourceMappingURL=Field.js.map