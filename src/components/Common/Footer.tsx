import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';

const FooterWrapper = styled.div`
  display: grid;
  padding: 70px 15px 0 15px;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 20px;
  height: 400px;
  background-color: #233660;

  @media (max-width: 768px) {
    height: 350px;
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-columns: 1fr;
    row-gap: 10px;
  }
`;

const Info = styled.div`
  color: white;
  font-size: 15px;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const InfoBold = styled.div`
  font-weight: bold;
`;

const InfoRegular = styled.div`
  font-weight: normal;
`;

const Footer: FunctionComponent = function () {
  return (
    <FooterWrapper>
      <Info>
        <InfoBold>Hi-ARC</InfoBold>
        <InfoRegular>hi-arc@gmail.com</InfoRegular>
      </Info>
      <Info>
        <InfoBold>학회장 | 홍길동</InfoBold>
        <InfoRegular>홍길동@gmail.com</InfoRegular>
      </Info>
      <Info>kakaotalk github facebook</Info>
    </FooterWrapper>
  );
};

export default Footer;
