import type { Meta, StoryObj } from "@storybook/react";

import TreeSymbolButton from "@/components/TreeSymbolButton";
import { TreeSymbol } from "@/lib/cards";

const meta = {
  title: "Game Components/Card Selector/TreeSymbolButton",
  component: TreeSymbolButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof TreeSymbolButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    treeSymbol: TreeSymbol.SilverFir,
  },
};
