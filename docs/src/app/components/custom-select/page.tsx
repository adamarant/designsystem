"use client";

import { useState } from "react";
import { Select } from "@adamarant/ds-react";
import { DemoSection } from "@/components/DemoSection";

const OPTIONS = [
  { value: "apartamento", label: "Apartamento" },
  { value: "villa", label: "Villa" },
  { value: "atico", label: "Ático" },
  { value: "adosado", label: "Adosado" },
  { value: "estudio", label: "Estudio" },
  { value: "duplex", label: "Dúplex" },
  { value: "chalet", label: "Chalet" },
];

export default function SelectPage() {
  const [value, setValue] = useState<string | undefined>("apartamento");
  const [searched, setSearched] = useState<string | undefined>(undefined);

  return (
    <>
      <div className="demo-page-header">
        <h1>Select</h1>
        <p>
          ONE component for picking a value, two renderings: with the `options`
          prop the styled panel is the DEFAULT (search appears automatically past
          5 entries); the `&lt;option&gt;` children form gets the panel too (the
          options are extracted, and the old `onChange(e.target.value)` keeps
          working); the native system menu ONLY with the `native` prop.
          `CustomSelect` is a deprecated alias for `&lt;Select panel&gt;`: same API,
          removed in the next major. For a menu of actions use Dropdown; for
          autocomplete use Combobox.
        </p>
      </div>

      <DemoSection
        title="Native (opt-in via prop) — the browser's own menu"
        code={`<Select native>\n  <option>Choose…</option>\n  <option>Apartamento</option>\n</Select>`}
      >
        <Select native>
          <option>Choose…</option>
          <option>Apartamento</option>
          <option>Villa</option>
        </Select>
        <Select native size="sm">
          <option>Small</option>
          <option>Villa</option>
        </Select>
        <Select native size="lg">
          <option>Large</option>
          <option>Villa</option>
        </Select>
      </DemoSection>

      <DemoSection
        title="Styled panel (the former CustomSelect)"
        code={`<Select\n  panel\n  options={OPTIONS}\n  value={value}\n  onValueChange={setValue}\n  placeholder="Tipo de propiedad"\n/>`}
      >
        <Select
          panel
          options={OPTIONS}
          value={value}
          onValueChange={setValue}
          placeholder="Tipo de propiedad"
        />
      </DemoSection>

      <DemoSection
        title="Panel with search (automatic past 5 options)"
        code={`<Select\n  panel\n  searchable\n  options={OPTIONS}\n  value={value}\n  onValueChange={setValue}\n  searchPlaceholder="Buscar…"\n/>`}
      >
        <Select
          panel
          searchable
          options={OPTIONS}
          value={searched}
          onValueChange={setSearched}
          placeholder="Tipo de propiedad"
          searchPlaceholder="Buscar…"
        />
      </DemoSection>
    </>
  );
}
