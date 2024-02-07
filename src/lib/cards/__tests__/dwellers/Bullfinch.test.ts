import { describe, expect, it } from "@jest/globals";

import { Bullfinch } from "@/lib/cards/dwellers";

import { CardType, DwellerPosition } from "../..";
import { createFakeDwellers } from "../fake";
import {
  createAnyDweller,
  createForestWithDweller,
  createGame,
} from "../helpers";

describe("A Bullfinch card", () => {
  it.each([
    [0, 0],
    [2, 1],
    [10, 5],
  ])(
    "scores %i points if there are %i insect cards",
    (expectedPoints, count) => {
      const { dweller, tree, forest } = createForestWithDweller({
        dwellerUnderTest: createAnyDweller(Bullfinch),
        otherDwellers: createFakeDwellers(count, DwellerPosition.Top, {
          types: [CardType.Insect],
        }),
      });
      const game = createGame(forest);

      const points = Bullfinch.score({
        game,
        forest,
        tree,
        dweller,
      });

      expect(points).toBe(expectedPoints);
    },
  );
});
