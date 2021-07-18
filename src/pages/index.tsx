import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import GlobalStyle from 'components/Common/GlobalStyle';
import { graphql } from 'gatsby';
import { Link } from 'gatsby';
import Header from 'components/Common/Header';
import Footer from 'components/Common/Footer';
import mainImage from '../../contents/main_image.jpg';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100%;
  position: relative;
`;

const Banner = styled.div`
  width: 100vw;
  height: 900px;
`;

const MainImage = styled.img`
  position: absolute;
  width: 65vw;
`;

const About = styled.div`
  position: absolute;
  width: 65vw;
  height: 50vw;
  background-color: #233660;
  margin-top: 60px;
  margin-left: 35vw;
`;

const IndexPage: FunctionComponent = function () {
  return (
    <Container>
      <GlobalStyle />
      <Header />
      <Banner>
        <MainImage src={mainImage} />
        <About />
      </Banner>
      <Footer />
    </Container>
  );
};

export default IndexPage;
