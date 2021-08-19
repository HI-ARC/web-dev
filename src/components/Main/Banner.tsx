import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import mainImage from '../../../contents/main_image3.png';
import GlobalFonts from '../../fonts/fonts';

const BannerWrapper = styled.div`
  position: relative;
  display: flex;
  width: 60vw;
  height: 57vw;
  margin-left: auto;
  margin-right: auto;
  margin-top: 120px;
  margin-bottom: 30px;

  @media (min-width: 1400px) {
    margin-top: 120px;
    height: calc(40vw + 70px);
    margin-bottom: 30px;
  }

  @media (min-width: 1200px) {
    width: 750px;
    height: 660px;
  }

  @media (max-width: 850px) {
    padding: 0;
    margin-right: 0;
    height: 450px;
    margin-bottom: 50px;
    margin-top: 70px;
  }

  @media (max-width: 680px) {
    margin-bottom: 20px;
    width: 100%;
  }

  @media (max-width: 499px) {
    margin-top: 14vw;
    height: 95vw;
  }
`;

const Slogan = styled.div`
  position: absolute;
  color: #233660;
  font-size: 36px;
  z-index: 4;
  margin-top: 510px;
  margin-left: -265px;
  font-weight: 500;
  font-family: 'IBM Plex Mono', monospace;

  @media (max-width: 1350px) {
    display: none;
  }
`;

const MainImage = styled.img`
  position: absolute;
  margin-left: -20%;
  width: 60vw;

  @media (min-width: 1200px) {
    margin-left: -175px;
    width: 750px;
  }

  @media (max-width: 850px) {
    display: none;
  }
`;

const AboutWrapper = styled.div`
  color: white;
  width: 60vw;
  height: 45vw;
  margin-top: 70px;
  margin-left: 20%;
  padding: 2em 2em 0 2em;
  background-color: #233660;
  position: absolute;
  box-shadow: -5px 7px 7px rgba(0, 0, 0, 0.3);
  font-size: 24px;

  @media (min-width: 1400px) {
    //margin-left: calc(760px - 15vw);
  }

  @media (min-width: 1200px) {
    width: 750px;
    height: 550px;
    margin-left: 185px;
  }

  @media (max-width: 850px) {
    width: 650px;
    height: 420px;
    margin-left: calc(100% - 650px);
    margin-top: 30px;
  }

  @media (max-width: 680px) {
    width: 100%;
    margin: 0;
    box-shadow: 0px 7px 7px rgba(0, 0, 0, 0.3);
  }

  @media (max-width: 499px) {
    height: 87vw;
    padding: 1.5em 1.5em 0 1.5em;
  }
`;

const HiShort = styled.div`
  font-size: 40px;
  font-weight: 600;
  margin-bottom: 3px;

  @media (max-width: 499px) {
    font-size: 8vw;
  }
`;

const HiLine = styled.div`
  background-color: white;
  width: 136px;
  height: 3px;
  margin-bottom: 12px;

  @media (max-width: 499px) {
    width: 27.5vw;
    height: 2.5px;
  }
`;

const HiLong = styled.div`
  font-size: 22px;
  font-weight: 350;
  margin-bottom: 15%;

  @media (min-width: 1080px) {
    margin-bottom: 139px;
  }

  @media (max-width: 850px) {
    margin-bottom: 90px;
  }
  @media (max-width: 680px) {
    margin-bottom: 60px;
  }

  @media (max-width: 499px) {
    margin-bottom: 15%;
    font-size: 4.4vw;
  }
`;

const AboutHi = styled.div`
  letter-spacing: 0.3px;
  font-size: 18px;
  font-weight: 300;
  line-height: 1.8;

  @media (min-width: 1200px) {
    font-size: 24px;
  }

  @media (max-width: 1200px) {
    font-size: 1.8vw;
  }

  @media (max-width: 1000px) {
    font-size: 18px;
  }

  @media (max-width: 680px) {
    font-size: 18px;
  }

  @media (max-width: 499px) {
    font-size: 3.5vw;
  }
`;

const Banner: FunctionComponent = function () {
  const aboutText =
    'HI-ARC는 홍익대학교 컴퓨터공학과 소속 알고리즘 학회입니다.\nHI-ARC에서는 ICPC를 비롯한 각종 프로그래밍 대회를 준비하며,\n알고리즘과 문제 해결 능력을 기르기 위한 다수의 스터디를 진행하고 있습니다.';

  return (
    <BannerWrapper>
      <GlobalFonts />
      <Slogan>/* Solve with Us! */</Slogan>
      <MainImage src={mainImage} />
      <AboutWrapper>
        <HiShort>HI-ARC</HiShort>
        <HiLine />
        <HiLong>Hongik Algorithm Research Club</HiLong>
        <AboutHi>{aboutText}</AboutHi>
      </AboutWrapper>
    </BannerWrapper>
  );
};

export default Banner;
