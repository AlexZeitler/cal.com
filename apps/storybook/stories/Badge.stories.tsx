import { ComponentMeta } from "@storybook/react";
import { Bell } from "react-feather";

import { Badge } from "@calcom/ui";

export default {
  title: "Badge",
  component: Badge,
} as ComponentMeta<typeof Badge>;

export const All = () => (
  <div>
    <h1>Default</h1>
    <div className="flex space-x-2">
      <Badge variant="gray">Badge</Badge>
      <Badge variant="red">Badge</Badge>
      <Badge variant="green">Badge</Badge>
      <Badge variant="orange">Badge</Badge>
      <Badge variant="blue">Badge</Badge>
    </div>
    <h1>Large</h1>
    <div className="flex space-x-2">
      <Badge variant="gray" size="lg">
        Badge
      </Badge>
      <Badge variant="red" size="lg">
        Badge
      </Badge>
      <Badge variant="green" size="lg">
        Badge
      </Badge>
      <Badge variant="orange" size="lg">
        Badge
      </Badge>
      <Badge variant="blue" size="lg">
        Badge
      </Badge>
    </div>
  </div>
);
