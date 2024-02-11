import { useRouter } from "next/navigation";
import { useContext, useEffect } from "react";

import { Button, Sheet } from "@mui/joy";

import { GameActionType } from "@/@types/game";
import GameContext from "@/contexts/GameContext";

export default function Home() {
  const router = useRouter();

  const { game, dispatch } = useContext(GameContext);

  const handleCreateGame = () => {
    dispatch({ type: GameActionType.CreateGame });
  };

  useEffect(() => {
    if (game) {
      router.push("/game");
    }
  });

  return (
    <Sheet>
      <Button onClick={handleCreateGame}>Create game</Button>
    </Sheet>
  );
}
