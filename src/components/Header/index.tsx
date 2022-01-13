import React, { FC } from 'react';
import styled from 'styled-components';

export const Header: FC = () => {
  return (
    <header>
      <div>To Do</div>
    </header>
  );
};

export const StyledHeader = styled(Header)`
  width: 100%;
  max-width: 1400px;
  min-width: 600px;
`;
