import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import TextField from '@mui/material/TextField';
import useDates from '../hooks/useDates';
import useStore from '../hooks/useStore';

const DatePicker = () => {
  const selectedDate = useStore((state) => state.selectedDate);
  const { data: availableDates, isLoading } = useDates();

  const handleChange = (newValue: Date | null) => {
    if (newValue !== null) {
      useStore.setState({ selectedDate: newValue.toISOString().split('T')[0] });
    }
  };

  if (!availableDates || !selectedDate) return null;

  const disableDates = (d: Date) => {
    return !availableDates.includes(d.toISOString().split('T')[0]);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DesktopDatePicker
        label="Select T + 2 period"
        value={
          new Date(selectedDate).getTime() +
          new Date(selectedDate).getTimezoneOffset() * 60000
        }
        onChange={handleChange}
        renderInput={(params) => (
          // eslint-disable-next-line react/jsx-props-no-spreading
          <TextField {...params} style={{ width: 200 }} />
        )}
        shouldDisableDate={disableDates}
        loading={isLoading}
      />
    </LocalizationProvider>
  );
};

export default DatePicker;
