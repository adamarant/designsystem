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

  it("children usage stays native (panel needs data)", () => {
    const { container } = render(
      <Select defaultValue="x">
        <option value="x">X</option>
      </Select>,
    );
    expect(container.querySelector("select")).toBeTruthy();
  });
});
