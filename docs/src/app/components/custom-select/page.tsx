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
          UN componente per scegliere un valore, due rese: nativo di default
          (menu del sistema operativo — la scelta giusta su mobile e nei
          form semplici) e pannello stilizzato con `panel` / `searchable`.
          `CustomSelect` è un alias deprecato di `&lt;Select panel&gt;`:
          stessa API, verrà rimosso alla prossima major. Per un menu di
          azioni usa Dropdown; per l&apos;autocomplete usa Combobox.
        </p>
      </div>

      <DemoSection
        title="Nativo (default) — menu del browser"
        code={`<Select>\n  <option>Choose…</option>\n  <option>Apartamento</option>\n</Select>\n<Select size="sm">…</Select>\n<Select size="lg">…</Select>`}
      >
        <Select>
          <option>Choose…</option>
          <option>Apartamento</option>
          <option>Villa</option>
        </Select>
        <Select size="sm">
          <option>Small</option>
          <option>Villa</option>
        </Select>
        <Select size="lg">
          <option>Large</option>
          <option>Villa</option>
        </Select>
      </DemoSection>

      <DemoSection
        title="Pannello stilizzato (l'ex CustomSelect)"
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
        title="Pannello con ricerca (auto con più di 5 opzioni)"
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
