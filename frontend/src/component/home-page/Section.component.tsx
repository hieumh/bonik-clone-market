import { SOMETHING_WENT_WRONG } from "@/constants/common.constant";
import { Box, Stack, Typography } from "@mui/material";
import { FC, ReactNode } from "react";

interface ISectionProps {
  children: ReactNode;
  srcIcon: string;
  title: string;
  hasError: boolean;
}

const Section: FC<ISectionProps> = ({ children, title, srcIcon, hasError }) => {
  return (
    <Box>
      <Stack flexDirection="row" gap=".25rem" alignItems="center" mb="1.5rem">
        <img
          src={srcIcon}
          alt="flash deal"
          style={{
            width: "1.5rem",
            height: "1.5rem",
          }}
        />

        <Typography fontSize="1.625rem" fontWeight="bold">
          {title}
        </Typography>
      </Stack>

      <Stack flexDirection="row" gap="1rem" overflow="auto">
        {children}
      </Stack>

      {hasError && <Box>{SOMETHING_WENT_WRONG}</Box>}
    </Box>
  );
};

export default Section;
