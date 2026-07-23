import { readFileSync, readdirSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

/**
 * Server-first discipline: the barrel is neutral, so every file that uses
 * client-only APIs MUST carry its own "use client". A file that forgets it
 * works in the test env and explodes only inside a consumer's Server
 * Component — this static check catches it at commit time instead.
 */

const SRC = resolve(__dirname, "..");
const dirs = ["components", "primitives"] as const;

const CLIENT_APIS =
  /\b(useState|useEffect|useRef|useCallback|useContext|useMemo|useId|useLayoutEffect|useSyncExternalStore|createContext|createPortal|useImperativeHandle)\b/;

/** Browser globals / internal handlers outside a directive-marked file. */
const BROWSER_OR_HANDLER =
  /\b(window\.|document\.|navigator\.)|const handle\w+ *=/;

/**
 * Files allowed to match BROWSER_OR_HANDLER while staying universal.
 * Input.tsx: Checkbox/Radio build their change handler ONLY when the
 * consumer passes one — uncontrolled usage stays server-safe by design.
 */
const HANDLER_ALLOWLIST = new Set(["components/Input.tsx"]);

function componentFiles(): Array<{ rel: string; source: string }> {
  const out: Array<{ rel: string; source: string }> = [];
  for (const dir of dirs) {
    for (const f of readdirSync(resolve(SRC, dir))) {
      if (!f.endsWith(".tsx")) continue;
      const rel = `${dir}/${f}`;
      out.push({ rel, source: readFileSync(resolve(SRC, rel), "utf8") });
    }
  }
  return out;
}

describe("use client discipline", () => {
  const files = componentFiles();

  it("every file using client APIs starts with \"use client\"", () => {
    const missing = files
      .filter(
        (f) => CLIENT_APIS.test(f.source) && !f.source.startsWith('"use client"'),
      )
      .map((f) => f.rel);
    expect(missing).toEqual([]);
  });

  it("browser globals / internal handlers only in client files (or allowlisted)", () => {
    const missing = files
      .filter(
        (f) =>
          BROWSER_OR_HANDLER.test(f.source) &&
          !f.source.startsWith('"use client"') &&
          !HANDLER_ALLOWLIST.has(f.rel),
      )
      .map((f) => f.rel);
    expect(missing).toEqual([]);
  });

  it("the barrel stays neutral (no top-level \"use client\")", () => {
    const barrel = readFileSync(resolve(SRC, "index.ts"), "utf8");
    expect(barrel.startsWith('"use client"')).toBe(false);
  });
});
