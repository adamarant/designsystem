import { Avatar, AvatarGroup } from "@digiko-npm/ds-react";
import { DemoSection } from "@/components/DemoSection";

export default function AvatarPage() {
  return (
    <>
      <div className="demo-page-header">
        <h1>Avatar</h1>
        <p>User photos, token images, initials. Stackable in groups.</p>
      </div>

      <DemoSection title="Sizes" code={`<Avatar size="xs">XS</Avatar>
<Avatar size="sm">SM</Avatar>
<Avatar>MD</Avatar>
<Avatar size="lg">LG</Avatar>
<Avatar size="xl">XL</Avatar>`}>
        <Avatar size="xs">XS</Avatar>
        <Avatar size="sm">SM</Avatar>
        <Avatar>MD</Avatar>
        <Avatar size="lg">LG</Avatar>
        <Avatar size="xl">XL</Avatar>
      </DemoSection>

      <DemoSection title="Variants" code={`<Avatar square>SQ</Avatar>
<Avatar bordered>BD</Avatar>`}>
        <Avatar square>SQ</Avatar>
        <Avatar bordered>BD</Avatar>
      </DemoSection>

      <DemoSection title="Status" code={`<Avatar>
  RM
  <Avatar.Status variant="online" />
</Avatar>`}>
        <Avatar>RM<Avatar.Status variant="online" /></Avatar>
        <Avatar>AB<Avatar.Status variant="offline" /></Avatar>
        <Avatar>CD<Avatar.Status variant="busy" /></Avatar>
      </DemoSection>

      <DemoSection title="Avatar Group" code={`<AvatarGroup>
  <Avatar size="sm" bordered>A</Avatar>
  <Avatar size="sm" bordered>B</Avatar>
  <Avatar size="sm" bordered>C</Avatar>
</AvatarGroup>`}>
        <AvatarGroup>
          <Avatar size="sm" bordered>A</Avatar>
          <Avatar size="sm" bordered>B</Avatar>
          <Avatar size="sm" bordered>C</Avatar>
          <Avatar size="sm" bordered>+3</Avatar>
        </AvatarGroup>
      </DemoSection>
    </>
  );
}
