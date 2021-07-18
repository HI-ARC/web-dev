import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import GlobalStyle from 'components/Common/GlobalStyle';
import { graphql } from 'gatsby';
import { Link } from 'gatsby';
import Header from 'components/Common/Header';
import Banner from 'components/Main/Banner';
import Footer from 'components/Common/Footer';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100%;
  position: relative;
`;

const IndexPage: FunctionComponent = function () {
  const aboutText =
    'HI-ARC는 홍익대학교 컴퓨터공학과 소속 알고리즘 학회입니다.\nHI-ARC에서는 ICPC를 비롯한 각종 프로그래밍 대회를 준비하며,\n알고리즘과 문제 해결 능력을 기르기 위한 다수의 스터디를 진행하고 있습니다.';

  return (
    <Container>
      <GlobalStyle />
      <Header />
      <Banner />
      <Footer />
    </Container>
  );
};

export default IndexPage;
