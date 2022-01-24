import React, { FC } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import { Wrapper } from '../Wrapper';
import { RootState } from '../../redux/store';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { remove } from '../../redux/slices/items.slice';

export const TableView: FC = () => {
  const data = useAppSelector((state: RootState) => state.items.data);
  const dispatch = useAppDispatch();

  const deleteItem = (id: string) => {
    dispatch(remove(id));
  };

  return (
    <Wrapper flexDirection="row" justifyContent="center" width="800px" margin="0 auto">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 400, maxWidth: 800 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Value</TableCell>
              <TableCell align="right">Currency</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.map((row) => (
              <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component="th" scope="row">
                  {row.title}
                </TableCell>
                <TableCell align="right">{row.value}</TableCell>
                <TableCell align="right">{row.currency}</TableCell>
                <TableCell align="right">
                  <IconButton color="error" aria-label="delete" onClick={() => deleteItem(row.id)}>
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Wrapper>
  );
};
