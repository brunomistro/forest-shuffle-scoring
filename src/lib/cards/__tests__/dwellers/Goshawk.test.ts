import { describe, expect, it } from "@jest/globals";

import { Goshawk } from "@/lib/cards/dwellers";
import { CardType, DwellerPosition } from "@/lib/cards/types";

import { createFakeDwellers } from "../fake";
import {
  createAnyDweller,
  createForestWithDweller,
  createGame,
} from "../helpers";

describe("A Goshawk card", () => {
  it.each([
    [3, 0],
    [6, 1],
    [18, 5],
  ])(
    "scores %i points if there are %i other bird cards",
    (expectedPoints, count) => {
      const { dweller, tree, forest } = createForestWithDweller({
        dwellerUnderTest: createAnyDweller(Goshawk),
        otherDwellers: createFakeDwellers(count, DwellerPosition.Top, {
          types: [CardType.Bird],
        }),
      });
      const game = createGame(forest);

      const points = Goshawk.score({
        game,
        forest,
        tree,
        dweller,
      });

      expect(points).toBe(expectedPoints);
    },
  );
});
