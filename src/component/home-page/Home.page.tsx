import { Box } from '@mui/material';
import { FC } from 'react';
import Header from './header/Header.component';

interface IHomeProps {}

const Home: FC<IHomeProps> = () => {
  return <Box>
    <Header />
  </Box>;
};

export default Home;
