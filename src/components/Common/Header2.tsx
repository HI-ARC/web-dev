import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import Logo from 'components/Main/Logo';
import LogoHoriz from 'components/Main/LogoHoriz';
import Menu2 from 'components/Main/Menu2';
import GlobalFonts from '../../fonts/fonts';

const Slogan = styled.div`
  position: absolute;
  color: #233660;
  font-size: 14px;
  z-index: 4;
  //margin-top: 510px;
  //margin-left: -240px;
  margin-left: 200px;
  font-weight: 500;
  font-family: 'IBM Plex Mono', monospace;

  @media (max-width: 825px) {
    display: none;
  }
`;

const HeaderWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 6;
  max-width: 100%;
  height: 70px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  background-color: rgba(255, 255, 255, 0.7);
  margin-bottom: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  transition: all 0.2s;

  @media (max-width: 499px) {
    height: 14vw;
  }
`;

const Header2: FunctionComponent = () => {
  return (
    <>
      <GlobalFonts />
      <HeaderWrapper>
        <Logo />
        <LogoHoriz />
        <Slogan>/* Solve with Us! */</Slogan>
        <Menu2 />
      </HeaderWrapper>
    </>
  );
};

export default Header2;
