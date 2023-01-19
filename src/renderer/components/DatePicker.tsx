import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import TextField from '@mui/material/TextField';
import SkeletonLoader from 'tiny-skeleton-loader-react';
import useDates from '../hooks/useDates';
import useStore from '../hooks/useStore';

const DatePicker = () => {
  const selectedDate = useStore((state) => state.selectedDate);
  const { data: availableDates, isLoading } = useDates();

  const handleChange = (newValue: Date | null) => {
    if (newValue !== null) {
      const date = newValue.toISOString().split('T')[0];
      useStore.setState({
        selectedDate: date,
        selectedTrackingDate: date,
      });
    }
  };

  if (!availableDates || !selectedDate)
    return <SkeletonLoader style={{ width: 200, height: 50 }} />;

  const disableDates = (d: Date) => {
    return !availableDates.includes(d.toISOString().split('T')[0]);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} fullWidth>
      <DesktopDatePicker
        label="Select period T"
        value={
          new Date(selectedDate).getTime() +
          new Date(selectedDate).getTimezoneOffset() * 60000
        }
        onChange={handleChange}
        renderInput={(params) => (
          // eslint-disable-next-line react/jsx-props-no-spreading
          <TextField {...params} />
        )}
        shouldDisableDate={disableDates}
        loading={isLoading}
      />
    </LocalizationProvider>
  );
};

export default DatePicker;
