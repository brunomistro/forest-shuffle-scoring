import { describe, expect, it } from "@jest/globals";

import { FallowDeer } from "@/lib/cards/dwellers";
import { CardType, DwellerPosition } from "@/lib/cards/types";

import { createFakeDwellers } from "../fake";
import {
  createAnyDweller,
  createForestWithDweller,
  createGame,
} from "../helpers";

describe("A Fallow Deer card", () => {
  it.each([
    [3, 0],
    [6, 1],
    [15, 4],
  ])(
    "scores %i points if there are %i other cloven-hoofed animal cards",
    (expectedPoints, count) => {
      const { dweller, tree, forest } = createForestWithDweller({
        dwellerUnderTest: createAnyDweller(FallowDeer),
        otherDwellers: createFakeDwellers(count, DwellerPosition.Left, {
          types: [CardType.ClovenhoofedAnimal],
        }),
      });
      const game = createGame(forest);

      const points = FallowDeer.score({
        game,
        forest,
        tree,
        dweller,
      });

      expect(points).toBe(expectedPoints);
    },
  );
});
