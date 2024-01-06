import { CardType, TreeCardBlueprint, TreeSymbol } from "../types";

const NAME = "DOUGLAS_FIR";
const POINTS = 5;

const BLUEPRINT: TreeCardBlueprint = {
  name: NAME,
  types: [CardType.Tree],
  treeSymbol: TreeSymbol.DouglasFir,
  cost: 2,
  count: 7,
  score: () => POINTS,
};

export default BLUEPRINT;
