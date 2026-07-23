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
  {
    label: "Servizi",
    children: [
      { label: "Web platform", href: "#web" },
      { label: "Brand systems", href: "#brand" },
      { label: "Editorial", href: "#editorial" },
    ],
  },
  { label: "Journal", href: "#journal" },
  { label: "Contact", href: "#contact" },
];

const FOOTER_COLUMNS = [
  {
    title: "Explore",
    links: [
      { label: "Properties", href: "#" },
      { label: "New builds", href: "#" },
      { label: "Resale", href: "#" },
      { label: "Contact", href: "#" },
    ],
  },
  {
    title: "Studio",
    links: [
      { label: "About", href: "#" },
      { label: "Journal", href: "#" },
      { label: "Careers", href: "#" },
    ],
  },
];

const SOCIAL = (
  <>
    <a href="#ig" aria-label="Instagram" className="ds-footer__social-link">IG</a>
    <a href="#li" aria-label="LinkedIn" className="ds-footer__social-link">IN</a>
    <a href="#x" aria-label="X" className="ds-footer__social-link">X</a>
  </>
);

export default function SiteKitPage() {
  return (
    <>
      <div className="demo-page-header">
        <h1>SiteKit</h1>
        <p>
          Il telaio di sito scritto una volta: SiteHeader su ds-nav (gruppi a
          dropdown sul desktop, sezioni titolate nel mobile), SiteFooter
          canonico a tre zone (newsletter opzionale, brand + colonne di link,
          riga credits), LangSwitcher sui tier di size. Header qui in variante
          static; il default è la barra fissa glass. Sotto 768px provi il
          pannello mobile.
        </p>
      </div>

      <DemoSection
        title="SiteHeader — con gruppo a dropdown (desktop) e sezioni (mobile)"
        code={`<SiteHeader\n  brand="Adamarant"\n  items={[\n    { label: "Home", href: "/" },\n    { label: "Servizi", children: [\n      { label: "Web platform", href: "/servizi/web" },\n    ]},\n  ]}\n  activeHref="/work"\n  LinkComponent={Link}\n  actions={<><LangSwitcher … /><Button size="sm" pill>Contact</Button></>}\n/>`}
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
                    { code: "it", label: "Italiano", href: "#it" },
                    { code: "en", label: "English", href: "#en" },
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
        title="SiteFooter — completo (data-driven: le tre zone)"
        code={`<SiteFooter\n  brand={<Logo/>}\n  tagline="Exclusive homes on the coast."\n  social={<>…icon links…</>}\n  columns={[{ title: "Explore", links: [{ label, href }] }, …]}\n  newsletter={{\n    title: "The newsletter",\n    description: "One email when there's something good.",\n    onSubmit: async (email) => subscribe(email),\n  }}\n  copyright="© 2026 ESYS VIP"\n  legal={[{ label: "Privacy", href: "/privacy" }, …]}\n  LinkComponent={Link}\n/>`}
      >
        <div className="ds-w-full">
          <SiteFooter
            brand={<span className="ds-heading-ui ds-text-lg">ESYS VIP</span>}
            tagline="Exclusive homes on the Costa Blanca, from search to keys."
            social={SOCIAL}
            columns={FOOTER_COLUMNS}
            newsletter={{
              title: "The newsletter",
              description:
                "The market, the listings, and what's worth seeing. One email when there's something good.",
              buttonLabel: "Subscribe",
              onSubmit: (email) => {
                void email;
              },
            }}
            copyright="© 2026 ESYS VIP"
            legal={[
              { label: "Privacy", href: "#" },
              { label: "Legal notice", href: "#" },
              { label: "Cookies", href: "#" },
            ]}
            note="ESYS VIP is a real-estate brokerage. Listings are indicative and subject to availability; this is not a binding offer."
          />
        </div>
      </DemoSection>

      <DemoSection
        title="SiteFooter — minimo (solo colonne + credits, niente newsletter)"
        code={`<SiteFooter\n  brand="Adamarant"\n  columns={COLUMNS}\n  copyright="© 2026 Adamarant"\n  legal={[{ label: "Privacy", href: "/privacy" }]}\n/>`}
      >
        <div className="ds-w-full">
          <SiteFooter
            brand={<span className="ds-heading-ui ds-text-lg">Adamarant</span>}
            columns={FOOTER_COLUMNS}
            copyright="© 2026 Adamarant"
            legal={[{ label: "Privacy", href: "#" }]}
          />
        </div>
      </DemoSection>

      <DemoSection
        title="LangSwitcher — sui tier di size del DS"
        code={`<LangSwitcher current="it" size="sm" preferHreflang items={[\n  { code: "it", label: "Italiano", icon: <Flag/>, href: "/it/chi-siamo" },\n  { code: "en", label: "English", href: "/en/about" },\n]} />`}
      >
        <div className="ds-flex ds-items-center ds-gap-3">
          <Button size="sm">sm</Button>
          <LangSwitcher
            size="sm"
            current="it"
            items={[
              { code: "it", label: "Italiano", href: "#it" },
              { code: "en", label: "English", href: "#en" },
              { code: "es", label: "Español", href: "#es" },
            ]}
          />
          <Button>md</Button>
          <LangSwitcher
            current="it"
            items={[
              { code: "it", label: "Italiano", href: "#it" },
              { code: "en", label: "English", href: "#en" },
            ]}
          />
        </div>
      </DemoSection>
    </>
  );
}
