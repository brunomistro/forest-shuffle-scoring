import { ReactNode, createContext } from "react";
import { ImmerReducer, useImmerReducer } from "use-immer";

import { GameAction, GameActionType } from "@/@types/game";
import {
  Game,
  createForest,
  createGame,
  getDwellersOfForest,
  getDwellersOfTree,
} from "@/lib/cards";
import { generateId } from "@/lib/cards/factory";
import { clearTree, filterDwellers } from "@/lib/cards/helpers";

interface GameContextType {
  game: Game | null;
  playerId: string | null;
  dispatch: React.Dispatch<GameAction>;
}

const GameContext = createContext<GameContextType>({
  game: null,
  playerId: null,
  dispatch: () => {},
});

interface GameContextProviderProps {
  children?: ReactNode;
}

interface State {
  game: Game | null;
  playerId: string | null;
}

const reducer: ImmerReducer<State, GameAction> = (draft, action) => {
  if (!draft.game) {
    if (action.type === GameActionType.CreateGame) {
      const playerId = generateId();
      return {
        game: {
          ...createGame(),
          forests: { [playerId]: createForest() },
        },
        playerId,
      };
    }

    return;
  }

  const {
    game: {
      forests,
      deck: { dwellers: dwellerDeck, trees: treeDeck },
    },
  } = draft;

  switch (action.type) {
    case GameActionType.AddPlayer:
      forests[generateId()] = createForest();
      break;

    case GameActionType.RemovePlayer: {
      const forest = forests[action.payload.playerId];
      if (!forest) {
        break;
      }

      const dwellers = [
        ...getDwellersOfForest(forest),
        ...filterDwellers(forest.cave),
      ];
      const trees = forest.trees.map(clearTree);

      treeDeck.push(...trees);
      dwellerDeck.push(...dwellers);
      delete forests[action.payload.playerId];
      break;
    }

    case GameActionType.PlayTree: {
      const { playerId, treeId } = action.payload;

      const forest = forests[playerId];
      const tree = treeDeck.find((t) => t.id === treeId);

      if (forest && tree) {
        treeDeck.splice(treeDeck.indexOf(tree), 1);
        forest.trees.push(tree);
      }
      break;
    }

    case GameActionType.PlayDweller: {
      const { playerId, treeId, dwellerId } = action.payload;

      const forest = forests[playerId];
      const tree = forest?.trees?.find((t) => t.id === treeId);
      const dweller = dwellerDeck.find((d) => d.id === dwellerId);

      if (tree && dweller) {
        dwellerDeck.splice(dwellerDeck.indexOf(dweller), 1);
        tree.dwellers[dweller.position].push(dweller);
      }
      break;
    }

    case GameActionType.RemoveTree: {
      const { playerId, treeId } = action.payload;

      const forest = forests[playerId];
      const tree = forest?.trees.find((t) => t.id === treeId);

      if (forest && tree) {
        forest.trees.splice(forest.trees.indexOf(tree), 1);
        dwellerDeck.push(...getDwellersOfTree(tree));
        treeDeck.push(clearTree(tree));
      }
      break;
    }

    case GameActionType.RemoveDweller: {
      const { playerId, dwellerId } = action.payload;

      const forest = forests[playerId];
      const tree = forest?.trees.find((t) =>
        getDwellersOfTree(t).some((d) => d.id === dwellerId),
      );
      const dweller = tree
        ? getDwellersOfTree(tree).find((d) => d.id === dwellerId)
        : null;

      if (tree && dweller) {
        const dwellers = tree.dwellers[dweller.position];
        dwellers.splice(dwellers.indexOf(dweller), 1);
        dwellerDeck.push(dweller);
      }
      break;
    }
  }
};

export const GameContextProvider = ({ children }: GameContextProviderProps) => {
  const [state, dispatch] = useImmerReducer(reducer, {
    game: null,
    playerId: null,
  });

  return (
    <GameContext.Provider value={{ ...state, dispatch }}>
      {children}
    </GameContext.Provider>
  );
};

export default GameContext;
