import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import shallow from 'zustand/shallow';
import useStore from '../hooks/useStore';

type Props = {
  selectors: Array<string>;
  offset: number;
};

const label = 'Select number of periods to compute cumulative OP/CP change';

const PeriodSelectors = ({ selectors, offset }: Props) => {
  const [currentPeriod, selectedDate] = useStore(
    (state) => [state.period, state.selectedDate],
    shallow
  );
  const handleChange = (event: SelectChangeEvent) => {
    useStore.setState({
      period: (event.target.value + offset) as any,
      isTracking: false,
      selectedTrackingDate: selectedDate,
    });
  };
  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">{label}</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={(currentPeriod - offset).toString()}
        label={label}
        onChange={handleChange}
      >
        {selectors.map((periodStr: string, idx: number) => (
          <MenuItem key={periodStr} value={idx}>
            {periodStr}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default PeriodSelectors;
