import React, { FunctionComponent } from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faFacebook } from '@fortawesome/free-brands-svg-icons';

const FooterWrapper = styled.div`
  display: grid;
  padding: 80px 75px 0 75px;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 20px;
  height: 300px;
  background-color: #233660;
  max-width: 100%;

  @media (max-width: 620px) {
    padding-top: 50px;
    height: 350px;
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-columns: 200px;
    row-gap: 10px;
  }
`;

const Info = styled.div`
  color: white;
  font-size: 15px;

  @media (max-width: 620px) {
    font-size: 12px;
  }
`;

const InfoBold = styled.div`
  font-weight: bold;
  margin-bottom: 10px;

  @media (max-width: 620px) {
    margin-bottom: 5px;
  }
`;

const InfoRegular = styled.div`
  font-weight: normal;
`;

const Icon = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(55px, auto));
  color: white;
  font-size: 47px;

  @media (max-width: 620px) {
    grid-template-columns: repeat(auto-fill, minmax(44px, auto));
    font-size: 40px;
  }
`;

const Footer: FunctionComponent = function () {
  const goToGithub = () => window.open('https://github.com/HI-ARC');
  const goToFacebook = () =>
    window.open('https://www.facebook.com/hongikuniv.hiarc');
  return (
    <FooterWrapper>
      <Info>
        <InfoBold>Hi-ARC</InfoBold>
        <InfoRegular>hi-arc@gmail.com</InfoRegular>
      </Info>
      <Info>
        <InfoBold>학회장&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;홍길동</InfoBold>
        <InfoRegular>hhan14@naver.com</InfoRegular>
      </Info>
      <Icon>
        <div
          onClick={goToGithub}
          style={{ marginTop: '-2vh', cursor: 'pointer' }}
        >
          <FontAwesomeIcon icon={faGithub} />
        </div>
        <div
          onClick={goToFacebook}
          style={{ marginTop: '-2vh', cursor: 'pointer' }}
        >
          <FontAwesomeIcon icon={faFacebook} />
        </div>
      </Icon>
    </FooterWrapper>
  );
};

export default Footer;
