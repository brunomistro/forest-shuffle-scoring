import { DEFAULT_MODIFIERS } from "@/lib/cards/dwellers/modifiers";
import { generateId } from "@/lib/cards/factory";
import {
  CardType,
  DwellerCard,
  DwellerModifiers,
  DwellerPosition,
  TreeCard,
  TreeSymbol,
} from "@/lib/cards/types";

interface FakeDwellerOptionalArgs {
  id?: string;
  types?: CardType[];
  treeSymbol?: TreeSymbol;
  modifiers?: DwellerModifiers;
}

interface FakeTreeOptionalArgs {
  treeSymbol?: TreeSymbol;
}

export const createFakeDweller: (
  position: DwellerPosition,
  optionalArgs?: FakeDwellerOptionalArgs,
) => DwellerCard = (
  position,
  {
    id,
    types = [CardType.Amphibian],
    treeSymbol,
    modifiers = DEFAULT_MODIFIERS,
  } = {},
) => ({
  id: id ?? generateId(),
  name: "FAKE_DWELLER",
  types,
  treeSymbol,
  position,
  modifiers,
});

export const createFakeDwellers: (
  count: number,
  position: DwellerPosition,
  optionalArgs?: FakeDwellerOptionalArgs,
) => DwellerCard[] = (count, position, optionalArgs) =>
  Array(count)
    .fill(0)
    .map(() => createFakeDweller(position, optionalArgs));

export const createFakeTree: (
  optionalArgs?: FakeTreeOptionalArgs,
) => TreeCard = ({ treeSymbol } = {}) => ({
  id: generateId(),
  name: "FAKE_TREE",
  types: [CardType.Tree],
  treeSymbol,
  dwellers: {
    [DwellerPosition.Top]: [],
    [DwellerPosition.Bottom]: [],
    [DwellerPosition.Left]: [],
    [DwellerPosition.Right]: [],
  },
});

export const createFakeTrees: (
  count: number,
  optionalArgs?: FakeTreeOptionalArgs,
) => TreeCard[] = (count, args) =>
  Array(count)
    .fill(0)
    .map(() => createFakeTree(args));
