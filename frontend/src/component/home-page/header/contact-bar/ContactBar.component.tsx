import { COLORS } from "@/constants/ui.constant";
import {
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  Typography,
  styled,
} from "@mui/material";
import { FC, useState } from "react";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import Flag from "react-world-flags";
import { useDispatch } from "react-redux";
import { setCurrentCountry } from "@/store/appSlice/app.slice";
import { ESupportCountry } from "@/model/common.model";

const StyledSelect = styled(Select)({
  width: "fit-content",
  "& li": {
    display: "flex",
    flexDirection: "row",
    gap: ".375rem",
  },
  "& .MuiSelect-select": {
    display: "flex",
    flexDirection: "row",
    gap: ".5rem",
    alignItems: "center",
    color: "white",
    fontSize: ".875rem",
  },
  "& svg": {
    color: "white",
  },
});

const StyledMenuItem = styled(MenuItem)({
  display: "flex",
  flexDirection: "row",
  gap: ".375rem",
});

const ContactBar: FC = () => {
  const dispatch = useDispatch();

  const handleSelectCountry = (event: SelectChangeEvent<unknown>) => {
    dispatch(setCurrentCountry(event.target.value as ESupportCountry));
  };

  return (
    <Stack
      flexDirection="row"
      justifyContent="space-between"
      color={COLORS.white}
      alignItems="center"
      height="100%"
    >
      <Stack flexDirection="row" gap=".5rem">
        <PhoneOutlinedIcon fontSize="small" />
        <Typography variant="caption">+88012 3456 7894</Typography>

        <MailOutlineOutlinedIcon fontSize="small" />
        <Typography variant="caption">support@ui-lib.com</Typography>
      </Stack>

      <Stack flexDirection="row" gap=".875rem" alignItems="center">
        <Typography variant="caption">Theme FAQ"s</Typography>

        <Typography variant="caption">Need help?</Typography>

        <StyledSelect
          variant="standard"
          size="small"
          onChange={handleSelectCountry}
        >
          <StyledMenuItem value="us">
            <Flag code="us" height="12" />

            <Typography>US</Typography>
          </StyledMenuItem>

          <StyledMenuItem value="vn">
            <Flag code="vn" height="12" />

            <Typography>VN</Typography>
          </StyledMenuItem>

          <StyledMenuItem value="hn">
            <Flag code="hn" height="12" />

            <Typography>HN</Typography>
          </StyledMenuItem>
        </StyledSelect>
      </Stack>
    </Stack>
  );
};

export default ContactBar;
