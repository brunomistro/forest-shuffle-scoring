import { CardType, TreeCardBlueprint } from "../types";

const NAME = "SAPLING";
const POINTS = 0;

const BLUEPRINT: TreeCardBlueprint = {
  name: NAME,
  types: [CardType.Tree],
  cost: 0,
  count: Infinity,
  score: () => POINTS,
};

export default BLUEPRINT;
