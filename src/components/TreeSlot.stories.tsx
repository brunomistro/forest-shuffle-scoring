import type { Meta, StoryObj } from "@storybook/react";

import TreeSlot from "@/components/TreeSlot";
import { CardType, DwellerPosition, TreeSymbol } from "@/lib/cards";
import { DEFAULT_MODIFIERS } from "@/lib/cards/dwellers/modifiers";

const meta = {
  title: "Game Components/Forest/TreeSlot",
  component: TreeSlot,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof TreeSlot>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Empty: Story = {
  args: {
    tree: {
      id: "da4b1712-09fd-47ee-8595-c09ed5b657b3",
      name: "LINDEN",
      types: [CardType.Tree],
      treeSymbol: TreeSymbol.Linden,
      dwellers: {
        [DwellerPosition.Top]: [],
        [DwellerPosition.Bottom]: [],
        [DwellerPosition.Left]: [],
        [DwellerPosition.Right]: [],
      },
    },
  },
};

export const FullyOccupied: Story = {
  args: {
    tree: {
      id: "da4b1712-09fd-47ee-8595-c09ed5b657b3",
      name: "LINDEN",
      types: [CardType.Tree],
      treeSymbol: TreeSymbol.Linden,
      dwellers: {
        [DwellerPosition.Top]: [
          {
            id: "ba8ed761-0364-437f-858d-61c7f5147a16",
            name: "PURPLE_EMPEROR",
            types: [CardType.Butterfly, CardType.Insect],
            treeSymbol: TreeSymbol.Birch,
            position: DwellerPosition.Top,
            modifiers: DEFAULT_MODIFIERS,
          },
        ],
        [DwellerPosition.Bottom]: [
          {
            id: "43f458f5-81ea-4019-a479-949d74094776",
            name: "BLACKBERRIES",
            types: [CardType.Plant],
            treeSymbol: TreeSymbol.SilverFir,
            position: DwellerPosition.Bottom,
            modifiers: DEFAULT_MODIFIERS,
          },
        ],
        [DwellerPosition.Left]: [
          {
            id: "85640ef6-30a0-48f7-a7d0-4aba89bc37f1",
            name: "EUROPEAN_HARE",
            types: [CardType.PawedAnimal],
            treeSymbol: TreeSymbol.Beech,
            position: DwellerPosition.Left,
            modifiers: {
              ...DEFAULT_MODIFIERS,
              sharesSlotWith: Infinity,
            },
          },
          {
            id: "5d267fc1-d8c1-4ccc-9b30-acd63bacce6d",
            name: "EUROPEAN_HARE",
            types: [CardType.PawedAnimal],
            treeSymbol: TreeSymbol.Linden,
            position: DwellerPosition.Left,
            modifiers: {
              ...DEFAULT_MODIFIERS,
              sharesSlotWith: Infinity,
            },
          },
        ],
        [DwellerPosition.Right]: [
          {
            id: "6cfebd3e-b770-4f7b-9f17-64aef35b1a6d",
            name: "GNAT",
            types: [CardType.Insect],
            treeSymbol: TreeSymbol.Birch,
            position: DwellerPosition.Right,
            modifiers: DEFAULT_MODIFIERS,
          },
        ],
      },
    },
  },
};
