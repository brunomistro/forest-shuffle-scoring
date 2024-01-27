import { Box, Stack } from "@mui/joy";

import DwellerSlot from "@/components/DwellerSlot";
import TreeCard from "@/components/TreeCard";
import { DwellerPosition, TreeCard as TreeCardType } from "@/lib/cards";

interface TreeSlotProps {
  tree: TreeCardType;
  onAddDweller?: (position: DwellerPosition) => void;
}

const TreeSlot = ({ tree, onAddDweller }: TreeSlotProps) => {
  return (
    <Box
      display="grid"
      gridTemplateColumns="auto auto auto"
      gridTemplateRows="1fr auto 1fr"
    >
      <Stack
        direction="column"
        justifyContent="flex-end"
        sx={{ gridColumnStart: 2 }}
      >
        <DwellerSlot
          tree={tree}
          position={DwellerPosition.Top}
          onAdd={() => onAddDweller?.bind(null, DwellerPosition.Top)}
        />
      </Stack>

      <Stack
        direction="row"
        justifyContent="flex-end"
        sx={{ gridColumnStart: 1, zIndex: 2 }}
      >
        <DwellerSlot
          tree={tree}
          position={DwellerPosition.Left}
          onAdd={() => onAddDweller?.bind(null, DwellerPosition.Left)}
        />
      </Stack>

      <TreeCard card={tree} sx={{ zIndex: 3 }} />

      <Stack direction="row" justifyContent="flex-start" sx={{ zIndex: 2 }}>
        <DwellerSlot
          tree={tree}
          position={DwellerPosition.Right}
          onAdd={() => onAddDweller?.bind(null, DwellerPosition.Right)}
        />
      </Stack>

      <Stack
        direction="column"
        justifyContent="flex-start"
        sx={{ gridColumnStart: 2 }}
      >
        <DwellerSlot
          tree={tree}
          position={DwellerPosition.Bottom}
          onAdd={() => onAddDweller?.bind(null, DwellerPosition.Bottom)}
        />
      </Stack>
    </Box>
  );
};

export default TreeSlot;
