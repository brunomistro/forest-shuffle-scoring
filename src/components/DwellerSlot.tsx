import AddDwellerButton from "@/components/AddDwellerButton";
import DwellerCard from "@/components/DwellerCard";
import {
  DwellerCard as DwellerCardType,
  DwellerPosition,
  TreeCard as TreeCardType,
} from "@/lib/cards";

interface DwellerSlotProps {
  tree: TreeCardType;
  position: DwellerPosition;
  onAdd: () => void;
}

const canAddDweller = (dwellers: DwellerCardType[]) =>
  dwellers.length === 0 ||
  dwellers.some((d) => d.modifiers.sharesSlotWith > dwellers.length - 1);

const getAttachPosition = (position: DwellerPosition) => {
  switch (position) {
    case DwellerPosition.Top:
      return "bottom";
    case DwellerPosition.Bottom:
      return "top";
    case DwellerPosition.Left:
      return "right";
    case DwellerPosition.Right:
      return "left";
  }
};

const DwellerSlot = ({ tree, position, onAdd }: DwellerSlotProps) => {
  const dwellers = tree.dwellers[position];
  return (
    <>
      {canAddDweller(dwellers) && (
        <AddDwellerButton position={position} onClick={onAdd} />
      )}

      {dwellers.map((dweller) => (
        <DwellerCard
          compact
          key={dweller.id}
          card={dweller}
          attached={getAttachPosition(position)}
        />
      ))}
    </>
  );
};

export default DwellerSlot;
