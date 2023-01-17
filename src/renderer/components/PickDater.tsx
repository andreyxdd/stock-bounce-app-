import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import TextField from '@mui/material/TextField';
import shallow from 'zustand/shallow';
import useStore, { IStore } from '../hooks/useStore';
import useDates from '../hooks/useDates';

const PickDater = () => {
  const { data, isLoading } = useDates();

  const handleChange = (newValue: Date | null) => {
    if (newValue !== null) {
      console.log(newValue.toISOString().split('T')[0]);
    }
  };

  if (!data) return null;

  const disableDates = (d: Date) => {
    return !data.availableDates.includes(d.toISOString().split('T')[0]);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DesktopDatePicker
        label="Select T + 2 period"
        value={
          new Date(data.selectedDate).getTime() +
          new Date(data.selectedDate).getTimezoneOffset() * 60000
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

export default PickDater;
