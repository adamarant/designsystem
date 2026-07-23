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

  it("every compound part is also exported flat (Comp.Part === CompPart)", () => {
    const violations: string[] = [];
    for (const [name, value] of entries) {
      if (value === null || typeof value === "string") continue;
      if (typeof value !== "function" && typeof value !== "object") continue;
      const partKeys = Object.keys(value as object).filter((k) =>
        /^[A-Z]/.test(k),
      );
      for (const key of partKeys) {
        const flat = (DS as Record<string, unknown>)[`${name}${key}`];
        const part = (value as Record<string, unknown>)[key];
        if (flat !== part) violations.push(`${name}.${key} → ${name}${key}`);
      }
    }
    expect(violations).toEqual([]);
  });
});
