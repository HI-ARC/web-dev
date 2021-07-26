import React, { FunctionComponent } from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faFacebook } from '@fortawesome/free-brands-svg-icons';

const FooterWrapper = styled.div`
  width: 100%;
  height: 270px;
  background-color: #233660;
  padding-top: 70px;
  padding-left: 50px;

  @media (max-width: 650px) {
    height: 300px;
    padding-left: 60px;
    padding-top: 10px;
    padding-bottom: 30px;
  }
`;

const InfoWrapper = styled.div`
  width: 750px;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: 'a b c';
  column-gap: 30px;

  @media (max-width: 1000px) {
    width: 649px;
  }

  @media (max-width: 650px) {
    width: 85%;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    padding-top: 50px;
    grid-template-areas:
      'a c'
      'b .';
  }
`;

const Info = styled.div`
  color: white;
  font-size: 15px;

  @media (max-width: 650px) {
    font-size: 14px;
  }
`;

const InfoBold = styled.div`
  font-weight: bold;
  margin-bottom: 10px;

  @media (max-width: 650px) {
    margin-bottom: 7px;
  }
`;

const InfoRegular = styled.div`
  font-weight: normal;
`;

const IconWrapper = styled.div`
  width: 150px;
  grid-area: 'c';
  display: grid;
  grid-template-columns: 1fr 1fr;
  color: white;
  font-size: 45px;
  padding-right: 13px;
  margin-top: -0.9vh;

  @media (max-width: 650px) {
    width: 120px;
    margin-top: -0.3vh;
    grid-template-columns: 1fr 1fr;
    font-size: 40px;
  }
`;

const Footer: FunctionComponent = function () {
  const goToGithub = () => window.open('https://github.com/HI-ARC');
  const goToFacebook = () =>
    window.open('https://www.facebook.com/hongikuniv.hiarc');
  return (
    <FooterWrapper>
      <InfoWrapper>
        <Info style={{ gridArea: 'a' }}>
          <InfoBold>HI-ARC</InfoBold>
          <InfoRegular>hi-arc@gmail.com</InfoRegular>
        </Info>
        <Info style={{ gridArea: 'b' }}>
          <InfoBold>학회장&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;한혜원</InfoBold>
          <InfoRegular>hhan14@naver.com</InfoRegular>
        </Info>
        <IconWrapper>
          <div onClick={goToGithub} style={{ cursor: 'pointer' }}>
            <FontAwesomeIcon icon={faGithub} />
          </div>
          <div onClick={goToFacebook} style={{ cursor: 'pointer' }}>
            <FontAwesomeIcon icon={faFacebook} />
          </div>
        </IconWrapper>
      </InfoWrapper>
    </FooterWrapper>
  );
};

export default Footer;
