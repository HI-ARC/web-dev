import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faCommentDots } from '@fortawesome/free-solid-svg-icons';

const FooterWrapper = styled.div`
  width: 100%;
  height: 200px;
  background-color: #233660;
  padding-top: 70px;
  padding-left: 50px;

  @media (max-width: 650px) {
    height: 220px;
    padding-left: 60px;
    padding-top: 0px;
    padding-bottom: 30px;
  }
`;

const InfoWrapper = styled.div`
  width: 750px;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 2fr;
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
    grid-column-gap: 50px;
    grid-row-gap: 20px;
    padding-top: 50px;
    grid-template-areas:
      'a b'
      'c .';
  }
`;

const Info = styled.div`
  color: white;
  font-size: 13px;

  @media (max-width: 650px) {
    font-size: 12px;
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
  width: 130px;
  grid-area: 'c';
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  color: white;
  font-size: 40px;
  padding-right: 13px;
  margin-top: -0.9vh;

  @media (max-width: 650px) {
    width: 120px;
    margin-top: -0.3vh;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    font-size: 40px;
  }
`;

const Icon = styled.div`
  cursor: 'pointer';
  padding-right: 13px;
`;

const Footer: FunctionComponent = function () {
  const goToGithub = () => window.open('https://github.com/HI-ARC');
  const goToInstagram = () => window.open('https://instagram.com/hiarc.official');
  const goToFacebook = () => window.open('https://www.facebook.com/hongikuniv.hiarc');
  const goToKakaoChannel = () => window.open('https://pf.kakao.com/_SArxlxb');
  return (
    <FooterWrapper>
      <InfoWrapper>
        <Info style={{ gridArea: 'a' }}>
          <InfoBold>HI-ARC</InfoBold>
          <InfoRegular>hiarc.official@gmail.com</InfoRegular>
        </Info>
        <Info style={{ gridArea: 'b' }}>
          <InfoBold>학회장&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;김효원</InfoBold>
          <InfoRegular>hwon233@g.hongik.ac.kr</InfoRegular>
        </Info>
        <IconWrapper>
          <Icon onClick={goToGithub}>
            <FontAwesomeIcon icon={faGithub} />
          </Icon>
          <Icon onClick={goToInstagram}>
            <FontAwesomeIcon icon={faInstagram} />
          </Icon>
          <Icon onClick={goToFacebook}>
            <FontAwesomeIcon icon={faFacebook} />
          </Icon>
          <Icon onClick={goToKakaoChannel}>
            <FontAwesomeIcon icon={faCommentDots} />
          </Icon>
        </IconWrapper>
      </InfoWrapper>
    </FooterWrapper>
  );
};

export default Footer;
