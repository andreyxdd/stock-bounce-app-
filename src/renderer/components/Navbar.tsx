import React from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
} from '@mui/material';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import shallow from 'zustand/shallow';
import useStore, { IStore } from '../hooks/useStore';

const Navbar = () => {
  const [term, setTerm] = useStore(
    (state: IStore) => [state.term, state.setTerm],
    shallow
  );

  const handleClick = (
    e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>,
    newTerm: 'short' | 'long'
  ) => {
    e.preventDefault();
    setTerm(newTerm);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <SportsBasketballIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Stock-Bounce
          </Typography>
          <Button
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            variant={term === 'short' ? 'contained' : 'outlined'}
            color="secondary"
            sx={{ mr: 2 }}
            onClick={(e) => handleClick(e, 'short')}
          >
            Short Term
          </Button>
          <Button
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            variant={term === 'long' ? 'contained' : 'outlined'}
            color="secondary"
            sx={{ mr: 2 }}
            onClick={(e) => handleClick(e, 'long')}
          >
            Long Term
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
