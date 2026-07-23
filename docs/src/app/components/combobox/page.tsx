"use client";

import { useState } from "react";
import { Combobox } from "@adamarant/ds-react";
import { DemoSection } from "@/components/DemoSection";

const FRAMEWORKS = [
  { value: "react", label: "React" },
  { value: "vue", label: "Vue" },
  { value: "svelte", label: "Svelte" },
  { value: "solid", label: "Solid" },
  { value: "qwik", label: "Qwik" },
  { value: "angular", label: "Angular" },
];

export default function ComboboxPage() {
  const [single, setSingle] = useState<string | string[] | null>(null);
  const [multi, setMulti] = useState<string | string[] | null>(["react"]);

  return (
    <>
      <div className="demo-page-header">
        <h1>Combobox</h1>
        <p>
          Autocomplete: input con risultati filtrati mentre scrivi,
          selezione singola o multipla con tag, navigazione da tastiera.
          Il confine coi cugini: Select sceglie un valore da una lista
          chiusa (senza scrivere), Dropdown è un menu di azioni. Il
          Combobox è per liste lunghe dove digitare è il modo più veloce.
        </p>
      </div>

      <DemoSection
        title="Singolo"
        code={`const [value, setValue] = useState<string | string[] | null>(null);\n\n<Combobox\n  options={FRAMEWORKS}\n  value={value}\n  onChange={setValue}\n  placeholder="Search framework…"\n/>`}
      >
        <div className="ds-max-w-sm ds-w-full">
          <Combobox
            options={FRAMEWORKS}
            value={single}
            onChange={setSingle}
            placeholder="Search framework…"
          />
        </div>
      </DemoSection>

      <DemoSection
        title="Multi con tag"
        code={`<Combobox\n  multiple\n  options={FRAMEWORKS}\n  value={values}\n  onChange={setValues}\n  placeholder="Add frameworks…"\n/>`}
      >
        <div className="ds-max-w-sm ds-w-full">
          <Combobox
            multiple
            options={FRAMEWORKS}
            value={multi}
            onChange={setMulti}
            placeholder="Add frameworks…"
          />
        </div>
      </DemoSection>

      <DemoSection
        title="Taglie (stessi tier di Button/Input)"
        code={`<Combobox size="sm" … />\n<Combobox … />\n<Combobox size="lg" … />`}
      >
        <div className="ds-flex ds-flex-col ds-gap-3 ds-max-w-sm ds-w-full">
          <Combobox size="sm" options={FRAMEWORKS} value={null} onChange={() => {}} placeholder="sm" />
          <Combobox options={FRAMEWORKS} value={null} onChange={() => {}} placeholder="md" />
          <Combobox size="lg" options={FRAMEWORKS} value={null} onChange={() => {}} placeholder="lg" />
        </div>
      </DemoSection>
    </>
  );
}
