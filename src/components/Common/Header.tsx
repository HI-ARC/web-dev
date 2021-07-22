import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import Logo from 'components/Main/Logo';

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 6;
  max-width: 100%;
  height: 75px;
  background-color: rgba(255, 255, 255, 0.7);
  box-shadow: 0px 5px 3px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 32px;
  font-weight: 1000;
  color: black;
`;

const Header: FunctionComponent = function () {
  return (
    <Background>
      <Logo />
      <div>HI-ARC</div>
    </Background>
  );
};

export default Header;
