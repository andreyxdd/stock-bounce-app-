import { Container, Grid, Divider, Typography } from '@mui/material';
import shallow from 'zustand/shallow';
import React from 'react';
import Navbar from './Navbar';
import PickDater from './PickDater';
import Footer from './Footer';
import useStore, { IStore } from '../hooks/useStore';
import PeriodSelectors from './PeriodSelectors';

interface ILayoutProps {
  children: React.ReactNode;
}

const shortTermPeriods = ['T + 1', 'T', 'T - 1', 'T - 2', 'T - 3', 'T - 4'];

const longTermPeriods = [
  'T - 5',
  'T - 6',
  'T - 7',
  'T - 8',
  'T - 9',
  'T - 10',
  'T - 11',
  'T - 12',
  'T - 13',
  'T - 14',
  'T - 15',
  'T - 16',
];

const Layout = ({ children }: ILayoutProps) => {
  const [period, term] = useStore(
    (state: IStore) => [state.period, state.term, state.setPeriod],
    shallow
  );

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
            <Typography style={{ textAlign: 'right' }}>
              Select past period
            </Typography>
            <PeriodSelectors
              selectors={term === 'short' ? shortTermPeriods : longTermPeriods}
              offset={term === 'short' ? 0 : 6}
            />
          </div>
        </Grid>
      </Grid>
      <Divider />
      <Container maxWidth="xl" style={{ minHeight: 630 }}>
        <Typography variant="h6" sx={{ mb: 1, mt: 2, fontSize: 16 }}>
          {period + 1}
        </Typography>
        <div style={{ width: '100%', minHeight: 630, marginBottom: 20 }}>
          {children}
        </div>
        <Footer />
      </Container>
    </div>
  );
};

export default Layout;
