import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import SkeletonLoader from 'tiny-skeleton-loader-react';
import shallow from 'zustand/shallow';
import useStore from '../hooks/useStore';

type Props = {
  availableTrackDates: Array<string>;
};

const getLabel = (id: number) => {
  if (id === 0) {
    return 'Current Period (T)';
  }
  if (id === 1) {
    return 'Period (T+1)';
  }
  if (id === 2) {
    return 'Period (T+2)';
  }
  return '';
};

const label = 'Select tracking period';

function TrackPicker({ availableTrackDates }: Props) {
  const [selectedDate, selectedTrackingDate] = useStore(
    (state) => [state.selectedDate, state.selectedTrackingDate],
    shallow
  );
  const handleChange = (event: SelectChangeEvent) => {
    console.log(selectedDate !== event.target.value);
    useStore.setState({
      selectedTrackingDate: event.target.value,
      isTracking: selectedDate !== event.target.value,
    });
  };

  if (!selectedTrackingDate || !availableTrackDates.length)
    return <SkeletonLoader style={{ width: '100%', height: 50 }} />;

  return (
    <FormControl fullWidth>
      <InputLabel id="select-tracking-date-input">{label}</InputLabel>
      <Select
        labelId="select-tracking-date-label"
        id="select-tracking-date-select"
        value={selectedTrackingDate}
        label={label}
        onChange={handleChange}
      >
        {availableTrackDates.map((value: string, idx: number) => (
          <MenuItem key={`${selectedTrackingDate}-${value}`} value={value}>
            {getLabel(idx)}: {value}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default TrackPicker;
