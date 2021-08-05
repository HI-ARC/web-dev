import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import mainImage from '../../../contents/main_image.jpg';

const BannerWrapper = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 57vw;
  margin-top: 120px;
  font-size: 16px;
  padding: 0 5vw;
  margin-bottom: 30px;

  @media (min-width: 1400px) {
    margin-top: 120px;
    height: calc(40vw + 70px);
    margin-bottom: 30px;
  }

  @media (min-width: 1200px) {
    padding: 0 calc(50% - 760px + 15vw);
    // 이 값 수정해야하는데 이대로 두고 슬로건을 넣어도 될 거 같기도 함,,
    height: 660px;
  }

  @media (max-width: 850px) {
    padding: 0;
    height: 55vh;
    margin-bottom: 3vw;
    margin-top: 70px;
  }

  @media (max-width: 680px) {
    height: 54vh;
  }
`;

const Slogan = styled.div`
  position: absolute;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  font-size: 50px;
  z-index: 4;
  margin-top: 480px;
  margin-left: -40px;

  @media (max-width: 1350px) {
    display: none;
  }
`;

const MainImage = styled.img`
  position: absolute;
  width: 60vw;

  @media (min-width: 1200px) {
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
  margin-left: 30vw;
  padding: 2em 2em 0 2em;
  background-color: #233660;
  position: absolute;
  box-shadow: -5px 7px 7px rgba(0, 0, 0, 0.3);
  font-size: 24px;

  @media (min-width: 1400px) {
    //margin-left: calc(760px - 15vw);
  }

  @media (min-width: 1200px) {
    width: 770px;
    height: 550px;
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
  margin-bottom: 80px;

  @media (min-width: 1000px) {
    margin-bottom: 10vw;
  }

  @media (max-width: 850px) {
    margin-bottom: 90px;
  }
  @media (max-width: 680px) {
    margin-bottom: 75px;
  }
`;

const AboutHi = styled.div`
  font-size: 20px;
  font-weight: 300;
  line-height: 1.5;

  @media (min-width: 1400px) {
    font-size: 27px;
  }

  @media (max-width: 1400px) {
    font-size: 1.8vw;
  }

  @media (max-width: 1000px) {
    font-size: 18px;
  }

  @media (max-width: 680px) {
    font-size: 18px;
`;

const Banner: FunctionComponent = function () {
  const aboutText =
    'HI-ARC는 홍익대학교 컴퓨터공학과 소속 알고리즘 학회입니다.\nHI-ARC에서는 ICPC를 비롯한 각종 프로그래밍 대회를 준비하며,\n알고리즘과 문제 해결 능력을 기르기 위한 다수의 스터디를 진행하고 있습니다.';

  return (
    <BannerWrapper>
      <Slogan>Solve with Us!</Slogan>
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
