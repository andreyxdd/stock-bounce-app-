import React from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
} from '@mui/material';
import SportsBasketballTwoToneIcon from '@mui/icons-material/SportsBasketballTwoTone';
import shallow from 'zustand/shallow';
import useStore from '../hooks/useStore';

const Navbar = () => {
  const [currentTerm, selectedDate] = useStore(
    (state) => [state.term, state.selectedDate],
    shallow
  );
  const handleClick = (
    e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>,
    term: 'short' | 'long'
  ) => {
    e.preventDefault();
    useStore.setState({
      term,
      period: term === 'short' ? 0 : 5,
      isTracking: false,
      selectedTrackingDate: selectedDate,
    });
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
            <SportsBasketballTwoToneIcon color="secondary" />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Stock-Bounce
          </Typography>
          <Button
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            variant={currentTerm === 'short' ? 'contained' : 'outlined'}
            color="secondary"
            sx={{ mr: 2 }}
            onClick={(e) => handleClick(e, 'short')}
          >
            Short Term
          </Button>
          <Button
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            variant={currentTerm === 'long' ? 'contained' : 'outlined'}
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
