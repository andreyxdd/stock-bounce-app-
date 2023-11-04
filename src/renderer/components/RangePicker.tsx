import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import React from 'react';
import useStore from '../hooks/useStore';

const label = 'Select closing price range';

const avaibleRanges = [
  'unlimited',
  '(48.0 - 99.99)',
  '(100.0 - 299.99)',
  '(300.0 - 499.99)',
  '(500.0 - 1000.0)',
];

function RangePicker() {
  const selectedRange = useStore((state) => state.selectedRange);
  const handleChange = (event: SelectChangeEvent) => {
    useStore.setState({
      selectedRange: event.target.value as any,
    });
  };

  return (
    <FormControl fullWidth>
      <InputLabel id="select-range-input">{label}</InputLabel>
      <Select
        labelId="select-range-label"
        id="select-range-select"
        value={selectedRange}
        label={label}
        onChange={handleChange}
      >
        {avaibleRanges.map((value: string) => (
          <MenuItem key={value} value={value}>
            {value}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default RangePicker;
