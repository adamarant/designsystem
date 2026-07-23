import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it, vi } from "vitest";
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
  const COLUMNS = [
    { title: "Product", links: [{ label: "Pricing", href: "/pricing" }] },
    { title: "Company", links: [{ label: "About", href: "/about" }] },
  ];

  it("data-driven: renders ds-footer with brand, columns and credits", () => {
    const { container } = render(
      <SiteFooter
        brand={<span>Acme</span>}
        tagline="Premium things"
        columns={COLUMNS}
        copyright="© 2026 Acme"
        legal={[{ label: "Privacy", href: "/privacy" }]}
      />,
    );
    expect(container.querySelector("footer.ds-footer")).toBeTruthy();
    expect(container.querySelectorAll(".ds-footer__column").length).toBe(2);
    expect(container.querySelector(".ds-footer__column-title")?.textContent).toBe("Product");
    expect(container.querySelector(".ds-footer__credits")).toBeTruthy();
    expect(screen.getByText(/© 2026/)).toBeTruthy();
    expect(screen.getByText("Privacy").getAttribute("href")).toBe("/privacy");
  });

  it("newsletter is opt-in: absent unless provided", () => {
    const { container, rerender } = render(<SiteFooter columns={COLUMNS} />);
    expect(container.querySelector(".ds-footer__newsletter")).toBeNull();
    rerender(
      <SiteFooter
        columns={COLUMNS}
        newsletter={{ title: "Newsletter", onSubmit: () => {} }}
      />,
    );
    expect(container.querySelector(".ds-footer__newsletter")).toBeTruthy();
  });

  it("newsletter submit: calls onSubmit and shows success", async () => {
    const onSubmit = vi.fn();
    render(
      <SiteFooter
        newsletter={{
          title: "Newsletter",
          onSubmit,
          buttonLabel: "Join",
          successMessage: "You're in.",
        }}
      />,
    );
    await userEvent.type(screen.getByRole("textbox"), "a@b.io");
    await userEvent.click(screen.getByRole("button", { name: "Join" }));
    expect(onSubmit).toHaveBeenCalledWith("a@b.io");
    expect(await screen.findByText("You're in.")).toBeTruthy();
  });

  it("compound escape: children bypass the data layout", () => {
    const { container } = render(
      <SiteFooter>
        <SiteFooter.Body>
          <SiteFooter.Brand tagline="t"><span>Acme</span></SiteFooter.Brand>
          <SiteFooter.Columns>
            <SiteFooter.Column title="Nav"><a href="/">Home</a></SiteFooter.Column>
          </SiteFooter.Columns>
        </SiteFooter.Body>
        <SiteFooter.Credits><span>© 2026</span></SiteFooter.Credits>
      </SiteFooter>,
    );
    expect(container.querySelector(".ds-footer__body")).toBeTruthy();
    expect(container.querySelector(".ds-footer__column-title")?.textContent).toBe("Nav");
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
