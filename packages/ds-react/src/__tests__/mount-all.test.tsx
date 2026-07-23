import { readFileSync, readdirSync } from "node:fs";
import { resolve } from "node:path";
import { cleanup, render } from "@testing-library/react";
import { type ReactElement } from "react";
import { afterEach, describe, expect, it } from "vitest";
import {
  Alert,
  Avatar,
  Badge,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Center,
  Checkbox,
  Chip,
  Collapsible,
  Divider,
  EmptyState,
  Field,
  Flex,
  Grid,
  Help,
  IconBtn,
  Input,
  InputGroup,
  Kbd,
  Label,
  PageHeader,
  PageHeaderActions,
  PageHeaderBack,
  PageHeaderDescription,
  PageHeaderLead,
  PageHeaderTitle,
  Progress,
  Radio,
  Result,
  Skeleton,
  Spinner,
  Stack,
  StatCard,
  Tag,
  Text,
  Textarea,
  Toggle,
} from "../index";

/**
 * Smoke-mount of the core catalogue with minimal real props, plus the
 * contract check that matters: every `ds-*` class the wrappers emit must
 * exist in the built CSS bundle. This kills the phantom-class bug family
 * (a wrapper referencing a class the DS never shipped) permanently.
 */

const CSS_BUNDLE = readFileSync(
  resolve(__dirname, "../../../../dist/designsystem.css"),
  "utf8",
);

/** Class tokens that are legitimately absent from the bundle. */
const CLASS_ALLOWLIST = new Set<string>([]);

/**
 * Phantoms that already shipped — debt, not legitimacy. See the header comment
 * in known-phantoms.json: each entry is a class a wrapper emits that the DS
 * never defined, so the component renders unstyled in every consumer. The list
 * may only ever SHRINK; the static check below fails on anything new.
 */
const KNOWN_PHANTOMS: Set<string> = new Set(
  (
    JSON.parse(
      readFileSync(resolve(__dirname, "known-phantoms.json"), "utf8"),
    ) as { classes: string[] }
  ).classes,
);

const noop = () => {};

const MOUNTS: Record<string, ReactElement> = {
  Flex: <Flex gap="4">x</Flex>,
  Stack: <Stack gap="md">x</Stack>,
  Grid: <Grid cols="2">x</Grid>,
  Text: <Text size="sm">x</Text>,
  Center: <Center>x</Center>,
  Label: <Label>x</Label>,
  Button: <Button size="sm">x</Button>,
  ButtonGroup: (
    <ButtonGroup>
      <Button>a</Button>
      <Button>b</Button>
    </ButtonGroup>
  ),
  Badge: <Badge>x</Badge>,
  Input: <Input size="sm" placeholder="x" />,
  Textarea: <Textarea placeholder="x" />,
  InputGroup: (
    <InputGroup>
      <Input placeholder="x" />
    </InputGroup>
  ),
  Help: <Help>x</Help>,
  Checkbox: <Checkbox />,
  Radio: <Radio />,
  Card: (
    <Card>
      <CardHeader>
        <CardTitle>t</CardTitle>
        <CardDescription>d</CardDescription>
      </CardHeader>
      <CardBody>b</CardBody>
      <CardFooter>f</CardFooter>
    </Card>
  ),
  Alert: <Alert variant="info">x</Alert>,
  Tag: <Tag size="sm">x</Tag>,
  Chip: <Chip>x</Chip>,
  Avatar: <Avatar size="sm">AB</Avatar>,
  Spinner: <Spinner size="sm" />,
  Progress: <Progress value={40} />,
  Skeleton: <Skeleton />,
  Divider: <Divider />,
  EmptyState: <EmptyState>x</EmptyState>,
  Field: <Field><Input placeholder="x" /></Field>,
  IconBtn: (
    <IconBtn size="sm" aria-label="x">
      i
    </IconBtn>
  ),
  Kbd: <Kbd>K</Kbd>,
  PageHeader: (
    <PageHeader>
      <PageHeaderLead>
        <PageHeaderBack>←</PageHeaderBack>
        <PageHeaderTitle>Edit</PageHeaderTitle>
        <PageHeaderDescription>d</PageHeaderDescription>
      </PageHeaderLead>
      <PageHeaderActions>a</PageHeaderActions>
    </PageHeader>
  ),
  Result: <Result>x</Result>,
  StatCard: <StatCard>x</StatCard>,
  Toggle: <Toggle checked={false} onCheckedChange={noop} />,
  Collapsible: <Collapsible>x</Collapsible>,
};

afterEach(cleanup);

describe("mount-all (core catalogue)", () => {
  it.each(Object.entries(MOUNTS))("%s mounts", (_name, element) => {
    expect(() => render(element)).not.toThrow();
  });

  /**
   * The static half of the phantom-class contract. Mounting only proves the
   * classes on the default render path exist; a class reachable solely through
   * a prop (a sizeMap entry, a variant branch) stays invisible unless the
   * fixture happens to set that prop. `SearchInput`'s `size` prop shipped
   * pointing at `.ds-search__input--sm/--lg`, which the CSS never defined — a
   * silent no-op that mounting missed for exactly that reason. So: every
   * `ds-*` class literal anywhere in the wrapper source must exist in the
   * bundle, whatever prop would reach it.
   */
  it("every ds-* class literal in the wrapper source exists in the built CSS", () => {
    const missing = new Map<string, string>();
    for (const dir of ["components", "primitives"]) {
      const dirPath = resolve(__dirname, "..", dir);
      for (const file of readdirSync(dirPath)) {
        if (!file.endsWith(".tsx")) continue;
        const source = readFileSync(resolve(dirPath, file), "utf8");
        for (const m of source.matchAll(/["'`](ds-[a-z0-9-]+(?:__[a-z0-9-]+)?(?:--[a-z0-9-]+)?)["'`]/g)) {
          const cls = m[1];
          if (CLASS_ALLOWLIST.has(cls) || KNOWN_PHANTOMS.has(cls)) continue;
          if (!CSS_BUNDLE.includes(`.${cls}`)) missing.set(cls, `${dir}/${file}`);
        }
      }
    }
    expect(
      [...missing.entries()].map(([cls, from]) => `${cls} (in ${from})`),
    ).toEqual([]);
  });

  it("every mounted ds-* class exists in the built CSS", () => {
    const missing = new Map<string, string>();
    for (const [name, element] of Object.entries(MOUNTS)) {
      const { container, unmount } = render(element);
      const classed = container.querySelectorAll("[class]");
      for (const el of classed) {
        for (const cls of Array.from(el.classList)) {
          if (!cls.startsWith("ds-")) continue;
          if (CLASS_ALLOWLIST.has(cls)) continue;
          if (!CSS_BUNDLE.includes(`.${cls}`)) missing.set(cls, name);
        }
      }
      unmount();
    }
    expect(
      [...missing.entries()].map(([cls, from]) => `${cls} (from ${from})`),
    ).toEqual([]);
  });
});
