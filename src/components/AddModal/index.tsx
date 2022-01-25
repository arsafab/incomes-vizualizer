import React, { ChangeEvent, FC, useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Wrapper } from '../Wrapper';
import { useAppDispatch } from '../../redux/hooks';
import { add } from '../../redux/slices/items.slice';

export const AddModal: FC = () => {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [value, setValue] = useState(0);
  const [currency, setCurrency] = useState('USD');
  const dispatch = useAppDispatch();

  const titleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value as string);
  };

  const valueChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(Number(event.target.value));
  };

  const currencyChange = (event: SelectChangeEvent) => {
    setCurrency(event.target.value as string);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAdd = () => {
    dispatch(
      add({
        id: `${title}${currency}${value}`,
        title,
        value,
        currency,
      }),
    );
    clearValues();
    handleClose();
  };

  const clearValues = () => {
    setCurrency('USD');
    setTitle('');
    setValue(0);
  };

  return (
    <div>
      <Button variant="contained" onClick={handleClickOpen}>
        Add income
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          <Wrapper flexDirection="column" justifyContent="space-between" alignItems="center">
            <TextField
              required
              autoFocus
              margin="dense"
              id="title"
              label="Title"
              type="text"
              fullWidth
              variant="standard"
              onChange={titleChange}
            />
            <TextField
              required
              margin="dense"
              id="value"
              label="Value"
              type="number"
              fullWidth
              variant="standard"
              onChange={valueChange}
            />
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="currency">Currency</InputLabel>
              <Select
                labelId="Currency"
                value={currency}
                label="Currency"
                defaultValue="USD"
                fullWidth
                onChange={currencyChange}
              >
                <MenuItem value="USD">USD</MenuItem>
                <MenuItem value="EUR">EUR</MenuItem>
                <MenuItem value="BYN">BYN</MenuItem>
                <MenuItem value="RUB">RUB</MenuItem>
                <MenuItem value="PLN">PLN</MenuItem>
              </Select>
            </FormControl>
          </Wrapper>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button variant="contained" disabled={!title || !value} onClick={handleAdd}>
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
