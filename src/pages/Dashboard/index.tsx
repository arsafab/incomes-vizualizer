import React, { FC } from 'react';
import { Header } from '../../components/Header';
import { OptionsPanel } from '../../components/OptionsPanel';
import { TableView } from '../../components/TableView';

export const Dashboard: FC = () => (
  <>
    <Header />
    <OptionsPanel />
    <TableView />
  </>
);
