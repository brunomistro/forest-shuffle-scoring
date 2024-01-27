import { MouseEventHandler } from "react";

import AddIcon from "@mui/icons-material/Add";
import { IconButton } from "@mui/joy";

import { CARD_SIZES } from "@/styles/sizes";

interface AddTreeButtonProps {
  onClick?: MouseEventHandler<HTMLAnchorElement>;
}

const AddTreeButton = ({ onClick }: AddTreeButtonProps) => (
  <IconButton
    variant="outlined"
    size="lg"
    sx={{
      ...CARD_SIZES,
      borderStyle: "dashed",
    }}
    onClick={onClick}
  >
    <AddIcon />
  </IconButton>
);

export default AddTreeButton;
