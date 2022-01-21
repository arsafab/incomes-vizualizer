import React, { FC } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { useAppSelector, useAppDispatch } from '../../redux/hooks';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { decrement, increment } from '../../redux/slices/user.slice';

import { Wrapper } from '../../components/Wrapper';

export const CategoriesView: FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const count = useAppSelector((state) => state.user.value);
  const dispatch = useAppDispatch();

  const test = () => {
    dispatch(increment());
  };

  return (
    <Wrapper flexDirection="column" alignItems="space-evenly">
      <button onClick={test}>Click</button>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
            leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content" id="panel2a-header">
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
            leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion disabled>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel3a-content" id="panel3a-header">
          <Typography>Disabled Accordion</Typography>
        </AccordionSummary>
      </Accordion>
    </Wrapper>
  );
};

// import React, { useState } from 'react'

// import { useAppSelector, useAppDispatch } from 'app/hooks'

// import { decrement, increment } from './counterSlice'

// export function Counter() {
//   // The `state` arg is correctly typed as `RootState` already
//   const count = useAppSelector((state) => state.counter.value)
//   const dispatch = useAppDispatch()

//   // omit rendering logic
// }
