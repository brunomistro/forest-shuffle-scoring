import { describe, expect, it } from "@jest/globals";

import { createTree } from "@/lib/cards/factory";
import { Birch } from "@/lib/cards/trees";

import { createForestWithTrees, createGame } from "../helpers";

describe("A Birch card", () => {
  it("always scores 1 point", () => {
    const tree = createTree(Birch);
    const forest = createForestWithTrees(tree);
    const game = createGame(forest);

    const points = Birch.score({ game, forest, tree });

    expect(points).toBe(1);
  });
});
