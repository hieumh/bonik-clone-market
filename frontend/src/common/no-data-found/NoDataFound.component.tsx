import { Typography } from "@mui/material";
import { FC } from "react";

interface INoDataFound {}

const NoDataFound: FC<INoDataFound> = () => {
  return <Typography>No Data Found ...</Typography>;
};

export default NoDataFound;
