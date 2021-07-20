import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import Logo from 'components/Main/Logo';

const Background = styled.div`
  max-width: 100%;
  background-color: white;
`;

const Header: FunctionComponent = function () {
  return (
    <Background>
      <Logo />
    </Background>
  );
};

export default Header;
