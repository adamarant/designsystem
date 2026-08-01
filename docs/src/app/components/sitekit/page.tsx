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
    label: "Services",
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
          The site frame, written once: SiteHeader on ds-nav (dropdown groups on
          desktop, titled sections on mobile), the canonical three-zone
          SiteFooter (optional newsletter, brand + link columns, credits row),
          LangSwitcher on the size tiers. The header here is the static variant;
          the default is the fixed glass bar. Below 768px you get the mobile
          panel.
        </p>
      </div>

      <DemoSection
        title="SiteHeader — with a dropdown group (desktop) and sections (mobile)"
        code={`<SiteHeader\n  brand="Adamarant"\n  items={[\n    { label: "Home", href: "/" },\n    { label: "Services", children: [\n      { label: "Web platform", href: "/services/web" },\n    ]},\n  ]}\n  activeHref="/work"\n  LinkComponent={Link}\n  actions={<><LangSwitcher … /><Button size="sm" pill>Contact</Button></>}\n/>`}
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
        title="SiteFooter — full (data-driven: all three zones)"
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
        title="SiteFooter — minimal (columns + credits only, no newsletter)"
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
        title="LangSwitcher — on the DS size tiers"
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
