import { cleanup, render } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { Select } from "../index";

const OPTIONS = [
  { value: "a", label: "Alpha" },
  { value: "b", label: "Beta" },
];

if (typeof window.matchMedia !== "function") {
  window.matchMedia = (q: string) =>
    ({ matches: false, media: q, addEventListener() {}, removeEventListener() {} }) as unknown as MediaQueryList;
}

afterEach(cleanup);

describe("Select default rendering (owner call 23 lug 2026)", () => {
  it("options provided → styled panel by default", () => {
    const { container } = render(
      <Select options={OPTIONS} value="a" onValueChange={() => {}} />,
    );
    expect(container.querySelector("select")).toBeNull();
    expect(container.querySelector(".ds-custom-select")).toBeTruthy();
  });

  it("native prop forces the OS dropdown even with options", () => {
    const { container } = render(
      <Select native options={OPTIONS} defaultValue="a" />,
    );
    expect(container.querySelector("select")).toBeTruthy();
    expect(container.querySelector(".ds-custom-select")).toBeNull();
  });

  it("children usage gets the panel too — options are extracted", () => {
    const { container } = render(
      <Select value="x" onChange={() => {}}>
        <option value="x">X</option>
        <option value="y">Y</option>
      </Select>,
    );
    expect(container.querySelector("select")).toBeNull();
    expect(container.querySelector(".ds-custom-select")).toBeTruthy();
  });

  it("onChange shim: children callers keep reading e.target.value", async () => {
    const seen: string[] = [];
    const { container } = render(
      <Select value="x" onChange={(e) => seen.push(e.target.value)}>
        <option value="x">X</option>
        <option value="y">Y</option>
      </Select>,
    );
    const trigger = container.querySelector<HTMLButtonElement>(
      ".ds-custom-select__trigger",
    )!;
    const { default: userEvent } = await import("@testing-library/user-event");
    await userEvent.click(trigger);
    const opt = [...document.querySelectorAll(".ds-custom-select__option")].find(
      (o) => o.textContent === "Y",
    ) as HTMLElement;
    await userEvent.click(opt);
    expect(seen).toEqual(["y"]);
  });

  it("native prop keeps children usage on the OS menu", () => {
    const { container } = render(
      <Select native defaultValue="x">
        <option value="x">X</option>
      </Select>,
    );
    expect(container.querySelector("select")).toBeTruthy();
  });
});

describe("panel escapes transformed ancestors (portal)", () => {
  it("the open panel is a child of document.body, not of the dialog DOM", async () => {
    const { container } = render(
      <div style={{ transform: "scale(1)", overflow: "hidden" }}>
        <Select options={OPTIONS} value="a" onValueChange={() => {}} />
      </div>,
    );
    const { default: userEvent } = await import("@testing-library/user-event");
    await userEvent.click(
      container.querySelector<HTMLButtonElement>(".ds-custom-select__trigger")!,
    );
    const panel = document.querySelector(".ds-custom-select__panel")!;
    expect(panel).toBeTruthy();
    expect(container.contains(panel)).toBe(false);
    expect(panel.closest("body")).toBe(document.body);
  });
});
