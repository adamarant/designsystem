import { cleanup, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useState } from "react";
import { afterEach, describe, expect, it } from "vitest";
import { Dropdown } from "../index";

function TestDropdown() {
  const [open, setOpen] = useState(false);
  return (
    <Dropdown open={open} onOpenChange={setOpen}>
      <Dropdown.Trigger>Options</Dropdown.Trigger>
      <Dropdown.Menu>
        <Dropdown.Item>First</Dropdown.Item>
        <Dropdown.Item>Second</Dropdown.Item>
        <Dropdown.Item>Third</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

afterEach(cleanup);

describe("Dropdown keyboard behavior", () => {
  it("opens on trigger click and focuses the first item", async () => {
    render(<TestDropdown />);
    await userEvent.click(screen.getByRole("button", { name: "Options" }));
    await waitFor(() => {
      expect(document.activeElement?.textContent).toBe("First");
    });
  });

  it("ArrowDown/End/Home move focus across items", async () => {
    render(<TestDropdown />);
    await userEvent.click(screen.getByRole("button", { name: "Options" }));
    await waitFor(() =>
      expect(document.activeElement?.textContent).toBe("First"),
    );
    await userEvent.keyboard("{ArrowDown}");
    expect(document.activeElement?.textContent).toBe("Second");
    await userEvent.keyboard("{End}");
    expect(document.activeElement?.textContent).toBe("Third");
    await userEvent.keyboard("{Home}");
    expect(document.activeElement?.textContent).toBe("First");
  });

  it("Escape closes and returns focus to the trigger", async () => {
    render(<TestDropdown />);
    const trigger = screen.getByRole("button", { name: "Options" });
    await userEvent.click(trigger);
    await waitFor(() =>
      expect(document.activeElement?.textContent).toBe("First"),
    );
    await userEvent.keyboard("{Escape}");
    expect(trigger.getAttribute("aria-expanded")).toBe("false");
    expect(document.activeElement).toBe(trigger);
  });

  it("selecting an item closes and returns focus to the trigger", async () => {
    render(<TestDropdown />);
    const trigger = screen.getByRole("button", { name: "Options" });
    await userEvent.click(trigger);
    await waitFor(() =>
      expect(document.activeElement?.textContent).toBe("First"),
    );
    await userEvent.click(screen.getByRole("menuitem", { name: "Second" }));
    expect(trigger.getAttribute("aria-expanded")).toBe("false");
    expect(document.activeElement).toBe(trigger);
  });
});
