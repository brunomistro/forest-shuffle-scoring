import CircleIcon from "@mui/icons-material/Circle";
import { SxProps } from "@mui/system";

import { TreeSymbol as TreeSymbolType } from "@/lib/cards/types";
import { getColorOfTreeSymbol } from "@/styles/colors";

interface TreeSymbolProps {
  value: TreeSymbolType;
  sx?: SxProps;
}

const TreeSymbol = ({ value, sx }: TreeSymbolProps) => (
  <CircleIcon
    fontSize="small"
    sx={{ ...sx, color: getColorOfTreeSymbol(value) }}
  />
);

export default TreeSymbol;
