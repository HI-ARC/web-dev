import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import logoImage from '../../../contents/hiarc_logo.svg';

const LogoWrapper = styled.img`
  background-color: black;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  margin: 15px 0 10px 52px;

  @media (max-width: 768px) {
    margin-left: 28px;
  }
`;

const Logo: FunctionComponent = function () {
  return <LogoWrapper src={logoImage} alt="Logo" />;
};

export default Logo;
