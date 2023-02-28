import { Container, Grid, Divider, Typography } from '@mui/material';
import shallow from 'zustand/shallow';
import Navbar from './Navbar';
import DatePicker from './DatePicker';
import Footer from './Footer';
import useDates from '../hooks/useDates';
import useStore from '../hooks/useStore';
import PeriodPicker from './PeriodPicker';
import { getNextDates, periodArrays, termDescription } from './utils';
import TrackPicker from './TrackPicker';

interface ILayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: ILayoutProps) => {
  const { data: avaibleDates } = useDates();
  const [currentTerm, selectedDate] = useStore(
    (state) => [state.term, state.selectedDate],
    shallow
  );
  const { title, desc } = termDescription[currentTerm];
  const availableTrackDates = getNextDates(selectedDate, avaibleDates);

  return (
    <div>
      <Navbar />
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={2}
        sx={{ pl: 4, pr: 4, pt: 4, pb: 2 }}
      >
        <Grid item>
          <DatePicker />
        </Grid>
        <Grid item xs>
          {availableTrackDates ? (
            <TrackPicker availableTrackDates={availableTrackDates} />
          ) : null}
        </Grid>
        <Grid item xs>
          <PeriodPicker
            selectors={periodArrays[currentTerm]}
            offset={currentTerm === 'short' ? 0 : 6}
          />
        </Grid>
      </Grid>
      <Divider />
      <Container
        maxWidth="xl"
        style={{ minHeight: 630, justifyContent: 'space-between' }}
      >
        <div style={{ marginLeft: '2.5%', marginRight: '2.5%' }}>
          <Typography variant="h6" sx={{ mb: 1, mt: 2, fontSize: 16 }}>
            {title}
          </Typography>
          <Typography variant="caption" sx={{ mb: 1, mt: 1 }}>
            {desc}
          </Typography>
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
