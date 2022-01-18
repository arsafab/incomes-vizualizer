import React, { FC } from 'react';
import { Container } from './components/Container';
import { Header } from './components/Header';
import { OptionsPanel } from './components/OptionsPanel';
import { CategoriesView } from './views/CategoriesView';

import { GlobalStyle } from './styles/global';

const App: FC = () => (
  <>
    <GlobalStyle />
    <Container>
      <Header />
      <OptionsPanel />
      {/* TODO: add something like routing for different views */}
      <CategoriesView />
    </Container>
  </>
);

export default App;
