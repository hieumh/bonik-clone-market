import { FC } from "react";
import { IBanner } from "../banner.model";
import { Button, Stack, Typography } from "@mui/material";

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
        paddingY: "1rem",
      }}
      alignItems="center"
    >
      <Stack
        flexDirection="column"
        justifyContent="flex-start"
        flexBasis="70%"
        gap=".625rem"
      >
        <Typography variant="h3" fontWeight="bold">
          {title}
        </Typography>

        <Typography variant="body1">{description}</Typography>

        <Button
          fullWidth={false}
          onClick={handleShopNow}
          variant="contained"
          sx={{
            alignSelf: "flex-start",
          }}
        >
          Shop now
        </Button>
      </Stack>

      <img src={href} alt="current product" style={{ flexBasis: "30%" }} />
    </Stack>
  );
};

export default VerticalBanner;
