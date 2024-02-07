import { describe, expect, it } from "@jest/globals";

import { CommonToad } from "@/lib/cards/dwellers";

import { createFakeTree } from "../fake";
import {
  addDwellersToTree,
  createAllDwellers,
  createAnyDweller,
  createForestWithDweller,
  createForestWithTrees,
  createGame,
} from "../helpers";

describe("A Common Toad card", () => {
  it("scores no points if it's the only card in its slot", () => {
    const { dweller, tree, forest } = createForestWithDweller({
      dwellerUnderTest: createAnyDweller(CommonToad),
    });
    const game = createGame(forest);

    const points = CommonToad.score({
      game,
      forest,
      tree,
      dweller,
    });

    expect(points).toBe(0);
  });

  it("scores 5 points if it shares its slot with another Common Toad card", () => {
    const [dweller, otherDweller] = createAllDwellers(CommonToad);
    const tree = addDwellersToTree(createFakeTree(), dweller!, otherDweller!);
    const forest = createForestWithTrees(tree);
    const game = createGame(forest);

    const points = CommonToad.score({
      game,
      forest,
      tree,
      dweller: dweller!,
    });

    expect(points).toBe(5);
  });
});
