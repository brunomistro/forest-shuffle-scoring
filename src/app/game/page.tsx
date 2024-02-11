import { useRouter } from "next/navigation";
import { useContext, useEffect, useMemo, useState } from "react";

import { Sheet } from "@mui/joy";

import { GameActionType } from "@/@types/game";
import CardDrawer from "@/components/CardDrawer";
import TreeStack from "@/components/TreeStack";
import GameContext from "@/contexts/GameContext";
import { TreeCard, createSapling } from "@/lib/cards";

export default function Page() {
  const router = useRouter();

  const { game, playerId, dispatch } = useContext(GameContext);

  const [isAddingTree, setIsAddingTree] = useState(false);

  const treeOptions = useMemo(
    () => [...(game?.deck?.trees ?? []), createSapling()],
    [game?.deck?.trees],
  );

  const handleAddTree = () => {
    setIsAddingTree(true);
  };

  const handleSelectTree = (tree: TreeCard) => {
    if (isAddingTree && playerId) {
      setIsAddingTree(false);
      dispatch({
        type: GameActionType.PlayTree,
        payload: { playerId, treeId: tree.id },
      });
    }
  };

  const handleCloseTreeDrawer = () => {
    setIsAddingTree(false);
  };

  useEffect(() => {
    if (!game) {
      router.replace("/");
    }
  }, [router, game]);

  return (
    <Sheet>
      <TreeStack
        trees={(playerId && game?.forests[playerId]?.trees) || []}
        onAddTree={handleAddTree}
      />
      <CardDrawer
        open={isAddingTree}
        onClose={handleCloseTreeDrawer}
        cards={treeOptions}
        onSelectCard={handleSelectTree}
      />
    </Sheet>
  );
}
