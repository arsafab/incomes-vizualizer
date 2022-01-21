import React, { FC } from 'react';
import { Header } from '../../components/Header';
import { OptionsPanel } from '../../components/OptionsPanel';
import { CategoriesView } from '../../views/CategoriesView';

export const Dashboard: FC = () => (
  <>
    <Header />
    <OptionsPanel />
    {/* TODO: add something like routing for different views */}
    <CategoriesView />
  </>
);
