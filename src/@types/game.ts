export enum GameActionType {
  CreateGame = "CREATE_GAME",
  AddPlayer = "ADD_PLAYER",
  RemovePlayer = "REMOVE_PLAYER",
  PlayTree = "PLAY_TREE",
  PlayDweller = "PLAY_DWELLER",
  RemoveTree = "REMOVE_TREE",
  RemoveDweller = "REMOVE_DWELLER",
}

export interface CreateGameAction {
  type: GameActionType.CreateGame;
}

export interface AddPlayerAction {
  type: GameActionType.AddPlayer;
}

export interface RemovePlayerAction {
  type: GameActionType.RemovePlayer;
  payload: {
    playerId: string;
  };
}

export interface PlayTreeAction {
  type: GameActionType.PlayTree;
  payload: {
    playerId: string;
    treeId: string;
  };
}

export interface PlayDwellerAction {
  type: GameActionType.PlayDweller;
  payload: {
    playerId: string;
    treeId: string;
    dwellerId: string;
  };
}

export interface RemoveTreeAction {
  type: GameActionType.RemoveTree;
  payload: {
    playerId: string;
    treeId: string;
  };
}

export interface RemoveDwellerAction {
  type: GameActionType.RemoveDweller;
  payload: {
    playerId: string;
    dwellerId: string;
  };
}

export type GameAction =
  | CreateGameAction
  | AddPlayerAction
  | RemovePlayerAction
  | PlayTreeAction
  | PlayDwellerAction
  | RemoveTreeAction
  | RemoveDwellerAction;
