import { useIntl } from "react-intl";

import ParkIcon from "@mui/icons-material/Park";
import { Card, CardContent, Stack, Typography } from "@mui/joy";
import { SxProps } from "@mui/joy/styles/types";

import TreeSymbol from "@/components/TreeSymbol";
import { TreeCard as TreeCardType } from "@/lib/cards/types";
import { getBackgroundForCardTypes } from "@/styles/colors";
import { CARD_SIZES } from "@/styles/sizes";
import { getLocalizedCardName } from "@/translations/messages/CardNames";

interface ForestCardProps {
  card: TreeCardType;
  sx?: SxProps;
}

const TreeCard = ({ card, sx }: ForestCardProps) => {
  const intl = useIntl();

  return (
    <Card
      variant="plain"
      sx={{
        ...sx,
        ...CARD_SIZES,
        background: getBackgroundForCardTypes(card.types),
        boxShadow: "card",
      }}
    >
      <CardContent>
        <Stack direction="column" alignItems="center" sx={{ height: "100%" }}>
          {card.treeSymbol && (
            <TreeSymbol value={card.treeSymbol} sx={{ alignSelf: "end" }} />
          )}
          <ParkIcon sx={{ color: "neutral.100", width: "80%", flexGrow: 1 }} />
          <Typography level="title-lg" textColor="neutral.100">
            {getLocalizedCardName(intl, card.name)}
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default TreeCard;
