import { hasAllTreeSpecies } from "../scoring/helpers";
import {
  CardType,
  DwellerCardBlueprint,
  DwellerPosition,
  TreeSymbol,
} from "../types";
import { DEFAULT_MODIFIERS } from "./modifiers";

const NAME = "WILD_STRAWBERRIES";
const POINTS = 10;

const BLUEPRINT: DwellerCardBlueprint = {
  name: NAME,
  types: [CardType.Plant],
  modifiers: DEFAULT_MODIFIERS,
  cost: 0,
  count: 3,
  variants: [
    {
      position: DwellerPosition.Bottom,
      treeSymbol: TreeSymbol.Birch,
      count: 1,
    },
    {
      position: DwellerPosition.Bottom,
      treeSymbol: TreeSymbol.Sycamore,
      count: 2,
    },
  ],
  score: ({ forest }) => (hasAllTreeSpecies(forest) ? POINTS : 0),
};

export default BLUEPRINT;
