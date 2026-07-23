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

export default function SiteKitPage() {
  return (
    <>
      <div className="demo-page-header">
        <h1>SiteKit</h1>
        <p>
          Il telaio di sito scritto una volta, modellato sui footer e header
          reali dell&apos;ecosistema (esys, studio, riondato): gruppi con
          dropdown sul desktop e sezioni titolate nel pannello mobile,
          footer compound a colonne con social, righe extra, bottom bar e
          slot wordmark. Header qui in variante static; il default è la
          barra fissa glass. Sotto 768px provi il pannello mobile.
        </p>
      </div>

      <DemoSection
        title="SiteHeader — con gruppo a dropdown (desktop) e sezioni (mobile)"
        code={`<SiteHeader\n  brand="Adamarant"\n  items={[\n    { label: "Home", href: "/" },\n    { label: "Servizi", children: [\n      { label: "Web platform", href: "/servizi/web" },\n      { label: "Brand systems", href: "/servizi/brand" },\n    ]},\n  ]}\n  activeHref="/work"\n  LinkComponent={Link}\n  actions={<><LangSwitcher … /><Button size="sm" pill>Contact us</Button></>}\n/>`}
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
        title="SiteFooter — composizione ricca (modello esys)"
        code={`<SiteFooter>\n  <Grid …>\n    <SiteFooter.Brand tagline="Exclusive homes on the Costa Blanca.">\n      <Logo />\n      <SiteFooter.Social title="Follow us">…</SiteFooter.Social>\n    </SiteFooter.Brand>\n    <SiteFooter.Columns>\n      <SiteFooter.Column title="Navigation">…</SiteFooter.Column>\n      <SiteFooter.Column title="Legal">…</SiteFooter.Column>\n    </SiteFooter.Columns>\n  </Grid>\n  <SiteFooter.Row title="Explore the blog">…</SiteFooter.Row>\n  <SiteFooter.Bottom>© 2026 … <a href="/admin">Admin</a></SiteFooter.Bottom>\n</SiteFooter>`}
      >
        <div className="ds-w-full">
          <SiteFooter>
            <div className="ds-grid ds-grid-cols-1 ds-md:grid-cols-2 ds-gap-12">
              <SiteFooter.Brand tagline="Exclusive homes on the Costa Blanca.">
                <span className="ds-heading-ui ds-text-lg">ESYS VIP</span>
                <SiteFooter.Social title="Follow us">
                  <a href="#ig" aria-label="Instagram">IG</a>
                  <a href="#fb" aria-label="Facebook">FB</a>
                  <a href="#li" aria-label="LinkedIn">IN</a>
                </SiteFooter.Social>
              </SiteFooter.Brand>
              <SiteFooter.Columns>
                <SiteFooter.Column title="Navigation">
                  <a href="#" className="ds-text-sm ds-text-secondary">Propiedades</a>
                  <a href="#" className="ds-text-sm ds-text-secondary">Obra nueva</a>
                  <a href="#" className="ds-text-sm ds-text-secondary">Segunda mano</a>
                  <a href="#" className="ds-text-sm ds-text-secondary">Contacto</a>
                </SiteFooter.Column>
                <SiteFooter.Column title="Legal">
                  <a href="#" className="ds-text-sm ds-text-secondary">Aviso legal</a>
                  <a href="#" className="ds-text-sm ds-text-secondary">Privacidad</a>
                  <a href="#" className="ds-text-sm ds-text-secondary">Cookies</a>
                </SiteFooter.Column>
              </SiteFooter.Columns>
            </div>
            <SiteFooter.Row title="Explore the blog">
              <a href="#" className="ds-text-sm ds-text-secondary">Descubre Alicante</a>
              <a href="#" className="ds-text-sm ds-text-secondary">Guías de compra</a>
              <a href="#" className="ds-text-sm ds-text-secondary">Vivir en la costa</a>
            </SiteFooter.Row>
            <SiteFooter.Bottom>
              <span>© 2026 ESYS VIP</span>
              <a href="#admin">Admin</a>
            </SiteFooter.Bottom>
          </SiteFooter>
        </div>
      </DemoSection>

      <DemoSection
        title="SiteFooter — banda firmata (modello studio: ink + wordmark)"
        code={`/* La banda ink e il wordmark restano scelte del progetto:\n   il kit dà gli slot, il tema lo dà il consumer. */\n<SiteFooter className="…" data-band="ink" data-theme="dark">\n  <SiteFooter.Columns>…colonne uppercase…</SiteFooter.Columns>\n  <SiteFooter.Bottom>…legal · social · ©…</SiteFooter.Bottom>\n  <SiteFooter.Wordmark><BrandWordmark /></SiteFooter.Wordmark>\n</SiteFooter>`}
      >
        <div className="ds-w-full" data-theme="dark">
          <SiteFooter>
            <SiteFooter.Columns>
              <SiteFooter.Column title="Studio">
                <a href="#" className="ds-text-lg">Projects</a>
                <a href="#" className="ds-text-lg">Manifesto</a>
                <a href="#" className="ds-text-lg">Team</a>
              </SiteFooter.Column>
              <SiteFooter.Column title="Hubs">
                <a href="#" className="ds-text-lg">Commerce</a>
                <a href="#" className="ds-text-lg">Editorial</a>
              </SiteFooter.Column>
            </SiteFooter.Columns>
            <SiteFooter.Bottom>
              <span>Privacy · Cookies</span>
              <span>© 2026 Adamarant</span>
            </SiteFooter.Bottom>
            <SiteFooter.Wordmark>
              <div className="ds-heading-ui ds-text-4xl">ADAMARANT</div>
            </SiteFooter.Wordmark>
          </SiteFooter>
        </div>
      </DemoSection>

      <DemoSection
        title="LangSwitcher"
        code={`<LangSwitcher current="it" items={[{ code:"it", href:"/it/chi-siamo" }, …]} />`}
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
