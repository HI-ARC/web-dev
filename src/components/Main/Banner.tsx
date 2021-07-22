import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import { graphql } from 'gatsby';
import mainImage from '../../../contents/main_image.jpg';

const BannerWrapper = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 57vw;
  margin-top: 75px;
  font-size: 16px;

  @media (min-width: 851px) {
    margin-top: 120px;
  }

  @media (max-width: 850px) {
    height: 55vh;
    margin-bottom: 3vw;
  }
`;

const MainImage = styled.img`
  position: absolute;
  width: 53vw;

  @media (max-width: 850px) {
    width: 0;
    height: 0;
  }
`;

const AboutWrapper = styled.div`
  color: white;
  padding: 2em 2em 0 2em;
  background-color: #233660;
  position: absolute;
  width: 60%;
  height: 40vw;
  box-shadow: -5px 7px 7px rgba(0, 0, 0, 0.3);
  font-size: 24px;

  @media (min-width: 850px) {
    margin-left: 40%;
    margin-top: 70px;
  }

  @media (max-width: 850px) {
    width: 650px;
    height: 400px;
    margin-left: calc(100% - 650px);
    margin-top: 30px;
  }

  @media (max-width: 680px) {
    width: 100%;
    margin: 0;
    box-shadow: 0px 7px 7px rgba(0, 0, 0, 0.3);
  }
`;

const HiShort = styled.div`
  font-size: 40px;
  font-weight: 600;
  margin-bottom: 3px;
`;

const HiLine = styled.div`
  background-color: white;
  width: 128px;
  height: 3px;
  margin-bottom: 12px;
`;

const HiLong = styled.div`
  font-size: 22px;
  font-weight: 350;
  margin-bottom: 45px;

  @media (min-width: 1000px) {
    margin-bottom: 10vw;
  }

  @media (max-width: 850px) {
    margin-bottom: 90px;
  }
`;

const AboutHi = styled.div`
  font-size: 20px;
  font-weight: 300;

  @media (min-width: 1000px) {
    font-size: 44px;
  }

  @media (min-width: 850px) {
    font-size: 21px;
  }
`;

const Banner: FunctionComponent = function () {
  const aboutText =
    'HI-ARC는 홍익대학교 컴퓨터공학과 소속 알고리즘 학회입니다.\nHI-ARC에서는 ICPC를 비롯한 각종 프로그래밍 대회를 준비하며,\n알고리즘과 문제 해결 능력을 기르기 위한 다수의 스터디를 진행하고 있습니다.';

  return (
    <BannerWrapper>
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
