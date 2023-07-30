import { FC } from "react";
import { IBanner } from "../banner.model";
import { Stack, Typography } from "@mui/material";
import StyledButtonRed from "@/common/button/StyledButtonRed.component";

const VerticalBanner: FC<IBanner> = ({
  title,
  description,
  handleShopNow,
  href,
}) => {
  return (
    <Stack
      flexDirection="row"
      sx={{
        minWidth: "100%",
        paddingY: "16px",
      }}
      alignItems="center"
    >
      <Stack
        flexDirection="column"
        justifyContent="flex-start"
        flexBasis="70%"
        gap="10px"
      >
        <Typography variant="h3" fontWeight="bold">
          {title}
        </Typography>

        <Typography variant="body1">{description}</Typography>

        <StyledButtonRed
          fullWidth={false}
          onClick={handleShopNow}
          sx={{
            alignSelf: "flex-start",
          }}
        >
          Shop now
        </StyledButtonRed>
      </Stack>

      <img src={href} alt="current product" style={{ flexBasis: "30%" }} />
    </Stack>
  );
};

export default VerticalBanner;
