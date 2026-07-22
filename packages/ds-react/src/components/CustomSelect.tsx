"use client";

import { Select, type SelectOption, type SelectSize } from "./Select";

/**
 * @deprecated Use `<Select panel>` / `<Select searchable>` — one component,
 * props decide the rendering.
 *
 * History, because it explains the shape: until 0.10.0 this export was a
 * ten-line phantom that rendered a single `<div class="ds-LCustom-LSelect">` —
 * a class that has never existed in the design system. Nothing could have
 * used it and worked. The real panel select lived in `@adamarant/cms/ui`,
 * found only by the two projects that knew it was there.
 *
 * This alias is prop-compatible with that CMS implementation, so migrating a
 * consumer is an import swap. It will be removed in the next major.
 */
export interface CustomSelectProps {
  /** Available options */
  options: SelectOption[];
  /** Currently selected value */
  value?: string;
  /** Callback when an option is selected */
  onChange: (value: string) => void;
  /** Placeholder text when no value selected */
  placeholder?: string;
  /** Enable search filtering. Default: auto (true if options > 5) */
  searchable?: boolean;
  /** Search input placeholder. Default: 'Search…' */
  searchPlaceholder?: string;
  /** Disable the select */
  disabled?: boolean;
  /** Size variant matching DS input sizes */
  size?: SelectSize;
  /** Additional CSS class on the wrapper */
  className?: string;
  /** Label shown in mobile header. Falls back to placeholder */
  label?: string;
}

/** @deprecated See {@link CustomSelectProps}. */
export function CustomSelect({
  options,
  value,
  onChange,
  placeholder,
  searchable,
  searchPlaceholder,
  disabled,
  size,
  className,
  label,
}: CustomSelectProps) {
  return (
    <Select
      panel
      options={options}
      value={value}
      onValueChange={onChange}
      placeholder={placeholder}
      searchable={searchable}
      searchPlaceholder={searchPlaceholder}
      disabled={disabled}
      size={size}
      className={className}
      panelLabel={label}
    />
  );
}
