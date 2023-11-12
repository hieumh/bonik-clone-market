import { Box, Stack } from "@mui/material";
import { FC } from "react";
import Header from "./header/Header.component";
import FlashDeals from "./all-sections/flash-deals/FlashDeals.component";
import ContactBar from "./header/contact-bar/ContactBar.component";
import TopCategory from "./all-sections/top-categories/TopCategory.component";
import TopRatings from "./all-sections/top-ratings/TopRatings.component";
import FeatureBrand from "./all-sections/feature-branch/FeatureBranch.component";

interface IHomeProps {}

const Home: FC<IHomeProps> = () => {
  return (
    <>
      <Box sx={{ backgroundColor: "#0F3460" }}>
        <Box height="2.125rem" marginX="auto" width="75rem" maxWidth="75rem">
          <ContactBar />
        </Box>
      </Box>

      <Stack
        flexDirection="column"
        gap="1.25rem"
        marginX="auto"
        width="75rem"
        maxWidth="75rem"
      >
        <Box>
          <Header />
        </Box>

        <Box>
          <FlashDeals />
        </Box>

        <Box>
          <TopCategory />
        </Box>

        <Box>
          <TopRatings />
        </Box>

        <Box>
          <FeatureBrand />
        </Box>

        {/* <Box>
        <FeaturedBrands />
      </Box> */}
      </Stack>
    </>
  );
};

export default Home;
