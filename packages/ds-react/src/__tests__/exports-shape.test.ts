import { describe, expect, it } from "vitest";
import * as DS from "../index";

/**
 * Every named export must be defined. This is the cheap tripwire against
 * the "phantom wrapper" class of bug (an export wired to a missing or
 * renamed symbol ships as `undefined` and explodes only in the consumer).
 */
describe("exports shape", () => {
  const entries = Object.entries(DS as Record<string, unknown>);

  it("has a meaningful number of exports", () => {
    expect(entries.length).toBeGreaterThan(40);
  });

  it.each(entries.map(([name]) => name))("%s is defined", (name) => {
    expect((DS as Record<string, unknown>)[name]).toBeDefined();
  });

  it("compound components expose their parts (dot + flat)", () => {
    const card = DS.Card as unknown as Record<string, unknown>;
    expect(card.Header).toBe(DS.CardHeader);
    expect(card.Body).toBe(DS.CardBody);
    const modal = DS.Modal as unknown as Record<string, unknown>;
    expect(modal.Content).toBe(DS.ModalContent);
    expect(modal.Close).toBe(DS.ModalClose);
  });
});
