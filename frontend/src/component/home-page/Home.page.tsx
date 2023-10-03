import { Box } from "@mui/material";
import { FC } from "react";
import Header from "./header/Header.component";
import FlashDeals from "./flash-deals/FlashDeals.component";
import ContactBar from "./header/contact-bar/ContactBar.component";

interface IHomeProps {}

const Home: FC<IHomeProps> = () => {
  return (
    <Box>
      <Box sx={{ backgroundColor: "#0F3460" }}>
        <Box height="2.125rem" marginX="auto" maxWidth="75rem">
          <ContactBar />
        </Box>
      </Box>

      <Box marginX="auto" maxWidth="75rem">
        <Header />
      </Box>

      <Box mx="1.875rem">
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
