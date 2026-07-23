import { readFileSync } from "node:fs";
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
