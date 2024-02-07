import { describe, expect, it } from "@jest/globals";

import { VioletCarpenterBee } from "@/lib/cards/dwellers";

import {
  createAnyDweller,
  createCompleteForestWithDweller,
  createForestWithDweller,
  createGame,
} from "../helpers";

describe("A Violet Carpenter Bee card", () => {
  it("scores 0 points in an empty forest", () => {
    const { dweller, tree, forest } = createForestWithDweller({
      dwellerUnderTest: createAnyDweller(VioletCarpenterBee),
    });
    const game = createGame(forest);

    const points = VioletCarpenterBee.score({
      game,
      forest,
      tree,
      dweller,
    });

    expect(points).toBe(0);
  });

  it("scores 0 points in a complete forest", () => {
    const { dweller, tree, forest } = createCompleteForestWithDweller({
      dwellerUnderTest: createAnyDweller(VioletCarpenterBee),
    });
    const game = createGame(forest);

    const points = VioletCarpenterBee.score({
      game,
      forest,
      tree,
      dweller,
    });

    expect(points).toBe(0);
  });
});
