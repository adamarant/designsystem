import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it, vi } from "vitest";
import { Checkbox, Radio } from "../index";

afterEach(cleanup);

describe("Checkbox (enriched mode)", () => {
  it("renders the canonical markup: input + content/label/description", () => {
    const { container } = render(
      <Checkbox
        label="Newsletter"
        description="Once a month, no spam"
        name="newsletter"
      />,
    );
    const root = container.querySelector("label.ds-checkbox");
    expect(root).toBeTruthy();
    expect(root!.querySelector('input[type="checkbox"]')).toBeTruthy();
    expect(
      root!.querySelector(".ds-checkbox__content .ds-checkbox__label")
        ?.textContent,
    ).toBe("Newsletter");
    expect(
      root!.querySelector(".ds-checkbox__description")?.textContent,
    ).toBe("Once a month, no spam");
  });

  it("size maps onto the tier modifier", () => {
    const { container } = render(<Checkbox label="x" size="sm" />);
    expect(container.querySelector(".ds-checkbox.ds-checkbox--sm")).toBeTruthy();
  });

  it("click toggles and reports through onCheckedChange", async () => {
    const onCheckedChange = vi.fn();
    render(<Checkbox label="Terms" onCheckedChange={onCheckedChange} />);
    await userEvent.click(screen.getByLabelText("Terms"));
    expect(onCheckedChange).toHaveBeenCalledWith(true);
  });

  it("disabled reaches the native input", () => {
    const { container } = render(<Checkbox label="x" disabled />);
    expect(
      container.querySelector<HTMLInputElement>("input")!.disabled,
    ).toBe(true);
  });

  it("legacy shell: children only, no input injected", () => {
    const { container } = render(
      <Checkbox>
        <input type="checkbox" data-legacy />
      </Checkbox>,
    );
    expect(container.querySelectorAll("input").length).toBe(1);
    expect(container.querySelector("input[data-legacy]")).toBeTruthy();
  });
});

describe("Radio (enriched mode)", () => {
  it("renders a native radio with name/value for grouping", () => {
    const { container } = render(
      <>
        <Radio label="A" name="plan" value="a" defaultChecked />
        <Radio label="B" name="plan" value="b" />
      </>,
    );
    const radios = container.querySelectorAll<HTMLInputElement>(
      'input[type="radio"][name="plan"]',
    );
    expect(radios.length).toBe(2);
    expect(radios[0].checked).toBe(true);
  });

  it("selecting a radio reports through onCheckedChange", async () => {
    const onCheckedChange = vi.fn();
    render(<Radio label="B" name="g" value="b" onCheckedChange={onCheckedChange} />);
    await userEvent.click(screen.getByLabelText("B"));
    expect(onCheckedChange).toHaveBeenCalledWith(true);
  });
});
