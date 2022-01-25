import React, { FC } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../core/auth';

export const PrivateRoute: FC = ({ children }: { children: JSX.Element }) => {
  const auth = useAuth();
  return auth.user ? children : <Navigate to="/login" />;
};
