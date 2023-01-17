import { Container, Grid, Divider, Typography } from '@mui/material';
import shallow from 'zustand/shallow';
import React from 'react';
import Navbar from './Navbar';
import PickDater from './PickDater';
import Footer from './Footer';
import useStore, { IStore } from '../hooks/useStore';
import PeriodSelectors from './PeriodSelectors';
import { periodArrays, termDescription } from './utils';

interface ILayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: ILayoutProps) => {
  const { term } = useStore.getState();
  const { title, desc } = termDescription[term];

  return (
    <div>
      <Navbar />
      <Grid
        sx={{ pl: 4, pr: 4, pt: 4, pb: 2 }}
        container
        justifyContent="center"
        alignItems="center"
      >
        <Grid
          item
          container
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <PickDater />
          <div>
            <Typography style={{ textAlign: 'right', fontWeight: 500 }}>
              Select past period
            </Typography>
            <PeriodSelectors
              selectors={periodArrays[term]}
              offset={term === 'short' ? 0 : 6}
            />
          </div>
        </Grid>
      </Grid>
      <Divider />
      <Container maxWidth="xl" style={{ minHeight: 630 }}>
        <div style={{ marginLeft: '10%', marginRight: '10%' }}>
          <Typography variant="h6" sx={{ mb: 1, mt: 2, fontSize: 16 }}>
            {title}
          </Typography>
          <Typography sx={{ mb: 1, mt: 2, fontSize: 14 }}>{desc}</Typography>
        </div>
        <div style={{ width: '100%', minHeight: 630, marginBottom: 20 }}>
          {children}
        </div>
        <Footer />
      </Container>
    </div>
  );
};

export default Layout;
