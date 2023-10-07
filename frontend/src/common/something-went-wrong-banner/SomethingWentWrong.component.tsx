import { Typography } from "@mui/material";
import { FC } from "react";

interface ISomethingWentWrong {}

const SomethingWentWrong: FC<ISomethingWentWrong> = () => {
  return <Typography>Something went wrong...</Typography>;
};

export default SomethingWentWrong;
