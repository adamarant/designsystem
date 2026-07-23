import { type ComponentPropsWithoutRef } from "react";
import type { Size } from "../types";
export type SelectSize = Size;
export interface SelectOption {
    value: string;
    label: string;
}
export interface SelectProps extends Omit<ComponentPropsWithoutRef<"select">, "size"> {
    /** Size tier. Default: "md" (40px) */
    size?: SelectSize;
    /** Full width (the native select is auto-width by default). Default: false */
    full?: boolean;
    /** Additional className */
    className?: string;
    /** Options as data. Native mode renders them as `<option>`s (children still
        work when this is omitted); the panel requires it. */
    options?: SelectOption[];
    /** Render the styled panel instead of the OS dropdown. Whether the panel
        shows a search box follows `searchable` (auto: more than 5 options). */
    panel?: boolean;
    /** Force the OS-native dropdown even when `options` are provided.
        (Owner call, 23 lug 2026: the styled panel is the default — the
        native menu is the opt-in, not the other way around.) */
    native?: boolean;
    /** Show a search box that filters the options. Implies `panel`. */
    searchable?: boolean;
    /** Change callback with the plain value, fired in both modes. In panel mode
        it is the only callback — there is no native event to forward. */
    onValueChange?: (value: string) => void;
    /** Trigger text when nothing is selected. Panel mode only: the native
        element has no placeholder concept beyond a disabled option. */
    placeholder?: string;
    /** Search input placeholder. Default: "Search…" */
    searchPlaceholder?: string;
    /** Text shown when the search matches nothing. Default: "No results" */
    emptyLabel?: string;
    /** Mobile sheet header label. Falls back to `placeholder`. */
    panelLabel?: string;
}
/**
 * One select, two renderings, chosen by props.
 *
 * Plain `<Select>` is the native element — right for short lists: OS picker
 * on mobile, free accessibility. `searchable` (or `panel`) switches to the
 * styled panel with filtering, the thing that used to require knowing that a
 * separate component existed in a different package.
 *
 * Before this, the same need was met three ways: this native wrapper, a
 * broken phantom `CustomSelect` here (it rendered one unstyled div), and the
 * real panel implementation living in `@adamarant/cms/ui` — found only by the
 * two projects that knew about it.
 *
 * In panel mode `ref` is not attached: there is no `<select>` to point at.
 */
export declare const Select: import("react").ForwardRefExoticComponent<SelectProps & import("react").RefAttributes<HTMLSelectElement>>;
//# sourceMappingURL=Select.d.ts.map