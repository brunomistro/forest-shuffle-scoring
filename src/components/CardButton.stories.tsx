import type { Meta, StoryObj } from "@storybook/react";

import CardButton from "@/components/CardButton";
import {
  CardType,
  DwellerCard,
  DwellerPosition,
  TreeSymbol,
} from "@/lib/cards";
import { DEFAULT_MODIFIERS } from "@/lib/cards/dwellers/modifiers";

const meta = {
  title: "Game Components/Card Selector/CardButton",
  component: CardButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof CardButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SingleColor: Story = {
  args: {
    card: {
      id: "43f458f5-81ea-4019-a479-949d74094776",
      name: "BLACKBERRIES",
      types: [CardType.Plant],
      treeSymbol: TreeSymbol.SilverFir,
      position: DwellerPosition.Bottom,
      modifiers: DEFAULT_MODIFIERS,
    } as DwellerCard,
  },
};

export const Gradient: Story = {
  args: {
    card: {
      id: "ba8ed761-0364-437f-858d-61c7f5147a16",
      name: "PURPLE_EMPEROR",
      types: [CardType.Butterfly, CardType.Insect],
      treeSymbol: TreeSymbol.Birch,
      position: DwellerPosition.Top,
      modifiers: DEFAULT_MODIFIERS,
    } as DwellerCard,
  },
};
