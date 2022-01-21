import React, { FC, useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import { Wrapper } from '../Wrapper';
import { MONTHS, VIEWS, View, Month } from '../../constants';

export const OptionsPanel: FC = () => {
  const currentMonth = MONTHS[new Date().getMonth()];
  const [month, setMonth] = useState(currentMonth);
  const [view, setView] = useState(View.Table);

  const handleMonthChange = (event: SelectChangeEvent) => {
    setMonth(event.target.value as Month);
  };

  const handleViewChange = (event: SelectChangeEvent) => {
    setView(event.target.value as View);
  };

  return (
    <Wrapper flexDirection="row" justifyContent="space-between">
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="view">View</InputLabel>
          <Select labelId="view" value={view} label="View" onChange={handleViewChange}>
            {VIEWS.map((view) => (
              <MenuItem key={view} value={view}>
                {view}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="month">Month</InputLabel>
          <Select labelId="month" value={month} label="Month" onChange={handleMonthChange}>
            {MONTHS.map((month) => (
              <MenuItem key={month} value={month}>
                {month}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </Wrapper>
  );
};
