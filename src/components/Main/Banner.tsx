import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import { graphql } from 'gatsby';
import mainImage from '../../../contents/main_image.jpg';

const BannerWrapper = styled.div`
  position: relative;
  max-width: 100%;
  height: 47vw;

  @media (max-width: 1000px) {
    height: 60vw;
    margin-bottom: 3vw;
  }
`;

const MainImage = styled.img`
  position: absolute;
  width: 53vw;

  @media (max-width: 1000px) {
    width: 0;
    height: 0;
  }
`;

const About = styled.div`
  color: white;
  position: absolute;
  width: 60vw;
  height: 40vw;
  background-color: #233660;
  box-shadow: -5px 7px 7px rgba(0, 0, 0, 0.3);
  margin-top: 70px;
  margin-left: 40vw;
  font-size: 24px;

  @media (max-width: 1000px) {
    width: 700px;
    height: 400px;
    float: right;
    margin-left: 10vw;
    margin-top: 0;
  }
`;

const Banner: FunctionComponent = function () {
  const aboutText =
    'HI-ARC는 홍익대학교 컴퓨터공학과 소속 알고리즘 학회입니다.\nHI-ARC에서는 ICPC를 비롯한 각종 프로그래밍 대회를 준비하며,\n알고리즘과 문제 해결 능력을 기르기 위한 다수의 스터디를 진행하고 있습니다.';

  return (
    <BannerWrapper>
      <MainImage src={mainImage} />
      <About />
    </BannerWrapper>
  );
};

export default Banner;
