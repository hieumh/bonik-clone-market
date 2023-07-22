import { Button, styled } from '@mui/material';

const StyledButton = styled(Button)({
  color: 'black',
  textTransform: 'none',
  '&:active': {
    color: 'red',
  },
});

export default StyledButton;
