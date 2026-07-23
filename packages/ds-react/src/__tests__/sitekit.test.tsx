import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it } from "vitest";
import { LangSwitcher, SiteFooter, SiteHeader } from "../index";

const ITEMS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
];

afterEach(cleanup);

describe("SiteHeader", () => {
  it("renders brand, links and marks the active item", () => {
    render(
      <SiteHeader brand="Acme" items={ITEMS} activeHref="/about" />,
    );
    expect(screen.getByText("Acme").closest("a")).toBeTruthy();
    const links = screen.getAllByText("About");
    expect(
      links.some((l) => l.closest("a")?.getAttribute("aria-current") === "page"),
    ).toBe(true);
  });

  it("burger opens the mobile panel, Escape closes it and restores scroll", async () => {
    const { container } = render(<SiteHeader brand="Acme" items={ITEMS} />);
    const panel = container.querySelector(".ds-nav__mobile")!;
    expect(panel.className).not.toContain("ds-nav__mobile--open");

    await userEvent.click(screen.getByRole("button", { name: "Open menu" }));
    expect(panel.className).toContain("ds-nav__mobile--open");
    expect(document.body.style.overflow).toBe("hidden");
    expect(
      screen.getByRole("button", { name: "Close menu" }).getAttribute(
        "aria-expanded",
      ),
    ).toBe("true");

    await userEvent.keyboard("{Escape}");
    expect(panel.className).not.toContain("ds-nav__mobile--open");
    expect(document.body.style.overflow).toBe("");
  });

  it("static variant drops the fixed bar", () => {
    const { container } = render(
      <SiteHeader brand="A" items={ITEMS} fixed={false} />,
    );
    expect(container.querySelector(".ds-nav.ds-nav--static")).toBeTruthy();
  });
});

describe("SiteFooter", () => {
  it("renders brand, nav, legal and meta in the composed structure", () => {
    const { container } = render(
      <SiteFooter
        brand="Acme"
        nav={<a href="/about">About</a>}
        legal="© 2026 Acme"
        meta={<a href="mailto:x@acme.io">x@acme.io</a>}
      />,
    );
    expect(
      container.querySelector("footer.ds-section.ds-section--bordered"),
    ).toBeTruthy();
    expect(container.querySelector(".ds-divider")).toBeTruthy();
    expect(screen.getByText(/© 2026/)).toBeTruthy();
  });
});

describe("LangSwitcher", () => {
  const ITEMS = [
    { code: "it", label: "Italiano", href: "/it/chi-siamo" },
    { code: "en", label: "English", href: "/en/about" },
    { code: "es", label: "Español", href: "/es/quienes-somos" },
  ];

  it("inline variant marks the current locale and links the siblings", () => {
    render(<LangSwitcher variant="inline" current="it" items={ITEMS} />);
    const it_ = screen.getByText("it");
    const en = screen.getByText("en");
    expect(it_.getAttribute("aria-current")).toBe("true");
    expect(en.getAttribute("aria-current")).toBeNull();
    expect(en.closest("a")?.getAttribute("href")).toBe("/en/about");
  });

  it("dropdown (default): ghost trigger on the size tier, menu with the other locales", async () => {
    render(<LangSwitcher current="it" items={ITEMS} size="sm" />);
    const trigger = screen.getByRole("button", { name: "Language: Italiano" });
    expect(trigger.className).toContain("ds-btn--ghost");
    expect(trigger.className).toContain("ds-btn--sm");
    await userEvent.click(trigger);
    const options = screen.getAllByRole("menuitem");
    expect(options.length).toBe(2);
    expect(options.map((o) => o.getAttribute("href"))).toEqual([
      "/en/about",
      "/es/quienes-somos",
    ]);
    expect(screen.getByText("English")).toBeTruthy();
  });

  it("preferHreflang upgrades hrefs from the page's alternate links", async () => {
    const link = document.createElement("link");
    link.rel = "alternate";
    link.hreflang = "en";
    link.href = "http://localhost/en/about-us-2026";
    document.head.appendChild(link);
    render(
      <LangSwitcher current="it" items={ITEMS} preferHreflang />,
    );
    await userEvent.click(
      screen.getByRole("button", { name: "Language: Italiano" }),
    );
    const en = screen
      .getAllByRole("menuitem")
      .find((o) => o.textContent?.includes("English"))!;
    expect(en.getAttribute("href")).toBe("/en/about-us-2026");
    link.remove();
  });
});

describe("SiteFooter v2 (compound)", () => {
  it("composes brand/columns/social/row/bottom/wordmark", () => {
    const { container } = render(
      <SiteFooter>
        <SiteFooter.Brand tagline="Premium things">
          <span>Acme</span>
          <SiteFooter.Social title="Follow us">
            <a href="#ig" aria-label="Instagram">IG</a>
          </SiteFooter.Social>
        </SiteFooter.Brand>
        <SiteFooter.Columns>
          <SiteFooter.Column title="Navigation">
            <a href="/">Home</a>
          </SiteFooter.Column>
          <SiteFooter.Column title="Legal">
            <a href="/privacy">Privacy</a>
          </SiteFooter.Column>
        </SiteFooter.Columns>
        <SiteFooter.Row title="Explore">
          <a href="/blog/x">Guides</a>
        </SiteFooter.Row>
        <SiteFooter.Bottom>
          <span>© 2026 Acme</span>
          <a href="/admin">Admin</a>
        </SiteFooter.Bottom>
        <SiteFooter.Wordmark>
          <svg aria-label="wordmark" />
        </SiteFooter.Wordmark>
      </SiteFooter>,
    );
    expect(container.querySelectorAll(".ds-overline").length).toBe(4);
    expect(screen.getByText("Premium things")).toBeTruthy();
    expect(screen.getByText(/© 2026/)).toBeTruthy();
  });

  it("v1 simple props keep working", () => {
    render(<SiteFooter brand="Acme" legal="© 2026" />);
    expect(screen.getByText("© 2026")).toBeTruthy();
  });
});

describe("SiteHeader grouped items", () => {
  const GROUPED = [
    { label: "Home", href: "/" },
    {
      label: "Servizi",
      children: [
        { label: "Web", href: "/servizi/web" },
        { label: "Brand", href: "/servizi/brand" },
      ],
    },
  ];

  it("mobile panel renders titled sections for groups", () => {
    const { container } = render(
      <SiteHeader brand="Acme" items={GROUPED} />,
    );
    const section = container.querySelector(".ds-nav__mobile .ds-nav__section");
    expect(section).toBeTruthy();
    expect(section!.querySelector(".ds-nav__title")!.textContent).toBe(
      "Servizi",
    );
    expect(section!.querySelectorAll(".ds-nav__link").length).toBe(2);
  });

  it("desktop group opens a dropdown with link menuitems", async () => {
    render(<SiteHeader brand="Acme" items={GROUPED} />);
    await userEvent.click(screen.getByRole("button", { name: "Servizi" }));
    const items = screen.getAllByRole("menuitem");
    expect(items.length).toBe(2);
    expect(items[0].getAttribute("href")).toBe("/servizi/web");
  });
});
