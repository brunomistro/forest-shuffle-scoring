import { CardType, TreeCardBlueprint, TreeSymbol } from "../types";

const NAME = "BIRCH";
const POINTS = 1;

const BLUEPRINT: TreeCardBlueprint = {
  name: NAME,
  types: [CardType.Tree],
  treeSymbol: TreeSymbol.Birch,
  cost: 0,
  count: 10,
  score: () => POINTS,
};

export default BLUEPRINT;
