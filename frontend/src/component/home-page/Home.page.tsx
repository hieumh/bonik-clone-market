import { Box } from "@mui/material";
import { FC } from "react";
import Header from "./header/Header.component";
import FlashDeals from "./flash-deals/FlashDeals.component";

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

      <Box mx="30px">
        <FlashDeals />
      </Box>
      {/* 

    <Box>
      <TopCategory />
    </Box>

    <Box>
      <TopRatings />
    </Box>

    <Box>
      <FeaturedBrands />
    </Box> */}
    </Box>
  );
};

export default Home;
