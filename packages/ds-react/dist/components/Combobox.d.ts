import { type ComponentPropsWithoutRef, type ReactNode } from "react";
import type { Size } from "../types";
export interface ComboboxOption {
    /** Stable value submitted on change. */
    value: string;
    /** Visible label, also the search target. */
    label: string;
    /** Secondary text shown after the label. Also searched. */
    description?: string;
    /** Group heading this option belongs to. */
    group?: string;
    /** Leading visual (e.g. a color dot). */
    icon?: ReactNode;
    /** When true, the option cannot be selected. */
    disabled?: boolean;
}
type ComboboxSize = Size;
type ComboboxSort = "az" | "za" | "none";
export interface ComboboxProps extends Omit<ComponentPropsWithoutRef<"div">, "onChange" | "defaultValue"> {
    /** Selectable options. */
    options: ComboboxOption[];
    /** Selected value(s). Array when `multiple`, otherwise a single value or null. */
    value: string | string[] | null;
    /** Fires with the next selection. */
    onChange: (value: string | string[] | null) => void;
    /** Multi-select with tags. Default: false */
    multiple?: boolean;
    /** Filter options by typed text. Default: true */
    searchable?: boolean;
    /** Sort options by label. Default: "az" */
    sort?: ComboboxSort;
    /** Height tier. Default: "md" */
    size?: ComboboxSize;
    /** Allow clearing the selection. Default: true */
    clearable?: boolean;
    /** Error styling. Default: false */
    error?: boolean;
    /** Disable the control. Default: false */
    disabled?: boolean;
    /** Show the loading state in the listbox. Default: false */
    loading?: boolean;
    /** Input placeholder. */
    placeholder?: string;
    /** Message when no option matches. Default: "No results" */
    emptyMessage?: string;
    /** Message shown while loading. Default: "Loading…" */
    loadingMessage?: string;
    /** Leading icon inside the input area. */
    icon?: ReactNode;
    /** When provided, offers to create the typed value as a new option. */
    onCreate?: (input: string) => void;
}
export declare const Combobox: import("react").ForwardRefExoticComponent<ComboboxProps & import("react").RefAttributes<HTMLDivElement>>;
export {};
//# sourceMappingURL=Combobox.d.ts.map