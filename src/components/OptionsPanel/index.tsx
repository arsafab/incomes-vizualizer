import React, { FC, useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import { Wrapper } from '../Wrapper';
import { MONTHS, Month } from '../../constants';
import { AddModal } from '../AddModal';
import { useAppDispatch } from '../../redux/hooks';
import { setMonth as setMonthDispatch } from '../../redux/slices/options.slice';

export const OptionsPanel: FC = () => {
  const currentMonth = MONTHS[new Date().getMonth()];
  const [month, setMonth] = useState(currentMonth);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setMonthDispatch(month));
  }, [month]);

  const handleMonthChange = (event: SelectChangeEvent) => {
    const month = event.target.value as Month;
    setMonth(month);
  };

  return (
    <Wrapper flexDirection="row" justifyContent="space-between" alignItems="center">
      <Box sx={{ minWidth: 120 }}>
        <AddModal />
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
