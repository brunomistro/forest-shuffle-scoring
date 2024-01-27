import { MouseEventHandler } from "react";

import AddIcon from "@mui/icons-material/Add";
import { IconButton } from "@mui/joy";

import { DwellerPosition } from "@/lib/cards";
import { CARD_SIZES } from "@/styles/sizes";

interface AddDwellerButtonProps {
  position: DwellerPosition;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
}

const SMALL_SIZE = "48px";

const getStyle = (position: DwellerPosition) => {
  const common = {
    borderStyle: "dashed",
  };
  if (position === DwellerPosition.Top) {
    return {
      ...common,
      height: SMALL_SIZE,
      width: CARD_SIZES.width,
      mb: 1,
    };
  } else if (position === DwellerPosition.Bottom) {
    return {
      ...common,
      height: SMALL_SIZE,
      width: CARD_SIZES.width,
      mt: 1,
    };
  } else if (position === DwellerPosition.Left) {
    return {
      ...common,
      height: CARD_SIZES.height,
      width: SMALL_SIZE,
      mr: 1,
    };
  } else if (position === DwellerPosition.Right) {
    return {
      ...common,
      height: CARD_SIZES.height,
      width: SMALL_SIZE,
      ml: 1,
    };
  }
};

const AddDwellerButton = ({ position, onClick }: AddDwellerButtonProps) => (
  <IconButton
    variant="outlined"
    size="lg"
    sx={getStyle(position)}
    onClick={onClick}
  >
    <AddIcon />
  </IconButton>
);

export default AddDwellerButton;
