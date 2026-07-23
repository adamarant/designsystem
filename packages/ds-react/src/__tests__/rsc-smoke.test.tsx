// @vitest-environment node
import { renderToString } from "react-dom/server";
import { describe, expect, it } from "vitest";
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
