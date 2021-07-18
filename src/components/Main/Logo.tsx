import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import logoImage from '../../../contents/hiarc_logo.svg';

const LogoWrapper = styled.img`
  background-color: black;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin: 33px auto 27px 52px;

  @media (max-width: 768px) {
    width: 45px;
    height: 45px;
    margin: 20px auto 15px 25px;
  }
`;

const Logo: FunctionComponent = function () {
  return <LogoWrapper src={logoImage} alt="Logo" />;
};

export default Logo;
