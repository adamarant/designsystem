import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it, vi } from "vitest";
import { cleanup } from "@testing-library/react";
import { Modal } from "../index";

function TestModal({ onClose }: { onClose: () => void }) {
  return (
    <Modal open onClose={onClose}>
      <Modal.Content aria-label="Test dialog">
        <Modal.Header>
          <h3>Title</h3>
          <Modal.Close>×</Modal.Close>
        </Modal.Header>
        <Modal.Body>
          <button type="button">first</button>
          <button type="button">second</button>
        </Modal.Body>
      </Modal.Content>
    </Modal>
  );
}

afterEach(cleanup);

describe("Modal on Base UI Dialog", () => {
  it("renders an accessible dialog with the ds-modal skin", async () => {
    render(<TestModal onClose={vi.fn()} />);
    const dialog = await screen.findByRole("dialog");
    expect(dialog.className).toContain("ds-modal__content");
    expect(document.querySelector(".ds-modal.ds-modal--open")).toBeTruthy();
  });

  it("traps initial focus inside the dialog", async () => {
    render(<TestModal onClose={vi.fn()} />);
    const dialog = await screen.findByRole("dialog");
    await waitFor(() => {
      expect(dialog.contains(document.activeElement)).toBe(true);
    });
  });

  it("Escape calls onClose", async () => {
    const onClose = vi.fn();
    render(<TestModal onClose={onClose} />);
    await screen.findByRole("dialog");
    await userEvent.keyboard("{Escape}");
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it("Modal.Close calls onClose", async () => {
    const onClose = vi.fn();
    render(<TestModal onClose={onClose} />);
    await userEvent.click(screen.getByRole("button", { name: "Close" }));
    expect(onClose).toHaveBeenCalledTimes(1);
  });
});
