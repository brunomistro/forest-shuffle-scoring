import { scoreSet } from "../scoring/helpers";
import {
  CardType,
  DwellerCardBlueprint,
  DwellerPosition,
  TreeSymbol,
} from "../types";
import { DEFAULT_MODIFIERS } from "./modifiers";

const NAME = "FIRE_SALAMANDER";
const POINTS_BY_COUNT = {
  1: 5,
  2: 15,
  3: 25,
};

const BLUEPRINT: DwellerCardBlueprint = {
  name: NAME,
  types: [CardType.Amphibian],
  modifiers: DEFAULT_MODIFIERS,
  cost: 1,
  count: 3,
  variants: [
    {
      position: DwellerPosition.Bottom,
      treeSymbol: TreeSymbol.Beech,
      count: 1,
    },
    {
      position: DwellerPosition.Bottom,
      treeSymbol: TreeSymbol.Oak,
      count: 1,
    },
    {
      position: DwellerPosition.Bottom,
      treeSymbol: TreeSymbol.SilverFir,
      count: 1,
    },
  ],
  score: ({ forest, dweller }) => scoreSet(forest, dweller, POINTS_BY_COUNT),
};

export default BLUEPRINT;
