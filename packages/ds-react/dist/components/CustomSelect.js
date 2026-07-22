"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { Select } from "./Select";
/** @deprecated See {@link CustomSelectProps}. */
export function CustomSelect({ options, value, onChange, placeholder, searchable, searchPlaceholder, disabled, size, className, label, }) {
    return (_jsx(Select, { panel: true, options: options, value: value, onValueChange: onChange, placeholder: placeholder, searchable: searchable, searchPlaceholder: searchPlaceholder, disabled: disabled, size: size, className: className, panelLabel: label }));
}
//# sourceMappingURL=CustomSelect.js.map