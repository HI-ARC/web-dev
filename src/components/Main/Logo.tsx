import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import logoImage from '../../../contents/hiarc_logo.svg';

const LogoWrapper = styled.img`
  background-color: black;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  margin-left: 45px;
  margin-right: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    margin-left: 28px;
    margin-right: 30px;
  }

  @media (min-width: 681px) {
    display: none;
  }

  @media (max-width: 500px) {
    height: 9vw;
    width: 9vw;
    margin-left: 5vw;
  }
`;

const Logo: FunctionComponent = function () {
  return (
    <div
      onClick={() => (window.location.href = '/')}
      style={{ cursor: 'pointer' }}
    >
      <LogoWrapper src={logoImage} alt="Logo" />
    </div>
  );
};

export default Logo;
