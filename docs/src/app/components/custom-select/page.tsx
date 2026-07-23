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
          UN componente per scegliere un valore, due rese: col prop `options`
          il pannello stilizzato è il DEFAULT (ricerca auto oltre 5 voci);
          anche l&apos;uso a children `&lt;option&gt;` riceve il pannello (le opzioni
          vengono estratte, il vecchio `onChange(e.target.value)` continua a
          funzionare); il menu nativo del sistema SOLO col prop `native`.
          `CustomSelect` è un alias deprecato di `&lt;Select panel&gt;`:
          stessa API, verrà rimosso alla prossima major. Per un menu di
          azioni usa Dropdown; per l&apos;autocomplete usa Combobox.
        </p>
      </div>

      <DemoSection
        title="Nativo (opt-in via prop) — menu del browser"
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
