import { Box } from "@mui/material";
import { FC } from "react";
import Header from "./header/Header.component";

interface IHomeProps {}

const Home: FC<IHomeProps> = () => {
  return (
    <Box>
      <Box height="34px" sx={{ backgroundColor: "#0F3460" }}>
        call me
      </Box>
      <Box marginX="auto" maxWidth="1200px">
        <Header />
      </Box>
    </Box>
  );
};

export default Home;
