import {
  Card,
  CardType,
  DwellerCard,
  DwellerPosition,
  Forest,
  TreeCard,
} from "@/lib/cards";

export const getDwellersOfTree = (tree: TreeCard): DwellerCard[] =>
  Object.values(tree.dwellers).flatMap((d) => d);

export const getDwellersOfForest = (forest: Forest) =>
  forest.trees.flatMap(getDwellersOfTree);

export const filterDwellers = (cards: Card[]) =>
  cards.filter((c) => !c.types.includes(CardType.Tree)) as DwellerCard[];

export const filterTrees = (cards: Card[]) =>
  cards.filter((c) => c.types.includes(CardType.Tree)) as TreeCard[];

export const clearTree = (tree: TreeCard): TreeCard => ({
  ...tree,
  dwellers: {
    [DwellerPosition.Top]: [],
    [DwellerPosition.Bottom]: [],
    [DwellerPosition.Left]: [],
    [DwellerPosition.Right]: [],
  },
});
