import { useIntl } from "react-intl";

import { Card, CardContent, Stack, Typography } from "@mui/joy";
import { SxProps } from "@mui/joy/styles/types";

import TreeSymbol from "@/components/TreeSymbol";
import {
  DwellerCard as DwellerCardType,
  DwellerPosition,
} from "@/lib/cards/types";
import { getBackgroundForCardTypes } from "@/styles/colors";
import { CARD_SIZES } from "@/styles/sizes";
import { getLocalizedCardName } from "@/translations/messages/CardNames";

type AttachPosition = "top" | "bottom" | "left" | "right";

interface ForestCardProps {
  card: DwellerCardType;
  attached?: AttachPosition;
  compact?: boolean;
  sx?: SxProps;
}

const getAttachedStyles = (attached?: AttachPosition) => {
  if (!attached) {
    return {};
  }

  return {
    [`padding-${attached}`]: "calc(var(--Card-padding) + var(--Card-radius))",
    [`margin-${attached}`]: "calc(-1 * var(--Card-radius))",
    ...(["top", "bottom"].includes(attached) && {
      [`border-${attached}-left-radius`]: 0,
      [`border-${attached}-right-radius`]: 0,
    }),
    ...(["left", "right"].includes(attached) && {
      [`border-top-${attached}-radius`]: 0,
      [`border-bottom-${attached}-radius`]: 0,
    }),
  };
};

const DwellerCard = ({ card, attached, compact, sx }: ForestCardProps) => {
  const intl = useIntl();

  const hasHorizontalSplit = [
    DwellerPosition.Top,
    DwellerPosition.Bottom,
  ].includes(card.position);
  const isTopOrLeft = [DwellerPosition.Top, DwellerPosition.Left].includes(
    card.position,
  );

  return (
    <Card
      variant="plain"
      sx={{
        ...sx,
        ...getAttachedStyles(attached),
        background: getBackgroundForCardTypes(
          card.types,
          hasHorizontalSplit ? "horizontal" : "vertical",
        ),
        width: hasHorizontalSplit || !compact ? CARD_SIZES.width : "auto",
        height: !hasHorizontalSplit || !compact ? CARD_SIZES.height : "auto",
        boxShadow: "card",
      }}
    >
      <CardContent>
        <Stack
          direction={hasHorizontalSplit ? "column" : "row"}
          justifyContent={isTopOrLeft ? "flex-start" : "flex-end"}
          sx={{ height: "100%", width: "100%" }}
        >
          <Stack
            direction={hasHorizontalSplit ? "row" : "column"}
            alignItems="center"
            justifyContent="space-between"
            sx={{
              height: hasHorizontalSplit ? "fit-content" : "100%",
              width: hasHorizontalSplit ? "100%" : "fit-content",
            }}
          >
            <Typography
              level="title-lg"
              textColor="neutral.100"
              sx={{
                writingMode: hasHorizontalSplit
                  ? "horizontal-tb"
                  : "vertical-lr",
              }}
            >
              {getLocalizedCardName(intl, card.name)}
            </Typography>
            {card.treeSymbol && <TreeSymbol value={card.treeSymbol} />}
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default DwellerCard;
