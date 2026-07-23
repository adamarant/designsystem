// @vitest-environment node
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { createElement } from "react";
import { renderToString } from "react-dom/server";
import { describe, expect, it } from "vitest";
import * as DS from "../index";
import {
  Alert,
  Badge,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Checkbox,
  EmptyState,
  EmptyStateDescription,
  EmptyStateTitle,
  Flex,
  Input,
  PageHeader,
  PageHeaderActions,
  PageHeaderLead,
  PageHeaderTitle,
  Radio,
  Stack,
  Tag,
  Text,
} from "../index";

const SRC = resolve(__dirname, "..");

/**
 * Every value export the barrel re-exports from `components/` or `primitives/`,
 * paired with its source file. Utilities (`./utils/*`), types, and the `Size`
 * alias are excluded — only things meant to render.
 */
function componentExports(): Array<{ name: string; file: string }> {
  const idx = readFileSync(resolve(SRC, "index.ts"), "utf8");
  const out: Array<{ name: string; file: string }> = [];
  const re = /export\s*\{([^}]*)\}\s*from\s*"(\.\/[^"]+)"/g;
  let m: RegExpExecArray | null;
  while ((m = re.exec(idx))) {
    const file = m[2];
    if (!file.startsWith("./components/") && !file.startsWith("./primitives/"))
      continue;
    for (const raw of m[1].split(",")) {
      const t = raw.trim();
      if (!t || t.startsWith("type ")) continue;
      const name = t.replace(/\s+as\s+.*/, "").trim();
      if (name) out.push({ name, file });
    }
  }
  return out;
}

/** A file is client-only iff it opens with the "use client" directive. */
function isClient(file: string): boolean {
  return readFileSync(resolve(SRC, `${file}.tsx`), "utf8").startsWith(
    '"use client"',
  );
}

/** The universal half of the catalogue — must render with zero client runtime. */
const UNIVERSAL = componentExports().filter((e) => !isClient(e.file));

/**
 * Server-render smoke: a realistic server-only composition must render to
 * markup with no DOM, no hooks, no handlers. Catches module-level browser
 * API access anywhere in the barrel import graph and keeps the universal
 * components genuinely universal.
 */
describe("server-side rendering (no DOM)", () => {
  it("renders a server-only page composition to markup", () => {
    const html = renderToString(
      <Stack gap="md">
        <PageHeader>
          <PageHeaderLead>
            <PageHeaderTitle>Articles</PageHeaderTitle>
          </PageHeaderLead>
          <PageHeaderActions>
            <Badge>12</Badge>
          </PageHeaderActions>
        </PageHeader>
        <Card>
          <CardHeader>
            <CardTitle>Latest</CardTitle>
          </CardHeader>
          <CardBody>
            <Flex gap="4">
              <Tag size="sm">draft</Tag>
              <Text size="sm">A quiet piece</Text>
            </Flex>
          </CardBody>
        </Card>
        <Alert variant="info">Saved</Alert>
        <Input placeholder="Search" />
        <Checkbox label="Published" name="published" defaultChecked />
        <Radio label="Public" name="visibility" value="public" />
        <EmptyState>
          <EmptyStateTitle>Nothing here</EmptyStateTitle>
          <EmptyStateDescription>Come back later</EmptyStateDescription>
        </EmptyState>
      </Stack>,
    );
    expect(html).toContain("ds-page-header");
    expect(html).toContain("ds-card");
    expect(html).toContain("ds-checkbox");
    expect(html).toContain('type="radio"');
    expect(html).toContain("ds-empty-state");
  });
});

/**
 * The completeness half: the curated composition above proves a real page
 * renders; this proves NO universal export is left untested. Every export the
 * barrel classifies as universal (its source lacks "use client") must survive
 * a bare server render — a component that reaches for the DOM during render, or
 * a compound part left `undefined`, throws here instead of dying silently in a
 * consumer's Server Component. New universal exports are covered automatically.
 */
describe("every universal export server-renders", () => {
  it("enumerated a non-trivial, sane catalogue", () => {
    // Guards against a barrel/format change quietly emptying the list, which
    // would make the it.each below vacuously pass.
    expect(UNIVERSAL.length).toBeGreaterThan(80);
    for (const anchor of ["Card", "Flex", "Badge", "SiteFooter"]) {
      expect(UNIVERSAL.map((e) => e.name)).toContain(anchor);
    }
  });

  it.each(UNIVERSAL.map((e) => e.name))("%s renders to markup", (name) => {
    const Comp = (DS as Record<string, unknown>)[name];
    expect(Comp, `${name} is exported`).toBeDefined();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    expect(() => renderToString(createElement(Comp as any))).not.toThrow();
  });
});
