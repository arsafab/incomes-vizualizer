import React, { FC } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useAuth } from '../../core/auth';

export const Header: FC = () => {
  const { signOut } = useAuth();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Incomes Vizualizer
          </Typography>
          <Button color="inherit" onClick={signOut}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
