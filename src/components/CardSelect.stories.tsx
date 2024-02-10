import { useArgs } from "@storybook/preview-api";
import type { Meta, StoryObj } from "@storybook/react";

import { Box } from "@mui/joy";

import CardSelect from "@/components/CardSelect";
import {
  CardType,
  DwellerCard,
  DwellerPosition,
  TreeCard,
  TreeSymbol,
} from "@/lib/cards";
import { DEFAULT_MODIFIERS } from "@/lib/cards/dwellers/modifiers";

const meta = {
  title: "Game Components/Card Selector/CardSelect",
  component: CardSelect,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  decorators: [
    function Component(Story, ctx) {
      const [, setArgs] = useArgs<typeof ctx.args>();

      const handleCardNameChange = (value?: string) => {
        ctx.args.onCardNameChange?.(value);
        setArgs({ cardName: value });
      };

      const handleTreeSymbolChange = (value?: TreeSymbol) => {
        ctx.args.onTreeSymbolChange?.(value);
        setArgs({ treeSymbol: value });
      };

      return (
        <Box sx={{ width: "250px" }}>
          <Story
            args={{
              ...ctx.args,
              onCardNameChange: handleCardNameChange,
              onTreeSymbolChange: handleTreeSymbolChange,
            }}
          />
        </Box>
      );
    },
  ],
} satisfies Meta<typeof CardSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Dweller: Story = {
  args: {
    cards: [
      {
        id: "ba8ed761-0364-437f-858d-61c7f5147a16",
        name: "PURPLE_EMPEROR",
        types: [CardType.Butterfly, CardType.Insect],
        treeSymbol: TreeSymbol.Birch,
        position: DwellerPosition.Top,
        modifiers: DEFAULT_MODIFIERS,
      },
      {
        id: "f5813a6d-9c07-47fe-bc74-1c22948212e9",
        name: "PURPLE_EMPEROR",
        types: [CardType.Butterfly, CardType.Insect],
        treeSymbol: TreeSymbol.HorseChestnut,
        position: DwellerPosition.Top,
        modifiers: DEFAULT_MODIFIERS,
      },
      {
        id: "43f458f5-81ea-4019-a479-949d74094776",
        name: "BLACKBERRIES",
        types: [CardType.Plant],
        treeSymbol: TreeSymbol.SilverFir,
        position: DwellerPosition.Bottom,
        modifiers: DEFAULT_MODIFIERS,
      },
      {
        id: "85640ef6-30a0-48f7-a7d0-4aba89bc37f1",
        name: "BARBASTELLE_BAT",
        types: [CardType.Bat],
        treeSymbol: TreeSymbol.HorseChestnut,
        position: DwellerPosition.Left,
        modifiers: DEFAULT_MODIFIERS,
      },
      {
        id: "6cfebd3e-b770-4f7b-9f17-64aef35b1a6d",
        name: "LYNX",
        types: [CardType.PawedAnimal],
        treeSymbol: TreeSymbol.DouglasFir,
        position: DwellerPosition.Right,
        modifiers: DEFAULT_MODIFIERS,
      },
    ] as DwellerCard[],
  },
};

export const Tree: Story = {
  args: {
    cards: [
      {
        id: "90672103-0733-4e39-ba92-88c0c231cb9f",
        name: "BEECH",
        types: [CardType.Tree],
        treeSymbol: TreeSymbol.Beech,
        dwellers: {
          [DwellerPosition.Top]: [],
          [DwellerPosition.Bottom]: [],
          [DwellerPosition.Left]: [],
          [DwellerPosition.Right]: [],
        },
      },
      {
        id: "273cdedb-febc-4f59-9f3c-62b9e43604ce",
        name: "HORSE_CHESTNUT",
        types: [CardType.Tree],
        treeSymbol: TreeSymbol.HorseChestnut,
        dwellers: {
          [DwellerPosition.Top]: [],
          [DwellerPosition.Bottom]: [],
          [DwellerPosition.Left]: [],
          [DwellerPosition.Right]: [],
        },
      },
      {
        id: "77f5b597-0ee6-4e7d-b19f-aeeadd0f8e33",
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
      {
        id: "f12ead62-6d69-4c4d-a31a-24cc2abb75b1",
        name: "SAPLING",
        types: [CardType.Tree],
        dwellers: {
          [DwellerPosition.Top]: [],
          [DwellerPosition.Bottom]: [],
          [DwellerPosition.Left]: [],
          [DwellerPosition.Right]: [],
        },
      },
      {
        id: "562a054f-d4a8-4cfd-9371-c12b4ff46c87",
        name: "SYCAMORE",
        types: [CardType.Tree],
        treeSymbol: TreeSymbol.Sycamore,
        dwellers: {
          [DwellerPosition.Top]: [],
          [DwellerPosition.Bottom]: [],
          [DwellerPosition.Left]: [],
          [DwellerPosition.Right]: [],
        },
      },
    ] as TreeCard[],
  },
};
