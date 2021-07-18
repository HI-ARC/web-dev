import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';

const LogoWrapper = styled.img`
  width: 90px;
  height: 90px;
  border-radius: 50%;
  margin-top: 45px;
  margin-left: 52px;

  @media (max-width: 768px) {
    width: 45px;
    height: 45px;
    margin-top: 20px;
    margin-left: 25px;
  }
`;

const Logo: FunctionComponent = function () {
  return (
    <LogoWrapper
      src="https://raw.githubusercontent.com/KIMYEIM/web-dev/879df6ee218175a78cce2e79fa1c7140cb51eb5c/hiarc_%E1%84%85%E1%85%A9%E1%84%80%E1%85%A9%E1%84%91%E1%85%A1%E1%84%8B%E1%85%B5%E1%86%AF.svg"
      alt="Logo"
    />
  );
};

export default Logo;
