import { Stack } from "@mui/joy";

import AddTreeButton from "@/components/AddTreeButton";
import TreeSlot from "@/components/TreeSlot";
import { DwellerPosition, TreeCard } from "@/lib/cards";

interface TreeStackProps {
  trees: TreeCard[];
  onAddDweller?: (treeId: string, position: DwellerPosition) => void;
  onAddTree?: () => void;
}

const TreeStack = ({ trees, onAddDweller, onAddTree }: TreeStackProps) => {
  return (
    <Stack direction="row" alignItems="center" gap={5}>
      {trees.map((tree) => (
        <TreeSlot
          key={tree.id}
          tree={tree}
          onAddDweller={(position) => onAddDweller?.(tree.id, position)}
        />
      ))}

      <AddTreeButton onClick={onAddTree} />
    </Stack>
  );
};

export default TreeStack;
