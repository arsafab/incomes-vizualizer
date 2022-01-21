import React, { FC } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { Container } from './components/Container';
import { PrivateRoute } from './components/PrivateRoute';
import { ProvideAuth } from './core/auth';
import { Dashboard } from './pages/Dashboard';
import { Login } from './pages/Login';

import { GlobalStyle } from './styles/global';

export const App: FC = () => (
  <ProvideAuth>
    <GlobalStyle />
    <Container>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </Container>
  </ProvideAuth>
);
