/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import GoogleIcon from '@mui/icons-material/Google';

import { Wrapper } from '../../components/Wrapper';
import { Spinner } from '../../components/Spinner';
import { useAuth } from '../../core/auth';
import { useAppDispatch } from '../../redux/hooks';
import { setFromStorage } from '../../redux/slices/items.slice';
import { Item } from '../../constants';

export const Login: FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { user, loading, signInWithGoogle } = useAuth();

  useEffect(() => {
    if (user) {
      const data = JSON.parse(localStorage.getItem(user.uid)) || [];
      dispatch(setFromStorage(data as Item[]));
      navigate('/dashboard');
    }
  }, [user]);

  return (
    <Wrapper flexDirection="row" justifyContent="center" margin="20vh">
      {!loading && (
        <Card sx={{ width: 500, minHeight: 300 }}>
          <CardContent>
            <Typography sx={{ fontSize: 16 }} color="text.secondary" textAlign="center">
              Please, login to the system
            </Typography>
          </CardContent>
          <CardActions>
            <Wrapper flexDirection="row" justifyContent="center" width="100%">
              <IconButton color="primary" aria-label="sing in with Google" onClick={signInWithGoogle}>
                <GoogleIcon />
              </IconButton>
            </Wrapper>
          </CardActions>
        </Card>
      )}
      <Spinner loading={loading} />
    </Wrapper>
  );
};
