"use client";

import {
  Button,
  LangSwitcher,
  SiteFooter,
  SiteHeader,
} from "@adamarant/ds-react";
import { DemoSection } from "@/components/DemoSection";

const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "Work", href: "#work" },
  { label: "Studio", href: "#studio" },
  { label: "Journal", href: "#journal" },
  { label: "Contact", href: "#contact" },
];

export default function SiteKitPage() {
  return (
    <>
      <div className="demo-page-header">
        <h1>SiteKit</h1>
        <p>
          Il telaio di sito scritto una volta: SiteHeader su ds-nav,
          SiteFooter a slot, LangSwitcher. Qui in variante static per stare
          nel flusso della pagina; il default reale è la barra fissa glass.
          Restringi la finestra sotto 768px per provare il pannello mobile.
        </p>
      </div>

      <DemoSection
        title="SiteHeader — completo (nav + azioni + locale)"
        code={`<SiteHeader\n  brand="Adamarant"\n  items={NAV_ITEMS}\n  activeHref="/work"\n  fixed={false}\n  LinkComponent={Link}\n  actions={\n    <>\n      <LangSwitcher current="it" items={[...]} />\n      <Button size="sm" pill>Contact us</Button>\n    </>\n  }\n  mobileExtra={<Button pill full>Contact us</Button>}\n/>`}
      >
        <div className="ds-w-full">
          <SiteHeader
            brand="Adamarant"
            items={NAV_ITEMS}
            activeHref="#work"
            fixed={false}
            actions={
              <>
                <LangSwitcher
                  current="it"
                  items={[
                    { code: "it", href: "#it" },
                    { code: "en", href: "#en" },
                  ]}
                />
                <Button size="sm" pill>
                  Contact us
                </Button>
              </>
            }
            mobileExtra={
              <Button pill full className="ds-mt-6">
                Contact us
              </Button>
            }
          />
        </div>
      </DemoSection>

      <DemoSection
        title="SiteHeader — minimo (solo brand e nav)"
        code={`<SiteHeader brand="Adamarant" items={NAV_ITEMS} fixed={false} />`}
      >
        <div className="ds-w-full">
          <SiteHeader brand="Adamarant" items={NAV_ITEMS} fixed={false} />
        </div>
      </DemoSection>

      <DemoSection
        title="SiteFooter"
        code={`<SiteFooter\n  brand="Adamarant"\n  nav={<Flex gap="6">…link…</Flex>}\n  legal="© 2026 Adamarant. All rights reserved."\n  meta={<a href="mailto:hello@adamarant.io">hello@adamarant.io</a>}\n/>`}
      >
        <div className="ds-w-full">
          <SiteFooter
            brand="Adamarant"
            nav={
              <nav className="ds-flex ds-flex-wrap ds-gap-6">
                {NAV_ITEMS.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="ds-text-secondary"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            }
            legal="© 2026 Adamarant. All rights reserved."
            meta={<a href="mailto:hello@adamarant.io">hello@adamarant.io</a>}
          />
        </div>
      </DemoSection>

      <DemoSection
        title="LangSwitcher"
        code={`<LangSwitcher\n  current="it"\n  items={[\n    { code: "it", href: "/it/chi-siamo" },\n    { code: "en", href: "/en/about" },\n    { code: "es", href: "/es/quienes-somos" },\n  ]}\n/>`}
      >
        <LangSwitcher
          current="it"
          items={[
            { code: "it", href: "#it" },
            { code: "en", href: "#en" },
            { code: "es", href: "#es" },
          ]}
        />
      </DemoSection>
    </>
  );
}
