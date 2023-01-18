import { Container, Grid, Divider, Typography } from '@mui/material';
import Navbar from './Navbar';
import DatePicker from './DatePicker';
import Footer from './Footer';
import useStore from '../hooks/useStore';
import PeriodPicker from './PeriodPicker';
import { periodArrays, termDescription } from './utils';

interface ILayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: ILayoutProps) => {
  const currentTerm = useStore((state) => state.term);
  const { title, desc } = termDescription[currentTerm];

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
          <DatePicker />
          <div>
            <Typography style={{ textAlign: 'right', fontWeight: 500 }}>
              Select past period
            </Typography>
            <PeriodPicker
              selectors={periodArrays[currentTerm]}
              offset={currentTerm === 'short' ? 0 : 6}
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
